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

## Table of Contents

<!-- TOC -->

<!--/ TOC -->

<p align="left">
  The Polygon Wiki serves as the central source of truth for Polygon. Spearheaded by Polygon Labs, 
  it is a community-centric initiative that aims to provide the most current and comprehensive resources for 
  those interested in learning about, developing on, or maintaining projects within the Polygon ecosystem.
</p>

## What is Polygon?

Polygon is a groundbreaking blockchain protocol designed to serve as a powerful layer for online value exchange. Initially focused on scaling Ethereum as Matic Network through a hybrid Plasma sidechain approach, Polygon has evolved far beyond its original mission.

Quick to adapt, Polygon transformed into a versatile suite of protocols, each designed to make Ethereum more scalable and adaptable. This wasn't just a random pivot; it was a calculated move based on extensive research and testing, all aimed at meeting the diverse needs of various applications.

As advancements in zero-knowledge technology (zk-tech) unfolded, it became clear that blockchains could now meet the demands of enterprise-level applications. These advancements can also pave the way for mass adoption and significantly improve user experience, broadening the horizons for what blockchain technology can accomplish. This realization opened up new possibilities, not just for Ethereum but for the entire blockchain space, especially in creating a foundational layer for the internet's value layer.

### Polygon 2.0

This strategic evolution heralds the advent of "Polygon 2.0"—a specialized "hyper" protocol with an exclusive focus on Layer 2 solutions. By zeroing in on this layer, Polygon aspires to construct an integrated value layer, comprising a network of interconnected Layer 2 solutions, all unified by liquid liquidity. This avant-garde framework is set to push the envelope of what blockchain technology can accomplish, featuring:

- Universal Blockchain Access: Democratizing the blockchain landscape for mass adoption.
- Ethereum Synergy: A dedicated alignment with the Ethereum roadmap to enhance scalability and functionality.
- Fluid Liquidity Network: A unified liquidity ecosystem that transcends the boundaries of individual Layer 2 solutions.
- Interoperable Messaging & Composability: Enabling seamless communication and interaction between diverse blockchain protocols.
- Adaptive Modularity: Offering a flexible architectural framework for customization and future enhancements.
- Swift Transaction Finality: Ensuring rapid and reliable transaction confirmations for an optimized user experience.

The [Polygon Wiki](https://wiki.polygon.technology/) is built using [Docusaurus](https://docusaurus.io/), 
a modern static website generator to build optimized websites quickly.

## How to Contribute to Polygon Wiki

The Documentation team at Polygon Labs are the primary maintainers of the Polygon Wiki and will
review all issues and pull requests created in this repository. If you spot typos or grammar mistakes, 
please go ahead and submit a pull request with the fixes. For bigger changes, it's a good idea to start with a GitHub 
issue to discuss it with the maintainers. We generally prefer pull requests over issues for suggesting changes to the Wiki.

We've set up guidelines to make sure all new contributions keep improving the Wiki without compromising its quality.
They are available [here](https://wiki.polygon.technology/docs/contribute/orientation/).

| ❗ Note: The Polygon Wiki includes third-party content. Review the [Third-Party Content Disclaimer](https://github.com/0xPolygon/wiki/blob/main/CONTENT_DISCLAIMER.md) for details. |
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

### Running the Polygon Wiki Locally

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

### Make changes using Git GUI and code editor

After running the Wiki locally on your machine, use a code editor to apply your changes before submitting 
your PR. Note that you must have a GitHub account and an understanding of Markdown syntax.

1. Create a new branch for your changes.
   
    ```bash
    git checkout -b [new_branch_name]
    ```

2. Commit your changes. Please be sure to review our [Git Rules](https://wiki.polygon.technology/docs/contribute/orientation#git-rules). 
   In the commit message, please reference the issue it resolves. 
   For help, see [GitHub Docs: Linking a pull request to an issue using a keyword](https://docs.github.com/en/free-pro-team@latest/github/managing-your-work-on-github/linking-a-pull-request-to-an-issue#linking-a-pull-request-to-an-issue-using-a-keyword).

    ```bash
    git commit -m "brief description of changes [Fixes #1234]"
    ```

3. Push to your forked repository.
   
    ```
    git push
    ```

4. Submit a PR against the `master` branch of the `0xPolygon/wiki` repo
   
5. Add a title to your PR. 
   > For example, if you want to suggest edits to the "Getting Started" page, name your PR: *Update /docs/develop/getting-started.md*.
   
6. Add a description to your PR. Please reference the issue it resolves. 
   > For help, see [GitHub Docs: Linking a pull request to an issue using a keyword](https://docs.github.com/en/free-pro-team@latest/github/managing-your-work-on-github/linking-a-pull-request-to-an-issue#linking-a-pull-request-to-an-issue-using-a-keyword).
   
7. Write a brief description of the changes you have made. If possible, include screenshots and references.

You can apply UI changes, sidebar, and configuration design through the following files:

- To modify the **Sidebar** navigation, edit **sidebars.js**
- To modify the website page layout, edit **docusaurus.config.js**
- To modify the blocks structure and the footer links, edit **src/pages/index.js**

### Making changes using the Wiki website

You can easily submit an edit suggestion. Note that you must have a GitHub account and good knowledge of Markdown syntax.

1. Navigate to the [Polygon Wiki page](https://wiki.polygon.technology/) that you want to edit.
2. Scroll down until the end of that page
3. Click on the link: **Edit this page**. It will forward you to the same page (Markdown format) hosted on GitHub.
4. On the related GitHub page, click the pencil icon (similar to  ) near the upper right corner of the file
5. Apply your edits by modifying the Markdown file
6. After you finish, scroll down until the end of that page to create a pull request 
7. Add a title to your PR. For example, if you want to suggest edits to the "Getting Started" page, name your PR: 
   *Update /docs/develop/getting-started.md*.
8. Add a description to your PR. Please reference the issue it resolves. 
   > For help, see [GitHub Docs: Linking a pull request to an issue using a keyword](https://docs.github.com/en/free-pro-team@latest/github/managing-your-work-on-github/linking-a-pull-request-to-an-issue#linking-a-pull-request-to-an-issue-using-a-keyword).
9.  Write a brief description of the changes you have made. If possible, include screenshots and references.
10. Click on the green button **Propose changes** to submit your changes. Note that submitting a change will write 
    it to a new branch in your fork.

One of the Wiki maintainers will review your PR and either accept it or submit our review. 
Acceptable PRs will be approved & merged into the `master` branch.

## Submit an Issue

- Create a [new issue](https://github.com/0xPolygon/wiki/issues/new/choose) to report a bug, request a feature, 
  or suggest changes.
- Comment on the issue if you want to be assigned to it so [our team can assign the issue to you](https://github.blog/2019-06-25-assign-issues-to-issue-commenters/).
- If you do not have a specific contribution in mind, you can also browse current issues.
- Issues that additionally have the `good first issue` label are considered ideal for first-timers.

## Build

This command generates static content into the `build` directory and can be served using any static content hosting 
service:

```
yarn build
```

## Deployment

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the 
`gh-pages` branch.

```
GIT_USER=[your_github_handle] USE_SSH=true yarn deploy
```

### Caching

Deployments leverage GitHub caching to improve build times. Currently, 3 levels of caching are 
implemented:

- `.docusaurus`: caches the site structure. The build process will update this as needed
- `build`: caches the static assets to avoid regenerating any pages that have not changed
- `node_modules`: caches node_modules based on the hash of `yarn.lock`. Any changes to package dependencies will invalidate and rebuild this cache

Caches can be viewed or invalidated in the GitHub repo settings.

## Configuration Guide

### Static site generator

The [Polygon Wiki](https://wiki.polygon.technology/) is built using [Docusaurus](https://docusaurus.io/), 
making it easy to serve and host its static files.

### Deployments

The deployment process for the Polygon Wiki involves two environments: **staging** and **prod**. Both environments are configured to run against the `main` branch of the repository.

#### Authorization

Any deployment—whether to Staging or Production—requires explicit authorization from an admin of the repository.

- **Staging**: This environment is used for testing and quality assurance. Changes are deployed here first to ensure they meet the required standards before moving to Production.
- **Production**: This is the live environment accessible to the end-users. Deployments to Production are made after successful validation in the Staging environment.

### Translations

| ❗ The Wiki is undergoing a reorganization and update. Translation efforts will resume upon completion of this revamp.       |
| ---------------------------------------------------------------------------------------------------------------------------- |

## License

The Polygon Wiki is licensed under the [MIT License](LICENSE) free software license.
