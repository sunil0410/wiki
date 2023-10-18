---
id: overview
title: Overview
keywords: 
  - indexer
  - contract
  - polygon
  - sdk
description: Chain Indexer Framework
---

# Chain Indexer Framework

[Github Link](https://github.com/0xPolygon/chain-indexer-framework) - Check this out to know more about the technical architecture OR to know how you can contribute to this open source project. For any questions, reach out to us on [Discord](https://discord.com/invite/0xPolygonDevs).

## Overview & Problem Statement

Chain Indexer Framework, is a powerful blockchain data indexer framework designed for the development of flexible event-driven data pipelines on EVM blockchains. Built on the reliable foundation of Kafka,  Chain Indexer Framework empowers developers to build robust and scalable applications that seamlessly process blockchain events and enable real-time data integration.

**Chain Indexer Framework** revolutionises the way developers interact with blockchain data, offering a fast, secure, and efficient method for data retrieval. By choosing **Chain Indexer Framework**, you're not just selecting a tool; you're opting for a more streamlined and efficient development process for your DApps. Before, we get into **Chain Indexer Framework,**  lets understand why we need it and what problem it solves. 

### ***1. What is an EVM blockchain data indexer ?***

An EVM (Ethereum Virtual Machine) blockchain data indexer is a specialised search engine for EVM-based blockchains like Ethereum and Polygon protocols. It sorts and organises blockchain data, making it faster and easier for developers to query and retrieve specific information for their decentralised applications (DApps).

### ***2. Why Do DApps Need a Blockchain Data Indexer?***

Without a data indexer like **Chain Indexer Framework**, querying blockchain data can be cumbersome and slow. Traditional methods require you to sift through enormous volumes of transaction records, smart contracts, and other types of data. This is like trying to find a single paragraph in an entire library of uncategorised books. Chain Indexer Framework makes this process fast and efficient, acting as a digital librarian that quickly retrieves the specific "paragraph" (or data) you're looking for.

- ***`Read more on this analogy to understand the problem in detail.`***
    
    Imagine that a blockchain is like a massive public library, and each book in the library represents a block of transactions. In a traditional library, you would rely on a catalog system and a librarian to find the specific book—and even the specific page—you need. Without these systems, you'd have to go through every single book, one by one, to find the information you're looking for. It would be a time-consuming and exhausting task, to say the least.
    
    Now, think of an EVM-based DApp (Decentralised Application) as a researcher who needs specific pieces of information from multiple books in this huge library for their project. Without a catalog or librarian, this researcher would spend an enormous amount of time locating what they need.
    
    A blockchain data indexer like **Chain Indexer Framework** acts as both the catalog system and the super-efficient librarian for this library. It knows exactly where each "book" is located and can instantly pinpoint the specific "page" you need. The indexer saves the researchers (DApps) valuable time and resources, allowing them to focus on their main project instead of getting bogged down with the cumbersome task of data retrieval.
    
    So, in summary, a blockchain data indexer for EVM-based DApps is like a super-librarian for a vast, complex library of information, making the development process faster, more efficient, and much easier to manage.
    

### ***3. Why is it hard to build a blockchain data indexer ?***

The development complexity in building a blockchain data indexer arises from the need to integrate a diverse software stack that often includes databases, queueing systems, and caching layers. Ensuring real-time performance, handling data consistency during blockchain forks, and adapting to protocol changes add to the complexity. Rigorous testing is essential to validate the indexer under various scenarios, making it a challenging endeavour that requires expertise in multiple domains. Things get more complicated in the multi-chain world.

## 🚀 **The Solution — Chain Indexer Framework**

**Chain Indexer Framework** is a powerful developer tool/framework designed to index raw blockchain data, which can later be utilized by developers to build the backend layers of their decentralized applications (DApps) based on their specific DApp logic. Think of **Chain Indexer Framework** as a tool that helps you construct the "Search Engine" for blockchain data; it indexes, categorizes, and makes the data quickly and cost-effectively accessible to developers. Chainflow brings the power of advanced data indexing to DApps, simplifying and accelerating the process of fetching the data you need.

*Note:* **Chain Indexer Framework** *is a tool that gathers information from a blockchain and channels it into a data stream known as Kafka. This data is not yet ready for use. It must subsequently be transformed and stored in a database like Postgres or Mongo. Only then can your decentralized application (DApp) utilize this data. Chainflow provides the framework/tools that enable you to transform the raw data based on your DApp's requirements.*

In short, **Chain Indexer Framework** handles the tedious task of collecting and preparing blockchain data for you. Afterward, you'll need to build your app's specific features, such as how to use that data, yourself. **Chain Indexer Framework** offers the foundational logic and helper functions that make this task much easier.

### ***How does Chain Indexer Framework Work?***

**Chain Indexer Framework** employs a combination of caching, distributed architecture, and advanced algorithms to quickly retrieve the data that a DApp might require. It takes raw blockchain data, indexes it, and helps converts it into easily accessible formats that developers can query using simple APIs.

Initially, **Chain Indexer Framework** obtains the raw blockchain data via blockchain RPC and stores it in a Kafka stream. It provides the core logic and helper functions needed to transform this raw data. Additionally, it allows you to consume the data from the Kafka stream and store it in a separate database. You can then host the APIs for your DApp on top of this database.

## ☀️ Features & Benefits

### ***Why Choose Chain Indexer Framework?***

1. **Open Source:** Anyone can fork, modify, and host the software on their own infrastructure. Unlike with third-party indexers, **Chain Indexer Framework** offers complete control to developers, enabling them to monitor the service closely to identify and resolve issues.
2. **Cost Savings:** You can save money otherwise spent on third-party data indexers. There will be no restrictions on usage or API rate limits, as developers will host the service themselves.
3. **Built Using TypeScript:** This developer-friendly programming language makes it easy to understand the code and implement changes. **Chain Indexer Framework** can be easily installed by downloading the npm package and integrating it into your project.
4. **One-Time Effort for Indexing Historical Blocks:** Once the raw blockchain data is indexed, you can build an unlimited number of application layers on top of it. There will be no need to make RPC calls to re-index historical blocks, as they will already be available in the Kafka Data Warehouse.
5. **Modular Architecture:** **Chain Indexer Framework** features a modular architecture, simplifying debugging and bug-fixing processes for developers.
6. **Instant Query:** Imagine a customer walking into your retail store and asking for a specific product. If your inventory is well-organized, you can instantly determine whether the item is in stock and where it's located. **Chain Indexer Framework** enables similar real-time data queries, making it easier for DApps to access and utilize blockchain data.
7. **Event-Triggered Actions:** Consider how online stores send you notifications when an item is back in stock. **Chain Indexer Framework** can establish event triggers for specific blockchain activities, allowing DApps to automatically execute actions such as sending notifications or updating the user interface. 
8. **Customization:** Just as some stores need to track perishable items differently from non-perishable ones, DApps often have unique data requirements. **Chain Indexer Framework’s** flexible architecture allows developers to customize data pipelines to meet their specific needs.
9. **Scalability:** A small retail store might initially manage with manual sorting, but as the business expands, automation becomes essential. **Chain Indexer Framework** can scale alongside your DApp's growth, handling increased data loads without sacrificing performance.
10. **Improved User Experience:** Nothing frustrates a customer more than slow or unresponsive service. By providing faster and more reliable access to blockchain data, **Chain Indexer Framework** helps DApps offer a smoother, more responsive user experience.

### *Popular Use-Cases*

1. **Wallet Services**: Blockchain indexers can help wallet providers offer more features like transaction history, balance history, and real-time updates.
2. **dApp Backend**: dApps often require real-time access to contract events, token transactions, and other on-chain activities. A data indexer can speed up this process considerably.
3. **Analytics and Monitoring**: Firms specializing in blockchain analytics use indexers to monitor activities like fraudulent transactions, smart contract interactions, and trends in token transfers.
4. **Cross-Chain Services**: For cross-chain swaps or interactions, indexers can offer data that facilitates more seamless integrations.
5. **Oracles**: Data indexers can support oracles by providing them with a more efficient way to access specific data points on the blockchain.
6. **NFT Marketplaces**: To track ownership changes, price histories, and various attributes of NFTs, data indexers are often used in the backend.