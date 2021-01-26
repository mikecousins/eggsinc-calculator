import { FunctionComponent } from 'react';
import { Artifact } from '../hooks';
import Effect from './Effect';

type Props = {
  artifact: Artifact;
  level: number;
}

const Effects: FunctionComponent<Props> = ({ artifact, level }) => (
  <>
    <div>
      <Effect artifact={artifact} level={level} rarity={0} />
    </div>
    {artifact.levels[level].effectPrefix.length > 1 && (
      <div className="text-blue-400">
        <Effect artifact={artifact} level={level} rarity={1} />
      </div>
    )}
    {artifact.levels[level].effectPrefix.length > 2 && (
      <div className="text-purple-400">
        <Effect artifact={artifact} level={level} rarity={2} />
      </div>
    )}
    {artifact.levels[level].effectPrefix.length > 3 && (
      <div className="text-yellow-400">
        <Effect artifact={artifact} level={level} rarity={3} />
      </div>
    )}
  </>
);

export default Effects;