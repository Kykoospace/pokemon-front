export interface Pokemon {
  id: number;
  name: string;
  life: number;
  sprites: {
    back_default: string;
    front_default: string;
  };
  stats: Stat[];
  color: string;
}

interface Stat {
  base_stat: number;
  effort: number;
  stat: {
    name: string,
    url: string
  };
}
