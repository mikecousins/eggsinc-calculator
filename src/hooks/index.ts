const artifacts = [
  {
    id: 0,
    name: "Plain Aurelian Brooch"
  },
  {
    id: 1,
    name: "Aurelian Brooch",
    ingredients: [{
      id: 0,
      count: 5,
    }],
  },
  {
    id: 2,
    name: "Jeweled Aurelian Brooch",
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
  },
  {
    id: 4,
    name: "Dull Beak of Midas",
  },
  {
    id: 5,
    name: "Misaligned Mercury's Lens",
  },
];

export const useArtifacts = () => {
  return artifacts;
}

export const useArtifact = (id: number) => {
  return artifacts.find(artifact => artifact.id === id);
}
