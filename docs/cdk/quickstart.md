---
id: quickstart
title: 'Launch a Local Test CDK Chain'
sidebar_label: 'Quickstart'
description: "Launch a CDK Chain"
keywords:
  - docs
  - polygon
  - local deployment
  - cdk
  - quick start
  - modular
---

:::caution Content disclaimer

Please view the third-party content disclaimer [<ins>here</ins>](https://github.com/0xPolygon/wiki/blob/master/CONTENT_DISCLAIMER.md).

:::

This tutorial will guide you through the process of setting up a zkSupernet on your local machine using the deployment guidance of [Snapchain](https://www.snapchain.dev/).

:::info Polygon CDK is in alpha stage and subject to changes

Please note that the current Data Availability (DA) configuration in Polygon CDK supports only a local Geth client. However, the integration with Layer 1 testnets, including Sepoilla, is actively being pursued.

As a project under continuous development, zkSupernet is committed to expanding its features and resolving any existing issues. To stay updated on our developmental progress, please follow our official GitHub repositories.

- [<ins>Node</ins>](https://github.com/0xPolygon/supernets2-node)
- [<ins>Data Availability</ins>](https://github.com/0xPolygon/supernets2-data-availability)
- [<ins>Contracts</ins>](https://github.com/0xPolygon/supernets2-contracts)

New features and refinements are designed to enhance user experience without disrupting ongoing activities.

:::

## What You'll Learn

<!-- explain actual setup, like mock prover-->

In this tutorial, you'll quickly dive into the world of Polygon CDK. You'll learn to set up and run a local CDK-based chain, enabling you to:

- Get a rapid understanding of Polygon CDK.
- Test smart contracts.
- Execute web3 transactions.
- Investigate network capabilities.

## What You'll Need

This tutorial requires Docker and Docker Compose. They allow you to run multiple services in separate environments. If you haven't installed these tools yet, you can do so by following the guides at the following links:

- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/install/)

### Recommended System Requirements

Ensure that your system meets the following recommended specifications before starting this tutorial:

- A Linux-based OS (e.g., Ubuntu Server 22.04 LTS)
- At least 16GB RAM with a 4-core CPU
- An AMD64 architecture system

:::caution Does not yet support ARM-based Macs

:::

## What You'll Do

In this tutorial, you'll go through the following steps. Make sure to follow each section in order if this is your first time setting up a zkSupernet.

1. [Download Configuration Files](#step-1-download-configuration-files): You'll start by downloading necessary configuration files from our repository.
2. [Launch the Supernet Locally](#step-2-launch-the-supernet-locally): After setting up your workspace, you'll launch the zkSupernet on your local machine and ensure all services are running properly.
3. [Test the Supernet](#step-3-test-the-supernet): With your local zkSupernet running, you'll verify its functionalities, including testing block explorers and making transactions.

## Step 1: Download Configuration Files

The first step involves downloading the necessary configuration files from our repository. Run the following commands in your terminal to clone the repository and navigate into it:

```bash
git clone https://github.com/Snapchain/zkevm-tutorial.git
cd zkevm-tutorial
```

The repository includes these key files:

- `Docker-compose.yml`: This Docker Compose file defines all the necessary containers to set up the zkSupernet. 
- `Makefile`: This file includes a series of commands that will help you manage your zkSupernet node.
- `config`: This folder contains configuration files required for the zkSupernet.

## Step 2: Launch the zkSupernet Locally

With the repository cloned and your working directory set, let's start up the zkSupernet. First, you'll need to pull the necessary Docker images from Docker Hub:

```bash
docker-compose pull
```

After pulling the images, you can start your local zkSupernet:

```bash
make run
```

To ensure all services are running properly, check the status of each container:

```bash
docker-compose ps 
```

You will see results similar to the following:

```shell
             Name                            Command                  State                          Ports                   
-----------------------------------------------------------------------------------------------------------------------------
supernets2-aggregator             /bin/sh -c /app/supernets2 ...   Up             0.0.0.0:50081->50081/tcp,:::50081->50081/tcp, 8123/tcp, 0.0.0.0:9093->9091/tcp,:::9093->9091/tcp   
supernets2-approve                /bin/sh -c /app/supernets2 ...   Exit 0
supernets2-explorer-l2            /bin/sh -c mix do ecto.cre ...   Up             0.0.0.0:4001->4000/tcp,:::4001->4000/tcp
supernets2-explorer-l2-db         docker-entrypoint.sh postg ...   Up             0.0.0.0:5437->5432/tcp,:::5437->5432/tcp
supernets2-json-rpc               /bin/sh -c /app/supernets2 ...   Up             0.0.0.0:8123->8123/tcp,:::8123->8123/tcp, 0.0.0.0:8133->8133/tcp,:::8133->8133/tcp, 0.0.0.0:9091->9091/tcp,:::9091->9091/tcp
```

If any service isn't running (i.e., in Exit 1 state), you can investigate further using the logs:

```bash
docker-compose logs <container_name>
```

Note: `<container_name>` can be found in results above.


To stop the zkSupernet, use:

```bash
make stop
```

And to restart all the services:

```bash
make restart
```

## Step 3: Test the zkSupernet

Congratulations! Your local zkSupernet is now up and running. Let's test its functionalities.

First, verify the block explorer by navigating to [localhost:4001](http://localhost:4001/). You should see a page similar to this:

<div align="center">
  <img src="/img/cdk/zksupernets-block-explorer-empty.png" alt="bridge" width="90%" height="30%" />
</div>

<br/>

Now, let's add the network to your Web3 wallet by populating the necessary fields.
> **We'll use MetaMask for our example.**

- Set the chain ID is **1001**. 
- The currency symbol is **POL** by default. 
- The RPC node and block explorer containers can be found at ports **8123** and **4001**, respectively.

<div align="center">
  <img src="/img/cdk/zksupernets-metamask-add-network.png" alt="bridge" width="90%" height="30%" />
</div>

Next, switch to the new network:

<div align="center">
  <img src="/img/cdk/zksupernets-metamask-switch-network.png" alt="bridge" width="90%" height="30%" />
</div>

By default, an account with private key `0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80` has been preloaded with tokens.

:::caution NEVER transfer real assets to the address associated with the above private key
:::

Import this account and check the balance:

<div align="center">
  <img src="/img/cdk/zksupernets-metamask-import-account.gif" alt="bridge" width="90%" height="30%" />
</div>

You can now try a transaction by transferring some tokens to another account:

<div align="center">
  <img src="/img/cdk/zksupernets-metamask-transfer.gif" alt="bridge" width="90%" height="30%" />
</div>

After confirming the transaction, check the updated balances:

<div align="center">
  <img src="/img/cdk/zksupernets-metamask-transfer-result.gif" alt="bridge" width="90%" height="30%" />
</div>

You can also view the transaction details in the block explorer by clicking on the transaction details in MetaMask:

<div align="center">
  <img src="/img/cdk/zksupernets-tx-view-on-block-explorer.gif" alt="bridge" width="90%" height="30%" />
</div>
