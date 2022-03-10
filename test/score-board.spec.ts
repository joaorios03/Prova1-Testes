import { ScoreKeeper } from '../src/score-board';

var scorekeeper = new ScoreKeeper();

describe('string-calculatortest', () => {
  test('tem que retornar o placar da partida zerado.', () => {
    expect(scorekeeper.getScore()).toBe("000:000")
  })

  test('tem que retornar o placar da partida após somar 2 pontos no time A.', () => {
    scorekeeper.scoreTeamA2();
    expect(scorekeeper.getScore()).toBe("002:000")
  })

  test('tem que retornar o placar da partida após somar 1 pontos no time A.', () => {
    scorekeeper.scoreTeamA1();
    expect(scorekeeper.getScore()).toBe("003:000")
  })

  test('tem que retornar o placar da partida após somar 3 pontos no time A.', () => {
    scorekeeper.scoreTeamA3();
    expect(scorekeeper.getScore()).toBe("006:000")
  })

  test('tem que retornar o placar da partida após somar 3 pontos no time B.', () => {
    scorekeeper.scoreTeamB3();
    expect(scorekeeper.getScore()).toBe("006:003")
  })

  test('tem que retornar o placar da partida após somar 1 pontos no time B.', () => {
    scorekeeper.scoreTeamB1();
    expect(scorekeeper.getScore()).toBe("006:004")
  })

  test('tem que retornar o placar da partida após somar 2 pontos no time B.', () => {
    scorekeeper.scoreTeamB2();
    expect(scorekeeper.getScore()).toBe("006:006")
  })

})
