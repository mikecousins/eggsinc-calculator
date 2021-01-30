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
  SOLAR_TITANIUM,
  QUANTUM_STONE,
}

type Component = {
  family: Family;
  level: 0 | 1 | 2 | 3;
  count: number;
}

type IngredientLevel = {
  prefix: string;
  components: Component[];
  consumed: Component | undefined;
}

export type Ingredient = {
  name: string;
  family: Family;
  type: Type.INGREDIENT;
  levels: IngredientLevel[];
}

type ArtifactLevel = {
  prefix: string;
  effectPrefix: string[];
  components: Component[];
  consumed: Component | undefined;
}

export type Artifact = {
  name: string;
  family: Family;
  type: Type.ARTIFACT;
  effect: string;
  levels: ArtifactLevel[];
}

type StoneLevel = {
  prefix: string;
  effectPrefix: string;
  components: Component[];
  consumed: Component | undefined;
}

export type Stone = {
  name: string;
  family: Family;
  type: Type.STONE;
  effect: string;
  levels: StoneLevel[];
}

const artifacts: (Artifact | Ingredient | Stone)[] = [
  {
    name: "Aurelian Brooch",
    family: Family.AURELIAN_BROOCH,
    type: Type.ARTIFACT,
    effect: 'drone rewards',
    levels: [{
      prefix: 'Plain',
      effectPrefix: ['+10%'],
      components: [],
      consumed: undefined,
    }, {
      prefix: '',
      effectPrefix: ['+25%', '+??%', '+??%', '+??%'],
      components: [{
        family: Family.AURELIAN_BROOCH,
        level: 0,
        count: 5,
      }],
      consumed: {
        family: Family.QUANTUM_STONE,
        level: 0,
        count: 1,
      },
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
      consumed: undefined,
    }, {
      prefix: 'Eggceptional',
      effectPrefix: ['2x', '?x', '?x', '?x'],
      components: [],
      consumed: undefined,
    }],
  },
  {
    name: "Beak of Midas",
    family: Family.BEAK_OF_MIDAS,
    type: Type.ARTIFACT,
    effect: 'chance of gold in gifts and drones',
    levels: [{
      prefix: 'Dull',
      effectPrefix: ['+20%'],
      components: [],
      consumed: undefined,
    }, {
      prefix: '',
      effectPrefix: ['+50%'],
      components: [{
        family: Family.BEAK_OF_MIDAS,
        level: 0,
        count: 4,
      }],
      consumed: undefined,
    }, {
      prefix: 'Jeweled',
      effectPrefix: ['2x', '3x'],
      components: [{
        family: Family.BEAK_OF_MIDAS,
        level: 1,
        count: 5,
      }, {
        family: Family.TAU_CETI_GEODE,
        level: 1,
        count: 1,
      }],
      consumed: undefined,
    }, {
      prefix: 'Glistening',
      effectPrefix: ['5x'],
      components: [{
        family: Family.BEAK_OF_MIDAS,
        level: 2,
        count: 6,
      }, {
        family: Family.GOLD_METEORITE,
        level: 2,
        count: 3,
      }],
      consumed: undefined,
    }],
  },
  {
    name: 'Book of Basan',
    family: Family.BOOK_OF_BASAN,
    type: Type.ARTIFACT,
    effect: 'bonus per Egg of Prophecy',
    levels: [{
      prefix: '',
      effectPrefix: ['+0.25%'],
      components: [],
      consumed: undefined,
    }, {
      prefix: 'Collectors',
      effectPrefix: ['+0.5%'],
      components: [],
      consumed: undefined,
    }, {
      prefix: 'Fortified',
      effectPrefix: ['???'],
      components: [],
      consumed: undefined,
    }, {
      prefix: 'Gilded',
      effectPrefix: ['???'],
      components: [],
      consumed: undefined,
    }],
  },
  {
    name: "Carved Rainstick",
    family: Family.CARVED_RAINSTICK,
    type: Type.ARTIFACT,
    effect: "chance of cash in gifts and drones",
    levels: [{
      prefix: 'Simple',
      effectPrefix: ['+20%'],
      components: [],
      consumed: undefined,
    }, {
      prefix: '',
      effectPrefix: ['+50%'],
      components: [{
        family: Family.CARVED_RAINSTICK,
        level: 0,
        count: 5,
      }, {
        family: Family.GUSSET,
        level: 0,
        count: 1,
      }],
      consumed: undefined,
    }, {
      prefix: 'Ornate',
      effectPrefix: ['2x'],
      components: [{
        family: Family.CARVED_RAINSTICK,
        level: 1,
        count: 7,
      }, {
        family: Family.BEAK_OF_MIDAS,
        level: 2,
        count: 1,
      }],
      consumed: undefined,
    }, {
      prefix: 'Meggnificent',
      effectPrefix: ['???'],
      components: [],
      consumed: undefined,
    }],
  },
  {
    name: "Chalice",
    family: Family.CHALICE,
    type: Type.ARTIFACT,
    effect: "internal hatchery rate",
    levels: [{
      prefix: 'Plain',
      effectPrefix: ['+5%'],
      components: [],
      consumed: undefined,
    }, {
      prefix: 'Polished',
      effectPrefix: ['+10%', '+??%', '+??%', '+??%'],
      components: [{
        family: Family.CHALICE,
        level: 0,
        count: 4,
      }, {
        family: Family.GOLD_METEORITE,
        level: 1,
        count: 1,
      }],
      consumed: undefined,
    }, {
      prefix: 'Jeweled',
      effectPrefix: ['+20%', '+??%', '+??%', '+??%'],
      components: [{
        family: Family.CHALICE,
        level: 1,
        count: 6,
      }, {
        family: Family.TAU_CETI_GEODE,
        level: 1,
        count: 4,
      }],
      consumed: undefined,
    }, {
      prefix: 'Eggceptional',
      effectPrefix: ['+??%', '+??%', '+??%', '+??%'],
      components: [{
        family: Family.CHALICE,
        level: 2,
        count: 8,
      }, {
        family: Family.BEAK_OF_MIDAS,
        level: 3,
        count: 2,
      }],
      consumed: undefined,
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
      consumed: undefined,
    }, {
      prefix: 'Jeweled',
      effectPrefix: ['+25%', '+35%', '+??%', '+??%'],
      components: [{
        family: Family.DEMETERS_NECKLACE,
        level: 0,
        count: 3,
      }],
      consumed: undefined,
    }, {
      prefix: 'Pristine',
      effectPrefix: ['+50%', '+60%', '+75%', '+??%'],
      components: [{
        family: Family.DEMETERS_NECKLACE,
        level: 1,
        count: 5,
      }, {
        family: Family.CHALICE,
        level: 0,
        count: 2,
      }],
      consumed: undefined,
    },
    {
      prefix: 'Beggspoke',
      effectPrefix: ['???'],
      components: [{
        family: Family.DEMETERS_NECKLACE,
        level: 2,
        count: 6,
      }, {
        family: Family.GOLD_METEORITE,
        level: 2,
        count: 1,
      }],
      consumed: undefined,
    }]
  },
  {
    name: "Dilithium Monocle",
    family: Family.DILITHIUM_MONOCLE,
    type: Type.ARTIFACT,
    effect: "boost effectiveness",
    levels: [{
      prefix: '',
      effectPrefix: ['+5%'],
      components: [],
      consumed: undefined,
    }, {
      prefix: 'Precise',
      effectPrefix: ['+10%'],
      components: [{
        family: Family.DILITHIUM_MONOCLE,
        level: 0,
        count: 5,
      }, {
        family: Family.TITANIUM_ACTUATOR,
        level: 0,
        count: 1,
      }],
      consumed: undefined,
    }, {
      prefix: 'Eggsacting',
      effectPrefix: ['+14%'],
      components: [],
      consumed: undefined,
    }, {
      prefix: 'Flawless',
      effectPrefix: ['+??%'],
      components: [],
      consumed: undefined,
    }],
  },
  {
    name: "Gusset",
    family: Family.GUSSET,
    type: Type.ARTIFACT,
    effect: "habitat capacity",
    levels: [{
      prefix: 'Plain',
      effectPrefix: ['+5%'],
      components: [],
      consumed: undefined,
    }, {
      prefix: 'Ornate',
      effectPrefix: ['+10%', '+11%', '+12%', '+13%'],
      components: [{
        family: Family.GUSSET,
        level: 0,
        count: 5,
      }],
      consumed: undefined,
    }, {
      prefix: 'Distegguished',
      effectPrefix: ['+14%', '+15%'],
      components: [{
        family: Family.GUSSET,
        level: 1,
        count: 6
      }, {
        family: Family.MERCURYS_LENS,
        level: 1,
        count: 2,
      }],
      consumed: undefined,
    }, {
      prefix: 'Jeweled',
      effectPrefix: ['???'],
      components: [{
        family: Family.GUSSET,
        level: 2,
        count: 8,
      }, {
        family: Family.GOLD_METEORITE,
        level: 2,
        count: 3,
      }],
      consumed: undefined,
    }],
  },
  {
    name: "Interstellar Compass",
    family: Family.INTERSTELLAR_COMPASS,
    type: Type.ARTIFACT,
    effect: "shipping rate",
    levels: [{
      prefix: 'Miscalibrated',
      effectPrefix: ['+5%'],
      components: [],
      consumed: undefined,
    }, {
      prefix: '',
      effectPrefix: ['+10%'],
      components: [{
        family: Family.INTERSTELLAR_COMPASS,
        level: 0,
        count: 6,
      }],
      consumed: undefined,
    }, {
      prefix: 'Precise',
      effectPrefix: ['+20%'],
      components: [{
        family: Family.INTERSTELLAR_COMPASS,
        level: 1,
        count: 8,
      }, {
        family: Family.SOLAR_TITANIUM,
        level: 1,
        count: 4,
      }],
      consumed: undefined,
    }, {
      prefix: 'Clairvoyant',
      effectPrefix: ['???'],
      components: [],
      consumed: undefined,
    }],
  },
  {
    name: "Light of Eggendel",
    family: Family.LIGHT_OF_EGGENDEL,
    type: Type.ARTIFACT,
    effect: "enlightenment egg value",
    levels: [{
      prefix: 'Dim',
      effectPrefix: ['+50%'],
      components: [],
      consumed: undefined,
    }, {
      prefix: 'Shimmering',
      effectPrefix: ['2x'],
      components: [],
      consumed: undefined,
    }, {
      prefix: 'Glowing',
      effectPrefix: ['???'],
      components: [],
      consumed: undefined,
    }, {
      prefix: 'Brilliant',
      effectPrefix: ['???'],
      components: [],
      consumed: undefined,
    }],
  },
  {
    name: "Lunar Totem",
    family: Family.LUNAR_TOTEM,
    type: Type.ARTIFACT,
    effect: "away earnings",
    levels: [{
      prefix: 'Basic',
      effectPrefix: ['+50%'],
      components: [],
      consumed: undefined,
    }, {
      prefix: '',
      effectPrefix: ['2x', '2.5x'],
      components: [{
        family: Family.LUNAR_TOTEM,
        level: 0,
        count: 3,
      }],
      consumed: undefined,
    }, {
      prefix: 'Powerful',
      effectPrefix: ['4x', '5x'],
      components: [{
        family: Family.LUNAR_TOTEM,
        level: 1,
        count: 6,
      }],
      consumed: undefined,
    }, {
      prefix: 'Eggceptional',
      effectPrefix: ['6x'],
      components: [{
        family: Family.LUNAR_TOTEM,
        level: 2,
        count: 6,
      }, {
        family: Family.SOLAR_TITANIUM,
        level: 1,
        count: 1,
      }],
      consumed: undefined,
    }],
  },
  {
    name: "Mercury's Lens",
    family: Family.MERCURYS_LENS,
    type: Type.ARTIFACT,
    effect: "farm value",
    levels: [{
      prefix: 'Misaligned',
      effectPrefix: ['+10%'],
      components: [],
      consumed: undefined,
    }, {
      prefix: '',
      effectPrefix: ['+20%', '+22%'],
      components: [{
        family: Family.MERCURYS_LENS,
        level: 0,
        count: 6,
      }],
      consumed: undefined,
    }, {
      prefix: 'Precise',
      effectPrefix: ['+50%', '+55%'],
      components: [{
        family: Family.MERCURYS_LENS,
        level: 1,
        count: 8,
      }, {
        family: Family.TAU_CETI_GEODE,
        level: 1,
        count: 2,
      }],
      consumed: undefined,
    }, {
      prefix: 'Meggnificent',
      effectPrefix: [],
      components: [{
        family: Family.MERCURYS_LENS,
        level: 2,
        count: 10,
      }, {
        family: Family.SOLAR_TITANIUM,
        level: 2,
        count: 6,
      }],
      consumed: undefined,
    }],
  },
  {
    name: "Neodymium Medallion",
    family: Family.NEODYMIUM_MEDALLION,
    type: Type.ARTIFACT,
    effect: "drone frequency",
    levels: [{
      prefix: 'Weak',
      effectPrefix: ['+10%'],
      components: [],
      consumed: undefined,
    }, {
      prefix: '',
      effectPrefix: ['+25%', '+30%'],
      components: [{
        family: Family.NEODYMIUM_MEDALLION,
        level: 0,
        count: 4,
      }],
      consumed: undefined,
    }, {
      prefix: 'Precise',
      effectPrefix: ['+50%'],
      components: [{
        family: Family.NEODYMIUM_MEDALLION,
        level: 1,
        count: 5,
      }, {
        family: Family.TAU_CETI_GEODE,
        level: 1,
        count: 1,
      }],
      consumed: undefined,
    }, {
      prefix: 'Eggceptional',
      effectPrefix: ['2x'],
      components: [{
        family: Family.NEODYMIUM_MEDALLION,
        level: 2,
        count: 6,
      }, {
        family: Family.INTERSTELLAR_COMPASS,
        level: 2,
        count: 2,
      }],
      consumed: undefined,
    }],
  },
  {
    name: "Phoenix Feather",
    family: Family.PHOENIX_FEATHER,
    type: Type.ARTIFACT,
    effect: "soul egg collection rate",
    levels: [{
      prefix: 'Tattered',
      effectPrefix: ['+25%'],
      components: [],
      consumed: undefined,
    }, {
      prefix: '',
      effectPrefix: ['2x'],
      components: [{
        family: Family.PHOENIX_FEATHER,
        level: 0,
        count: 6,
      }, {
        family: Family.TAU_CETI_GEODE,
        level: 1,
        count: 1,
      }],
      consumed: undefined,
    }, {
      prefix: 'Brilliant',
      effectPrefix: ['5x'],
      components: [],
      consumed: undefined,
    }, {
      prefix: 'Blazing',
      effectPrefix: [],
      components: [],
      consumed: undefined,
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
      consumed: undefined,
    }, {
      prefix: '',
      effectPrefix: [],
      components: [{
        family: Family.PUZZLE_CUBE,
        level: 0,
        count: 3,
      }],
      consumed: undefined,
    }, {
      prefix: 'Mystical',
      effectPrefix: [],
      components: [{
        family: Family.PUZZLE_CUBE,
        level: 1,
        count: 6,
      }, {
        family: Family.GUSSET,
        level: 0,
        count: 2,
      }],
      consumed: undefined,
    }, {
      prefix: 'Unsolvable',
      effectPrefix: [],
      components: [{
        family: Family.PUZZLE_CUBE,
        level: 2,
        count: 10,
      }, {
        family: Family.GOLD_METEORITE,
        level: 2,
        count: 2,
      }],
      consumed: undefined,
    }],
  },
  {
    name: "Quantum Metronome",
    family: Family.QUANTUM_METRONOME,
    type: Type.ARTIFACT,
    effect: "egg laying rate",
    levels: [{
      prefix: 'Misaligned',
      effectPrefix: ['+5%'],
      components: [],
      consumed: undefined,
    }, {
      prefix: 'Adequate',
      effectPrefix: ['+10%'],
      components: [{
        family: Family.QUANTUM_METRONOME,
        level: 0,
        count: 5,
      }, {
        family: Family.TITANIUM_ACTUATOR,
        level: 0,
        count: 2,
      }],
      consumed: undefined,
    }, {
      prefix: 'Perfect',
      effectPrefix: ['+14%'],
      components: [{
        family: Family.QUANTUM_METRONOME,
        level :1,
        count: 7,
      }, {
        family: Family.MERCURYS_LENS,
        level: 2,
        count: 4,
      }],
      consumed: undefined,
    }, {
      prefix: 'Reggference',
      effectPrefix: [],
      components: [],
      consumed: undefined,
    }],
  },
  {
    name: "Ship in a Bottle",
    family: Family.SHIP_IN_A_BOTTLE,
    type: Type.ARTIFACT,
    effect: "co-op teammates' earnings",
    levels: [{
      prefix: '',
      effectPrefix: ['+20%'],
      components: [],
      consumed: undefined,
    }, {
      prefix: 'Detailed',
      effectPrefix: ['+30%'],
      components: [],
      consumed: undefined,
    }, {
      prefix: 'Complex',
      effectPrefix: [],
      components: [],
      consumed: undefined,
    }, {
      prefix: 'Eggquisite',
      effectPrefix: [],
      components: [],
      consumed: undefined,
    }],
  },
  {
    name: "Tachyon Deflector",
    family: Family.TACHYON_DEFLECTOR,
    type: Type.ARTIFACT,
    effect: "co-op teammates' egg laying rate",
    levels: [{
      prefix: 'Weak',
      effectPrefix: ['+5%'],
      components: [],
      consumed: undefined,
    }, {
      prefix: '',
      effectPrefix: ['+8%'],
      components: [],
      consumed: undefined,
    }, {
      prefix: 'Robust',
      effectPrefix: [],
      components: [],
      consumed: undefined,
    }, {
      prefix: 'Eggceptional',
      effectPrefix: [],
      components: [],
      consumed: undefined,
    }],
  },
  {
    name: "Titanium Actuator",
    family: Family.TITANIUM_ACTUATOR,
    type: Type.ARTIFACT,
    effect: "hold to hatch rate",
    levels: [{
      prefix: 'Inconsistent',
      effectPrefix: ['+1'],
      components: [],
      consumed: undefined,
    }, {
      prefix: '',
      effectPrefix: ['+4'],
      components: [{
        family: Family.TITANIUM_ACTUATOR,
        level: 0,
        count: 4,
      }, {
        family: Family.SOLAR_TITANIUM,
        level: 1,
        count: 4,
      }],
      consumed: undefined,
    }, {
      prefix: 'Precise',
      effectPrefix: [],
      components: [],
      consumed: undefined,
    }, {
      prefix: 'Reggference',
      effectPrefix: [],
      components: [],
      consumed: undefined,
    }],
  },
  {
    name: "Tungsten Ankh",
    family: Family.TUNGSTEN_ANKH,
    type: Type.ARTIFACT,
    effect: "egg value",
    levels: [{
      prefix: 'Crude',
      effectPrefix: ['+10%'],
      components: [],
      consumed: undefined,
    }, {
      prefix: '',
      effectPrefix: ['+25%', '+28%'],
      components: [{
        family: Family.TUNGSTEN_ANKH,
        level: 0,
        count: 6,
      }],
      consumed: undefined,
    }, {
      prefix: 'Polished',
      effectPrefix: ['+50%', '+75%'],
      components: [{
        family: Family.TUNGSTEN_ANKH,
        level: 1,
        count: 7,
      }, {
        family: Family.SOLAR_TITANIUM,
        level: 1,
        count: 2,
      }],
      consumed: undefined,
    }, {
      prefix: 'Brilliant',
      effectPrefix: [],
      components: [{
        family: Family.TUNGSTEN_ANKH,
        level: 2,
        count: 8,
      }, {
        family: Family.GOLD_METEORITE,
        level: 2,
        count: 4,
      }],
      consumed: undefined,
    }],
  },
  {
    name: "Vial of Martian Dust",
    family: Family.VIAL_OF_MARTIAN_DUST,
    type: Type.ARTIFACT,
    effect: "max running chicken bonus",
    levels: [{
      prefix: 'Tiny',
      effectPrefix: ['+10'],
      components: [],
      consumed: undefined,
    }, {
      prefix: '',
      effectPrefix: ['+50', '+60'],
      components: [{
        family: Family.VIAL_OF_MARTIAN_DUST,
        level: 0,
        count: 5,
      }],
      consumed: undefined,
    }, {
      prefix: 'Hermetic',
      effectPrefix: ['+100'],
      components: [{
        family: Family.VIAL_OF_MARTIAN_DUST,
        level: 1,
        count: 7
      }, {
        family: Family.SOLAR_TITANIUM,
        level: 1,
        count: 2,
      }],
      consumed: undefined,
    }, {
      prefix: 'Prime',
      effectPrefix: [],
      components: [{
        family: Family.VIAL_OF_MARTIAN_DUST,
        level: 2,
        count: 8,
      }, {
        family: Family.TAU_CETI_GEODE,
        level: 2,
        count: 1,
      }],
      consumed: undefined,
    }],
  },
  {
    name: 'Gold Meteorite',
    family: Family.GOLD_METEORITE,
    type: Type.INGREDIENT,
    levels: [{
      prefix: 'Tiny',
      components: [],
      consumed: undefined,
    }, {
      prefix: 'Enriched',
      components: [{
        family: Family.GOLD_METEORITE,
        level: 0,
        count: 9,
      }],
      consumed: undefined,
    }, {
      prefix: 'Solid',
      components: [{
        family: Family.GOLD_METEORITE,
        level: 1,
        count: 11,
      }],
      consumed: undefined,
    }],
  },
  {
    name: 'Tau Ceti Geode',
    family: Family.TAU_CETI_GEODE,
    type: Type.INGREDIENT,
    levels: [{
      prefix: 'Piece',
      components: [],
      consumed: undefined,
    }, {
      prefix: 'Glimmering',
      components: [{
        family: Family.TAU_CETI_GEODE,
        level: 0,
        count: 12,
      }],
      consumed: undefined,
    }, {
      prefix: 'Radiant',
      components: [{
        family: Family.TAU_CETI_GEODE,
        level: 1,
        count: 14,
      }],
      consumed: undefined,
    }],
  },
  {
    name: 'Solar Titanium',
    family: Family.SOLAR_TITANIUM,
    type: Type.INGREDIENT,
    levels: [{
      prefix: 'Ore',
      components: [],
      consumed: undefined,
    }, {
      prefix: 'Bar',
      components: [{
        family: Family.SOLAR_TITANIUM,
        level: 0,
        count: 10,
      }],
      consumed: undefined,
    }, {
      prefix: 'Geogon',
      components: [{
        family: Family.SOLAR_TITANIUM,
        level: 1,
        count: 12,
      }],
      consumed: undefined,
    }],
  },
  {
    name: 'Quantum Stone',
    family: Family.QUANTUM_STONE,
    type: Type.STONE,
    effect: 'shippin rate',
    levels: [{
      prefix: 'Fragment',
      effectPrefix: '+0%',
      components: [],
      consumed: undefined,
    }, {
      prefix: '',
      effectPrefix: '+2%',
      components: [{
        family: Family.QUANTUM_STONE,
        level: 0,
        count: 20,
      }],
      consumed: undefined,
    }, {
      prefix: '???',
      effectPrefix: '???',
      components: [{
        family: Family.QUANTUM_STONE,
        level: 1,
        count: 15,
      }],
      consumed: undefined,
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

const findArtifactsUsedIn = (family: Family, level: number) => {
  const artifactsUsedIn: { name: string, path: string, family: Family, level: number }[] = [];

  artifacts.forEach(a => {
    a.levels.forEach((l, index) => {
      if (l.components.some(component => component.family === family && component.level === level)) {
        artifactsUsedIn.push({
          name: `${l.prefix} ${a.name}`,
          path: `/${a.family}/${index}`,
          family: a.family,
          level: index,
        });
      }
    })
  })

  return artifactsUsedIn;
}

export const useArtifactUsedIn = (family: Family, level: number) => {
  const artifactsUsedIn: { name: string, path: string }[] = [];

  const firstLevel = findArtifactsUsedIn(family, level);
  firstLevel.forEach(firstArtifact => {
    artifactsUsedIn.push(firstArtifact);
    const secondLevel = findArtifactsUsedIn(firstArtifact.family, firstArtifact.level);
    secondLevel.forEach(secondArtifact => {
      artifactsUsedIn.push(secondArtifact);
      const thirdLevel = findArtifactsUsedIn(secondArtifact.family, secondArtifact.level);
      thirdLevel.forEach(thirdArtifact => {
        artifactsUsedIn.push(thirdArtifact);
        const fourthLevel = findArtifactsUsedIn(thirdArtifact.family, thirdArtifact.level);
        fourthLevel.forEach(fourthArtifact => {
          artifactsUsedIn.push(fourthArtifact);
        })
      })
    });
  });

  return artifactsUsedIn;
}