
import {Battle} from './battle';

describe('Test battle logic', () => {
  const pock1 = {
    id: 1,
    name: 'pok1',
    life: 10,
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
      {
        base_stat: 3,
        effort: 1,
        stat: {
          name: 'attack',
          url: '/path',
        }
      },
      {
        base_stat: 3,
        effort: 1,
        stat: {
          name: 'defense',
          url: '/path',
        }
      }
    ]
  };
  const pock2 = {
    id: 1,
    name: 'pok1',
    life: 10,
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
      {
        base_stat: 3,
        effort: 1,
        stat: {
          name: 'attack',
          url: '/path',
        }
      },
      {
        base_stat: 3,
        effort: 1,
        stat: {
          name: 'defense',
          url: '/path',
        }
      }
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

  it('Pock1 attack pock2 and pock 2 should lose life', () => {
      battle.attack(pock1, pock2);
      expect(pock2.life).toBe(8);
  });

  it('Pock2 attack pock 1 and pock should lose 2 life', () => {
    battle.attack(pock2, pock1);
    expect(pock1.life).toBe(8);
  });
});
