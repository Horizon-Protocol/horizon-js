import { utils, providers } from 'ethers';

import HorizonJsBase from './HorizonJsBase';
import PrivateKey from '../lib/signers/privateKeySigner';

const signers = {
  PrivateKey,
};

export class HorizonJs extends HorizonJsBase {
  /**
   * Creates instances of Synthetix contracts based on ContractSettings.
   * Usage example:
   * const {HorizonJs} = require('HorizonJs');
   * const hznjs = new HorizonJs(); //uses default ContractSettings - ethers.js default provider, mainnet
   * const totalSupply = await hznjs.Synthetix.totalSupply();
   * @constructor
   * @param contractSettings {ContractSettings}
   */
  constructor(contractSettings) {
    super(contractSettings, signers);
  }
}

HorizonJs.signers = signers;
HorizonJs.utils = utils; // shortcut to ethers utils without having to create instance
HorizonJs.providers = providers;
