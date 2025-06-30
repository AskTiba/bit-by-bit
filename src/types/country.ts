export interface Country {
  alpha3Code: string;
  name: string;
  nativeName: string;
  flags: {
    png: string;
    svg: string;
  };
  population: number;
  region: string;
  subregion: string;
  capital: string;
  topLevelDomain: string[];
  languages: {
    name: string;
  }[];
  currencies: {
    name: string;
    symbol: string;
  }[];
  borders?: string[];
}
