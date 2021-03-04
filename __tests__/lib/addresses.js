import ContractSettings from '../../src/contractSettings';
import addresses from '../../lib/addresses';
import * as hzn from '@horizon-protocol/smart-contract';

const { SUPPORTED_NETWORKS } = ContractSettings;

describe('lib/addresses', () => {
  Object.entries(SUPPORTED_NETWORKS).forEach(([networkId, network]) => {
    test(`${network} has same addresses and those in HZN package`, () => {
      Object.entries(addresses[networkId]).forEach(([contract, address]) => {
        expect(address).toEqual(hzn.getTarget({ network, contract }).address);
      });
    });
  });
});
