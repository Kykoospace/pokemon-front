
import {Battle} from './battle';

describe('Test battle logic', () => {
  const pock1 = {
    id: 1,
    name: 'pok1',
    life: 1,
    sprites: {
      back_default: '/path',
      front_default: 'path',
    },
    stats: [
      {
        base_stat: 5,
        effort: 1,
        stat: {
          name: 'speed',
          url: '/path',
        }
      },
    ]
  };
  const pock2 = {
    id: 1,
    name: 'pok1',
    life: 1,
    sprites: {
      back_default: '/path',
      front_default: 'path',
    },
    stats: [
      {
        base_stat: 3,
        effort: 1,
        stat: {
          name: 'speed',
          url: '/path',
        }
      },
    ]
  };

  const battle: Battle = new Battle(pock1, pock2);
  it('should return pok1 when speed pok1 > pok2 ', () => {
    expect(battle.whoShouldAttackFirst()).toBe(pock1);
  });

  it('should return pok1 when speed pok1 = pok2 ', () => {
    pock1.stats[0].base_stat = 4;
    pock2.stats[0].base_stat = 4;
    expect(battle.whoShouldAttackFirst()).toBe(pock1);
  });
});
