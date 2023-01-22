import { CurrenciesServices } from './CurrenciesServices';

const convertCurrencies = CurrenciesServices.convertCurrencies;

jest.mock('../libs/axios.ts', () => ({
  apiClient: () => jest.fn().mockReturnValue({ data: 'test' }),
}));

describe('CurrenciesServices test', () => {
  it('Test convertCurrencies', () => {
    expect(convertCurrencies).toBe('test');
  });
});
