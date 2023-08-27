<p align="center">
<img align="center" src="/static/img/polygon-logo.png" width="300">
</p>

<div align="Center">
<h1>Polygon Wiki</h1>
<h3> The Value Layer of the Internet </h3>
</div>

<br>

<p align="center">
   <a href="https://github.com/0xPolygon/wiki/graphs/contributors"><img src="https://img.shields.io/github/contributors-anon/0xPolygon/wiki"></a>
   <a href="https://discord.com/invite/XvpHAxZ"><img src="https://img.shields.io/discord/714888181740339261?color=1C1CE1&label=Polygon%20%7C%20Discord%20%F0%9F%91%8B%20&style=flat-square"></a>
   <a href="https://twitter.com/0xPolygon"><img src="https://img.shields.io/twitter/follow/0xPolygon.svg?style=social"></a>
   
</p>

<!-- TOC -->

- [What is Polygon?](#what-is-polygon-)
  * [Matic Network -> Polygon](#matic-network----polygon)
  * [Polygon 2.0](#polygon-20)
  * [Evolution of Polygon's Development Frameworks](#evolution-of-polygon-s-development-frameworks)
    + [Framework Comparison](#framework-comparison)
    + [Key Takeaways](#key-takeaways)
- [Configuration Guide](#configuration-guide)
  * [Static-Site Generator](#static-site-generator)
  * [Deployments](#deployments)
  * [Translations](#translations)
  * [Files and Folders](#files-and-folders)
  * [Priority Labels (`P#`)](#priority-labels---p---)
- [How to Contribute to the Polygon Wiki](#how-to-contribute-to-the-polygon-wiki)
  * [How to Contribute Changes via the Polygon Wiki Website](#how-to-contribute-changes-via-the-polygon-wiki-website)
  * [How to Locally Run the Polygon Wiki](#how-to-locally-run-the-polygon-wiki)
    + [Setup Steps](#setup-steps)
- [Key Polygon Repositories](#key-polygon-repositories)
  * [Polygon 2.0 Repositories under 0xPolygon](#polygon-20-repositories-under-0xpolygon)
  * [zkEVM Repositories under 0xPolygonHermez](#zkevm-repositories-under-0xpolygonhermez)
  * [Polygon PoS Repositories under MaticNetwork](#polygon-pos-repositories-under-maticnetwork)
- [License](#license)

<!--/ TOC -->

<p align="left">
  The Polygon Wiki serves as the central source of truth for Polygon. Spearheaded by Polygon Labs, 
  it is a community-centric initiative that aims to provide the most current and comprehensive resources for 
  those interested in learning about, developing on, or maintaining projects within the Polygon ecosystem.
</p>

## What is Polygon?

Polygon is a pioneering blockchain protocol engineered to act as a universal layer for digital value exchange. 

### Matic Network -> Polygon

Initially conceived as Matic Network to enhance Ethereum's scalability via a hybrid Plasma sidechain, Polygon eventually evolved into a robust suite of protocols aimed at optimizing Ethereum's performance and adaptability. This evolution was the result of meticulous research and testing, tailored to meet the complex demands of a diverse range of use cases.

The emergence of zero-knowledge technology (zk-tech) has been a pivotal moment, signaling that blockchains are now primed to accommodate all types of enterprise-level applications and catalyze mass adoption.

### Polygon 2.0

This strategic shift introduces "Polygon 2.0"—a "super" protocol. By building this layer, Polygon aims to establish a universal value layer, connecting a network of Layer 2 solutions through unified liquidity. As a result, Polygon 2.0 aims to redefine the capabilities of blockchain technology, featuring:

- **Universal Blockchain Access**: Democratizing the blockchain landscape for mass adoption.
- **Ethereum Synergy**: A dedicated alignment with the Ethereum roadmap to enhance scalability and functionality.
- **Fluid Liquidity Network**: A unified liquidity ecosystem that transcends the boundaries of individual Layer 2 solutions.
- **Interoperable Messaging & Composability**: Enabling seamless communication and interaction between diverse blockchain protocols.
- **Adaptive Modularity**: Offering a flexible architectural framework for customization and future enhancements.
- **Swift Transaction Finality**: Ensuring rapid and reliable transaction confirmations for an optimized user experience.

### Evolution of Polygon's Development Frameworks

Polygon's blockchain development framework to build soverign blockchains have evolved significantly over time, each iteration bringing new features and capabilities. Below is a comparative table that outlines the key differences and features of Polygon Edge, Supernets, and the latest Chain Development Kit (CDK).

#### Framework Comparison

| Feature             |  Edge        | Supernets | CDK                         |
|---------------------|--------------|-----------|-----------------------------|
| **Layer**           | Layer 3      | Layer 3   | Layer 2                     |
| **Consensus**       | IBFT         | PolyBFT   | PolyBFT / zk-based          |
| **Focus**           | App Chains               | App Chains & Infrastructure | App Chains, Infrastructure & Modular Development |
| **Security**        | Inherits from PoS | Inherits from Rootchain | Inherits from Ethereum     |
| **Scalability**     | Limited      | Extended Block Space | Boundless                    |
| **Interoperability**| Limited      | Custom Native Bridge       | Universal LXLY Bridge |
| **Governance**      | N/A          | Customizable   | Customizable                         |
| **Data Availability**| On-chain    | On-chain       | Customizable                |
| **Modularity**      | Limited           | Limited        | Yes                         |
| **Components**      | Edge client + core contracts on Ethereum                      | Edge client + EVM-based rootchain + sovereign core contracts               | Polygon 2.0 |

#### Key Takeaways

- **Polygon Edge**: Initially served as an SDK for launching app-chains to build Ethereum compatible blockchain networks, functioning as Layer 3 solutions.
  
- **Polygon Supernets**: Evolved from Edge to tackle the complexities of infrastructure development and bootstrapping for app-chains. Supernets also provide enhanced interoperability and customization options, also operating as Layer 3 solutions.

- **Polygon CDK**: The most recent and sophisticated iteration, the CDK concentrates on Layer 2 solutions. It embodies modularity and customization, leveraging cutting-edge protocol primitives from Polygon 2.0. This enables developers to architect chains tailored to their unique requirements.

<p align="center">
<img align="center" src="/static/img/readme/cdk-zk-flow.png" width="900">
</p>

## Configuration Guide

### Static-Site Generator

The [Polygon Wiki](https://wiki.polygon.technology/) is built using [Docusaurus](https://docusaurus.io/), making it easy to serve and host its static files.

### Deployments

The deployment process for the Polygon Wiki involves two environments: **staging** and **prod**. Both environments are configured to run against the `main` branch of the repository.

Any deployment—whether to Staging or Production—requires explicit authorization from an admin of the repository.

- **Staging**: This environment is used for testing and quality assurance. Changes are deployed here first to ensure they meet the required standards before moving to Production.
- **Production**: This is the live environment accessible to the end-users. Deployments to Production are made after successful validation in the Staging environment.

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

We've set up guidelines to make sure all new contributions keep improving the Wiki without compromising its quality.
They are available [here](https://wiki.polygon.technology/docs/contribute/orientation/).

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

## Key Polygon Repositories

Explore the core codebases that power the Polygon ecosystem. This section provides quick links and descriptions for our most essential repositories, serving as a starting point for developers, enterprises, and community members alike.

### Polygon 2.0 Repositories under 0xPolygon

| Category                 | Repository Name                                                     | Description                                                                                     |
|--------------------------|---------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|
| **Edge**                 | [Polygon Edge](https://github.com/0xPolygon/polygon-edge)            | A repository for Polygon's edge services.                                                       |
| **CDK**                  | [CDK Validium Node](https://github.com/0xPolygon/cdk-validium-node)  | A CDK for Validium node deployment.                                                             |
|                          | [CDK Data Availability](https://github.com/0xPolygon/cdk-data-availability)| A CDK for data availability solutions.                                                          |
|                          | [CDK Validium Contracts](https://github.com/0xPolygon/cdk-validium-contracts)| Smart contract implementation which will be used by Supernets2.                                 |
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
| **Core Components**      | [Heimdall](https://github.com/maticnetwork/heimdall)                 | Heimdall layer for Matic Network.                                                               |
|                          | [Bor](https://github.com/maticnetwork/bor)                           | Bor node for Matic Network.                                                                     |
|                          | [Tendermint](https://github.com/maticnetwork/tendermint)             | Tendermint consensus engine.                                                                    |
|                          | [Cosmos SDK](https://github.com/maticnetwork/cosmos-sdk)             | Cosmos SDK for Matic Network.                                                                   |
| **Token Management**     | [Polygon Token List](https://github.com/maticnetwork/polygon-token-list)| A list of tokens on the Polygon network.                                                        |
|                          | [Polygon Token Assets](https://github.com/maticnetwork/polygon-token-assets)| Token assets for the Polygon network.                                                           |
| **Subgraphs**            | [Subgraphs](https://github.com/maticnetwork/subgraphs)               | Subgraphs for Matic Network.                                                                    |
| **CLI Tools**            | [Matic CLI](https://github.com/maticnetwork/matic-cli)               | Command-line interface for Matic Network.                                                        |
|                          | [Polygon CLI](https://github.com/maticnetwork/polygon-cli)           | Command-line interface for Polygon.                                                              |
| **Gas Management**       | [Matic Gas Station](https://github.com/maticnetwork/maticgasstation)  | Gas station for Matic Network.                                                                  |
| **Portals and Bridges**  | [PoS Portal](https://github.com/maticnetwork/pos-portal)             | Proof of Stake portal for Matic Network.                                                         |
| **Proposals**            | [Polygon Improvement Proposals](https://github.com/maticnetwork/Polygon-Improvement-Proposals)| Repository for Polygon Improvement Proposals.                                                    |
| **SDKs and Libraries**   | [Matic.js](https://github.com/maticnetwork/matic.js)                 | JavaScript library for Matic Network.                                                            |
| **DevOps**               | [Node Ansible](https://github.com/maticnetwork/node-ansible)         | Ansible scripts for node management.                                                            |
|                          | [Terraform Polygon Supernets](https://github.com/maticnetwork/terraform-polygon-supernets)| Terraform scripts for Polygon Supernets.                                                        |
| **Contracts**            | [Contracts](https://github.com/maticnetwork/contracts)               | Smart contracts for Matic Network.                                                              |
|                          | [Genesis Contracts](https://github.com/maticnetwork/genesis-contracts)| Genesis contracts for Matic Network.                                                            |
| **Proofs and APIs**      | [Proof Generation API](https://github.com/maticnetwork/proof-generation-api)| API for proof generation.                                                                       |
| **Erigon**               | [Erigon](https://github.com/maticnetwork/erigon)                     | Erigon Ethereum client.                                                                         |
| **Policies**             | [Policy at Polygon](https://github.com/maticnetwork/Policy-at-Polygon)| Policies at Polygon.                                                                            |

## License

The Polygon Wiki is licensed under the [MIT License](LICENSE) free software license.
