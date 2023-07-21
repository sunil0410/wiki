---
id: frequent-node-commands
title: Frequently Used Commands for Bor & Heimdall
sidebar_label: Frequently Used Commands
description: A list of the frequently used commands in validators and full nodes for Bor and Heimdall.
keywords:
  - docs
  - polygon
  - bor
  - heimdall
  - frequent commands
image: https://wiki.polygon.technology/img/polygon-wiki.png
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

This document provides a list of frequently used commands for Bor and Heimdall in full node/validator machines. You may select the tabs below to switch between Heimdall and Bor commands.

<Tabs
  defaultValue="bor"
  values={[
    { label: 'Bor Commands', value: 'bor', },
    { label: 'Heimdall Commands', value: 'heimdall', },
  ]
}>
<TabItem value="bor">

Syntax to use Bor IPC commands: ```bor attach .bor/data/bor.ipc <command>```

| IPC Command            | RPC Command                          | Description      |
| ---------------------- | ------------------------------------ | ---------------- |
| admin.peers.length   | "Content-Type: application / json" --data '{"jsonrpc": "2.0", "method": "net_peerCount", "params": [], "id" : 74} 'localhost: 8545 | Returns the number of peers connected with the node. |
| admin.nodeInfo       |                     | Returns the node information. |
| eth.syncing          | curl -H "Content-Type: application/json" -d '{"id":1, "jsonrpc":"2.0", "method": "eth_syncing","params": []}' localhost:8545 | Returns `true` if the node is not syncing, else `false`. |
| eth.syncing.highestBlock - eth.syncing.currentBlock  |   | Checks the current block of your node vs the highest block. |
| eth.blockNumber      | curl -H "Content-Type: application/json" -d '{"id":1, "jsonrpc":"2.0", "method": "eth_blockNumber","params": []}' localhost:8545 | Returns the block number processed by the node. |
| debug.setHead("0x"+((eth.getBlock('latest').number) - 1000).toString(16))  |   | Use this command to rewind back to 1000 blocks. |
| admin.nodeInfo.enode |   | Returns the public enode URL for the node. |
| eth.syncing.currentBlock * 100 / eth.syncing.highestBlock  |     | Returns the remaining % for block synchronization. |
| eth.getBlock("latest").number  | curl **http://YourIP:8545** -X POST -H "Content-Type: application/json" -d '{"jsonrpc":"2.0", "id":1, "method":"bor_getSigners", "params":["0x98b3ea"]}' | Queries height of the Bor block. |
|    | curl **http://YourIP:8545** -X POST \ -H "Content-Type: application/json" \ --data '{"method":"eth_chainId","params":[],"id":1,"jsonrpc":"2.0"}' | Get the `chainID`.   |

</TabItem>
<TabItem value="heimdall">

| Command                        | Description                       |
| ------------------------------ | --------------------------------- |
| curl localhost:26657/net_info? | jq .result.n_peers | Returns the number of connected peers. |
| curl -s localhost:26657/status \| jq .result.sync_info.latest_block_height | Returns Heimdall's current block height. |
| curl localhost:26657/net_info \| grep moniker | Queries the node using the moniker. |
| curl -s localhost:26657/status \| jq .result.sync_info.catching_up | To check if Heimdall is in sync or not. |
| curl -s localhost:26657/status \| jq .result \| jq .sync_info | To check if Heimdall is in sync or not. |
| heimdalld unsafe-reset-all | Cleans the database with problems. |
| curl localhost:26657/status | Returns complete information about Heimdall. |

</TabItem>
</Tabs>