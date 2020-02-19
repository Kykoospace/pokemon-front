export interface Pokemon {
  id: number;
  name: string;
  sprites: {
    back_default: string;
    front_default: string;
  };
  stats: Stat[];
}

interface Stat {
  base_stat: number;
  effort: number;
  stat: {
    name: string,
    url: string
  };
}
