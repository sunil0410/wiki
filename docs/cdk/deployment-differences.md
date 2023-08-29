---
id: differences-validium-zkevm
title: What are the Differences Between Deploying the CDK Validium & Polygon zkEVM
sidebar_label: Deploying Validium vs. zkEVM
description: "Explore the distinctions between deploying a CDK-developed chain with validium versus Polygon's zkEVM."
keywords:
  - docs
  - Polygon
  - chain
  - layer 2
  - development kit
  - sdk
  - cdk
  - chain development kit
---

## Introduction

Polygon CDK's validium offering is a unique scaling solution that builds upon the foundation of the zkEVM. While it inherits the core functionalities of the zkEVM, it introduces a distinct approach to data availability by incorporating the [DAC](/docs/cdk/dac.md). This guide will delve into the nuances of deploying both systems, highlighting the key differences.

## Deployment Differences

### zkEVM Deployment

1. **zkEVM Node**: This node manages the Polygon zkEVM Network, processing transactions, maintaining state, and interacting with Ethereum.
   - Components: JSON RPC, Pool DB, Sequencer, Etherman, Synchronizer, State DB, Aggregator, Prover.
   - [Repository Link](https://github.com/0xPolygon/cdk-validium-node)
2. **zkEVM Contracts**: These smart contracts facilitate zkEVM operations on Ethereum.
   - Components: `PolygonZkEVMBridge`, `PolygonZkEVMGlobalExitRoot`, and others. A full breakdown is available [here](https://wiki.polygon.technology/docs/zkevm/architecture/).
   - [Repository Link](https://github.com/0xPolygonHermez/zkevm-contracts)

### Validium Deployment

1. **Data Availability Layer**: The primary distinction of the validium. It ensures off-chain data availability while only storing the hash of transaction data on L1.
   - Components: zkEVM components + PostgreSQL database (with plans to transition to a key-value store in the near future.)
   - [Repository Link](https://github.com/0xPolygon/supernets2-data-availability)
2. **zkEVM Node with Validium Extensions**: The node is extended to support the data availability layer.
3. **Validium-specific DAC Contract**: One additional contract handles interactions with the DAC and data availability layer.
   - Component(s): `Supernets2DataCommittee.sol`
   - [Repository Link](https://github.com/0xPolygon/supernets2-contracts)

### Summary of Key Differences

| Feature / Aspect       | zkEVM                                                                                     | Validium                                                                                     |
|-----------------------|-------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| **Node Type**         | [zkEVM Node](https://github.com/0xPolygonHermez/zkevm-node)                                                                                | [Validium Node](https://github.com/0xPolygon/cdk-validium-node) + [DA Node](https://github.com/0xPolygon/cdk-data-availability)                                                         |
| **Data Availability** | On-chain                                                                                  | Off-chain via DACs                                                                           |
| **Components**        | zkEVM components**         | zkEVM components** + PostgreSQL database + on-chain committees                                                      |
| **Additional Contracts** | None                                                                                    | Validium-specific DAC contract                               |
| **Infrastructure Needs** | Standard infrastructure                                                                 | Dedicated infrastructure for data availability layer and DACs                                |

> **JSON RPC, Pool DB, Sequencer, Etherman, Synchronizer, State DB, Aggregator, Prover

### Transaction Flow in Validium

Unlike zkEVM, where all transaction data is published on L1, Validium only publishes the hash of the transaction data. This hash, termed the _Accumulated Input Hash_, must be approved by a majority of the DAC members. The Sequencer sends both the hash and the transaction data to the DAC for verification. Once approved, the hash, along with the signatures from the DAC members, is sent to the Consensus L1 contract of the Validium protocol. After verification, the hash and the ZK-proof are added to the L1 State, forming the _Consolidated State_.

## Deployment Steps

Deploying the Validium involves a few key steps that are similar to setting up zkEVM, but with different configurations and additional components. The Validium deployment lives as its own CDK Validium source code with the added Data Availability (DA) layer and associated configurations.

By following the steps below, you'll successfully deploy a Validium instance. For a quick hands-on introduction to Validium, you can also explore the [Quickstart guide](#link-to-quickstart-guide).

### 1. Run the CDK Validium Node

First, you'll need to set up and run the CDK Validium Node. Follow the instructions in the [CDK Validium Node GitHub repository's README](https://github.com/0xPolygon/cdk-validium-node).

### 2. Run the Data Availability (DA) Node

After the CDK Validium Node is operational, you'll need to set up and run the Data Availability Node. Instructions for this can be found in the [CDK DA Node GitHub repository's README](https://github.com/0xPolygon/cdk-data-availability).

### 3. Deploy Validium-specific Contracts

Finally, deploy the Validium-specific smart contracts. The necessary steps can be found in the [CDK Validium Contracts GitHub repository's README](https://github.com/0xPolygon/cdk-validium-contracts).
