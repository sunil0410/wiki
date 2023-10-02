---
id: pol
title: POL
sidebar_label: POL
description: Learn about Polygon's native token, MATIC.
keywords:
  - docs
  - polygon
  - matic
  - gas token
image: https://wiki.polygon.technology/img/polygon-wiki.png
---

:::caution **Important Update**

There is a proposal to transition the native token of the Polygon PoS network from MATIC to POL. This document will provide details on what this means for users of MATIC, the Polygon ecosystem, and the planned changes. Please read carefully and find more information [<ins>here</ins>](https://polygon.technology/blog/polygon-2-0-implementation-officially-begins-the-first-set-of-pips-polygon-improvement-proposals-released).

:::

## General Overview

### What is POL?

POL is an upgrade of the native token for the Polygon PoS network, designed to replace the existing MATIC token. It serves multiple purposes, including governance, staking, and transaction fees within the Polygon ecosystem. Importantly, POL has the same rights and features as MATIC, is built on OpenZeppelin's ERC20 implementations, and supports EIP-2612 for signature-based permit approvals.

### Do I Need to Do Anything Today as an Active Participant?

**No**, as an active participant in the Polygon PoS network, you're not required to take any immediate actions. However, we encourage active participants to engage in the governance and decision-making processes of the POL token proposal. Your involvement and input can play a significant role in shaping the future of the Polygon ecosystem.

You can participate in governance proposals to vote on various aspects of the Polygon ecosystem through the PIP program. Check out how to do so [<ins>here</ins>](/docs/category/proposals/).

### **Do** I Need to Do Anything Today **as a Node Operator or Staker?**

**Nothing.** You can provide feedback on the proposed changes in the PIPs and monitor Github and the forum for new node software versions to remain compatible with your given chain when PIPs are approved by the community.

### **Do** I Need to Do Anything **Today as an Application or Tooling Developer?**

Please review the [<ins>PIPs</ins>](https://forum.polygon.technology/t/pip-18-polygon-2-0-phase-0-frontier/12913) and provide feedback on the proposed changes and analyze if any changes break your smart contracts. Developers for applications on the Polygon PoS should not see any breaking changes.

### When Will POL Be Officially Upgraded?

If the POL proposal is accepted by governance, the POL upgrade will take place in Q4 2023. The systems utilizing MATIC won't start transition until Q1 2024, allowing time for a smooth changeover and stakeholder preparation.

### What is the Genesis Supply of POL Tokens?

The genesis supply of POL refers to the initial allocation of POL when the upgrade occurs. In the case of POL, the genesis is **10 billion tokens** — **1:1 with MATIC** since this is an **upgrade**. To be clear, **you can only migrate to POL if you already have MATIC**.

## Technical Specifications

### Does POL Increase Over Time?

Yes, POL has an inflationary model. **It will emit 2% of the supply per year**.

### Who Manages POL Minting?

The `EmissionsManager` smart contract is responsible for initiating the upgrade to POL through a minting process. This contract is upgradeable, allowing for future changes through governance. It also ensures that the `StakeManager` and `Treasury` contracts receive their respective amounts of the newly minted tokens.

### What Determines the Inflation Rate?

The inflation rate is governed by a variable named `mintPerSecondCap` in the primary POL smart contract. Additionally, the `EmissionManager` contract uses a constant called `INTEREST_PER_YEAR_LOG2` to calculate a **2% annual inflation rate, compounded per year**.

### Can the Emission Rate Be Modified?

Yes, the emission rate can be modified through a governance proposal, but cannot surpass `mintPerSecondCap` in the primary POL smart contract.

### What Considerations Go Into POL’s Economic Design?

The economic design of POL incorporates several key considerations to aim for stability, such as:

- **Community Governance**: Active community participation in governance processes allows for adaptability and responsiveness to changing conditions.
- **Smart Contract Security**: The integrity of the underlying smart contracts is crucial for maintaining a stable environment.
- **Market Dynamics**: Ongoing monitoring of supply and demand, as well as external economic factors, helps in making informed governance decisions.

## Token Migration and Reversal

### What Is the Purpose of Token Migration?

Token migration serves the purpose of allowing for the upgrade from MATIC to POL. This migration operates on a **1-to-1 conversion** basis, ensuring the preservation of the existing economic model while accommodating future staking and rewards distribution. 

A migration smart contract facilitates this transition by accepting MATIC from users and providing an equal amount of POL tokens in return. The contract is designed to permit the entire supply of MATIC tokens to be migrated.

### What Happens to the MATIC Tokens After Migration?

MATIC is held in the migration contract and can be used for unmigration.

### Can POL Tokens Be Reverted Back to MATIC?

Yes, the migration contract includes a feature known as "**unmigration**." This allows users to convert their POL to an equivalent amount of MATIC. The ability to lock or unlock this feature is controlled by governance, providing flexibility in response to network conditions or security concerns.

## Bridging Mechanisms

### Is There a Possibility of Funds Getting Locked or Stuck?

Yes, if an existing contract relies on withdrawing MATIC from a bridge and receives POL instead, this might result in locked funds. **Developers must check their contracts, verify the transaction lifecycle, and engage on the forum for any doubts.**

### When Will the Bridge Modification Occur?

If the proposal is endorsed by governance, the bridge upgrade is planned for Q1 2024.

## Governance and Security Protocols

### Who Holds the Authority to Amend Contracts?

The contracts are governed by the Polygon decentralized governance model. Changes can be proposed and voted on by the community via the PIP program.

### What Security Measures Are in Place?

The contracts have been designed with various security measures, including rate limits on minting and the ability to lock or unlock features like unmigration.

## Implications and Safeguards

### What Are the Implications of POL Inflation?

The inflation model aims to be sustainable and predictable, supporting various initiatives like validator incentives.

### How Can I Avoid Scams?

Always verify contract addresses and use reputable platforms for transactions. Exercise extreme caution when dealing with claims like "swaps" or “transfers” from unverified sources.
