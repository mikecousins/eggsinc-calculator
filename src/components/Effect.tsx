import { FunctionComponent } from 'react';
import { Artifact } from '../hooks';

type Props = {
  artifact: Artifact;
  level: number;
  rarity: number;
}

const Effect: FunctionComponent<Props> = ({ artifact, level, rarity }) => {
  const tokens: string[] = [];
  tokens.push(artifact.effect);
  if (artifact.levels[level].effectPrefix[rarity]) {
    tokens.unshift(artifact.levels[level].effectPrefix[rarity]);
  }
  

  return <>{tokens.join(' ')}</>;
};

export default Effect;