import { HorizonJs } from '../../../src/index.node.js';
import ContractSettings from '../../../src/contractSettings';
import * as hzn from '@horizon-protocol/smart-contract';

const { SUPPORTED_NETWORKS } = ContractSettings;

const contract = 'Synth';

describe(`src/contracts/${contract}`, () => {
  Object.entries(SUPPORTED_NETWORKS).forEach(([networkId, network]) => {
    let hznjs;
    beforeAll(() => {
      hznjs = new HorizonJs({ networkId });
    });

    ['zUSD', 'zBTC', 'iBTC', 'zAUD'].forEach(synth => {
      describe(synth, () => {
        test(`${network} Should have correct addres`, () => {
          () => {
            expect(hznjs[synth].contract.address).toEqual(
              hzn.getTarget({ network, contract: `Proxy${synth}` }).address
            );
          };
        });

        test(`${network} Should have correct ABI`, () => {
          () => {
            expect(hznjs[synth].contract.interface.abi).toEqual(
              hzn.getSource({ network, contract }).abi
            );
          };
        });
      });
    });
  });
});
