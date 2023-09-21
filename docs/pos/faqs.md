---
id: pos-faqs
title: Frequently Asked Questions
sidebar_label: Frequently Asked Questions
description: Common questions on PoS node operations
keywords:
  - docs
  - matic
  - polygon
  - validator
  - faq
image: https://wiki.polygon.technology/img/polygon-logo.png
---

This FAQ document aims to address common questions and challenges you may encounter while interacting with Polygon PoS as a node operator. Please refer to the relevant sections below for detailed information.

## Configuration Files

### Are the Private Keys the Same for Heimdall and Bor Keystore?

Yes, the private keys are the same for Heimdall and Bor keystore, and they should correspond to the Ethereum address where your Polygon tokens are stored.

## Node Setup

### What Is the Minimum Disk Space Required to Run a Validator Node?

Please refer to our [System Requirements Guide](/pos/validator/validator-node-system-requirements.md) for information on minimum disk space requirements.

### How to Set Up a Validator Node on the Mainnet?

To set up a validator node on the mainnet, please refer to our [Getting Started Guide](/pos/operate/node/full-node-binaries.md).

### How to Set Up a Non-Validating Node?

To set up a non-validating node, check out our guide on [Running a Validator Node](/pos/operate/node/full-node-binaries.md).

### What Ports Need to Be Open on the Sentry Node?

The following ports should be open on the sentry node:

- **Port 22**
- **Port 26656**
- **Port 30303**

### Can I Start Bor Before Heimdall Is Completely Synced?

No, Heimdall must be fully synced before starting Bor to avoid issues.

### Why Do I Have to Keep ETH in My Signer Account?

ETH is required for transaction fees when submitting checkpoints to Ethereum.

### As a Validator, Do I Need to Run Both a Sentry and a Validator Node?

Yes, both a sentry node and a validator node are required for optimal security and performance.

### Can I Run Multiple Sentries for a Validator?

Yes, you can run multiple sentry nodes for a validator.

### Can I Run Multiple Validators Using the Same Signer Key?

No, running multiple validators using the same signer key is not currently supported.

## Validators

### How Can I Reserve a Validator Spot?

To reserve a Validator spot, follow these steps:

1. We're currently in the process of automating our validator admission process. Once this is complete, the community will vote on its implementation.
2. Until then, validator evaluation is managed through interviews and communications.

### What Are the Different States a Validator Can Be In?

Validators can be in one of three states:

| State     | Description                                                      |
| --------- | ---------------------------------------------------------------- |
| Active    | Participating in block production and consensus.                |
| Notice    | Preparing to enter the unbonding period.                        |
| Unbonding | Inactive and not earning rewards.                               |

### Is There a Minimum Amount of MATIC Required to Stake to Become a Validator?

No minimum self-stake requirement is currently in place, but we expect the average stake by a validator to increase over time.

### What Is the Uptime Percentage Calculation on the Staking Dashboard?

The uptime percentage is calculated based on the last 200 checkpoints and the ones you've actually signed.

### How Can a New Validator Replace an Existing One?

New validators can join only when an active validator unbonds. An auction process for validator replacement is in the works.

### Validator Heimdall Is Unable to Connect to Peers

If your validator Heimdall is unable to connect to peers, follow these steps:

1. This usually indicates issues with your sentry Heimdall.
2. Restarting the Heimdall service should resolve this issue.
