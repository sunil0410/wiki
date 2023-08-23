---
id: setup-zkevm
title: Deploy your own zkEVM on Goerli Testnet
sidebar_label: Setup Full zkEVM
description: Detailed guide on launching your own zkEVM network on the Goerli testnet.
keywords:
  - polygon
  - zkEVM
  - zkNode
  - deploy full zkevm
---

Welcome to the documentation for setting up a full Zero-Knowledge Ethereum Virtual Machine (zkEVM) network on the Goerli testnet. This guide will walk you through the necessary steps to configure and start your own fully functional zkEVM L2 Testnet on the Goerli network.

:::caution

The instructions in this document are subject to frequent updates as the zkEVM software is still in early development stages. Please report [<ins>here</ins>](https://support.polygon.technology/support/tickets/new) or reach out to our [<ins>support team on Discord</ins>](https://discord.com/invite/0xPolygon) if you encounter any issues.

:::

## Prerequisites

You'll need the following items to begin:

- INFURA_PROJECT_ID  // Same as API Key in your Infura account
- ETHERSCAN_API_KEY
- Public IP address
- L1 Goerli Geth node RPC
- Goerli address with **0.5 GöETH**

:::tip

Follow the instructions provided [<ins>here</ins>](#goerli-full-node-setup) to set up your own Goerli full node. It will increase the network efficiency as we will be sending multiple transactions to the Goerli network (or L1, in our case).

:::

### Technical Specifications

The zkEVM network is resource-intensive, so we recommend two sets of resources depending on whether you're using a full or mock prover.

:::info

Mock Prover does not generate a zero-knowledge proof or practically prove anything. It simply adds a "Valid ✅" check for each batch of transactions sent from L2 so that it can be sent to the L1 network.

:::

- For a **Mock Prover**, the required resources are:

    - 4-core CPU
    - 8GB RAM (16GB recommended)

- For a **Full Prover**, the required resources are:

    - 96-core CPU
    - Minimum 768GB RAM

For example, a suitable virtual machine in public cloud environments like AWS would be: https://aws.amazon.com/ec2/instance-types/r6a/
- r6a.xlarge for **Mock Prover**
- r6a.24xlarge for **Full Prover**

The initial free disk space requirement is minimal (<2TB), but you should monitor available space as the network is always adding more data.

## Install Dependencies

1. First, install base dependencies:

    ```bash
    sudo apt update -y
    sudo apt install -y tmux git curl unzip jq aria2 pv

    curl -fsSL get.docker.com | CHANNEL=stable sh
    sudo apt install docker-ce
    sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin

    sudo usermod -aG docker $USER
    newgrp docker && newgrp $USER

    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/master/install.sh | bash
    source ~/.bashrc
    nvm install 16
    node -v

    wget https://go.dev/dl/go1.20.4.linux-amd64.tar.gz
    sudo rm -rf /usr/local/go && sudo tar -C /usr/local -xzf go1.20.4.linux-amd64.tar.gz
    rm -rf go1.20.4.linux-amd64.tar.gz
    ```

2. Next, add these to your `.profile`:

    ```bash
    echo '
    export ZKEVM_NET=mainnet
    export ZKEVM_DIR=~/zkevm/zkevm-node
    export ZKEVM_CONFIG_DIR=~/zkevm/zkevm-config

    [ -d "/usr/local/go/bin" ] && PATH="/usr/local/go/bin:$PATH"
    ' >> ~/.profile
    source .profile
    ```

3. Lastly, confirm the installation of Golang by running this command: ```$ go version```

## Download/Extract Mainnet Files

Next step in the process is to download the zkEVM Mainnet files. This download is over **70GB**, so it's recommended to run the download in a tmux/screen session to handle any network interruptions:

```bash
aria2c -x6 -s6 "https://de012a78750e59b808d922b39535e862.s3.eu-west-1.amazonaws.com/v1.1.0-rc.1-fork.4.tgz"
pv v1.1.0-rc.1-fork.4.tgz | tar xzf -
```

## Deploying Contracts

Clone the contracts from our [GitHub repository](https://github.com/0xPolygonHermez/zkevm-contracts):

```bash
cd ~
git clone https://github.com/0xPolygonHermez/zkevm-contracts.git
cd ~/zkevm-contracts
npm i
```

### Create Wallets

Next, create a `wallets.js` file with the following content:

```bash
cd ~/zkevm-contracts
vim wallets.js
```

```js
const ethers = require("ethers");

async function main() {
    const arrayNames = ["## Deployment Address", "\\n\\n## Trusted sequencer", "\\n\\n## Trusted aggregator"];
    for (let i = 0; i < arrayNames.length; i++) {
        const wallet = ethers.Wallet.createRandom();
        console.log(arrayNames[i]);
        console.log(`Address: ${wallet.address}`);
        console.log(`PrvKey: ${wallet._signingKey().privateKey}`);
        console.log(`mnemonic: "${wallet._mnemonic().phrase}"`);

        const keystoreJson = await wallet.encrypt("password");
        console.log(`keystore: ${keystoreJson}`);
    }
}

main().catch((e) => {
    console.error(e);
    process.exit(1);
});
```

Don't forget to generate the wallets using below command:

```bash
cd ~/zkevm-contracts
node wallets.js | tee wallets.txt
```

### Prepare Deploy Configuration

Edit the environment variables:

```bash
cd ~/zkevm-contracts
cp .env.example .env
vim .env
```

Set these variables within your .env file:

```bash
MNEMONIC="..."              # from wallets.txt Deployment Address mnemonic
INFURA_PROJECT_ID="..."     # your API Key from Infura account
ETHERSCAN_API_KEY="..."     # your Etherscan API key
```

Next, open the `deploy_parameters.json` file in nano editor:

```bash
cd ~/zkevm-contracts/deployment
cp deploy_parameters.json.example deploy_parameters.json
vim deploy_parameters.json
```

Only fill in the commented fields in your `deploy_parameters.json` file:

```json
{
 "realVerifier": true,
 "trustedSequencerURL": "<http://X.X.X.X:8545>", // your public IP
 "networkName": "zkevm",
 "version": "0.0.1",
 "trustedSequencer": "", // from wallets.txt Trusted Sequencer address
 "chainID": 42069, // put any id you prefer
 "trustedAggregator": "", // from wallets.txt Trusted Aggregator address
 "trustedAggregatorTimeout": 604799,
 "pendingStateTimeout": 604799,
 "forkID": 4,
 "admin": "", // from wallets.txt Deployment Address  address
 "zkEVMOwner": "", // from wallets.txt Deployment Address address
 "timelockAddress": "", // from wallets.txt Deployment Address address
 "minDelayTimelock": 1,
 "salt": "0x0000000000000000000000000000000000000000000000000000000000000000",
 "initialZkEVMDeployerOwner": "", // from wallets.txt Deployment Address address
 "maticTokenAddress": "", // put existing contract address or leave empty to auto-deploy a new contract
 "zkEVMDeployerAddress": "", // put existing contract address or leave empty to auto-deploy a new contract
 "deployerPvtKey": "",
 "maxFeePerGas": "",
 "maxPriorityFeePerGas": "",
 "multiplierGas": ""
}
```

:::caution Get some GöETH

You will need to send 0.5 GöETH to the Deployment Address wallet listed in `wallets.txt`.

:::

Adjust the `gasPrice` according to the network status. For Goerli, you can check it with the following command, where you insert your Etherscan API key, note this can sometimes be 0 for testnet:

```bash
ETHERSCAN_API_KEY="YOUR_ETHERSCAN_API_KEY" echo "$(($(printf "%d\\n" $(curl -s "https://api-goerli.etherscan.io/api?module=proxy&action=eth_gasPrice&apikey=$ETHERSCAN_API_KEY" | jq -r .result))/1000000000)) Gwei"
```

Edit `~/zkevm/zkevm-contracts/deployment/helpers/deployment-helpers.js` to adjust the `gasPrice` according to network status. It is recommended to add 50 Gwei to the current `gasPrice` to ensure transactions are processed quickly.

```js
vim ~/zkevm-contracts/deployment/helpers/deployment-helpers.js
const gasPriceKeylessDeployment = "50"; // 50 gwei
```

### Deploy Contracts

```bash
cd ~/zkevm-contracts/
npm i @openzeppelin/hardhat-upgrades
npm run deploy:deployer:ZkEVM:goerli
npm run verify:deployer:ZkEVM:goerli
npm run deploy:testnet:ZkEVM:goerli
npm run verify:ZkEVM:goerli
```

The previous scripts will auto-deploy the MATIC token contract and the `zkEVMDeployer` contract if required.

You will see in the logs the verification of each smart contract deployed, but you can check it on Etherscan too.

```html
https://goerli.etherscan.io/address/0x -> Put the Deployment Address wallet from wallets.txt
```

## zkNode Deployment

First, create the following directories:

```bash
mkdir -p ~/zkevm/data/{statedb,pooldb} ~/zkevm/zkevm-config ~/zkevm/zkevm-node
```

Next, populate the directories by fetching data from latest node releases, for example with mainnet:

```bash
export ZKEVM_NET="mainnet"
export ZKEVM_DIR="zkevm"
curl -L https://github.com/0xPolygonHermez/zkevm-node/releases/latest/download/$ZKEVM_NET.zip > $ZKEVM_NET.zip && unzip -o $ZKEVM_NET.zip -d $ZKEVM_DIR && rm $ZKEVM_NET.zip
```

Copy the `example.env` file into `.env` file and open in nano editor:

```bash
export ZKEVM_CONFIG_DIR="/root/zkevm/zkevm-config"
cp ~/$ZKEVM_DIR/$ZKEVM_NET/example.env $ZKEVM_CONFIG_DIR/.env
vim $ZKEVM_CONFIG_DIR/.env
```

In the `.env` file, set:

```bash
ZKEVM_NODE_ETHERMAN_URL = "http://localhost:8845"  # set valid Geth Goerli RPC endpoint
ZKEVM_NODE_STATEDB_DATA_DIR = "~/zkevm/data/statedb"
ZKEVM_NODE_POOLDB_DATA_DIR = "~/zkevm/data/pooldb"
```

### Approve MATIC Token for Sequencer

Run the below command to launch a Hardhat console connected to the Goerli network.

```bash
cd ~/zkevm-contracts
npx hardhat console --network goerli
```

Here, you can utilize the JavaScript environment to interact with the Goerli network. In the console, run the following (you can copy all the code in one go):

```js
const provider = ethers.getDefaultProvider("http://localhost:8845")  // set Geth Goerli RPC node
const privateKey = '' // From wallet.txt Trusted Sequencer prvkey
const wallet = new ethers.Wallet(privateKey, provider);

const maticTokenFactory = await ethers.getContractFactory('ERC20PermitMock', provider);
maticTokenContract = maticTokenFactory.attach("") // From ~/zkevm-contracts/deployments/goerli_*/deploy_output.json maticTokenAddress
maticTokenContractWallet = maticTokenContract.connect(wallet)
await maticTokenContractWallet.approve("", ethers.utils.parseEther("100.0")) // From ~/zkevm-contracts/deployments/goerli_*/deploy_output.json polygonZkEVMAddress
```

```bash
# to exit hardhat console (ctrl + c twice)
```


### Configure Genesis

Run the below commands to copy `genesis.json` file into appropriate location and open for editing:

```bash
cp ~/zkevm-contracts/deployments/goerli_*/genesis.json ~/zkevm/mainnet/config/environments/testnet/public.genesis.config.json
vim ~/zkevm/mainnet/config/environments/testnet/public.genesis.config.json
```

Edit the file changing the following parameters from `~/zkevm/zkevm-contracts/deployments/goerli_***/deploy_output.json`. **Keep in mind that `polygonZkEVMGlobalExitRootAddress` is called `deploymentBlockNumber` in `deploy_output.json`**.

```json
"l1Config" : {
    "chainId": 5,
    "polygonZkEVMAddress": "", // From ~/zkevm-contracts/deployments/goerli_*/deploy_output.json polygonZkEVMAddress
    "maticTokenAddress": "", // From ~/zkevm-contracts/deployments/goerli_*/deploy_output.json maticTokenAddress
    "polygonZkEVMGlobalExitRootAddress": ""  // polygonZkEVMGlobalExitRootAddress from ~/zkevm/zkevm-contracts/deployments/goerli_*/deploy_output.json
  },
 "genesisBlockNumber": 9500870,  // deploymentBlockNumber from ~/zkevm/zkevm-contracts
# add above to head of file, leave all remaining fields intact
```

### Update Node Config file

Edit `~/zkevm/mainnet/config/environments/testnet/public.node.config.toml` with the following values. The config file is large and we'll update the documentation in the future to list only the updated parameters.

<details>
<summary>Click to expand the Node <code>config.toml</code> file</summary>

```bash
vim ~/zkevm/mainnet/config/environments/testnet/public.node.config.toml
```

```bash
IsTrustedSequencer = true
[Log]
Environment = "development"
Level = "debug"
Outputs = ["stderr","stdout"]

[StateDB]
User = "state_user"
Password = "state_password"
Name = "state_db"
Host = "zkevm-state-db"
Port = "5432"
EnableLog = false
MaxConns = 200

[Pool]
FreeClaimGasLimit = 1500000
MaxTxBytesSize=30132
MaxTxDataBytesSize=30000
DefaultMinGasPriceAllowed = 1000000000
MinAllowedGasPriceInterval = "5m"
PollMinAllowedGasPriceInterval = "15s"
        [Pool.DB]
        User = "pool_user"
        Password = "pool_password"
        Name = "pool_db"
        Host = "zkevm-pool-db"
        Port = "5432"
        EnableLog = false
        MaxConns = 200

[Etherman]
URL = "http://localhost:8845"    # put a valid Goerli node
MultiGasProvider = false
L1URL = "http://localhost:8845"  # put a valid Goerli node
L2URLs = ["http://X.X.X.X:8545"]  # your public IP
        [Etherman.Etherscan]
                ApiKey = ""     # Etherscan API key

[RPC]
Host = "0.0.0.0"
Port = 8545
ReadTimeoutInSec = 60
WriteTimeoutInSec = 60
MaxRequestsPerIPAndSecond = 5000
SequencerNodeURI = ""
BroadcastURI = "http://3.144.195.147:61090"
DefaultSenderAddress = "0x1111111111111111111111111111111111111111"
EnableL2SuggestedGasPricePolling = true
        [RPC.WebSockets]
                Enabled = true
                Port = 8546

[Synchronizer]
SyncInterval = "5s"
SyncChunkSize = 500
trustedSequencerURL = "http://X.X.X.X:8545"  # your public IP

[MTClient]
URI = "zkevm-prover:50061"

[Executor]
URI = "zkevm-prover:50071"

[Metrics]
Host = "0.0.0.0"
Port = 9091
Enabled = true
ProfilingHost = "0.0.0.0"
ProfilingPort = 6060
ProfilingEnabled = false

[Sequencer]
WaitPeriodPoolIsEmpty = "1s"
WaitPeriodSendSequence = "15s"
LastBatchVirtualizationTimeMaxWaitPeriod = "10s"
BlocksAmountForTxsToBeDeleted = 100
FrequencyToCheckTxsForDelete = "12h"
MaxTxsPerBatch = 150
MaxBatchBytesSize = 129848
MaxCumulativeGasUsed = 30000000
MaxKeccakHashes = 468
MaxPoseidonHashes = 279620
MaxPoseidonPaddings = 149796
MaxMemAligns = 262144
MaxArithmetics = 262144
MaxBinaries = 262144
MaxSteps = 8388608
WeightBatchBytesSize = 1
WeightCumulativeGasUsed = 1
WeightKeccakHashes = 1
WeightPoseidonHashes = 1
WeightPoseidonPaddings = 1
WeightMemAligns = 1
WeightArithmetics = 1
WeightBinaries = 1
WeightSteps = 1
TxLifetimeCheckTimeout = "10m"
MaxTxLifetime = "3h"
MaxTxSizeForL1 = 131072
        [Sequencer.Finalizer]
                GERDeadlineTimeoutInSec = "2s"
                ForcedBatchDeadlineTimeoutInSec = "60s"
                SendingToL1DeadlineTimeoutInSec = "20s"
                SleepDurationInMs = "100ms"
                ResourcePercentageToCloseBatch = 10
                GERFinalityNumberOfBlocks = 0
                ClosingSignalsManagerWaitForCheckingL1Timeout = "10s"
                ClosingSignalsManagerWaitForCheckingGER = "10s"
                ClosingSignalsManagerWaitForCheckingForcedBatches = "10s"
                ForcedBatchesFinalityNumberOfBlocks = 0
                TimestampResolution = "15s"
        [Sequencer.DBManager]
                PoolRetrievalInterval = "500ms"
        [Sequencer.Worker]
                ResourceCostMultiplier = 1000

[SequenceSender]
WaitPeriodSendSequence = "5s"
LastBatchVirtualizationTimeMaxWaitPeriod = "5s"
MaxTxSizeForL1 = 131072
SenderAddress = ""  # trustedSequencer address from deploy_output.json
PrivateKeys = [{Path = "/pk/sequencer.keystore", Password = "password"}]

[Aggregator]
Host = "0.0.0.0"
Port = 50081
ForkId = 4
RetryTime = "5s"
VerifyProofInterval = "30s"
TxProfitabilityCheckerType = "acceptall"
TxProfitabilityMinReward = "1.1"
ProofStatePollingInterval = "5s"
SenderAddress = ""  # trustedAggregator address from deploy_output.json
CleanupLockedProofsInterval = "2m"
GeneratingProofCleanupThreshold = "10m"

[EthTxManager]
ForcedGas = 0
PrivateKeys = [
        {Path = "/pk/sequencer.keystore", Password = "password"},
        {Path = "/pk/aggregator.keystore", Password = "password"}
]

[Database]
Database = "postgres"
User = "test_user"
Password = "test_password"
Name = "test_db"
Host = "zkevm-bridge-db"
Port = "5435"
MaxConns = 20

[BridgeController]
Store = "postgres"
Height = 32

[BridgeServer]
GRPCPort = "9090"
HTTPPort = "8080"

[NetworkConfig]
GenBlockNumber = 9500870     # deploymentBlockNumber from deploy_output.json
PolygonZkEVMAddress = ""  # polygonZkEVMAddress from deploy_output.json
PolygonBridgeAddress = ""  # PolygonZkEVMBridge from genesis.json
PolygonZkEVMGlobalExitRootAddress = ""  # polygonZkEVMGlobalExitRootAddress from deploy_output.json
MaticTokenAddress = ""  # maticTokenAddress from deploy_output.json
L2PolygonBridgeAddresses = [""]  # PolygonZkEVMBridge from genesis.json
L1ChainID = 5  # Goerli chainID

[L2GasPriceSuggester]
Type = "default"
DefaultGasPriceWei = 100000000

[ClaimTxManager]
FrequencyToMonitorTxs = "1s"
PrivateKey = {Path = "/pk/sequencer.keystore", Password = "password"}
Enabled = true
```
</details>

### Add Wallets

Copy/paste keystore value from wallets.txt for sequencer/aggregator respectively:

```bash
# paste only the keystore value from wallets.txt in each respective file
vim ~/zkevm/zkevm-config/sequencer.keystore
vim ~/zkevm/zkevm-config/aggregator.keystore
```

### Edit DBs

Edit `~/zkevm/mainnet/db/scripts/init_prover_db.sql` to match this:

```bash
vim ~/zkevm/mainnet/db/scripts/init_prover_db.sql
```

```sql
CREATE DATABASE prover_db;
\connect prover_db;

CREATE SCHEMA state;

CREATE TABLE state.nodes (hash BYTEA PRIMARY KEY, data BYTEA NOT NULL);
CREATE TABLE state.program (hash BYTEA PRIMARY KEY, data BYTEA NOT NULL);

CREATE USER prover_user with password 'prover_pass';
GRANT CONNECT ON DATABASE prover_db TO prover_user;
ALTER USER prover_user SET SEARCH_PATH=state;
GRANT ALL PRIVILEGES ON SCHEMA state TO prover_user;
GRANT ALL PRIVILEGES ON TABLE state.nodes TO prover_user;
GRANT ALL PRIVILEGES ON TABLE state.program TO prover_user;
```

Save and exit the file once the changes have been made. The above SQL script will setup your databases for the zkEVM Node.

### Configure the Prover

Create the `~/zkevm/config.json` and paste the configs below. Replace the `aggregatorClientHost` parameter with your **PUBLIC IP**:

```bash
vim ~/zkevm/config.json
```

<details>
<summary>Click to expand the <code>config.json</code> file</summary>

```json
{
    "runExecutorServer": false,
    "runExecutorClient": false,
    "runExecutorClientMultithread": false,

    "runStateDBServer": false,
    "runStateDBTest": false,

    "runAggregatorServer": false,
    "runAggregatorClient": true,
    "proverName": "static_prover",

    "runFileGenBatchProof": false,
    "runFileGenAggregatedProof": false,
    "runFileGenFinalProof": false,
    "runFileProcessBatch": false,
    "runFileProcessBatchMultithread": false,
    "runFileExecutor": false,

    "runKeccakScriptGenerator": false,
    "runKeccakTest": false,
    "runStorageSMTest": false,
    "runBinarySMTest": false,
    "runMemAlignSMTest": false,
    "runSHA256Test": false,
    "runBlakeTest": false,
    "executeInParallel": true,
    "useMainExecGenerated": true,
    "useProcessBatchCache": true,
    "saveRequestToFile": false,
    "saveInputToFile": true,
    "saveDbReadsToFile": true,
    "saveDbReadsToFileOnChange": false,
    "saveOutputToFile": true,
    "saveFilesInSubfolders": false,
    "saveProofToFile": true,
    "saveResponseToFile": false,
    "loadDBToMemCache": true,
    "loadDBToMemCacheInParallel": false,
    "dbMTCacheSize": 16384,
    "dbProgramCacheSize": 16384,
    "dbMultiWrite": true,
    "dbFlushInParallel": true,

    "opcodeTracer": false,
    "logRemoteDbReads": false,
    "logExecutorServerResponses": false,

    "executorServerPort": 50071,
    "executorROMLineTraces": false,
    "executorClientPort": 50071,
    "executorClientHost": "127.0.0.1",

    "stateDBServerPort": 5432,
    "stateDBURL": "local",

    "aggregatorServerPort": 50081,
    "aggregatorClientPort": 50081,
    "aggregatorClientHost": "",  // YOUR PUBLIC IP ADDRESS
    "aggregatorClientMockTimeout": 10000000,

    "mapConstPolsFile": false,
    "mapConstantsTreeFile": false,

    "inputFile": "testvectors/aggregatedProof/recursive1.zkin.proof_0.json",
    "inputFile2": "testvectors/aggregatedProof/recursive1.zkin.proof_1.json",

    "outputPath": "/output/",
    "configPath": "/mnt/prover/config/",

    "zkevmCmPols_disabled": "/mnt/prover/runtime/zkevm.commit",
    "c12aCmPols": "runtime/c12a.commit",
    "recursive1CmPols_disabled": "runtime/recursive1.commit",
    "recursive2CmPols_disabled": "runtime/recursive2.commit",
    "recursivefCmPols_disabled": "runtime/recursivef.commit",
    "finalCmPols_disabled": "runtime/final.commit",

    "publicsOutput": "public.json",
    "proofFile": "proof.json",

    "databaseURL": "postgresql://prover_user:prover_pass@zkevm-state-db:5432/prover_db",
    "databaseURL_disabled": "local",
    "dbNodesTableName": "state.nodes",
    "dbProgramTableName": "state.program",
    "dbConnectionsPool": true,
    "cleanerPollingPeriod": 600,
    "requestsPersistence": 3600,
    "maxExecutorThreads": 20,
    "maxProverThreads": 8,
    "maxStateDBThreads": 8
} 
``` 
</details>

### Configure Services

Edit the `~/zkevm/mainnet/docker-compose.yml` file with the following content:

```bash
vim ~/zkevm/mainnet/docker-compose.yml
```

```yml
version: "3.5"
networks:
  default:
    name: zkevm
    
services:
  zkevm-sequencer:
    container_name: zkevm-sequencer
    image: hermeznetwork/zkevm-node:v0.2.1
    ports:
      - 9092:9091 # needed if metrics enabled
      - 6060:6060
    environment:
      - ZKEVM_NODE_STATEDB_HOST=zkevm-state-db
      - ZKEVM_NODE_POOL_DB_HOST=zkevm-pool-db
    extra_hosts:
        - "localhost:host-gateway"
    volumes:
      - ./config/environments/testnet/public.node.config.toml:/app/config.toml
      - ./config/environments/testnet/public.genesis.config.json:/app/genesis.json
    command:
      - "/bin/sh"
      - "-c"
      - "/app/zkevm-node run --network custom --custom-network-file /app/genesis.json --cfg /app/config.toml --components sequencer"

  zkevm-sequence-sender:
    container_name: zkevm-sequence-sender
    image: hermeznetwork/zkevm-node:v0.2.1
    environment:
      - ZKEVM_NODE_STATEDB_HOST=zkevm-state-db
      - ZKEVM_NODE_POOL_DB_HOST=zkevm-pool-db
      - ZKEVM_NODE_SEQUENCER_SENDER_ADDRESS=XXXXXXXXXXXX  # trustedSequencer from deploy_output.json
    volumes:
      - ./sequencer.keystore:/pk/sequencer.keystore
      - ./config/environments/testnet/public.node.config.toml:/app/config.toml
      - ./config/environments/testnet/public.genesis.config.json:/app/genesis.json
    command:
      - "/bin/sh"
      - "-c"
      - "/app/zkevm-node run --network custom --custom-network-file /app/genesis.json --cfg /app/config.toml --components sequence-sender"

  zkevm-json-rpc:
    container_name: zkevm-json-rpc
    image: hermeznetwork/zkevm-node:v0.2.1
    ports:
      - 8123:8545
      - 8133:8546 # needed if WebSockets enabled
      - 9091:9091 # needed if metrics enabled
    environment:
      - ZKEVM_NODE_STATEDB_HOST=zkevm-state-db
      - ZKEVM_NODE_POOL_DB_HOST=zkevm-pool-db
    extra_hosts:
        - "localhost:host-gateway"
    volumes:
      - ./config/environments/testnet/public.node.config.toml:/app/config.toml
      - ./config/environments/testnet/public.genesis.config.json:/app/genesis.json
    command:
      - "/bin/sh"
      - "-c"
      - "/app/zkevm-node run --network custom --custom-network-file /app/genesis.json --cfg /app/config.toml --components rpc"

  zkevm-aggregator:
    container_name: zkevm-aggregator
    image: hermeznetwork/zkevm-node:v0.2.1
    ports:
      - 50081:50081
      - 9093:9091 # needed if metrics enabled
    environment:
      - ZKEVM_NODE_STATEDB_HOST=zkevm-state-db
      - ZKEVM_NODE_AGGREGATOR_SENDER_ADDRESS=XXXXXXXXXXXX # trustedAggregator from deploy_output.json
    extra_hosts:
        - "localhost:host-gateway"
    volumes:
      - ./config/environments/testnet/public.node.config.toml:/app/config.toml
      - ./config/environments/testnet/public.genesis.config.json:/app/genesis.json
    command:
      - "/bin/sh"
      - "-c"
      - "/app/zkevm-node run --network custom --custom-network-file /app/genesis.json --cfg /app/config.toml --components aggregator"

  zkevm-sync:
    container_name: zkevm-sync
    restart: unless-stopped
    depends_on:
      zkevm-state-db:
        condition: service_healthy
    image: hermeznetwork/zkevm-node:v0.2.1
    ports:
      - 9095:9091 # needed if metrics enabled
    extra_hosts:
        - "localhost:host-gateway"
    environment:
      - ZKEVM_NODE_STATEDB_HOST=zkevm-state-db
      - ZKEVM_NODE_ETHERMAN_URL=${ZKEVM_NODE_ETHERMAN_URL}
    volumes:
      - ./config/environments/testnet/public.node.config.toml:/app/config.toml
      - ./config/environments/testnet/public.genesis.config.json:/app/genesis.json
    command:
      - "/bin/sh"
      - "-c"
      - "/app/zkevm-node run --network custom --custom-network-file /app/genesis.json --cfg /app/config.toml --components synchronizer"

  zkevm-eth-tx-manager:
    container_name: zkevm-eth-tx-manager
    image: hermeznetwork/zkevm-node:v0.2.1
    ports:
      - 9094:9091 # needed if metrics enabled
    environment:
      - ZKEVM_NODE_STATEDB_HOST=zkevm-state-db
    extra_hosts:
        - "localhost:host-gateway"
    volumes:
      - ./sequencer.keystore:/pk/sequencer.keystore
      - ./aggregator.keystore:/pk/aggregator.keystore
      - ./config/environments/testnet/public.node.config.toml:/app/config.toml
      - ./config/environments/testnet/public.genesis.config.json:/app/genesis.json
    command:
      - "/bin/sh"
      - "-c"
      - "/app/zkevm-node run --network custom --custom-network-file /app/genesis.json --cfg /app/config.toml --components eth-tx-manager"

  zkevm-l2gaspricer:
    container_name: zkevm-l2gaspricer
    image: hermeznetwork/zkevm-node:v0.2.1
    environment:
      - ZKEVM_NODE_POOL_DB_HOST=zkevm-pool-db
    extra_hosts:
        - "localhost:host-gateway"
    volumes:
      - ./sequencer.keystore:/pk/keystore
      - ./config/environments/testnet/public.node.config.toml:/app/config.toml
      - ./config/environments/testnet/public.genesis.config.json:/app/genesis.json
    command:
      - "/bin/sh"
      - "-c"
      - "/app/zkevm-node run --network custom --custom-network-file /app/genesis.json --cfg /app/config.toml --components l2gaspricer"

  zkevm-state-db:
    container_name: zkevm-state-db
    image: postgres
    deploy:
      resources:
        limits:
          memory: 2G
        reservations:
          memory: 1G
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -d $${POSTGRES_DB} -U $${POSTGRES_USER}"]
      interval: 10s
      timeout: 5s
      retries: 5
    ports:
      - 5432:5432
    volumes:
      - ./db/scripts/init_prover_db.sql:/docker-entrypoint-initdb.d/init.sql
      - ${ZKEVM_NODE_STATEDB_DATA_DIR}:/var/lib/postgresql/data
      - ${ZKEVM_ADVANCED_CONFIG_DIR:-./config/environments/testnet}/postgresql.conf:/etc/postgresql.conf
    environment:
      - POSTGRES_USER=state_user
      - POSTGRES_PASSWORD=state_password
      - POSTGRES_DB=state_db
    command:
      - "postgres"
      - "-N"
      - "500"
      - "-c"
      - "config_file=/etc/postgresql.conf"

  zkevm-pool-db:
    container_name: zkevm-pool-db
    image: postgres
    deploy:
      resources:
        limits:
          memory: 2G
        reservations:
          memory: 1G
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -d $${POSTGRES_DB} -U $${POSTGRES_USER}"]
      interval: 10s
      timeout: 5s
      retries: 5
    ports:
      - 5433:5432
    volumes:
      - ${ZKEVM_NODE_POOLDB_DATA_DIR}:/var/lib/postgresql/data
    environment:
      - POSTGRES_USER=pool_user
      - POSTGRES_PASSWORD=pool_password
      - POSTGRES_DB=pool_db
    command:
      - "postgres"
      - "-N"
      - "500"

  zkevm-event-db:
    container_name: zkevm-event-db
    image: postgres
    deploy:
      resources:
        limits:
          memory: 2G
        reservations:
          memory: 1G
    ports:
      - 5435:5432
    volumes:
      - ./db/scripts/init_event_db.sql:/docker-entrypoint-initdb.d/init.sql
    environment:
      - POSTGRES_USER=event_user
      - POSTGRES_PASSWORD=event_password
      - POSTGRES_DB=event_db
    command:
      - "postgres"
      - "-N"
      - "500"

  zkevm-explorer-l1:
    container_name: zkevm-explorer-l1
    image: hermeznetwork/zkevm-explorer:latest
    ports:
      - 4000:4000
    environment:
      - NETWORK=ETH
      - SUBNETWORK=Local Ethereum
      - COIN=ETH
      - ETHEREUM_JSONRPC_VARIANT=geth
      - ETHEREUM_JSONRPC_HTTP_URL=http://zkevm-mock-l1-network:8545
      - DATABASE_URL=postgres://l1_explorer_user:l1_explorer_password@zkevm-explorer-l1-db:5432/l1_explorer_db
      - ECTO_USE_SSL=false
      - MIX_ENV=prod
    command:
      - "/bin/sh"
      - "-c"
      - "mix do ecto.create, ecto.migrate; mix phx.server"

  zkevm-explorer-l1-db:
    container_name: zkevm-explorer-l1-db
    image: postgres
    ports:
      - 5436:5432
    environment:
      - POSTGRES_USER=l1_explorer_user
      - POSTGRES_PASSWORD=l1_explorer_password
      - POSTGRES_DB=l1_explorer_db
    command:
      - "postgres"
      - "-N"
      - "500"

  zkevm-explorer-l2:
    container_name: zkevm-explorer-l2
    image: hermeznetwork/zkevm-explorer:latest
    ports:
      - 4001:4000
    extra_hosts:
        - "localhost:host-gateway"
    environment:
      - NETWORK=POE
      - SUBNETWORK=Polygon Hermez
      - COIN=ETH
      - ETHEREUM_JSONRPC_VARIANT=geth
      - ETHEREUM_JSONRPC_HTTP_URL=http://localhost:8123
      - DATABASE_URL=postgres://l2_explorer_user:l2_explorer_password@zkevm-explorer-l2-db:5432/l2_explorer_db
      - ECTO_USE_SSL=false
      - MIX_ENV=prod
      - LOGO=/images/blockscout_logo.svg
      - LOGO_FOOTER=/images/blockscout_logo.svg
    command:
      - "/bin/sh"
      - "-c"
      - "mix do ecto.create, ecto.migrate; mix phx.server"

  zkevm-explorer-json-rpc:
    container_name: zkevm-explorer-json-rpc
    image: hermeznetwork/zkevm-node:v0.2.1
    ports:
      - 8124:8124
      - 8134:8134 # needed if WebSockets enabled
    environment:
      - ZKEVM_NODE_STATEDB_HOST=zkevm-state-db
      - ZKEVM_NODE_POOL_DB_HOST=zkevm-pool-db
      - ZKEVM_NODE_RPC_PORT=8124
      - ZKEVM_NODE_RPC_WEBSOCKETS_PORT=8134
    volumes:
      - ./config/environments/testnet/public.node.config.toml:/app/config.toml
      - ./config/environments/testnet/public.genesis.config.json:/app/genesis.json
    command:
      - "/bin/sh"
      - "-c"
      - "/app/zkevm-node run --network custom --custom-network-file /app/genesis.json --cfg /app/config.toml --components rpc --http.api eth,net,debug,zkevm,txpool,web3"

  zkevm-explorer-l2-db:
    container_name: zkevm-explorer-l2-db
    image: postgres
    ports:
      - 5437:5432
    extra_hosts:
        - "localhost:host-gateway"
    environment:
      - POSTGRES_USER=l2_explorer_user
      - POSTGRES_PASSWORD=l2_explorer_password
      - POSTGRES_DB=l2_explorer_db
    command: [ "postgres", "-N", "500" ]

  zkevm-mock-l1-network:
    container_name: zkevm-mock-l1-network
    image: hermeznetwork/geth-zkevm-contracts:v2.0.0-RC1-fork.5-geth1.12.0
    ports:
      - 8545:8545
      - 8546:8546
    command:
      - "--http"
      - "--http.api"
      - "admin,eth,debug,miner,net,txpool,personal,web3"
      - "--http.addr"
      - "0.0.0.0"
      - "--http.corsdomain"
      - "*"
      - "--http.vhosts"
      - "*"
      - "--ws"
      - "--ws.origins"
      - "*"
      - "--ws.addr"
      - "0.0.0.0"
      - "--dev"
      - "--datadir"
      - "/geth_data"
      - "--syncmode"
      - "full"
      - "--rpc.allow-unprotected-txs"

  zkevm-prover:
    container_name: zkevm-prover
    image: hermeznetwork/zkevm-prover:v2.1.0-RC2
    ports:
      - 50051:50051 # Prover
      - 50052:50052 # Mock prover
      - 50061:50061 # MT
      - 50071:50071 # Executor
    volumes:
      - ./config/environments/testnet/public.prover.config.json:/usr/src/app/config.json
    command: >
      zkProver -c /usr/src/app/config.json

  zkevm-approve:
    container_name: zkevm-approve
    image: hermeznetwork/zkevm-node:v0.2.1
    environment:
      - ZKEVM_NODE_STATEDB_HOST=zkevm-state-db
    volumes:
      - ./sequencer.keystore:/pk/keystore
      - ./config/environments/testnet/public.node.config.toml:/app/config.toml
      - ./config/environments/testnet/public.genesis.config.json:/app/genesis.json
    command:
      - "/bin/sh"
      - "-c"
      - "/app/zkevm-node approve --network custom --custom-network-file /app/genesis.json --key-store-path /pk/keystore --pw testonly --am 115792089237316195423570985008687907853269984665640564039457584007913129639935 -y --cfg /app/config.toml"

  zkevm-permissionless-db:
    container_name: zkevm-permissionless-db
    image: postgres
    deploy:
      resources:
        limits:
          memory: 2G
        reservations:
          memory: 1G
    ports:
      - 5434:5432
    volumes:
      - ./db/scripts/single_db_server.sql:/docker-entrypoint-initdb.d/init.sql
    environment:
      - POSTGRES_USER=test_user
      - POSTGRES_PASSWORD=test_password
      - POSTGRES_DB=test_db
    command:
      - "postgres"
      - "-N"
      - "500"

  zkevm-permissionless-node:
    container_name: zkevm-permissionless-node
    image: hermeznetwork/zkevm-node:v0.2.1
    ports:
      - 8125:8125
    environment:
      - ZKEVM_NODE_ISTRUSTEDSEQUENCER=false
      - ZKEVM_NODE_STATEDB_USER=test_user
      - ZKEVM_NODE_STATEDB_PASSWORD=test_password
      - ZKEVM_NODE_STATEDB_NAME=state_db
      - ZKEVM_NODE_STATEDB_HOST=zkevm-permissionless-db
      - ZKEVM_NODE_POOL_DB_USER=test_user
      - ZKEVM_NODE_POOL_DB_PASSWORD=test_password
      - ZKEVM_NODE_POOL_DB_NAME=pool_db
      - ZKEVM_NODE_POOL_DB_HOST=zkevm-permissionless-db
      - ZKEVM_NODE_RPC_PORT=8125
      - ZKEVM_NODE_RPC_SEQUENCERNODEURI=http://zkevm-json-rpc:8123
      - ZKEVM_NODE_MTCLIENT_URI=zkevm-permissionless-prover:50061
      - ZKEVM_NODE_EXECUTOR_URI=zkevm-permissionless-prover:50071
    volumes:
      - ./config/environments/testnet/public.node.config.toml:/app/config.toml
      - ./config/environments/testnet/public.genesis.config.json:/app/genesis.json
    command:
      - "/bin/sh"
      - "-c"
      - "/app/zkevm-node run --network custom --custom-network-file /app/genesis.json --cfg /app/config.toml --components \"rpc,synchronizer\""

  zkevm-permissionless-prover:
    container_name: zkevm-permissionless-prover
    image: hermeznetwork/zkevm-prover:v2.1.0-RC2
    ports:
      # - 50058:50058 # Prover
      - 50059:50052 # Mock prover
      - 50068:50061 # MT
      - 50078:50071 # Executor
    volumes:
      - ./config/environments/testnet/public.permissionless.prover.config.json:/usr/src/app/config.json
    command: >
      zkProver -c /usr/src/app/config.json

  zkevm-metrics:
    image: prom/prometheus:v2.39.1
    container_name: zkevm-metrics
    restart: unless-stopped
    ports:
      - 9090:9090
    command:
      - --config.file=/etc/prometheus/prometheus.yml
      - --web.enable-lifecycle
    volumes:
      - ./config/metrics/prometheus:/etc/prometheus

  zkevm-sh:
    container_name: zkevm-sh
    image: hermeznetwork/zkevm-node:v0.2.1
    stdin_open: true 
    tty: true
    environment:
      - ZKEVM_NODE_STATEDB_HOST=zkevm-state-db
      - ZKEVM_NODE_POOL_DB_HOST=zkevm-pool-db
    volumes:
      - ./config/environments/testnet/public.node.config.toml:/app/config.toml
      - ./config/environments/testnet/public.genesis.config.json:/app/genesis.json
    command:
      - "/bin/sh"
      
  zkevm-bridge-db:
    container_name: zkevm-bridge-db
    image: postgres
    deploy:
      resources:
        limits:
          memory: 8G
        reservations:
          memory: 4G
    expose:
      - 5435
    ports:
      - 5435:5432
    extra_hosts:
        - "localhost:host-gateway"
    environment:
      - POSTGRES_USER=bridge_user
      - POSTGRES_PASSWORD=bridge_password
      - POSTGRES_DB=bridge_db
    command:
      - "postgres"
      - "-N"
      - "500"
      
  zkevm-bridge-service:
    container_name: zkevm-bridge-service
    image: hermeznetwork/zkevm-bridge-service:2.0
    ports:
      - 8080:8080
      - 9090:9090
    extra_hosts:
        - "localhost:host-gateway"
    environment:
      - ZKEVM_BRIDGE_DATABASE_USER=bridge_user
      - ZKEVM_BRIDGE_DATABASE_PASSWORD=bridge_password
      - ZKEVM_BRIDGE_DATABASE_NAME=bridge_db
      - ZKEVM_BRIDGE_DATABASE_HOST=localhost
      - ZKEVM_BRIDGE_DATABASE_PORT=5435
    volumes:
      - ./sequencer.keystore:/pk/keystore.claimtxmanager
      - ./config/environments/testnet/public.bridge.config.toml:/app/config.toml
    command:
      - "/bin/sh"
      - "-c"
      - "/app/zkevm-bridge run --cfg /app/config.toml"
```

### Start Services

#### Start the Databases

```bash
export ZKEVM_NET="mainnet"
export ZKEVM_DIR="/root/zkevm"
export ZKEVM_CONFIG_DIR="/root/zkevm/zkevm-config"
docker compose --env-file $ZKEVM_CONFIG_DIR/.env -f $ZKEVM_DIR/$ZKEVM_NET/docker-compose.yml up -d zkevm-pool-db zkevm-state-db
docker compose --env-file $ZKEVM_CONFIG_DIR/.env -f $ZKEVM_DIR/$ZKEVM_NET/docker-compose.yml logs -f zkevm-pool-db
docker compose --env-file $ZKEVM_CONFIG_DIR/.env -f $ZKEVM_DIR/$ZKEVM_NET/docker-compose.yml logs -f zkevm-state-db
```

#### Start the Prover (Contains executor)

```bash
export ZKEVM_NET="mainnet"
export ZKEVM_DIR="/root/zkevm"
export ZKEVM_CONFIG_DIR="/root/zkevm/zkevm-config"
docker compose --env-file $ZKEVM_CONFIG_DIR/.env -f $ZKEVM_DIR/$ZKEVM_NET/docker-compose.yml up -d zkevm-prover
docker compose --env-file $ZKEVM_CONFIG_DIR/.env -f $ZKEVM_DIR/$ZKEVM_NET/docker-compose.yml logs -f zkevm-prover --tail 20
```

#### Start Synchronizer

```bash
docker compose --env-file $ZKEVM_CONFIG_DIR/.env -f $ZKEVM_DIR/$ZKEVM_NET/docker-compose.yml up -d zkevm-sync
docker compose --env-file $ZKEVM_CONFIG_DIR/.env -f $ZKEVM_DIR/$ZKEVM_NET/docker-compose.yml logs -f zkevm-sync --tail 20
```

#### Start L2 Gas Pricer

```bash
docker compose --env-file $ZKEVM_CONFIG_DIR/.env -f $ZKEVM_DIR/$ZKEVM_NET/docker-compose.yml up -d zkevm-l2gaspricer
docker compose --env-file $ZKEVM_CONFIG_DIR/.env -f $ZKEVM_DIR/$ZKEVM_NET/docker-compose.yml logs -f zkevm-l2gaspricer --tail 20
```

#### Start Transaciion Manager

```bash
docker compose --env-file $ZKEVM_CONFIG_DIR/.env -f $ZKEVM_DIR/$ZKEVM_NET/docker-compose.yml up -d zkevm-eth-tx-manager
docker compose --env-file $ZKEVM_CONFIG_DIR/.env -f $ZKEVM_DIR/$ZKEVM_NET/docker-compose.yml logs -f zkevm-eth-tx-manager --tail 20
```

#### Start the RPC

```bash
docker compose --env-file $ZKEVM_CONFIG_DIR/.env -f $ZKEVM_DIR/$ZKEVM_NET/docker-compose.yml up -d zkevm-json-rpc
docker compose --env-file $ZKEVM_CONFIG_DIR/.env -f $ZKEVM_DIR/$ZKEVM_NET/docker-compose.yml logs -f zkevm-json-rpc --tail 20
```

#### Start the Sequencer

```bash
docker compose --env-file $ZKEVM_CONFIG_DIR/.env -f $ZKEVM_DIR/$ZKEVM_NET/docker-compose.yml up -d zkevm-sequencer
docker compose --env-file $ZKEVM_CONFIG_DIR/.env -f $ZKEVM_DIR/$ZKEVM_NET/docker-compose.yml logs -f zkevm-sequencer --tail 20
```

#### Start the Aggregator

```bash
docker compose --env-file $ZKEVM_CONFIG_DIR/.env -f $ZKEVM_DIR/$ZKEVM_NET/docker-compose.yml up -d zkevm-aggregator
docker compose --env-file $ZKEVM_CONFIG_DIR/.env -f $ZKEVM_DIR/$ZKEVM_NET/docker-compose.yml logs -f zkevm-aggregator --tail 20
```

#### Start the Block Explorer

```bash
docker compose --env-file $ZKEVM_CONFIG_DIR/.env -f $ZKEVM_DIR/$ZKEVM_NET/docker-compose.yml up -d zkevm-explorer-l2 zkevm-explorer-l2-db
docker compose --env-file $ZKEVM_CONFIG_DIR/.env -f $ZKEVM_DIR/$ZKEVM_NET/docker-compose.yml logs -f zkevm-explorer-l2-db
docker compose --env-file $ZKEVM_CONFIG_DIR/.env -f $ZKEVM_DIR/$ZKEVM_NET/docker-compose.yml logs -f zkevm-explorer-l2 --tail 20
```

#### Start the Bridge

```bash
docker compose --env-file $ZKEVM_CONFIG_DIR/.env -f $ZKEVM_DIR/$ZKEVM_NET/docker-compose.yml up -d zkevm-bridge-service zkevm-bridge-db
docker compose --env-file $ZKEVM_CONFIG_DIR/.env -f $ZKEVM_DIR/$ZKEVM_NET/docker-compose.yml logs -f zkevm-bridge-db --tail 20
docker compose --env-file $ZKEVM_CONFIG_DIR/.env -f $ZKEVM_DIR/$ZKEVM_NET/docker-compose.yml logs -f zkevm-bridge-service --tail 20
```

### Activate Forced Transactions

You can check out [this](/zkevm/protocol/sequencer-resistance.md) document to learn more about Forced Batches of transactions.

```bash
cd ~/zkevm-contracts
npx hardhat console --network goerli
```

```js
const zkevm = await ethers.getContractFactory('PolygonZkEVM')
const zkevmContract = zkevm.attach("_polygonZkEVMAddress_")  // From ~/zkevm-contracts/deployments/goerli_*/deploy_output.json polygonZkEVMAddress 

const provider = ethers.getDefaultProvider("")  // set Geth Goerli RPC endpoint
const privateKey = ''   // Deployment Address prvkey from wallet.txt
const wallet = new ethers.Wallet(privateKey, provider);

const zkevmContractWallet = zkevm.connect(wallet)

await zkevmContract.activateForceBatches()
```

### Provide L1 ETH to the Bridge

Run the below commands in CLI to **create a bridge transaction** and send L1 Ether to the zkEVM Bridge.

```bash
mkdir -p ~/zkevm/initial-bridge
cd zkevm/initial-bridge
wget https://raw.githubusercontent.com/0xPolygonHermez/zkevm-bridge-service/develop/test/scripts/deposit/main.go
vim main.go
```

Populate the `main.go` file with following variables:

```go
l1BridgeAddr       = "" // ~/zkevm-contracts/deployments/goerli_*/deploy_output.json: polygonZkEVMBridgeAddress

l1AccHexAddress    = "" // ~/zkevm-contracts/wallets.txt: sequencer address
l1AccHexPrivateKey = "" // ~/zkevm-contracts/wallets.txt: sequencer prvkey
l1NetworkURL       = "http://X.X.X.X:8545"      // set your public IP
```

Initialize a new Go module with the module path `example.com/deposit`.

```bash
go mod init example.com/deposit
go mod tidy
go run main.go

# 2023-06-07T06:29:14.211Z      INFO    initial-bridge/main.go:46       Success!        {"pid": 776268, "version": "v0.1.0"}
```

### Claim Your L2 zkETH

After sending your first bridge transaction to your zkEVM network, create a **forzed claim to get the zkETH in L2**.

```bash
mkdir -p ~/zkevm/initial-claim
cd ~/zkevm/initial-claim
wget https://raw.githubusercontent.com/0xPolygonHermez/zkevm-bridge-service/develop/test/scripts/initialClaim/main.go
vim main.go
```

Open `main.go` and update the following parameters:

```go
const (
    l2BridgeAddr = ""  // ~/zkevm-contracts/deployments/goerli_*/deploy_output.json: polygonZkEVMBridgeAddress
    zkevmAddr    = ""  // ~/zkevm-contracts/deployments/goerli_*/deploy_output.json: polygonZkEVMAddress

    accHexAddress    = ""  // ~/zkevm-contracts/wallets.txt: sequencer address
    accHexPrivateKey = ""  // ~/zkevm-contracts/wallets.txt: sequencer prvkey
    l1NetworkURL     = "http://X.X.X.X:8545"  // public IP
    l2NetworkURL     = "http://X.X.X.X:8123"  // public IP
    bridgeURL        = "http://X.X.X.X:8080"  // public IP

    l2GasLimit = 1000000

    mtHeight      = 32
    miningTimeout = 180
)
```

Time to execute the claim transaction:

```bash
go mod init example.com/claim
go mod tidy
go get github.com/0xPolygonHermez/zkevm-bridge-service@4e1ca558144cac00fe0762329aaf7b3e9482b57a
go run main.go

# 2023-06-07T06:41:50.731Z     INFO    initial-claim/main.go:196       Success!!!!     {"pid": 783804, "version": "v0.1.0"}
```

:::tip Congratulations !!

Congratulations on reaching this far in setting up your own zkEVM network. **Your network is live on the Testnet** and you can send transactions to verify the same. Also, we have provided a Goerli full node setup guide below in case you are looking for one.


:::

## Goerli Full Node Setup

This guide provides step-by-step instructions to set up your own full node on the Goerli Testnet as Layer 1 (L1). It is recommended to run your own full node to handle a high volume of transactions in L1 efficiently. Follow the steps below to get started.

### Requirements

Before starting the setup, you will need **at least 500 GB of free disk space** to allocate a full Goerli node.

Next, make sure you have the following commands installed:

- wget
- jq
- docker

```bash
sudo apt update -y
sudo apt install -y wget jq docker.io

sudo usermod -aG docker $USER
newgrp docker && newgrp $USER
```

Additionally, you will need **an L1 Goerli address** to proceed with the setup that will act as the suggested fee recipient. Make sure you have this address provisioned.

### Preparation

1. Create a directory for your Goerli node:

    ```bash
    mkdir -p ~/goerli-node/docker-volumes/{geth,prysm}
    ```

2. Create a `docker-compose.yml` file and open it for editing:

    ```bash
    cd ~/goerli-node/
    vim docker-compose.yml
    ```

3. Copy and paste the following content into the `docker-compose.yml` file:

    ```yaml
    services:
      geth:
        image: 'ethereum/client-go:stable'
        container_name: goerli-execution
        command: |
          --goerli
          --http
          --http.vhosts=*
          --http.rpcprefix=/
          --http.corsdomain=*
          --http.addr 0.0.0.0
          --http.api eth,net,engine,admin
          --config=/app/config.toml
        volumes:
          - './docker-volumes/geth:/root/.ethereum'
          - './config.toml:/app/config.toml'
        ports:
          - '0.0.0.0:${L1_RPC_PORT}:8545'
          - '0.0.0.0:30303:30303/udp'
      prysm:
        image: 'gcr.io/prysmaticlabs/prysm/beacon-chain:stable'
        container_name: goerli-consensus
        command: |
          --prater
          --datadir=/data
          --jwt-secret=/geth/goerli/geth/jwtsecret
          --rpc-host=0.0.0.0
          --grpc-gateway-host=0.0.0.0
          --monitoring-host=0.0.0.0
          --execution-endpoint=/geth/goerli/geth.ipc
          --accept-terms-of-use
          --suggested-fee-recipient=${L1_SUGGESTED_FEE_RECIPIENT_ADDR}
          --checkpoint-sync-url=${L1_CHECKPOINT_URL}
        volumes:
          - './docker-volumes/prysm:/data'
          - './docker-volumes/geth:/geth'
        ports:
          - '0.0.0.0:3500:3500'
          - '0.0.0.0:4000:4000'
          - '0.0.0.0:12000:12000/udp'
          - '0.0.0.0:13000:13000'
        depends_on:
          - geth
    ```

4. Save and Close the `docker-compose.yml` file.

5. Create an `.env` file and open it for editing:

    ```bash
    cd ~/goerli-node/
    vim .env
    ```

6. Set the following environment variables in the `.env` file:

    ```bash
    L1_RPC_PORT=8845
    L1_SUGGESTED_FEE_RECIPIENT_ADDR=0x  # Put your Goerli account address
    L1_CHECKPOINT_URL=https://goerli.checkpoint-sync.ethpandaops.io
    ```

7. Save and Close the `.env` file.

8. Add geth config.toml file with following values to increase RPC timeouts

    ```bash
    cd ~/goerli-node/
    vim config.toml
    ```
    
    ```toml
    [Node.HTTPTimeouts]
    ReadTimeout = 600000000000
    ReadHeaderTimeout = 600000000000
    WriteTimeout = 600000000000
    IdleTimeout = 1200000000000
    ```    


### Deploy

1. Start the compose services:

    ```bash
    cd ~/goerli-node/
    docker compose --env-file /root/goerli-node/.env -f /root/goerli-node/docker-compose.yml up -d
    ```

2. Check the logs of the `prysm` service to monitor the synchronization progress:

    ```bash
    docker compose --env-file /root/goerli-node/.env -f /root/goerli-node/docker-compose.yml logs -f prysm --tail 20
    ```

- Wait for the initial sync to complete. You will see log messages similar to the following indicating the progress:

    ```bash
    #goerli-consensus  | time="2023-06-19 09:39:44" level=info msg="Synced up to slot 5888296" prefix=initial-sync
    ```

3. Check the logs of the `geth` service to monitor the initial download and sync progress:

    ```bash
    docker compose --env-file /root/goerli-node/.env -f /root/goerli-node/docker-compose.yml logs -f geth --tail 20
    ```

- This process may take a couple of hours. Look for log messages similar to the following indicating the progress:

    ```bash
    #goerli-execution  | INFO [06-19|09:43:24.954] Syncing beacon headers                   downloaded=25600 left=9,177,918 eta=1h5m31.860s
    #goerli-execution  | INFO [06-19|10:09:19.488] Syncing: state download in progress      synced=0.30% state=331.34MiB accounts=81053@20.52MiB slots=1,112,986@239.47MiB codes=11681@71.34MiB >
    ```

### Validation

Once both service logs show the sync completion and new blocks are being updated, you can verify the correctness of the RPC by making a call. For example, to get the current block number, use the following command:

```bash
printf "%d\n" $(curl -s -X POST --header "Content-Type: application/json"  --data '{"jsonrpc":"2.0","method":"eth_blockNumber","params":[],"id":83}' http://localhost:8845 | jq -r .result)
```

If everything is set up correctly, you should see the current block number returned.

Congratulations! You have successfully set up your own full node on the Goerli Testnet. You can now use this node to perform transactions and interact with the Goerli network.