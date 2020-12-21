import { utils } from 'ethers';

import HorizonJsBase from './HorizonJsBase';
import Binance from '../lib/signers/binanceSigner';
import Metamask from '../lib/signers/metamaskSigner';
// import Trezor from '../lib/signers/trezorSigner';
// import Ledger from '../lib/signers/ledgerSigner';
// import Coinbase from '../lib/signers/coinbaseSigner';
// import PrivateKey from '../lib/signers/privateKeySigner';
// import WalletConnect from '../lib/signers/walletConnectSigner';
// import Portis from '../lib/signers/portisSigner';

const signers = {
  Binance,
  Metamask,
  // Trezor,
  // Ledger,
  // PrivateKey,
  // Coinbase,
  // WalletConnect,
  // Portis,
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
