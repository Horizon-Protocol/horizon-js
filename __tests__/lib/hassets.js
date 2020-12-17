import ContractSettings from '../../src/contractSettings';
import synths from '../../lib/synths';
import * as hzn from '@phoenix-global/horizon';

const { SUPPORTED_NETWORKS } = ContractSettings;

describe('lib/synths', () => {
  Object.entries(SUPPORTED_NETWORKS).forEach(([networkId, network]) => {
    test(`${network} has same synths and those in HZN package`, () => {
      expect(synths[networkId]).toEqual(hzn.getSynths({ network }));
    });
  });
});
