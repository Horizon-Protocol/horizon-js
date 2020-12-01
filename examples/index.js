'use strict';

const { HorizonJs } = require('../dist/main.node.js');

(async function() {
  const hznjs = new HorizonJs(); //uses default ContractSettings - ethers.js default provider, mainnet
  const snxPrice = hznjs.utils.formatEther(await hznjs.utils.getSynthetixPrice());
  console.log('-------------------');
  console.log(`SNX price: ${snxPrice}`);
  console.log('-------------------');
  console.log('SYNTH SUPPLY');
  console.log('-------------------');
  const { synths } = hznjs.contractSettings;

  synths.forEach(async ({ name, sign, desc }) => {
    const totalAmount = await hznjs[name].totalSupply();
    const totalSupply = hznjs.utils.formatEther(totalAmount);
    console.log(`${desc} (${name}) ${sign}${totalSupply}`);
  });
})();
