import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import { Type, useArtifact, useArtifactUsedIn } from '../hooks';
import Effects from './Effects';

type Props = {
  familyId: number;
  level: number;
}

const Artifact: FunctionComponent<Props> = ({ familyId, level }) => {
  const artifact = useArtifact(familyId);
  const usedIn = useArtifactUsedIn(familyId, level);

  if (!artifact) {
    return <FontAwesomeIcon icon={faSpinner} spin />;
  }

  return (
    <div className="flex-1 mt-6">
      <div className="w-full block border rounded-lg shadow-lg bg-gray-50 divide-y divide-gray-200">
        <div className="p-4">
          <span className="text-lg font-bold">{`${artifact.levels[level].prefix} ${artifact.name}`}</span>
          <span className="ml-4 text-gray-400">{artifact.type}</span>
        </div>
        <div className="flex divide-x divide-gray-100 bg-white">
          <div className="flex-1 px-4 py-2">
            <div className="font-bold">Effects</div>
            {artifact.type === Type.ARTIFACT && <Effects artifact={artifact} level={level} />}
          </div>
          <div className="flex-1 px-4 py-2">
            <div className="font-bold">Used In</div>
            {usedIn.map(artifact => <Link to={artifact.path} key={artifact.path} className="mr-2 underline text-blue-400">{artifact.name}</Link>)}
          </div>
        </div>
      </div>
      {artifact.levels[level].components.length > 0 && <div className="mt-6 text-gray-500">Made With</div>}
      {artifact.levels[level].components.map(component => (
        <div className="mt-2 flex" key={component.family}>
          <div className="text-xl mt-6 p-4">{component.count}x</div>
          <Artifact familyId={component.family} level={component.level} />
        </div>
      ))}
    </div>
  );
}

export default Artifact;