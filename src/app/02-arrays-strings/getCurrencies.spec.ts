import {getCurrencies} from './getCurrencies';

describe('getCurrencies', () => {
    it('should check if 3 currencies are present', () => {
        expect(getCurrencies()).toEqual(['USD','GDP','EUR']);
    });
});