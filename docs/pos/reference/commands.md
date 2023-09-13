---
id: pos-common-commands
title: Common Commands
sidebar_label: Commands
description: "A guide to essential Linux and Polygon-specific commands for node operations."
keywords:
  - docs
  - matic
  - polygon
  - validator
  - commands
  - faq
image: https://wiki.polygon.technology/img/polygon-logo.png
---

This guide provides a curated list of common Linux commands and Polygon-specific operations essential for node operators. Whether you're setting up a full node, validator node or troubleshooting, these commands will assist you in managing your Polygon PoS environment effectively.

## Common Linux Commands

| Description                           | Command                                        |
| ------------------------------------- | ---------------------------------------------- |
| **Locate Heimdall genesis file**      | `$CONFIGPATH/heimdall/config/genesis.json`     |
| **Locate heimdall-config.toml**       | `/etc/heimdall/config/heimdall-config.toml`    |
| **Locate config.toml**                | `/etc/heimdall/config/config.toml`             |
| **Locate heimdall-seeds.txt**         | `$CONFIGPATH/heimdall/heimdall-seeds.txt`      |
| **Start Heimdall**                    | `$ sudo service heimdalld start`               |
| **Start Heimdall rest-server**        | `$ sudo service heimdalld-rest-server start`   |
| **Start Heimdall bridge-server**      | `$ sudo service heimdalld-bridge start`        |
| **Locate Bor genesis file**           | `$CONFIGPATH/bor/genesis.json`                 |
| **Start Bor**                         | `sudo service bor start`                       |
| **Retrieve Heimdall logs**            | `/var/log/matic-logs/`                         |
| **Check Heimdall logs**               | `tail -f heimdalld.log`                        |
| **Check Heimdall rest-server logs**   | `tail -f heimdalld-rest-server.log`            |
| **Check Heimdall bridge logs**        | `tail -f heimdalld-bridge.log`                 |
| **Check Bor logs**                    | `tail -f bor.log`                              |

## Useful Commands

### Sync Status of Heimdall

To check if Heimdall is synced, run:

```bash
curl http://localhost:26657/status
```

### Latest Block Height on Heimdall

To check the latest block height on Heimdall, run:

```bash
curl localhost:26657/status
```

### Latest Block Height on Bor

To check the latest block height on Bor, use:

```bash
curl http://<your ip>:8545 -X POST -H "Content-Type: application/json" -d '{"jsonrpc":"2.0", "id":1, "method":"bor_getSigners", "params":["0x98b3ea"]}'
```

### Cleanup: Deleting Remnants of Heimdall and Bor

**For Linux package:**

```bash
sudo dpkg -i matic-bor
sudo rm -rf /etc/bor
```

**For Binaries:**

```bash
sudo rm -rf /etc/bor
sudo rm /etc/heimdall
```

### Terminate Bor Process

**For Linux:**

```bash
ps -aux | grep bor
sudo kill -9 <PID>
```

**For Binaries:**

```bash
cd CS-2003/bor
bash stop.sh
```

### Retrieve Latest Peer Details

To retrieve the latest peer details, run:

```bash
bor attach bor.ipc
admin.peers.forEach(function(value){
    console.log(value.enode+',')
})
exit
```

### Stop Heimdall and Bor Services

**For Linux packages:**

```bash
sudo service heimdalld stop
sudo service bor stop
```

**For Binaries:**

```bash
pkill heimdalld
pkill heimdalld-bridge
cd CS-2001/bor
bash stop.sh
```

### Remove Heimdall and Bor Directories

**For Linux packages:**

```bash
sudo rm -rf /etc/heimdall/*
sudo rm -rf /etc/bor/*
```

**For Binaries:**

```bash
sudo rm -rf /var/lib/heimdalld/
sudo rm -rf /var/lib/bor
```
