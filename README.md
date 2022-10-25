# Millicash

<p align="center">
  <img src="https://uploads-ssl.webflow.com/61f2b42cef142e379bd3bf28/61f2c0511dbfcf69c023e910_Millicent-Logo.png" />
</p>

## Summary

Millicash is a new way to define regulatory compliant banking system. Millicash includes Know Your Customer (KYC), Anti-Money Laundering (AML), Financial Action Task Force (FATF) travel rules, and identity management.

## Installation

Before installing Millicash, you need to install `ignite` for building the chain daemon. You can install ignite easily with this command:

### Installing Ignite

```bash
sudo curl https://get.ignite.com/cli! | sudo bash
```

If you have any trouble with installing Ignite, please have a look at the official installation page [here](https://docs.ignite.com/guide/install).

### Cloning the repo

After you installed Ignite, now you clone this repo using `git`:

```bash
git clone https://github.com/amedumer/millicashchain.git && cd millicashchain
```

## Building

Now you are ready to build the daemon:

```bash
ignite chain build
```

Open a new terminal tab and close the old one. Now you should be able to run `millicashd`.

> WARNING: If you can run the daemon, ignore this. In default, Ignite will create the daemon for you in the `$GOROOT/bin` path. So, now if you are not able to run `millicashd`, first have a look at that directory (you can learn your `$GOROOT` with the `go env` command). If you have the daemon in the directory, this means there is a problem with your go paths. You can check [this](https://go.dev/doc/install) link for more information.

If you run the `millicashd` command, you'll receive this output:

```text
Stargate CosmosHub App

Usage:
  millicash [command]

Available Commands:
  add-genesis-account Add a genesis account to genesis.json
  collect-gentxs      Collect genesis txs and output a genesis.json file
  config              Create or query an application CLI configuration file
  debug               Tool for helping with debugging your application
  export              Export state to JSON
  gentx               Generate a genesis tx carrying a self delegation
  help                Help about any command
  init                Initialize private validator, p2p, genesis, and application configuration files
  keys                Manage your application's keys
  migrate             Migrate genesis to a specified target version
  query               Querying subcommands
  rollback            rollback cosmos-sdk and tendermint state by one height
  rosetta             spin up a rosetta server
  start               Run the full node
  status              Query remote node for status
  tendermint          Tendermint subcommands
  tx                  Transactions subcommands
  validate-genesis    validates the genesis file at the default location or at the location passed as an arg
  version             Print the application binary version information

Flags:
  -h, --help                help for millicash
      --home string         directory for config and data (default "/Users/YOUR_USER_NAME/.millicash")
      --log_format string   The logging format (json|plain) (default "plain")
      --log_level string    The logging level (trace|debug|info|warn|error|fatal|panic) (default "info")
      --trace               print out full stack trace on errors

Use "millicash [command] --help" for more information about a command.
```

If you get this output, congratulations 🎉! You have successfully built the Millicash.

## Setting up the chain

You can also watch the guide to getting started from [here](https://youtu.be/jFZEB3KuJe8)

We will explain in more details about scripts in the next section, but if you want, you can start the Millicash chain with only two commands:

Open a terminal screen and run this:

```bash
./scripts/demo/01_simulateGenesis.sh
```

> NOTE: If you get any pop-up from keychain (or your keyring) with a message "millicashd wants to use your confidential information stored in '' in you keychain.", please enter your password. This is because, we are creating wallets for you in your OS' keyring.

This will start a chain for you. Now as you can see our logs displayed in this screen. Open a new terminal and run this command to set everything (creating dids, vcs, etc.):

```bash
./scripts/demo/fullScript.sh
```

This will take some time (approximately 1-2 min.).

## A little bit configuration

Now your chain is ready! But, if you are planning to use our front-end too, you need set two things.

Close the running script `./scripts/demo/01_simulateGenesis.sh` with `CTRL + C` and do these:

First, open the RPC feature in `$HOME/.millicash/config/app.toml`. Change the line 112 from:

```toml
enable = false
```

to

```toml
enable = true
```

Secondly, you need to enable CORS in `$HOME/.millicash/config/config.toml`. Change the line 96 from:

```toml
cors_allowed_origins = []
```

to

```toml
cors_allowed_origins = ["*"]
```

After saving these you'll be able to connect to the your local blockchain with your local front-end.

Now you can start your chain with `millicashd start`.

> NOTE: If you start the chain with `./scripts/demo/01_simulateGenesis.sh`, and press `y` to `Genesis file exist, would you like to delete it? (y/n)`, you'll need to do these configurations again. Because, the script will override those configuration files.

## Scripts

We have 7 scripts to explain to you. Let's start the ones that you already saw.

### fullScript

This script basically runs scripts from 2 to 6 sequantially.

### 01_simulateGenesis

This script initialize the chain and wallets. It'll create 11 wallet for you:

- validator
- ukregulator
- usregulator
- lloyds
- barclays
- hsbc
- jpmorgan
- bob
- alice
- charlie
- dora

If you want to add any of these wallets to your web wallet, you can use this command to get the private key of the wallet:

```text
millicashd keys export [WALLET_NAME] --unarmored-hex --unsafe
```

For example if you want to get the private key for `ukregulator`, you can use:

```text
millicashd keys export ukregulator --unarmored-hex --unsafe
```

This script also gives `100,000 milli` coin to each wallet, except for the validator which will get `1,000,000,000 milli` coin.

After setting everything, script finally starts the chain.

### 02_createDids

This script creates DID documents for every wallet except for validator.

### 03_verifiableCredentials

This script:

- Creates Regulator VC (makes regulator) for `ukregulator`.
- Creates Regulator VC (makes regulator) for `usregulator`.

- Creates Registration VC (registers to the regulator) for `barclays` from `ukregulator`.
- Creates Registration VC (registers to the regulator) for `lloyds` from `ukregulator`.
- Creates Registration VC (registers to the regulator) for `hsbc` from `ukregulator`.
- Creates Registration VC (registers to the regulator) for `jpmorgan` from `usregulator`.

- Creates License VC (gives licenses for a specific currency, `sGBP`) for `barclays` from `ukregulator`.
- Creates License VC (gives licenses for a specific currency, `sGBP`) for `lloyds` from `ukregulator`.
- Creates License VC (gives licenses for a specific currency, `sGBP`) for `hsbc` from `ukregulator`.
- Creates License VC (gives licenses for a specific currency, `sUSD`) for `jpmorgan` from `usregulator`.

### 04_issuer

This script creates issuers for bank wallets and:

- Mint `sGBP` tokens for `barclays` using `did:millicent:net:millicash:barclays-gbplicense-credential` VC.
- Mint `sGBP` tokens for `lloyds` using `did:millicent:net:millicash:lloyds-gbplicense-credential` VC.
- Mint `sGBP` tokens for `hsbc` using `did:millicent:net:millicash:hsbc-gbplicense-credential` VC.
- Mint `sGBP` tokens for `jpmorgan` using `did:millicent:net:millicash:jpmorgan-dollarlicense-credential` VC.

### 05_userRegistration

This script creates users for banks:

- `barclays` registers user `alice`
- `lloyds` registers user `bob`
- `hsbc` registers user `charlie`
- `jpmorgan` registers user `dora`

### 06_sendFunds

This scripts sends money between users:

- `barclays` sends `10 sGBP` to `alice`
- `lloyds` sends `25 sGBP` to `bob`
- `hsbc` sends `35 sGBP` to `charlie`
- `charlie` sends `5 sGBP` to `alice`
- `bob` sends `10 sGBP` to `alice`
