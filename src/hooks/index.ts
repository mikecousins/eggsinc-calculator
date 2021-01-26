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
    levels: [{
      prefix: 'Dull',
      effectPrefix: [],
      components: [],
    }, {
      prefix: '',
      effectPrefix: [],
      components: [],
    }, {
      prefix: 'Jeweled',
      effectPrefix: [],
      components: [],
    }, {
      prefix: 'Glistening',
      effectPrefix: [],
      components: [],
    }],
  },
  {
    name: 'Book of Basan',
    family: Family.BOOK_OF_BASAN,
    type: Type.ARTIFACT,
    effect: 'bonus per Egg of Prophecy',
    levels: [{
      prefix: '',
      effectPrefix: [],
      components: [],
    }, {
      prefix: 'Collectors',
      effectPrefix: [],
      components: [],
    }, {
      prefix: 'Fortified',
      effectPrefix: [],
      components: [],
    }, {
      prefix: 'Gilded',
      effectPrefix: [],
      components: [],
    }],
  },
  {
    name: "Carved Rainstick",
    family: Family.CARVED_RAINSTICK,
    type: Type.ARTIFACT,
    effect: "+20% chance of gold in gifts and drones",
    levels: [{
      prefix: 'Simple',
      effectPrefix: [],
      components: [],
    }, {
      prefix: '',
      effectPrefix: [],
      components: [],
    }, {
      prefix: 'Ornate',
      effectPrefix: [],
      components: [],
    }, {
      prefix: 'Meggnificent',
      effectPrefix: [],
      components: [],
    }],
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
    name: "Dilithium Monocle",
    family: Family.DILITHIUM_MONOCLE,
    type: Type.ARTIFACT,
    effect: "boost effectiveness",
    levels: [{
      prefix: '',
      effectPrefix: [],
      components: [],
    }, {
      prefix: 'Precise',
      effectPrefix: [],
      components: [],
    }, {
      prefix: 'Eggsacting',
      effectPrefix: [],
      components: [],
    }, {
      prefix: 'Flawless',
      effectPrefix: [],
      components: [],
    }],
  },
  {
    name: "Gusset",
    family: Family.GUSSET,
    type: Type.ARTIFACT,
    effect: "habitat capacity",
    levels: [{
      prefix: 'Plain',
      effectPrefix: [],
      components: [],
    }, {
      prefix: 'Ornate',
      effectPrefix: [],
      components: [],
    }, {
      prefix: 'Distegguished',
      effectPrefix: [],
      components: [],
    }, {
      prefix: 'Jeweled',
      effectPrefix: [],
      components: [],
    }],
  },
  {
    name: "Interstellar Compass",
    family: Family.INTERSTELLAR_COMPASS,
    type: Type.ARTIFACT,
    effect: "shipping rate",
    levels: [{
      prefix: 'Miscalibrated',
      effectPrefix: [],
      components: [],
    }, {
      prefix: '',
      effectPrefix: [],
      components: [],
    }, {
      prefix: 'Precise',
      effectPrefix: [],
      components: [],
    }, {
      prefix: 'Clairvoyant',
      effectPrefix: [],
      components: [],
    }],
  },
  {
    name: "Light of Eggendel",
    family: Family.LIGHT_OF_EGGENDEL,
    type: Type.ARTIFACT,
    effect: "enlightenment egg value",
    levels: [{
      prefix: 'Dim',
      effectPrefix: [],
      components: [],
    }, {
      prefix: 'Shimmering',
      effectPrefix: [],
      components: [],
    }, {
      prefix: 'Glowing',
      effectPrefix: [],
      components: [],
    }, {
      prefix: 'Brilliant',
      effectPrefix: [],
      components: [],
    }],
  },
  {
    name: "Lunar Totem",
    family: Family.LUNAR_TOTEM,
    type: Type.ARTIFACT,
    effect: "away earnings",
    levels: [{
      prefix: 'Basic',
      effectPrefix: [],
      components: [],
    }, {
      prefix: '',
      effectPrefix: [],
      components: [],
    }, {
      prefix: 'Powerful',
      effectPrefix: [],
      components: [],
    }, {
      prefix: 'Eggceptional',
      effectPrefix: [],
      components: [],
    }],
  },
  {
    name: "Mercury's Lens",
    family: Family.MERCURYS_LENS,
    type: Type.ARTIFACT,
    effect: "farm value",
    levels: [{
      prefix: 'Misaligned',
      effectPrefix: [],
      components: [],
    }, {
      prefix: '',
      effectPrefix: [],
      components: [],
    }, {
      prefix: 'Precise',
      effectPrefix: [],
      components: [],
    }, {
      prefix: 'Meggnificent',
      effectPrefix: [],
      components: [],
    }],
  },
  {
    name: "Neodymium Medallion",
    family: Family.NEODYMIUM_MEDALLION,
    type: Type.ARTIFACT,
    effect: "drone frequency",
    levels: [{
      prefix: 'Weak',
      effectPrefix: [],
      components: [],
    }, {
      prefix: '',
      effectPrefix: [],
      components: [],
    }, {
      prefix: 'Precise',
      effectPrefix: [],
      components: [],
    }, {
      prefix: 'Eggceptional',
      effectPrefix: [],
      components: [],
    }],
  },
  {
    name: "Phoenix Feather",
    family: Family.PHOENIX_FEATHER,
    type: Type.ARTIFACT,
    effect: "soul egg collection rate",
    levels: [{
      prefix: 'Tattered',
      effectPrefix: [],
      components: [],
    }, {
      prefix: '',
      effectPrefix: [],
      components: [],
    }, {
      prefix: 'Brilliant',
      effectPrefix: [],
      components: [],
    }, {
      prefix: 'Blazing',
      effectPrefix: [],
      components: [],
    }],
  },
  {
    name: "Puzzle Cube",
    family: Family.PUZZLE_CUBE,
    type: Type.ARTIFACT,
    effect: "research cost",
    levels: [{
      prefix: 'Ancient',
      effectPrefix: [],
      components: [],
    }, {
      prefix: '',
      effectPrefix: [],
      components: [],
    }, {
      prefix: 'Mystical',
      effectPrefix: [],
      components: [],
    }, {
      prefix: 'Unsolvable',
      effectPrefix: [],
      components: [],
    }],
  },
  {
    name: "Quantum Metronome",
    family: Family.QUANTUM_METRONOME,
    type: Type.ARTIFACT,
    effect: "egg laying rate",
    levels: [{
      prefix: 'Misaligned',
      effectPrefix: [],
      components: [],
    }, {
      prefix: 'Adequate',
      effectPrefix: [],
      components: [],
    }, {
      prefix: 'Perfect',
      effectPrefix: [],
      components: [],
    }, {
      prefix: 'Reggference',
      effectPrefix: [],
      components: [],
    }],
  },
  {
    name: "Ship in a Bottle",
    family: Family.SHIP_IN_A_BOTTLE,
    type: Type.ARTIFACT,
    effect: "co-op teammates' earnings",
    levels: [{
      prefix: '',
      effectPrefix: [],
      components: [],
    }, {
      prefix: 'Detailed',
      effectPrefix: [],
      components: [],
    }, {
      prefix: 'Complex',
      effectPrefix: [],
      components: [],
    }, {
      prefix: 'Eggquisite',
      effectPrefix: [],
      components: [],
    }],
  },
  {
    name: "Tachyon Deflector",
    family: Family.TACHYON_DEFLECTOR,
    type: Type.ARTIFACT,
    effect: "co-op teammates' egg laying rate",
    levels: [{
      prefix: 'Weak',
      effectPrefix: [],
      components: [],
    }, {
      prefix: '',
      effectPrefix: [],
      components: [],
    }, {
      prefix: 'Robust',
      effectPrefix: [],
      components: [],
    }, {
      prefix: 'Eggceptional',
      effectPrefix: [],
      components: [],
    }],
  },
  {
    name: "Titanium Actuator",
    family: Family.TITANIUM_ACTUATOR,
    type: Type.ARTIFACT,
    effect: "hold to hatch rate",
    levels: [{
      prefix: 'Inconsistent',
      effectPrefix: [],
      components: [],
    }, {
      prefix: '',
      effectPrefix: [],
      components: [],
    }, {
      prefix: 'Precise',
      effectPrefix: [],
      components: [],
    }, {
      prefix: 'Reggference',
      effectPrefix: [],
      components: [],
    }],
  },
  {
    name: "Tungsten Ankh",
    family: Family.TUNGSTEN_ANKH,
    type: Type.ARTIFACT,
    effect: "egg value",
    levels: [{
      prefix: 'Crude',
      effectPrefix: [],
      components: [],
    }, {
      prefix: '',
      effectPrefix: [],
      components: [],
    }, {
      prefix: 'Polished',
      effectPrefix: [],
      components: [],
    }, {
      prefix: 'Brilliant',
      effectPrefix: [],
      components: [],
    }],
  },
  {
    name: "Vial of Martian Dust",
    family: Family.VIAL_OF_MARTIAN_DUST,
    type: Type.ARTIFACT,
    effect: "max running chicken bonus",
    levels: [{
      prefix: 'Tiny',
      effectPrefix: [],
      components: [],
    }, {
      prefix: '',
      effectPrefix: [],
      components: [],
    }, {
      prefix: 'Hermetic',
      effectPrefix: [],
      components: [],
    }, {
      prefix: 'Prime',
      effectPrefix: [],
      components: [],
    }],
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
