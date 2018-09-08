# <h1 align="center">:page_facing_up:EthCode</h1>

<p align="center">ethereum related examples</p>

## folders

### remix

code to run on [remix online ide](http://remix.ethereum.org)

#### run config

1. environment: JavaScript VM
2. deploy section
   1. enter an "initString" value
   2. expand dropdown
   3. click tansact (observe console)
3. deployed contracts section
   1. click getMessage to get the message value
   2. enter value "in quotes" to use setMessage

### inbox

code for inbox contract. using solc dependency in compile.js, inbox contract file is fetched and compiled. inbox is then saved into module.exports.

ganache, mocha used for writing test modules.

## reference links

- [gas cost estimations](https://docs.google.com/spreadsheets/d/1n6mRqkBz3iWcOlRem_mO09GtSKEKrAsfO7Frgx18pNU/edit) for gasPrice (amount willing to pay for operations for each gas unit) and gasLimit (limit of maount to be spent)
- 12 mnemonic word [converter](https://iancoleman.io/bip39/) to retrieve accounts
- [faucet](https://faucet.rinkeby.io/) for request test ether for rinkeby network
