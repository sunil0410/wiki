<p align="center">
<img align="center" src="/static/img/polygon-logo.png" width="300">
</p>

<div align="Center">
<h1>0xPolygon Wiki</h1>
<h3>The Value Layer of the Internet</h3>

[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](#LICENSE)
[![made-with-Markdown](https://img.shields.io/badge/Made%20with-Markdown-1f425f.svg)](https://www.markdownguide.org/)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](docs/general/contributing.md)
[![Contributors](https://img.shields.io/github/contributors-anon/0xPolygon/wiki)](https://github.com/0xPolygon/wiki/graphs/contributors)
[![Discord](https://img.shields.io/discord/714888181740339261?color=1C1CE1&label=Polygon%20%7C%20Discord%20%F0%9F%91%8B%20&style=flat-square)](https://discord.com/invite/XvpHAxZ)
[![Twitter](https://img.shields.io/twitter/follow/0xPolygon.svg?style=social)](https://twitter.com/0xPolygon)

</div>

<p align="left">
  The Polygon Wiki serves as the central source of truth for Polygon. Spearheaded by Polygon Labs, 
  it is a community-centric initiative that aims to provide the most current and comprehensive resources for 
  those interested in learning about, developing on, or maintaining projects within the Polygon ecosystem.
</p>

| ❗ Please note that the first half of this README provides an overview of Polygon, while the second half focuses on the repository and source. |
| ---------------------------------------------------------------------------------------------------------------------------------------------- |

<!-- TOC -->

- [Polygon Overview](#polygon-overview)
  * [What is Polygon?](#what-is-polygon-)
    + [Matic Network -> Polygon](#matic-network----polygon)
    + [Polygon 2.0](#polygon-20)
  * [Current Polygon Stack](#current-polygon-stack)
    + [PoS](#pos)
    + [zkEVM](#zkevm)
    + [Supernets](#supernets)
    + [Miden](#miden)
    + [ID](#id)
  * [Proposed Polygon 2.0 Stack](#proposed-polygon-20-stack)
    + [Architecture](#architecture)
      - [1. Staking Layer](#1-staking-layer)
      - [2. Interop Layer](#2-interop-layer)
      - [3. Execution Layer](#3-execution-layer)
      - [4. Proving Layer](#4-proving-layer)
      - [Modular Design](#modular-design)
      - [Future-Proof](#future-proof)
    + [Governance](#governance)
      - [Three Governance Pillars](#three-governance-pillars)
      - [Community Involvement](#community-involvement)
    + [Tokenomics](#tokenomics)
      - [Key Features of POL](#key-features-of-pol)
    + [Evolution of Polygon's Development Frameworks](#evolution-of-polygon-s-development-frameworks)
      - [Framework Comparison](#framework-comparison)
      - [Key Takeaways](#key-takeaways)
  * [Key Polygon Repositories](#key-polygon-repositories)
    + [Polygon 2.0 Repositories under 0xPolygon](#polygon-20-repositories-under-0xpolygon)
    + [zkEVM Repositories under 0xPolygonHermez](#zkevm-repositories-under-0xpolygonhermez)
    + [Polygon PoS Repositories under MaticNetwork](#polygon-pos-repositories-under-maticnetwork)
- [Repository Overview](#repository-overview)
  * [State of the Docs](#state-of-the-docs)
    + [What to Expect?](#what-to-expect-)
  * [Configuration Guide](#configuration-guide)
    + [Static-Site Generator](#static-site-generator)
    + [Deployments](#deployments)
    + [Algolia DocSearch](#algolia-docsearch)
    + [Google Analytics](#google-analytics)
    + [Translations](#translations)
    + [Files and Folders](#files-and-folders)
    + [Priority Labels (`P#`)](#priority-labels---p---)
  * [How to Contribute to the Polygon Wiki](#how-to-contribute-to-the-polygon-wiki)
    + [How to Contribute Changes via the Polygon Wiki Website](#how-to-contribute-changes-via-the-polygon-wiki-website)
    + [How to Locally Run the Polygon Wiki](#how-to-locally-run-the-polygon-wiki)
      - [Setup Steps](#setup-steps)
  * [Primary Maintainers](#primary-maintainers)
  * [License](#license)

<!--/ TOC -->

---

# Polygon Overview

This section provides a comprehensive introduction to Polygon, its evolution, and its stack of solutions. It aims to give readers a clear understanding of what Polygon is, its strategic focus areas like Polygon 2.0, and the various components that make up its ecosystem.

## What is Polygon?

Polygon is a pioneering blockchain protocol engineered to act as a universal layer for digital value exchange. 

### Matic Network -> Polygon

Originally launched as Matic Network with the goal of scaling Ethereum through a hybrid Plasma sidechain, Polygon has undergone a transformative evolution. It has matured into a comprehensive suite of solutions designed to enhance Ethereum's scalability and versatility. This strategic transformation was a calculated move backed by extensive research and testing, all aimed at addressing the diverse needs of various use cases. In addition, the advent of zero-knowledge technology (zk-tech) marked a significant milestone, indicating that blockchains are now well-equipped to drive mass adoption.

These diverse solutions are not standalone protocols; rather, they serve as integral components of a unified Polygon protocol. The upcoming iteration of Polygon aims to further refine and seamlessly integrate these components.

### Polygon 2.0

Building on these advancements, Polygon Labs has introduced "Polygon 2.0," a specialized protocol designed to establish a universal value layer for the internet. It achieves this by interconnecting a network of Layer 2 solutions, all of which are unified by seamless liquidity. In doing so, Polygon 2.0 seeks to push the boundaries of what blockchain technology can achieve, featuring:

- **Universal Blockchain Access**: Democratizes access to blockchain technology, paving the way for mass adoption.
- **Ethereum Synergy**: Aligns closely with Ethereum's roadmap to augment both scalability and functionality.
- **Fluid Liquidity**: Establishes a cohesive liquidity ecosystem that seamlessly integrates various Layer 2 solutions.
- **Interoperable Messaging & Composability**: Facilitates smooth communication and interaction across a diverse range of product suites and blockchain-based solutions.
- **Adaptive Modularity**: Provides a flexible architecture that allows for easy customization and future upgrades.
- **Near-Instant Transaction Finality**: Guarantees quick and reliable transaction confirmations, enhancing the overall user experience.

## Current Polygon Stack

As of today, Polygon offers a diverse range of products and solutions designed to meet various application needs. Below are the key product suites of the current Polygon stack:

### PoS

The Proof-of-Stake (PoS) network serves as the backbone of Polygon's Layer 2 scaling solutions. It provides a secure and efficient platform for decentralized applications and transactions.

### zkEVM

zkEVM is Polygon's zero-knowledge-based Ethereum Virtual Machine. It aims to bring scalability and privacy to Ethereum-compatible blockchains.

### Edge

Edge provides infrastructure for application-specific chains that operate with PolyBFT consensus. They offer scalability and interoperability for decentralized applications.

### Miden

Miden is a fully EVM-compatible zk-rollup. It aims to provide a scalable and secure Layer 2 solution with the benefits of zero-knowledge proofs.

### ID

Polygon ID is a decentralized identity solution that aims to provide secure and verifiable identity management on the blockchain.

These components collectively form the current stack of Polygon, each serving specific needs while contributing to the ecosystem's overall scalability, security, and interoperability.

## Proposed Polygon 2.0 Stack

### Architecture

Polygon 2.0 is designed with a multi-layered architecture to provide a comprehensive solution for scalability, security, and interoperability. The architecture is composed of four core layers:

#### 1. Staking Layer

The Staking Layer serves as the backbone of the network, providing security and consensus. It is responsible for validator management and staking operations, ensuring the overall integrity of the network.

#### 2. Interop Layer

The Interop Layer focuses on enabling seamless communication between different blockchain networks. It employs the LXLY bridge to facilitate the transfer of assets and data across multiple Layer 2 solutions and even other Layer 1 blockchains.

#### 3. Execution Layer

This layer is where all the computation takes place. It supports various execution environments like zkEVM, zk-Rollups, and more, allowing developers to choose the best fit for their applications.

#### 4. Proving Layer

The Proving Layer is responsible for generating cryptographic proofs for the executed transactions. These proofs are then verified by the Staking Layer to finalize transactions.

Together, these layers work in harmony to offer a scalable, secure, and interoperable ecosystem, pushing the boundaries of what blockchain technology can achieve.

#### Modular Design

The modular nature of Polygon 2.0 allows developers to mix and match different components from each layer, creating a tailored solution for their specific application. This modularity extends to consensus mechanisms, execution environments, and data availability options.

#### Future-Proof

Polygon 2.0 is designed to be future-proof, with the ability to integrate new technologies as they emerge. This ensures that the framework remains at the forefront of the rapidly evolving blockchain landscape.

The following diagram illustrates the various layers of Polygon 2.0.

<p align="center">
<img align="center" src="/static/img/readme/polygon2.0-layers.png" width="900">
</p>

### Governance

Polygon 2.0 introduces a forward-looking framework for decentralized governance, aiming to give the community full control over the Polygon network. This governance model is inspired by proven blockchain governance systems, particularly Ethereum's. The framework is built on three main pillars: Protocol Governance, System Smart Contracts Governance, and Community Treasury Governance.

#### Three Governance Pillars

1. **Protocol Governance**: The Polygon Improvement Proposal (PIP) framework serves as an open platform for the development of Polygon protocols. In Polygon 2.0, the PIP framework will cover the entire permissionless stack, allowing the community to propose and research upgrades.

2. **System Smart Contracts Governance**: This pillar focuses on the upgradeability of protocol components implemented as smart contracts. An Ecosystem Council, governed by the community, will be responsible for these upgrades. The council will operate under a tailor-made governance framework designed for secure and scalable decision-making.

3. **Community Treasury Governance**: A self-sustainable Community Treasury will be established to fund public goods and support promising ecosystem projects. The governance of this treasury will evolve from an initial board to more explicit community-driven governance mechanisms.

<p align="center">
<img align="center" src="/static/img/readme/polygon2.0-governance-pillars.png" width="900">
</p>

#### Community Involvement

Community feedback and participation are integral to the governance process. Various channels, including forum posts and community calls, are used to gather feedback from validators, users, infrastructure providers, and dApp developers.

### Tokenomics

Polygon's native token, MATIC, has been pivotal in the network's growth since its inception in 2020. With the introduction of Polygon 2.0, a new token, **POL**, is proposed as a technical upgrade to MATIC. POL is designed to be a third-generation hyperproductive token, offering a range of utilities and incentives to its holders.

#### Key Features of POL

- **Third-Generation Token**: POL introduces the concept of hyperproductive tokens. Unlike first and second-generation tokens, POL enables its holders to validate multiple chains and assume multiple roles within those chains, thereby offering practically unlimited opportunities.

- **Major Benefits**: POL aims to provide ecosystem security, infinite scalability, and community ownership without introducing friction for users and developers.

- **Multifold Utility and Incentives**: Validators are required to stake POL to join the validator set. Once staked, they can validate any Polygon chain and establish multiple streams of incentives, including protocol rewards, transaction fees, and additional rewards.

- **Future-Proof Ecosystem**: POL will have a continuous emission to fund a Community Treasury, which will be governed by the Polygon community. This treasury will support protocol development, research, ecosystem grants, and adoption incentives.

- **Seamless Upgrade**: The transition from MATIC to POL will be facilitated through a simple technical action. Token holders will send MATIC to an upgrade smart contract, which will automatically return the equivalent amount of POL.

### Evolution of Polygon's Development Frameworks

Polygon's blockchain development framework to build sovereign blockchains have evolved significantly over time, each iteration bringing new features and capabilities. Below is a comparative table that outlines the key differences and features of Polygon Edge, Supernets, and the latest Chain Development Kit (CDK).

#### Framework Comparison

| Feature             |  Edge        | Supernets | CDK                         |
|---------------------|--------------|-----------|-----------------------------|
| **Layer**           | Layer 3      | Layer 3   | Layer 2                     |
| **Consensus**       | IBFT         | PolyBFT   | zk-based / PolyBFT          |
| **Focus**           | App-Chains               | App-Chains, Infrastructure, & Customizations | App-Chains, Infrastructure, Customizations, Modular Development, Cost-Reduction |
| **Scalability**     | Limited      | Extended Block Space | Boundless                    |
| **Interoperability**| Limited      | Custom Native Bridge       | Universal Layered Bridge |
| **Governance**      | N/A          | Customizable   | Customizable                         |
| **Data Availability**| On-chain    | On-chain       | Customizable                |
| **Modularity**      | Limited           | Limited        | Yes                         |
| **Components**      | Edge client + core contracts on Ethereum                      | Edge client + EVM-based rootchain + sovereign core contracts               | Customizable components part of Polygon 2.0 |

#### Key Takeaways

- **Polygon Edge**: Initially served as an SDK for launching app-chains to build Ethereum compatible blockchain networks, functioning as Layer 3 solutions.
  
- **Polygon Supernets**: Evolved from Edge to tackle the complexities of infrastructure development and bootstrapping for app-chains. Supernets also provide enhanced interoperability and customization options, also operating as Layer 3 solutions.

- **Polygon CDK**: The most recent and sophisticated iteration, the CDK concentrates on Layer 2 solutions. It embodies modularity and customization, leveraging cutting-edge protocol primitives from Polygon 2.0. This enables developers to architect chains tailored to their unique requirements.

<p align="center">
<img align="center" src="/static/img/readme/polygon2.0-layers-1.png" width="900">
</p>

https://github.com/0xPolygon/wiki/assets/25497083/d848aecf-7f20-41d1-8382-80a41c622b25

## Key Polygon Repositories

Explore the core codebases that power the Polygon ecosystem. This section provides quick links and descriptions for our most essential repositories, serving as a starting point for developers, enterprises, and community members alike.

### Polygon 2.0 Repositories under 0xPolygon

| Category                 | Repository Name                                                     | Description                                                                                     |
|--------------------------|---------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|
| **Edge**                 | [Polygon Edge](https://github.com/0xPolygon/polygon-edge)            | A repository for Polygon's edge services.                                                       |
| **CDK**                  | [CDK Validium Node](https://github.com/0xPolygon/cdk-validium-node)  | A CDK for Validium node deployment.                                                             |
|                          | [CDK Data Availability](https://github.com/0xPolygon/cdk-data-availability)| A CDK for data availability solutions.                                                          |
|                          | [CDK Validium Contracts](https://github.com/0xPolygon/cdk-validium-contracts)| Smart contract implementation which will be used by CDK Validium.                                 |
| **Core**                 | [Core Contracts](https://github.com/0xPolygon/core-contracts)        | Smart contracts that form the core of the Polygon network.                                      |
| **DApps and Explorers**  | [DApp Explorer Polygon](https://github.com/0xPolygon/dapp-explorer-polygon)| A DApp explorer for the Polygon network.                                                        |
| **Bridges and Interoperability** | [PoS ZkEVM Bridge](https://github.com/0xPolygon/pos-zkevm-bridge)| A bridge for ZkEVM in a PoS environment.                                                        |
| **Tools**                | [Gas Swapper](https://github.com/0xPolygon/gas-swapper)              | A tool for gas swapping.                                                                        |
|                          | [Indicia](https://github.com/0xPolygon/indicia)                      | A repository for Indicia, a Polygon service.                                                    |
| **ZkEVM**                | [ZkEVM Wrapper](https://github.com/0xPolygon/zkevm-wrapper)           | Wrapper contracts for transferring ETH and ERC20 tokens to ZkEVM.                               |
| **Economic Models**      | [Polygon 2.0 Economic Model](https://github.com/0xPolygon/polygon2.0-economic-model)| A simulation model to study validator incentives and ecosystem security in Polygon 2.0.         |

### zkEVM Repositories under 0xPolygonHermez

| Category                 | Repository Name                                                     | Description                                                                                     |
|--------------------------|---------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|
| **Prover**              | [zkEVM Prover](https://github.com/0xPolygonHermez/zkevm-prover)      | Prover for ZkEVM.                                                                               |
| **Node**                | [zkEVM Node](https://github.com/0xPolygonHermez/zkevm-node)          | Node implementation for ZkEVM.                                                                  |
| **Contracts**            | [zkEVM Contracts](https://github.com/0xPolygonHermez/zkevm-contracts)| Smart contracts for ZkEVM.                                                                      |
| **Bridge Service**      | [zkEVM Bridge Service](https://github.com/0xPolygonHermez/zkevm-bridge-service)| Bridge service for ZkEVM.                                                                       |
| **PIL Libraries**      | [PIL2 Stark JS](https://github.com/0xPolygonHermez/pil2-stark-js)    | JavaScript library for PIL2 STARKs.                                                             |
|                          | [PILCOM](https://github.com/0xPolygonHermez/pilcom)                  | PILCOM library for ZkEVM.                                                                       |
| **Test Vectors**         | [zkEVM Test Vectors](https://github.com/0xPolygonHermez/zkevm-testvectors)| Test vectors for ZkEVM.                                                                         |
| **Common Libraries**     | [zkEVM CommonJS](https://github.com/0xPolygonHermez/zkevm-commonjs)  | CommonJS library for ZkEVM.                                                                     |
| **Communication Protocols** | [zkEVM Comms Protocol](https://github.com/0xPolygonHermez/zkevm-comms-protocol)| Communication protocol for ZkEVM.                                                               |
| **JavaScript Provers**   | [zkEVM ProverJS](https://github.com/0xPolygonHermez/zkevm-proverjs)  | JavaScript prover for ZkEVM.                                                                    |
| **Goldilocks**           | [Goldilocks](https://github.com/0xPolygonHermez/goldilocks)          | Goldilocks library for ZkEVM.                                                                   |
| **PIL STARK**            | [PIL STARK](https://github.com/0xPolygonHermez/pil-stark)            | PIL STARK library for ZkEVM.                                                                    |
| **ROM**                  | [zkEVM ROM](https://github.com/0xPolygonHermez/zkevm-rom)            | Read-Only Memory for ZkEVM.                                                                     |
| **ASM Compiler**         | [zkASMCOM](https://github.com/0xPolygonHermez/zkasmcom)              | ZkASM compiler for ZkEVM.                                                                       |

### Polygon PoS Repositories under MaticNetwork

| Category                 | Repository Name                                                     | Description                                                                                     |
|--------------------------|---------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|
| **Core Components**      | [Heimdall](https://github.com/maticnetwork/heimdall)                 | Heimdall layer for PoS Network.                                                               |
|                          | [Bor](https://github.com/maticnetwork/bor)                           | Bor node for PoS Network.                                                                     |
|                          | [Tendermint](https://github.com/maticnetwork/tendermint)             | Tendermint fork for PoS consensus engine.                                                                    |
|                          | [Cosmos SDK](https://github.com/maticnetwork/cosmos-sdk)             | Cosmos SDK fork for PoS Network.                                                                   |
| **Token Management**     | [Polygon Token List](https://github.com/maticnetwork/polygon-token-list)| A list of tokens on the PoS network.                                                        |
|                          | [Polygon Token Assets](https://github.com/maticnetwork/polygon-token-assets)| Token assets for the PoS network.                                                           |
| **Subgraphs**            | [Subgraphs](https://github.com/maticnetwork/subgraphs)               | Subgraphs for PoS Network.                                                                    |
| **CLI Tools**            | [Matic CLI](https://github.com/maticnetwork/matic-cli)               | Command-line interface for PoS Network.                                                        |
|                          | [Polygon CLI](https://github.com/maticnetwork/polygon-cli)           | Command-line interface for Polygon.                                                              |
| **Gas Management**       | [Matic Gas Station](https://github.com/maticnetwork/maticgasstation)  | Gas station for PoS Network.                                                                  |
| **Portals and Bridges**  | [PoS Portal](https://github.com/maticnetwork/pos-portal)             | Proof of Stake portal for PoS Network.                                                         |
| **Proposals**            | [Polygon Improvement Proposals](https://github.com/maticnetwork/Polygon-Improvement-Proposals)| Repository for Polygon Improvement Proposals.                                                    |
| **SDKs and Libraries**   | [Matic.js](https://github.com/maticnetwork/matic.js)                 | JavaScript library for PoS Network.                                                            |
| **DevOps**               | [Node Ansible](https://github.com/maticnetwork/node-ansible)         | Ansible scripts for node management.                                                            |
|                          | [Terraform Polygon Edge](https://github.com/maticnetwork/terraform-polygon-supernets)| Terraform scripts for Polygon Edge.                                                        |
| **Contracts**            | [Contracts](https://github.com/maticnetwork/contracts)               | Smart contracts for PoS Network.                                                              |
|                          | [Genesis Contracts](https://github.com/maticnetwork/genesis-contracts)| Genesis contracts for PoS Network.                                                            |
| **Proofs and APIs**      | [Proof Generation API](https://github.com/maticnetwork/proof-generation-api)| API for proof generation.                                                                       |
| **Erigon**               | [Erigon](https://github.com/maticnetwork/erigon)                     | Erigon Ethereum client.                                                                         |
| **Policies**             | [Policy at Polygon](https://github.com/maticnetwork/Policy-at-Polygon)| Policies at Polygon.                                                                            |

---

# Repository Overview

This section delves into the specifics of this repository, explaining its structure, the types of files and folders it contains, and how to navigate it. It serves as a guide for developers and contributors who are interested in the source code, documentation, or contributing to the project.

## State of the Docs

In sync with the ongoing advancements of Polygon 2.0, the Polygon documentation platform is also slated for significant enhancements. Originally conceived as a "Developer Hub," the platform evolved into a "Wiki" in an attempt to effectively meet the distinct needs of various projects. 

While termed a "Wiki," the platform transcends the traditional scope of a wiki, serving as more than just a repository of information. This is because it aims serve as a versatile platform that accommodates different types of technical content and the diverse needs and stages of project development.

### What to Expect?

- **Unified Experience**: Seamlessly integrated with the main Polygon website, the documentation will feature a new, dynamic learning experience. The source will maintain its independent existence for continued integrity and versatility.
- **Dynamic Documentation**: Transition from a static information repository to an interactive, dynamic knowledge platform.
- **Enhanced Learning Experience**: Intuitive and enriching content tailored to facilitate learning, whether you're a beginner or an expert.
- **User-Centric Design**: Improved information architecture and navigation, designed with different user personas in mind, all guided by principles of developer advocacy and product development.

The Polygon community is committed to offering a comprehensive and current resource that helps users stay at the cutting edge of blockchain technology. Watch this space for more updates.

## Configuration Guide

### Static-Site Generator

The [Polygon Wiki](https://wiki.polygon.technology/) is built using [Docusaurus](https://docusaurus.io/), making it easy to serve and host its static files.

### Deployments

The deployment process for the Polygon Wiki involves two environments: **staging** and **prod**. Both environments are configured to run against the `main` branch of the repository.

Any deployment—whether to Staging or Production—requires explicit authorization from an admin of the repository.

- **Staging**: This environment is used for testing and quality assurance. Changes are deployed here first to ensure they meet the required standards before moving to Production.
- **Production**: This is the live environment accessible to the end-users. Deployments to Production are made after successful validation in the Staging environment.

### Algolia DocSearch

The documentation utilizes [Algolia's DocSearch](https://docsearch.algolia.com/) to provide a powerful and user-friendly search experience. DocSearch is specifically designed to improve navigation in documentation websites, making it easier for users to find the information they need.

### Google Analytics

[Google Analytics](https://analytics.google.com/) is integrated into the platform to monitor user interactions and collect valuable data. This helps in understanding user engagement and behavior, thereby aiding in the continuous improvement of the documentation. For those curious about how data is handled, please refer to our [Terms of Use](https://polygon.technology/terms-of-use).

### Translations

| ❗ The Wiki is undergoing a reorganization and update. Translation efforts will resume upon completion of this revamp.       |
| ---------------------------------------------------------------------------------------------------------------------------- |

### Files and Folders

This section provides an overview of the various files and folders in the Polygon Wiki repository, explaining the purpose of each.

| Name                  | Purpose                                                                                                         |
|-----------------------|-----------------------------------------------------------------------------------------------------------------|
| `.git`, `.github`     | Manage git configurations and GitHub-specific settings.                                                          |
| `README.md`           | The main introduction file for the Polygon Wiki repository.                                                      |
| `sidebars.js`         | Used to modify the sidebar navigation.                                                                           |
| `docusaurus.config.js`| Configuration file for website layout and other Docusaurus settings.                                             |
| `src/pages/index.js`  | Used to modify the blocks structure and footer links.                                                            |
| `yarn.lock`           | Yarn lock file to keep track of all package versions.                                                           |
| `package.json`        | Specifies dependencies and scripts for the project.                                                              |
| `node_modules/`       | Contains all the npm packages and dependencies.                                                                  |
| `build/`              | Contains static content generated for deployment.                                                                |
| `docs/`               | Contains the Markdown files that make up the content of the Wiki.                                                |
| `static/`             | Contains static assets like images, CSS, and fonts.                                                              |
| `translations/`       | Contains files for managing different languages.                                                                 |

> Note: This is a general overview and the actual repository may contain additional files and folders for specific functionalities.

### Priority Labels (`P#`)

GitHub labels are used to categorize the urgency and importance of issues. These priority levels are set by the documentation team based on the following criteria:

| Label | Impact Level                 | Resolution Time | Example Use Case                                                  |
|-------|-----------------------------|--------------------------|-------------------------------------------------------------------|
| P0    | Critical ("Urgent"): Requires immediate attention | Same day: Drop all other tasks and resolve immediately | The website is down, causing a severe impact on the business.      |
| P1    | High ("Important"): Significant business impact | Within 3 days: Must be addressed promptly | An API endpoint is changing, requiring immediate documentation updates. |
| P2    | Medium ("Sometime Soon"): Scheduled or planned | Within 2-3 weeks: Can be scheduled for near-term completion | Upcoming addition of a new method to a project API.                |
| P3    | Low ("Nice to Have"): Suggestions or conceptual updates | No set deadline: Address when possible | A suggested blog post on the advantages of decentralization for developers. |

## How to Contribute to the Polygon Wiki

The Documentation team at Polygon Labs are the primary maintainers of the Polygon Wiki and will
review all issues and pull requests created in this repository. If you spot typos or grammar mistakes, 
please go ahead and submit a pull request with the fixes. For bigger changes, it's a good idea to start with a GitHub 
issue to discuss it with the maintainers. We generally prefer pull requests over issues for suggesting changes to the Wiki.

| ❗ We've set up guidelines to make sure all new contributions keep improving the Wiki without compromising its quality. They are available [here](https://wiki.polygon.technology/docs/contribute/orientation/). |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------- |

Before making a contribution, please consult any existing issues or initiate a new discussion to ensure alignment with the Wiki's objectives.
Once you've done that, you'll find that your contributions can significantly enrich the Wiki in the following ways:

1. **General Overviews**: Introductory pieces that offer a holistic understanding of Polygon's ecosystem, including its core infrastructure and Layer 2 solutions.

2. **Technical Deep Dives**: In-depth articles that explore specific components of Polygon's architecture, such as its protocol layers, primitives, and consensus algorithms.

3. **Use-Case Scenarios**: Articles that showcase real-world applications of Polygon in various sectors like DeFi, NFTs, supply chain, and more.

4. **Interoperability Explainers**: Contributions that clarify how Polygon interfaces with other blockchain ecosystems, Layer 1 solutions, or cross-chain platforms.

5. **Tooling**: Documentation or guides on tools that facilitate development, testing, or deployment on Polygon. This could include IDE plugins, testing frameworks, or monitoring tools.

6. **Third-Party Services**: Information on external services that integrate with Polygon, such as oracles, data analytics platforms, or liquidity providers.

7. **Community Contributions**: Lists of active Polygon communities, educational resources, or upcoming events that enrich the ecosystem.

8. **Governance & Economics**: Insights into the governance model and tokenomics that underpin Polygon's network.

9. **Security Practices**: Guidelines and resources for ensuring the security and integrity of dApps, smart contracts, and general infrastructure on Polygon.

10. **Troubleshooting Guides**: Solutions to common challenges, FAQs, and other resources that assist both newcomers and experienced users.

11. **Emerging Technologies**: Articles on upcoming features, Layer 2 advancements, or experimental technologies that are in the Polygon pipeline.

| ❗ Note: The Polygon Wiki includes third-party content. Please review the [Third-Party Content Disclaimer](https://github.com/0xPolygon/wiki/blob/main/CONTENT_DISCLAIMER.md) for details. |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------- |

### How to Contribute Changes via the Polygon Wiki Website

Contributing to the Polygon Wiki is straightforward. You'll need a GitHub account and a basic understanding of Markdown syntax to get started.

1. **Locate the Page**: Visit the [Polygon Wiki page](https://wiki.polygon.technology/) you wish to edit.
2. **Navigate to the Bottom**: Scroll to the bottom of the page.
3. **Edit Link**: Click on the **Edit this page** link. This will redirect you to the corresponding Markdown file on GitHub.
4. **Edit Mode**: Once on GitHub, click the pencil icon located in the upper-right corner to enter edit mode.
5. **Make Edits**: Modify the Markdown file as needed.
6. **Initiate Pull Request**: Scroll to the bottom and click on **Create pull request**.
7. **Title Your PR**: Give your pull request a descriptive title. For instance, if you're editing the "Getting Started" page, you could title it *Update /docs/develop/getting-started.md*.
8. **Describe Changes**: In the pull request description, specify the issue your changes resolve. 
   > See [GitHub Docs on Linking a Pull Request to an Issue](https://docs.github.com/en/free-pro-team@latest/github/managing-your-work-on-github/linking-a-pull-request-to-an-issue#linking-a-pull-request-to-an-issue-using-a-keyword) for guidance.
9. **Additional Information**: Provide a concise summary of the changes you've made. Include screenshots or references if applicable.
10. **Submit**: Click **Propose changes** to finalize your pull request. This will create a new branch in your fork.

A Polygon Wiki maintainer will review your pull request. If approved, it will be merged into the `main` branch.

### How to Locally Run the Polygon Wiki

> **Prerequisites**:  
> - [Node.js](https://nodejs.org/en/download/) (version >= 16.14.1)  
> - [Yarn](https://yarnpkg.com/getting-started/install) (version >= 1.22)  
> **Note for macOS Users**: Xcode and Command Line Tools are required.

#### Setup Steps

1. **Fork the Repository**  
   > See [GitHub Docs: Fork a repo](https://help.github.com/en/articles/fork-a-repo) for guidance.

2. **Clone Your Fork**

   ```bash
   git clone git@github.com:[your_github_handle]/wiki.git
   ```

3. **Navigate to the Repository**

    ```bash
    cd wiki
    ```

4. **Add Upstream Remote**
   > Refer to [GitHub Docs: Configuring a remote for a fork](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/configuring-a-remote-for-a-fork).
   
    ```bash
    git remote add upstream https://github.com/0xPolygon/wiki
    ```

5. **Sync Your Fork**
   > See [GitHub Docs: Syncing a fork](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/syncing-a-fork).

    ```bash
    git checkout master
    git fetch upstream
    git merge upstream/master
    ```

6. **Install Dependencies**
   
    ```bash
    yarn install
    ```
    
   The site is built using Docusaurus. You may need to install Docusaurus before running the Wiki locally.

   ```bash
   yarn add docusaurus
   ```
   
   Alternatively, you can upgrade Docusaurus.

   ```bash
   yarn upgrade @docusaurus/core@latest @docusaurus/preset-classic@latest
   ```

7. **Run the Wiki Locally**

    ```bash
    yarn start
    ```

## Primary Maintainers

Below is a list of the primary maintainers of the Polygon Wiki.

If you're ever contacted by one of these individuals, take the following steps to ensure the communication is legitimate:

1. **Verify Contact Information**: Match the contact details with the origin of the message.
2. **Double-Check**: Reach out to another person on this list to confirm the legitimacy of the initial contact.

| ❗ Beware of Impersonation Scams: Always cross-verify the identity of the person contacting you. Confirm that their contact details align with the message source and seek additional verification when in doubt.|
| ------------------------------------------------------------------------------------------------------------------------------------------------------------- |

- [@DannyS03](https://github.com/DannyS03): Lead contact, primarily focuses on CDK, PoS & ZK, along with project organization.
- [@EmpieichO](https://github.com/EmpieichO): Primarily focusses on zkEVM & Miden, and specifications.
- [@cerberushades](https://github.com/cerberushades): Primarily focuses on Polygon ID.

## License

The Polygon Wiki is licensed under the [MIT License](LICENSE) free software license.
