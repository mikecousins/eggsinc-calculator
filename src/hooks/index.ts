export enum Type {
  ARTIFACT = 'Artifact',
  STONE = 'Stone',
  INGREDIENT = 'Ingredient',
}

export enum Family {
  AURELIAN_BROOCH,
  BEAK_OF_MIDAS,
  BOOK_OF_BASAN,
  CARVED_RAINSTICK,
  CHALICE,
  DEMETERS_NECKLACE,
  DILITHIUM_MONOCLE,
  GUSSET,
  INTERSTELLAR_COMPASS,
  LIGHT_OF_EGGENDEL,
  LUNAR_TOTEM,
  MERCURYS_LENS,
  NEODYMIUM_MEDALLION,
  PHOENIX_FEATHER,
  PUZZLE_CUBE,
  QUANTUM_METRONOME,
  SHIP_IN_A_BOTTLE,
  TACHYON_DEFLECTOR,
  TITANIUM_ACTUATOR,
  TUNGSTEN_ANKH,
  VIAL_OF_MARTIAN_DUST,
  GOLD_METEORITE,
  TAU_CETI_GEODE,
}

type Ingredient = {
  family: Family;
  level: 0 | 1 | 2 | 3;
  count: number;
}

type Level = {
  prefix: string;
  effectPrefix: string[];
  ingredients: Ingredient[];
}

export type Artifact = {
  name: string;
  family: Family;
  type: Type;
  effect: string;
  levels: Level[];
}

const artifacts: Artifact[] = [
  {
    name: "Aurelian Brooch",
    family: Family.AURELIAN_BROOCH,
    type: Type.ARTIFACT,
    effect: 'drone rewards',
    levels: [{
      prefix: 'Plain',
      effectPrefix: ['+10%'],
      ingredients: [],
    }, {
      prefix: '',
      effectPrefix: ['+25%', '+??%', '+??%', '+??%'],
      ingredients: [{
        family: Family.AURELIAN_BROOCH,
        level: 0,
        count: 5,
      }],
    }, {
      prefix: 'Jeweled',
      effectPrefix: ['+50%', '+??%', '+??%', '+??%'],
      ingredients: [],
    }, {
      prefix: 'Eggceptional',
      effectPrefix: ['2x', '?x', '?x', '?x'],
      ingredients: [],
    }],
  },
  {
    name: "Beak of Midas",
    family: Family.BEAK_OF_MIDAS,
    type: Type.ARTIFACT,
    effect: 'chance of gold in gifts and drones',
    levels: [],
  },
  {
    name: 'Book of Basan',
    family: Family.BOOK_OF_BASAN,
    type: Type.ARTIFACT,
    effect: 'bonus per Egg of Prophecy',
    levels: [],
  },
  {
    name: "Carved Rainstick",
    family: Family.CARVED_RAINSTICK,
    type: Type.ARTIFACT,
    effect: "+20% chance of gold in gifts and drones",
    levels: [],
  },
  {
    name: "Chalice",
    family: Family.CHALICE,
    type: Type.ARTIFACT,
    effect: "+20% chance of gold in gifts and drones",
    levels: [],
  },
  {
    name: "Demeter's Necklace",
    family: Family.DEMETERS_NECKLACE,
    type: Type.ARTIFACT,
    effect: "+20% chance of gold in gifts and drones",
    levels: [],
  },
];

export const useArtifactOptions = () => {
  const options: { name: string, path: string }[] = [];
  
  artifacts.forEach(artifact => {
    artifact.levels.forEach((level, index) => {
      options.push({
        name: `${level.prefix} ${artifact.name}`,
        path: `${artifact.family}/${index}`,
      })
    })
  });

  return options;
}

export const useArtifacts = () => {
  return artifacts;
}

export const useArtifact = (family: Family) => {
  return artifacts.find(artifact => artifact.family === family);
}
