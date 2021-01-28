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
      components: [{
        family: Family.BEAK_OF_MIDAS,
        level: 0,
        count: 4,
      }],
    }, {
      prefix: 'Jeweled',
      effectPrefix: [],
      components: [{
        family: Family.BEAK_OF_MIDAS,
        level: 1,
        count: 5,
      }, {
        family: Family.TAU_CETI_GEODE,
        level: 1,
        count: 1,
      }],
    }, {
      prefix: 'Glistening',
      effectPrefix: [],
      components: [{
        family: Family.BEAK_OF_MIDAS,
        level: 2,
        count: 6,
      }, {
        family: Family.GOLD_METEORITE,
        level: 2,
        count: 3,
      }],
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
    effect: "chance of gold in gifts and drones",
    levels: [{
      prefix: 'Simple',
      effectPrefix: ['+20%'],
      components: [],
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
      components: [{
        family: Family.CHALICE,
        level: 0,
        count: 4,
      }, {
        family: Family.GOLD_METEORITE,
        level: 1,
        count: 1,
      }],
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
      effectPrefix: ['+5%'],
      components: [],
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
    }, {
      prefix: 'Eggsacting',
      effectPrefix: ['+14%'],
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
      effectPrefix: ['+5%'],
      components: [],
    }, {
      prefix: 'Ornate',
      effectPrefix: ['+10%', '+11%', '+12%', '+13%'],
      components: [{
        family: Family.GUSSET,
        level: 0,
        count: 5,
      }],
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
    }, {
      prefix: 'Jeweled',
      effectPrefix: [],
      components: [{
        family: Family.GUSSET,
        level: 2,
        count: 8,
      }, {
        family: Family.GOLD_METEORITE,
        level: 2,
        count: 3,
      }],
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
    }, {
      prefix: '',
      effectPrefix: ['+10%'],
      components: [{
        family: Family.INTERSTELLAR_COMPASS,
        level: 0,
        count: 6,
      }],
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
      effectPrefix: ['+50%'],
      components: [],
    }, {
      prefix: 'Shimmering',
      effectPrefix: ['2x'],
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
      effectPrefix: ['+50%'],
      components: [],
    }, {
      prefix: '',
      effectPrefix: ['2x', '2.5x'],
      components: [{
        family: Family.LUNAR_TOTEM,
        level: 0,
        count: 3,
      }],
    }, {
      prefix: 'Powerful',
      effectPrefix: ['4x', '5x'],
      components: [{
        family: Family.LUNAR_TOTEM,
        level: 1,
        count: 6,
      }],
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
    }, {
      prefix: '',
      effectPrefix: ['+20%', '+22%'],
      components: [{
        family: Family.MERCURYS_LENS,
        level: 0,
        count: 6,
      }],
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
    }, {
      prefix: '',
      effectPrefix: ['+25%', '+30%'],
      components: [{
        family: Family.NEODYMIUM_MEDALLION,
        level: 0,
        count: 4,
      }],
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
    }, {
      prefix: 'Brilliant',
      effectPrefix: ['5x'],
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
      components: [{
        family: Family.PUZZLE_CUBE,
        level: 0,
        count: 3,
      }],
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
    }, {
      prefix: 'Perfect',
      effectPrefix: ['+14%'],
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
      effectPrefix: ['+20%'],
      components: [],
    }, {
      prefix: 'Detailed',
      effectPrefix: ['+30%'],
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
      effectPrefix: ['+5%'],
      components: [],
    }, {
      prefix: '',
      effectPrefix: ['+8%'],
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
      effectPrefix: ['+1'],
      components: [],
    }, {
      prefix: '',
      effectPrefix: ['+4'],
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
      effectPrefix: ['+10%'],
      components: [],
    }, {
      prefix: '',
      effectPrefix: ['+25%', '+28%'],
      components: [{
        family: Family.TUNGSTEN_ANKH,
        level: 0,
        count: 6,
      }],
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
      components: [{
        family: Family.VIAL_OF_MARTIAN_DUST,
        level: 0,
        count: 5,
      }],
    }, {
      prefix: 'Hermetic',
      effectPrefix: [],
      components: [{
        family: Family.VIAL_OF_MARTIAN_DUST,
        level: 1,
        count: 7
      }, {
        family: Family.SOLAR_TITANIUM,
        level: 1,
        count: 2,
      }],
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
  },
  {
    name: 'Tau Ceti Geode',
    family: Family.TAU_CETI_GEODE,
    type: Type.INGREDIENT,
    levels: [{
      prefix: 'Piece',
      components: [],
    }, {
      prefix: 'Glimmering',
      components: [{
        family: Family.TAU_CETI_GEODE,
        level: 0,
        count: 12,
      }]
    }, {
      prefix: 'Radiant',
      components: [{
        family: Family.TAU_CETI_GEODE,
        level: 1,
        count: 14,
      }]
    }],
  },
  {
    name: 'Solar Titanium',
    family: Family.SOLAR_TITANIUM,
    type: Type.INGREDIENT,
    levels: [{
      prefix: 'Ore',
      components: [],
    }, {
      prefix: 'Bar',
      components: [{
        family: Family.SOLAR_TITANIUM,
        level: 0,
        count: 10,
      }]
    }, {
      prefix: 'Geogon',
      components: [{
        family: Family.SOLAR_TITANIUM,
        level: 1,
        count: 12,
      }]
    }],
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