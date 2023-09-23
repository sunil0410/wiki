---
id: develop
title: Get Started with Polygon zkEVM
sidebar_label: Quickstart
description: Polygon zkEVM provides a complete EVM-like experience for Developers and Users alike. Simply switch to the zkEVM network and start building on a network with much higher throughput and lower fees.
keywords:
  - polygon
  - develop
  - zkEVM
  - deploy smart contracts
  - connecting to zkEVM
---

# ETHGlobal NYC Hackathon

---

# Get Started with zkEVM

Welcome! Follow the steps below to deploy dApps and win bounties!
If you need any help, head over to the Polygon booth or reach out to the team in the
ETHGlobal Polygon Discord channel.

---
## Step 1: Quickstart
---

Deploy a sample application in minutes, interact seamlessly with the zkEVM network, and launch your own zkEVM instance by following the steps outlined below:

### Link and Launch: Execute a Sample dApp

1. **[<ins>Connect your wallet to the zkEVM network</ins>](#connecting-to-zkevm)** to initiate interaction with the network.
2. **[<ins>Deploy a demo smart contract to zkEVM</ins>](#deploying-smart-contracts)** as a quick way to get started, and then consider exploring **[<ins>more smart contract examples</ins>](/docs/category/smart-contracts/)** for a deeper dive into deploying to zkEVM.

### Configure and Deploy: Spin up the Network

- For deploying a node, refer to the **[<ins>zkNode Deployment Guide</ins>](/docs/category/setup-zknode/)**. This guide will assist you in preparing and setting up a zkEVM node, be it local or production.
- For deploying a full zkEVM instance, consult the **[<ins>zkEVM Deployment Guide</ins>](/docs/category/deploy-zkevm/)**. This guide will navigate you through the process of launching your own zkEVM network on the Goerli testnet.

---
## Step 2: Get Testnet ETH
---

Refer to the **[<ins>Faucet Guide</ins>](/docs/zkevm/guides/zkevm-faucet/#using-the-polygon-zketh-faucet)** to acquire Testnet ETH. After obtaining some, you have the option to **[<ins>bridge some of your Goerli tokens</ins>](/docs/zkevm/bridge-to-zkevm/)** or initiate a request via XMTP.

---
## [BONUS] Step 3: Extend the LXLY Bridge Implementation
---

Develop and enhance the LXLY sample implementation by incorporating support for various types of cross-chain messaging and asset transfers.

Refer to the specifications of the bridge **[<ins>here</ins>](/docs/category/zkevm-bridge/)** for detailed information.

---
## Step 4: Explore Polygon ID
---

Finally, refer to the **[<ins>official Polygon ID developer documentation</ins>](https://devs.polygonid.com/)** to understand how to verify and issue credentials. Initially, you will need to set up a Polygon ID wallet. To accomplish this, follow the **[<ins>Quickstart Demo</ins>](https://devs.polygonid.com/docs/quick-start-demo/)** and continue the guide to issue credentials.

---
---

# zkEVM Quickstart

:::caution Risks

To see the potential list of risks associated with the use of Polygon zkEVM, check out the [<ins>Risks FAQ</ins>](/zkevm/risk-disclosure.md) section.

:::

Polygon zkEVM is the first zero-knowledge scaling solution that is **fully equivalent to an EVM**. All existing smart contracts, developer toolings and wallets work seamlessly. Polygon zkEVM harnesses the power of zero-knowledge proofs in order to reduce transaction costs and massively increase throughput, all while inheriting the security of Ethereum.

Building dApps on zkEVM is completely similar to Ethereum. Simply switch to the zkEVM RPC and start building on a network with much higher throughput and lower fees. Polygon zkEVM provides a complete EVM-like experience for Developers and Users alike. So you do not need special toolings or new wallets for building or interacting with zkEVM.

:::info Reminder

You don't need special toolings or Wallets to build or interact with Polygon zkEVM.

:::

Developers will be able to deploy their existing contracts to the zkEVM, and Users can deposit assets from Ethereum and transact off-chain. These transactions are grouped into batches with zero-knowledge proof attesting to the validity of each transaction.

## Connecting to zkEVM

In order to add the **Polygon zkEVM** network to your wallet, you will need to enter the following details :

| Network | RPC URL | ChainID | Block Explorer URL | Currency |
| ------- | ------------------------------- | ---------------- | ---------------- | ----- |
| Polygon zkEVM | `https://zkevm-rpc.com` | `1101` | `https://zkevm.polygonscan.com/` | **ETH** |
| zkEVM Testnet | `https://rpc.public.zkevm-test.net` | `1442` | `https://testnet-zkevm.polygonscan.com` | **ETH** |

You can **add zkEVM Network to your MetaMask wallet** instantly by clicking the **Add to Wallet** button in the Wallet Suite interface.

<video autoplay width="100%" height="100%" controls="true" >
  <source type="video/mp4" src="/img/add-zkevm-network.mp4"></source>
  <p>Your browser does not support the video element.</p>
</video>

:::info Additional RPC Endpoints

If you want to launch your own RPC Endpoint for the Polygon zkEVM network, check out third party services like [QuickNode](https://www.quicknode.com/chains/zkevm).

:::

The next step is to [bridge your assets](bridge-to-zkevm.md) from Ethereum &rarr; Polygon zkEVM. You can use the zKEVM Bridge natively built inside Polygon Wallet Suite to bridge your assets.

You can also view all available public endpoints to connect to **Polygon zkEVM** on [Alchemy's Chain Connect](https://www.alchemy.com/chain-connect/chain/polygon-zkevm) and [Chainlist](https://chainlist.org/?search=Polygon+zkEVM).

## Deploying Smart Contracts

The development experience on zkEVM is seamless and identical to Ethereum Virtual Machine. Developers on zkEVM can use their existing code and toolings to deploy on zkEVM with much higher throughput and lower fees.

Here is a video tutorial on **how to add Polygon zkEVM Testnet to MetaMask and deploy smart contracts**:

<video autoplay width="100%" height="100%" controls="true" >
  <source type="video/mp4" src="/img/zkevm/tutorial.mp4"></source>
  <p>Your browser does not support the video element.</p>
</video>

## Get Started with Web3Modal

:::caution Content disclaimer

Please view the third-party content disclaimer [<ins>here</ins>](https://github.com/0xPolygon/wiki/blob/master/CONTENT_DISCLAIMER.md).

:::

### Overview

[<ins>Web3Modal</ins>](https://web3modal.com/) is a simple and intuitive SDK that provides a drop-in UI to enable users of any wallet to seamlessly log in to applications, offering a unified and smooth experience. It features a streamlined wallet selection interface with automatic detection of various wallet types, including mobile, extension, desktop, and web app wallets.

### Code Sandbox for Polygon

The Web3Modal team has prepared a [<ins>Polygon Code Sandbox</ins>](https://codesandbox.io/p/sandbox/web3modal-v3-polygon-7264l5?file=/src/main.tsx:9,19-9,50). It’s a straightforward way for developers to integrate and get hands-on experience with Polygon.

### How to Integrate

1. **Visit Web3Modal:** Go to [<ins>Web3Modal's official website</ins>](https://web3modal.com/) to explore its features and capabilities.
2. **Explore the Code Sandbox:** Utilize the [<ins>Polygon Code Sandbox</ins>](https://codesandbox.io/p/sandbox/web3modal-v3-polygon-7264l5?file=/src/main.tsx:9,19-9,50) to demo and understand the integration process.
3. **Follow the Documentation:** Refer to the provided documentation and instructions to integrate Web3Modal into your projects and leverage its features effectively.

## zkEVM Support

If you need help with anything related to the Polygon zkEVM, you can raise a ticket on the [Polygon Support](https://support.polygon.technology/support/tickets/new) portal, and check out the [Knowledge base](https://support.polygon.technology/support/solutions/folders/82000694871) to view the most common queries about the zkEVM. Additionally, you can reach out to the support team available on the **#zkevm-support** channel on the [Polygon Discord server](https://discord.com/invite/XvpHAxZ). Instructions for raising a zkEVM support ticket are as follows:

1. Join the **Polygon Discord** server [here](https://discord.gg/0xPolygon).
2. Accept the invite sent via DM.
3. Take the **Member** role under **#roles**.
4. Navigate to the **#zkevm-support** channel.

You can now contact the zkEVM support staff with your questions and concerns. We will actively monitor for issues and work to resolve them as soon as possible.
