---
id: smartpress
title: How to Deploy a Smart Contract Using SmartPress
sidebar_label: How to Deploy a Smart Contract Using SmartPress
description: "Lean how to deploy smart contracts on Polygon PoS mainnet using SmartPress."
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

To create a new smart contract using SmartPress, follow the steps below.

1. In your browser, navigate to smartpress.ai
2. Enter the requirements for the contract you want to build.
3. SmartPress will handle it from there and produce your contract for you without you having to use a IDE or a code editor.
4. If you are happy with the output, move onto validating your idea and testing. If you arent happy, edit your prompt and start again.

![Screenshot 2023-08-15 at 12 33 59 pm](https://github.com/crokau/wiki/assets/71380821/c43ccb48-3b1b-4cad-814b-8eddc0f735c1)

## Deploy your contract using SmartPress
1. Once created, connect your wallet, change your network to Polygon Testnet/Mainnet.
2. Hit the deploy button, or use the faucet links to get transaction gas if you dont have any yet.

![Screenshot 2023-08-15 at 12 37 39 pm](https://github.com/crokau/wiki/assets/71380821/ea20889b-1b5e-44b7-ba9c-f208abf1e944)

## Verify the Contract

Press 'view code', copy flattened bytecode to clipboard, in your preffered block explorer navigate to verification screen (usually under contracts/code), select compiler version specified in the deployment page, optimizer: TRUE, Runs: 200, choose preffered licence, paste flat code, verification should complete shortly.

---

### Need help?

If you have any questions or encounter any issues during the process, **please reach out to the [official SmartPress support](contact@smartpress.ai)**.
