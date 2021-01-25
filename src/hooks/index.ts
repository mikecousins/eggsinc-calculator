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
    rareEffect: "+27% drone rewards",
    epicEffect: "+29% drone rewards",
    legendaryEffect: "+31% drone rewards",
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
    rareEffect: "+52% drone rewards",
    epicEffect: "+54% drone rewards",
    legendaryEffect: "+56% drone rewards",
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
  },
  {
    id: 4,
    name: "Dull Beak of Midas",
    type: ArtifactType.ARTIFACT,
  },
  {
    id: 5,
    name: "Misaligned Mercury's Lens",
    type: ArtifactType.ARTIFACT,
  },
];

export const useArtifacts = () => {
  return artifacts;
}

export const useArtifact = (id: number) => {
  return artifacts.find(artifact => artifact.id === id);
}
