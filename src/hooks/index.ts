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

type Component = {
  family: Family;
  level: 0 | 1 | 2 | 3;
  count: number;
}

type ArtifactLevel = {
  prefix: string;
  effectPrefix: string[];
  components: Component[];
}

type IngredientLevel = {
  prefix: string;
  components: Component[];
}

export type Ingredient = {
  name: string;
  family: Family;
  type: Type.INGREDIENT;
  levels: IngredientLevel[];
}

export type Artifact = {
  name: string;
  family: Family;
  type: Type.ARTIFACT;
  effect: string;
  levels: ArtifactLevel[];
}

const artifacts: (Artifact | Ingredient)[] = [
  {
    name: "Aurelian Brooch",
    family: Family.AURELIAN_BROOCH,
    type: Type.ARTIFACT,
    effect: 'drone rewards',
    levels: [{
      prefix: 'Plain',
      effectPrefix: ['+10%'],
      components: [],
    }, {
      prefix: '',
      effectPrefix: ['+25%', '+??%', '+??%', '+??%'],
      components: [{
        family: Family.AURELIAN_BROOCH,
        level: 0,
        count: 5,
      }],
    }, {
      prefix: 'Jeweled',
      effectPrefix: ['+50%', '+??%', '+??%', '+??%'],
      components: [{
        family: Family.AURELIAN_BROOCH,
        level: 1,
        count: 7,
      }, {
        family: Family.DEMETERS_NECKLACE,
        level: 2,
        count: 2,
      }],
    }, {
      prefix: 'Eggceptional',
      effectPrefix: ['2x', '?x', '?x', '?x'],
      components: [],
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
    effect: "internal hatchery rate",
    levels: [{
      prefix: 'Plain',
      effectPrefix: ['+5%', '+??%', '+??%', '+??%'],
      components: [],
    }, {
      prefix: 'Polished',
      effectPrefix: ['+10%', '+??%', '+??%', '+??%'],
      components: [],
    }, {
      prefix: 'Jeweled',
      effectPrefix: ['+20%', '+??%', '+??%', '+??%'],
      components: [],
    }, {
      prefix: 'Eggceptional',
      effectPrefix: ['+??%', '+??%', '+??%', '+??%'],
      components: [],
    }],
  },
  {
    name: "Demeter's Necklace",
    family: Family.DEMETERS_NECKLACE,
    type: Type.ARTIFACT,
    effect: "egg value",
    levels: [{
      prefix: 'Simple',
      effectPrefix: ['+10%'],
      components: [],
    }, {
      prefix: 'Jeweled',
      effectPrefix: ['+25%', '+??%', '+??%', '+??%'],
      components: [{
        family: Family.DEMETERS_NECKLACE,
        level: 0,
        count: 3,
      }],
    }, {
      prefix: 'Pristine',
      effectPrefix: ['+50%'],
      components: [{
        family: Family.DEMETERS_NECKLACE,
        level: 1,
        count: 5,
      }, {
        family: Family.CHALICE,
        level: 0,
        count: 2,
      }]
    },
    {
      prefix: 'Beggspoke',
      effectPrefix: [],
      components: [{
        family: Family.DEMETERS_NECKLACE,
        level: 2,
        count: 6,
      }, {
        family: Family.GOLD_METEORITE,
        level: 2,
        count: 1,
      }]
    }]
  },
  {
    name: 'Gold Meteorite',
    family: Family.GOLD_METEORITE,
    type: Type.INGREDIENT,
    levels: [{
      prefix: 'Tiny',
      components: [],
    }, {
      prefix: 'Enriched',
      components: [{
        family: Family.GOLD_METEORITE,
        level: 0,
        count: 9,
      }]
    }, {
      prefix: 'Solid',
      components: [{
        family: Family.GOLD_METEORITE,
        level: 1,
        count: 11,
      }]
    }],
  }
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
