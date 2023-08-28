---
id: differences-validium-zkevm
title: What are the Differences Between Deploying the Validium & Polygon zkEVM
sidebar_label: Deploying Validium vs. zkEVM
description: "Explore the distinctions between deploying a CDK-based chain with validium versus Polygon's zkEVM."
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

1. **Data Availability Layer**: The primary distinction of validium. It ensures off-chain data availability while only storing the hash of transaction data on L1.
   - Components: zkEVM components + PostgreSQL database (with plans to transition to a key-value store in the near future.)
   - [Repository Link](https://github.com/0xPolygon/supernets2-data-availability)
2. **zkEVM Node with Validium Extensions**: The node is extended to support the data availability layer and DACs.
3. **Validium-specific DAC Contract**: One additional contract handles interactions with the DAC and data availability layer.
   - Component(s): `Supernets2DataCommittee.sol`
   - [Repository Link](https://github.com/0xPolygon/supernets2-contracts)

### Key Differences

1. **Data Availability**: zkEVM ensures on-chain data availability, while validium uses the DAC to manage off-chain data availability.
2. **Deployment Complexity**: Validium requires additional setup for the data availability layer and DACs.
3. **Security Considerations**: Validium introduces the DAC as trusted entities, adding another layer of security.
4. **Infrastructure**: Validium will need dedicated infrastructure for the data availability layer and DACs.

### Pros and Cons

**Validium Advantages**:
- **Reduced Fees**: Storing only the hash of transaction data on L1 leads to lower gas fees.
- **Efficient Proofs**: The zkEVM's off-chain Prover aggregates multiple ZK-proofs into a single zk-SNARK proof, reducing the cost of publishing and verifying validity proofs.

**Validium Disadvantages**:
- **Potential Security Risks**: If DAC members collude to withhold state data, users might be unable to access their assets.

### Transaction Flow in Validium

Unlike zkEVM, where all transaction data is published on L1, Validium only publishes the hash of the transaction data. This hash, termed the _Accumulated Input Hash_, must be approved by a majority of the DAC members. The Sequencer sends both the hash and the transaction data to the DAC for verification. Once approved, the hash, along with the signatures from the DAC members, is sent to the Consensus L1 contract of the Validium protocol. After verification, the hash and the ZK-proof are added to the L1 State, forming the _Consolidated State_.

## Deployment Steps

After deploying the zkEVM following the existing components, available [here](https://wiki.polygon.technology/docs/category/deploy-zkevm/), this is simple configuration to setup the data availability layer:

# LINK AND REF TO READMES
