import { stringCalculator } from '../src/string-calculator';

describe('string-calculatortest', () => {
  test('tem que retornar a soma dos números passados por parâmetro, separados por vírgula.', () => {
    expect(stringCalculator("7,134,937")).toBe(1078)
  })
  
  test('tem que retornar a soma dos números passados por parâmetro, separados por vírgula, ignorando valores maiores que 1000.', () => {
    expect(stringCalculator("3,22,89,1001")).toBe(114)
    expect(stringCalculator("9,99,999,1000")).toBe(2107)
  })

  test('tem que retornar uma exceção quando for passado algum número negativo.', () => {
    expect(() => stringCalculator("9,-99,10")).toThrow('A função não suporta números negativos.')
  })
})
 