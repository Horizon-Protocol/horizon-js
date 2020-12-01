'use strict';

const { HorizonJs } = require('../dist/main.node.js');

const { getDefaultProvider, Wallet } = require('ethers');
const wallet = Wallet.createRandom();
const hznjs = new HorizonJs({
  signer: new HorizonJs.signers.PrivateKey(getDefaultProvider('kovan'), 42, wallet.privateKey),
  networkId: 42, // kovan
});

(async function() {
  const totalSNX = await hznjs.Synthetix.totalSupply();
  const snxTotalSupply = hznjs.utils.formatEther(totalSNX);
  console.log('SNXTotalSupply on ', hznjs.contractSettings.network.toUpperCase(), snxTotalSupply);
  const synths = hznjs.contractSettings.synths.map(({ name }) => name).join(',');
  console.log('Supported synths: ', synths);
})();
