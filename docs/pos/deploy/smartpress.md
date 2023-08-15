---
id: smartpress
title: How to Deploy a Smart Contract Using SmartPress
sidebar_label: How to Deploy a Smart Contract Using SmartPress
description: "Learn how to deploy smart contracts on Polygon PoS mainnet using SmartPress."
keywords:
  - docs
  - matic
  - polygon
  - smartpress
  - ai
  - create smart contract
  - deploy on polygon
image: https://wiki.polygon.technology/img/polygon-logo.png
---

:::caution Content disclaimer

Please view the third-party content disclaimer [<ins>here</ins>](https://github.com/0xPolygon/wiki/blob/master/CONTENT_DISCLAIMER.md).

:::

SmartPress is an AI tool that crafts custom smart contracts from language prompts.

> For details on the variety of contracts SmartPress can create, check out [SmartPress’s website](https://smartpress.ai).

## Create a Smart Contract using SmartPress

To create a new smart contract with SmartPress, follow these steps:

1. In your browser, navigate to smartpress.ai
2. Enter the requirements for the contract you want to build.
3. SmartPress will handle it from there and produce your contract for you without you having to use a IDE or a code editor.
4. Review the output. If satisfied, proceed to validation and testing. If not, modify your input and repeat the process.

![Screenshot 2023-08-15 at 12 33 59 pm](https://github.com/crokau/wiki/assets/71380821/c43ccb48-3b1b-4cad-814b-8eddc0f735c1)

## Deploy your Contract using SmartPress

To deploy your smart contract on Polygon PoS:
1. After creation, connect your wallet and switch your network to either Mumbai testnet or Polygon PoS mainnet.
2. Press the 'Deploy' button. If you lack transaction gas, use the provided faucet links to obtain some.

![Screenshot 2023-08-15 at 12 37 39 pm](https://github.com/crokau/wiki/assets/71380821/ea20889b-1b5e-44b7-ba9c-f208abf1e944)

## Verify the Contract

Press 'view code', copy flattened bytecode to clipboard, in your preffered block explorer navigate to verification screen (usually under contracts/code), select compiler version specified in the deployment page, optimizer: TRUE, Runs: 200, choose preffered licence, paste flat code, verification should complete shortly.


## Need help?

If you have any questions or encounter any issues during the process, **please reach out to the [official SmartPress support](contact@smartpress.ai)**.
