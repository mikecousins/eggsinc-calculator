import { FunctionComponent } from 'react';
import { Artifact } from '../hooks';

type Props = {
  artifact: Artifact;
  level: number;
}

const Effects: FunctionComponent<Props> = ({ artifact, level }) => (
  <>
    <div>
      {artifact.levels[level].effectPrefix.length > 0 && artifact.levels[level].effectPrefix[0]}
      {artifact.effect}
    </div>
    {artifact.levels[level].effectPrefix.length > 1 && (
      <div className="text-blue-400">
        `${artifact.levels[level].effectPrefix[1]} ${artifact.effect}`
      </div>
    )}
    {artifact.levels[level].effectPrefix.length > 2 && (
      <div className="text-purple-400">
        `${artifact.levels[level].effectPrefix[2]} ${artifact.effect}`
      </div>
    )}
    {artifact.levels[level].effectPrefix.length > 3 && (
      <div className="text-yellow-400">
        `${artifact.levels[level].effectPrefix[3]} ${artifact.effect}`
      </div>
    )}
  </>
);

export default Effects;