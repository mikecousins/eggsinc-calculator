import Artifact from '../components/Artifact';

export enum ArtifactType {
  ARTIFACT,
  STONE,
  INGREDIENT,
}

const artifacts = [
  {
    id: 0,
    name: "Plain Aurelian Brooch",
    type: ArtifactType.ARTIFACT,
    effect: "+10% drone rewards",
  },
  {
    id: 1,
    name: "Aurelian Brooch",
    type: ArtifactType.ARTIFACT,
    effect: "+25% drone rewards",
    ingredients: [{
      id: 0,
      count: 5,
    }],
  },
  {
    id: 2,
    name: "Jeweled Aurelian Brooch",
    type: ArtifactType.ARTIFACT,
    effect: "+50% drone rewards",
    ingredients: [{
      id: 1,
      count: 7,
    }, {
      id: 4,
      count: 2,
    }],
  },
  {
    id: 3,
    name: "Eggceptional Aurelian Brooch",
    type: ArtifactType.ARTIFACT,
    rareEffect: "2x drone rewards",
  },
  {
    id: 4,
    name: "Dull Beak of Midas",
    type: ArtifactType.ARTIFACT,
    effect: "+20% chance of gold in gifts and drones"
  },
  {
    id: 5,
    name: "Beak of Midas",
    type: ArtifactType.ARTIFACT,
    effect: "+50% chance of gold in gifts and drones",
    rareEffect: "+52% drone rewards",
    epicEffect: "+54% drone rewards",
    legendaryEffect: "+56% drone rewards",
    ingredients: [{
      id: 4,
      count: 4,
    }],
  },
  {
    id: 6,
    name: "Jeweled Beak of Midas",
    type: ArtifactType.ARTIFACT,
    effect: "2x chance of gold in gifts and drones",
    rareEffect: "3x chance of gold in gifts and drones",
    epicEffect: "+54% drone rewards",
    legendaryEffect: "+56% drone rewards",
    ingredients: [{
      id: 5,
      count: 5,
    }, {
      id: 9,
      count: 1,
    }],
  },
  {
    id: 7,
    name: "Glistening Beak of Midas",
    type: ArtifactType.ARTIFACT,
    effect: "5x chance of gold in gifts and drones",
    rareEffect: "+52% drone rewards",
    epicEffect: "+54% drone rewards",
    legendaryEffect: "+56% drone rewards",
  },
  {
    id: 8,
    name: "Simple Carved Rainstick",
    type: ArtifactType.ARTIFACT,
    effect: "+20% chance of gold in gifts and drones"
  },
  {
    id: 9,
    name: "Carved Rainstick",
    type: ArtifactType.ARTIFACT,
    effect: "+50% chance of gold in gifts and drones",
    rareEffect: "+52% drone rewards",
    epicEffect: "+54% drone rewards",
    legendaryEffect: "+56% drone rewards",
    ingredients: [{
      id: 8,
      count: 4,
    }],
  },
  {
    id: 10,
    name: "Jeweled Beak of Midas",
    type: ArtifactType.ARTIFACT,
    effect: "2x chance of gold in gifts and drones",
    rareEffect: "3x chance of gold in gifts and drones",
    epicEffect: "+54% drone rewards",
    legendaryEffect: "+56% drone rewards",
    ingredients: [{
      id: 5,
      count: 5,
    }, {
      id: 9,
      count: 1,
    }],
  },
  {
    id: 11,
    name: "Glistening Beak of Midas",
    type: ArtifactType.ARTIFACT,
    effect: "5x chance of gold in gifts and drones",
    rareEffect: "+52% drone rewards",
    epicEffect: "+54% drone rewards",
    legendaryEffect: "+56% drone rewards",
  },
  {
    id: 12,
    name: "Plain Chalice",
    type: ArtifactType.ARTIFACT,
    effect: "+20% chance of gold in gifts and drones"
  },
  {
    id: 13,
    name: "Polished Chalice",
    type: ArtifactType.ARTIFACT,
    effect: "+50% chance of gold in gifts and drones",
    rareEffect: "+52% drone rewards",
    epicEffect: "+54% drone rewards",
    legendaryEffect: "+56% drone rewards",
    ingredients: [{
      id: 4,
      count: 4,
    }],
  },
  {
    id: 14,
    name: "Jeweled Chalice",
    type: ArtifactType.ARTIFACT,
    effect: "2x chance of gold in gifts and drones",
    rareEffect: "3x chance of gold in gifts and drones",
    epicEffect: "+54% drone rewards",
    legendaryEffect: "+56% drone rewards",
    ingredients: [{
      id: 5,
      count: 5,
    }, {
      id: 9,
      count: 1,
    }],
  },
  {
    id: 15,
    name: "Eggceptional Chalice",
    type: ArtifactType.ARTIFACT,
    effect: "5x chance of gold in gifts and drones",
    rareEffect: "+52% drone rewards",
    epicEffect: "+54% drone rewards",
    legendaryEffect: "+56% drone rewards",
  },
  {
    id: 16,
    name: "Simple Demeter's Necklace",
    type: ArtifactType.ARTIFACT,
    effect: "+20% chance of gold in gifts and drones"
  },
  {
    id: 17,
    name: "Jeweled Demeter's Necklace",
    type: ArtifactType.ARTIFACT,
    effect: "+50% chance of gold in gifts and drones",
    rareEffect: "+52% drone rewards",
    epicEffect: "+54% drone rewards",
    legendaryEffect: "+56% drone rewards",
    ingredients: [{
      id: 4,
      count: 4,
    }],
  },
  {
    id: 18,
    name: "Pristine Demeter's Necklace",
    type: ArtifactType.ARTIFACT,
    effect: "2x chance of gold in gifts and drones",
    rareEffect: "3x chance of gold in gifts and drones",
    epicEffect: "+54% drone rewards",
    legendaryEffect: "+56% drone rewards",
    ingredients: [{
      id: 5,
      count: 5,
    }, {
      id: 9,
      count: 1,
    }],
  },
  {
    id: 19,
    name: "Beggspoke Demeter's Necklace",
    type: ArtifactType.ARTIFACT,
    effect: "5x chance of gold in gifts and drones",
    rareEffect: "+52% drone rewards",
    epicEffect: "+54% drone rewards",
    legendaryEffect: "+56% drone rewards",
  },
  {
    id: 20,
    name: "Dilithium Monocle",
    type: ArtifactType.ARTIFACT,
    effect: "+20% chance of gold in gifts and drones"
  },
  {
    id: 21,
    name: "Precise Dilithium Monocle",
    type: ArtifactType.ARTIFACT,
    effect: "+50% chance of gold in gifts and drones",
    rareEffect: "+52% drone rewards",
    epicEffect: "+54% drone rewards",
    legendaryEffect: "+56% drone rewards",
    ingredients: [{
      id: 4,
      count: 4,
    }],
  },
  {
    id: 22,
    name: "Eggsacting Dilithium Monocle",
    type: ArtifactType.ARTIFACT,
    effect: "2x chance of gold in gifts and drones",
    rareEffect: "3x chance of gold in gifts and drones",
    epicEffect: "+54% drone rewards",
    legendaryEffect: "+56% drone rewards",
    ingredients: [{
      id: 5,
      count: 5,
    }, {
      id: 9,
      count: 1,
    }],
  },
  {
    id: 23,
    name: "Flawless Dilithium Monocle",
    type: ArtifactType.ARTIFACT,
    effect: "5x chance of gold in gifts and drones",
    rareEffect: "+52% drone rewards",
    epicEffect: "+54% drone rewards",
    legendaryEffect: "+56% drone rewards",
  },
  {
    id: 24,
    name: "Plain Gusset",
    type: ArtifactType.ARTIFACT,
    effect: "+20% chance of gold in gifts and drones"
  },
  {
    id: 25,
    name: "Ornate Gusset",
    type: ArtifactType.ARTIFACT,
    effect: "+50% chance of gold in gifts and drones",
    rareEffect: "+52% drone rewards",
    epicEffect: "+54% drone rewards",
    legendaryEffect: "+56% drone rewards",
    ingredients: [{
      id: 4,
      count: 4,
    }],
  },
  {
    id: 26,
    name: "Distegguished Gusset",
    type: ArtifactType.ARTIFACT,
    effect: "2x chance of gold in gifts and drones",
    rareEffect: "3x chance of gold in gifts and drones",
    epicEffect: "+54% drone rewards",
    legendaryEffect: "+56% drone rewards",
    ingredients: [{
      id: 5,
      count: 5,
    }, {
      id: 9,
      count: 1,
    }],
  },
  {
    id: 27,
    name: "Jeweled Gusset",
    type: ArtifactType.ARTIFACT,
    effect: "5x chance of gold in gifts and drones",
    rareEffect: "+52% drone rewards",
    epicEffect: "+54% drone rewards",
    legendaryEffect: "+56% drone rewards",
  },
  {
    id: 100,
    name: "Misaligned Mercury's Lens",
    type: ArtifactType.ARTIFACT,
  },
  {
    id: 113,
    name: "Glimmering Tau Ceti Geode",
    type: ArtifactType.INGREDIENT,
  },
];

export const useArtifacts = () => {
  return artifacts;
}

export const useArtifact = (id: number) => {
  return artifacts.find(artifact => artifact.id === id);
}
