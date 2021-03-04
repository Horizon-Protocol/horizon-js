import ContractSettings from '../../src/contractSettings';
import abis from '../../lib/abis';
import * as hzn from '@horizon-protocol/smart-contract';

const { SUPPORTED_NETWORKS } = ContractSettings;
describe('lib/abis', () => {
  Object.values(SUPPORTED_NETWORKS).forEach(network => {
    test(`${network} all found ABIs exist in HZN package`, () => {
      Object.entries(abis[network]).forEach(([contract, abiEntry]) => {
        expect(abiEntry).toEqual(hzn.getSource({ network, contract }).abi);
      });
    });
  });
});
