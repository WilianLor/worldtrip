import { createContext, ReactNode, useContext, useState } from "react";

interface City {
  name: string;
  image: string;
}

export interface Country {
  name: string;
  flag: string;
  dc: City;
}

export interface Continent {
  name: string;
  image: string;
  pageImage: string;
  description: string;
  text: string;
  numberOfCountries: number;
  numberOfLanguages: number;
  numberOfCities: number;
  countries: Country[];
}

interface ContinentContextProviderProps {
  children: ReactNode;
}

const initialState = [
  {
    name: "Europa",
    pageImage: "banners/europePage.png",
    image: "banners/europe.png",
    description: "Continente mais antigo.",
    text: "A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste",
    numberOfCities: 27,
    numberOfCountries: 50,
    numberOfLanguages: 60,
    countries: [
      {
        name: "Reino Unido",
        flag: "countries/uk.png",
        dc: {
          name: "Londres",
          image: "cities/london.png",
        },
      },
      {
        name: "França",
        flag: "countries/french.png",
        dc: {
          name: "Paris",
          image: "cities/paris.png",
        },
      },
      {
        name: "Itália",
        flag: "countries/italy.png",
        dc: {
          name: "Roma",
          image: "cities/rome.png",
        },
      },
      {
        name: "República Tcheca",
        flag: "countries/czechia.png",
        dc: {
          name: "Praga",
          image: "cities/prague.png",
        },
      },
      {
        name: "Holanda",
        flag: "countries/netherlands.png",
        dc: {
          name: "Amsterdã",
          image: "cities/amsterdam.png",
        },
      },
    ],
  },
  {
    name: "Europa",
    pageImage: "banners/europePage.png",
    image: "banners/europe.png",
    description: "Continente mais antigo.",
    text: "A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste",
    numberOfCities: 27,
    numberOfCountries: 50,
    numberOfLanguages: 60,
    countries: [
      {
        name: "Reino Unido",
        flag: "countries/uk.png",
        dc: {
          name: "Londres",
          image: "cities/london.png",
        },
      },
      {
        name: "França",
        flag: "countries/french.png",
        dc: {
          name: "Paris",
          image: "cities/paris.png",
        },
      },
      {
        name: "Itália",
        flag: "countries/italy.png",
        dc: {
          name: "Roma",
          image: "cities/rome.png",
        },
      },
      {
        name: "República Tcheca",
        flag: "countries/czechia.png",
        dc: {
          name: "Praga",
          image: "cities/prague.png",
        },
      },
      {
        name: "Holanda",
        flag: "countries/netherlands.png",
        dc: {
          name: "Amsterdã",
          image: "cities/amsterdam.png",
        },
      },
    ],
  },
  {
    name: "Europa",
    pageImage: "banners/europePage.png",
    image: "banners/europe.png",
    description: "Continente mais antigo.",
    text: "A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste",
    numberOfCities: 27,
    numberOfCountries: 50,
    numberOfLanguages: 60,
    countries: [
      {
        name: "Reino Unido",
        flag: "countries/uk.png",
        dc: {
          name: "Londres",
          image: "cities/london.png",
        },
      },
      {
        name: "França",
        flag: "countries/french.png",
        dc: {
          name: "Paris",
          image: "cities/paris.png",
        },
      },
      {
        name: "Itália",
        flag: "countries/italy.png",
        dc: {
          name: "Roma",
          image: "cities/rome.png",
        },
      },
      {
        name: "República Tcheca",
        flag: "countries/czechia.png",
        dc: {
          name: "Praga",
          image: "cities/prague.png",
        },
      },
      {
        name: "Holanda",
        flag: "countries/netherlands.png",
        dc: {
          name: "Amsterdã",
          image: "cities/amsterdam.png",
        },
      },
    ],
  },
];

const ContinentContext = createContext<Continent[]>(initialState);

export const ContinentContextProvider = ({
  children,
}: ContinentContextProviderProps) => {
  const [continents] = useState<Continent[]>(initialState);

  return (
    <ContinentContext.Provider value={continents}>
      {children}
    </ContinentContext.Provider>
  );
};

export const useContinents = () => useContext(ContinentContext);
