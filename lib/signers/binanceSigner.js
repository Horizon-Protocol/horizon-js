import { providers } from 'ethers';

const MetamaskSigner = () => {
  const { BinanceChain } = window;
  const provider = new providers.Web3Provider(BinanceChain);
  const signer = provider.getSigner();
  signer.getNextAddresses = () => new Promise(resolve => resolve(BinanceChain.enable()));
  return signer;
};

export default BinanceSigner;
