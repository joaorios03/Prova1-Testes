import { ohce } from '../src/ohce';

describe('ohcetest', () => {
  test('tem que retornar o contrário da palavra quando a palavra não for um palíndromo.', () => {
    expect(ohce('palindromo')).toBe('omordnilap')
  })

  test('tem que retornar "Gostei da palavra!" quando a palavra for um palíndromo.', () => {
    expect(ohce('sonos')).toBe('Gostei da palavra!')
  })
})
