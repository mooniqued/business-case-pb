import FormatUtils from '../../src/utils/format.utils';

describe('FormatUtils', () => {
  test('format currency correctly', () => {
    expect(FormatUtils.formatToBRL(154)).toBe('154,00');
    expect(FormatUtils.formatToBRL(0)).toBe('0,00');
    expect(FormatUtils.formatToBRL(0.99)).toBe('0,99');
    expect(FormatUtils.formatToBRL(20145.15)).toBe('20.145,15');
    expect(FormatUtils.formatToBRL(1000000)).toBe('1.000.000,00');
  });
});
