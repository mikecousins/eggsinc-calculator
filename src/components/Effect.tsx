import { FunctionComponent } from 'react';
import { Artifact } from '../hooks';

type Props = {
  artifact: Artifact;
  level: number;
  rarity: number;
}

const Effect: FunctionComponent<Props> = ({ artifact, level, rarity }) => {
  const tokens: string[] = [];

  

  return <>{tokens.join(' ')}</>;
};

export default Effect;