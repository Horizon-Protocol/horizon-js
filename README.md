# HorizonJs library

[![CircleCI](https://circleci.com/gh/Synthetixio/synthetix-js.svg?style=svg)](https://circleci.com/gh/Synthetixio/synthetix-js) [![npm version](https://badge.fury.io/js/synthetix-js.svg)](https://badge.fury.io/js/synthetix-js)
[![Discord](https://img.shields.io/discord/413890591840272394.svg?color=768AD4&label=discord&logo=https%3A%2F%2Fdiscordapp.com%2Fassets%2F8c9701b98ad4372b58f13fd9f65f966e.svg)](https://discordapp.com/channels/413890591840272394/)
[![Twitter Follow](https://img.shields.io/twitter/follow/synthetix_io.svg?label=synthetix_io&style=social)](https://twitter.com/synthetix_io)

The Horizon-JS Library provides a simple pre-packaged API to communicate with [Horizon](https://www.horizonprotocol.com/) on binance smart chain. You can use it to contribute to DeFi's growing horizon asset ecosystem.

This is particularly useful for hackathon teams to quickly `npm install @phoenix-global/horizon-js` and start building in just a few minutes.

Under the hood, HorizonJs uses [ethers.js](https://github.com/ethers-io/ethers.js/) library and its concept of [providers](https://docs.ethers.io/ethers.js/html/api-providers.html) and [transaction signers](https://docs.ethers.io/ethers.js/html/api-contract.html#custom-signer).

## Install via npm

`npm install @phoenix-global/horizon-js`

## Developer Docs

[developer.synthetix.io](https://developer.synthetix.io)

## Example for getting the total sUSD stablecoin in circulation

```javascript
const { HorizonJs } = require('@phoenix-global/horizon-js');
const hznjs = new HorizonJs(); //uses default ContractSettings - ethers.js default provider, mainnet
(async function() {
  const totalSUSD = await hznjs.sUSD.totalSupply();
  const totalSUSDSupply = hznjs.utils.formatEther(totalSUSD);
  console.log('sUSDTotalSupply', totalSUSDSupply);
})();
```

Default settings don't use any signer. That means that constants can be viewed from the contract but executing a transaction will fail.
To execute transactions, set up signer.

4 signers are included in the library - Metamask (compatible with Dapp browsers), Trezor, Ledger and PrivateKey.
Custom ethers.js compatible signers can be used too.

## Example using a metamask signer

```javascript
const { HorizonJs } = require('@phoenix-global/horizon-js');
const metaMaskSigner = new HorizonJs.signers.Metamask();
const hznjs = new HorizonJs({ signer: metaMaskSigner }); //uses Metamask signer and default infura.io provider on mainnet
```

## Example of minting stablecoin(sUSD) with private key signer

```javascript
const { HorizonJs } = require('@phoenix-global/horizon-js');
//parameters: default provider, default networkId, private key as a string
const signer = new HorizonJs.signers.PrivateKey(
  null,
  0,
  '0x0123456789012345678901234567890123456789012345678901234567890123'
);
const hznjs = new HorizonJs({ signer });

async function run() {
  const totalSupply = await hznjs.Synthetix.totalSupply();
  const snxTotalSupply = hznjs.utils.formatEther(totalSupply);
  console.log('snxTotalSupply', snxTotalSupply);

  //issue 100 synths (will throw if insufficient funds for gas)
  try {
    const txObj = await hznjs.Synthetix.issueSynths(hznjs.util.parseEther('100')); //execute transaction (requires gas)
    console.log('transaction hash', txObj.hash);
  } catch (e) {
    console.log(e);
  }
}

run();
```
