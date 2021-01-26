import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FunctionComponent } from 'react';
import { Type, useArtifact } from '../hooks';
import Effects from './Effects';

type Props = {
  familyId: number;
  level: number;
}

const Artifact: FunctionComponent<Props> = ({ familyId, level }) => {
  const artifact = useArtifact(familyId);

  if (!artifact) {
    return <FontAwesomeIcon icon={faSpinner} spin />;
  }

  return (
    <div className="flex-1 mt-6">
      <div className="w-full block border rounded-lg shadow-lg bg-gray-50 p-4">
        <div>
          <span className="font-bold">{`${artifact.levels[level].prefix} ${artifact.name}`}</span>
          <span className="ml-4 text-gray-400">{artifact.type}</span>
        </div>
        {artifact.type === Type.ARTIFACT && <Effects artifact={artifact} level={level} />}
      </div>
      {artifact.levels[level].components.length > 0 && <div className="mt-4 text-lg">Components</div>}
      {artifact.levels[level].components.map(component => (
        <div className="mt-2 flex">
          <div className="text-xl mt-6 p-4">{component.count}x</div>
          <Artifact familyId={component.family} level={component.level} />
        </div>
      ))}
    </div>
  );
}

export default Artifact;