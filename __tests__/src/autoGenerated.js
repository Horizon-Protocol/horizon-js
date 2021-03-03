import * as hzn from '@horizon-protocol/smart-contract';
import { HorizonJs } from '../../src/index.node.js';
import ContractSettings from '../../src/contractSettings';
import { contracts } from '../../tools/abitojs';

const { SUPPORTED_NETWORKS } = ContractSettings;

describe('auto-generated contracts', () => {
  Object.entries(SUPPORTED_NETWORKS).forEach(([networkId, network]) => {
    describe(network, () => {
      let hznjs;
      beforeAll(() => {
        hznjs = new HorizonJs({ networkId });
      });

      Object.entries(contracts).forEach(([contract, settings]) => {
        describe(contract, () => {
          test(`${network} Should have correct address `, () => {
            () => {
              const targetContract =
                typeof settings === 'object' ? settings.target || contract : contract;

              expect(hznjs[contract].contract.address).toEqual(
                hzn.getTarget({ network, contract: targetContract }).address
              );
            };
          });

          test(`${network} Should have correct ABI`, () => {
            () => {
              const source = typeof settings === 'object' ? settings.source || contract : contract;

              expect(hznjs[contract].contract.interface.abi).toEqual(
                hzn.getSource({ network, contract: source }).abi
              );
            };
          });
        });
      });
    });
  });
});
