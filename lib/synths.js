const TESTNET_SYNTHS = [
  {
    asset: 'USD',
    category: 'forex',
    sign: '$',
    description: 'US Dollars',
    name: 'zUSD',
    subclass: 'MultiCollateralSynth',
  },
  {
    asset: 'BNB',
    category: 'crypto',
    sign: '',
    description: 'Binance Coin',
    name: 'zBNB',
    subclass: 'MultiCollateralSynth',
  },
];

export default {
  97: TESTNET_SYNTHS,
};
