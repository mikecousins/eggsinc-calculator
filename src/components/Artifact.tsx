import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FunctionComponent } from 'react';
import { useArtifact } from '../hooks';
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
          <span className="font-bold">{artifact.name}</span>
          <span className="ml-4 text-gray-400">{artifact.type}</span>
        </div>
        <Effects artifact={artifact} level={level} />
      </div>
      {artifact.levels[level].ingredients && <div className="mt-4 text-lg">Ingredients</div>}
      {artifact.levels[level].ingredients.map(ingredient => (
        <div className="mt-2 flex">
          <div className="text-xl mt-6 p-4">{ingredient.count}x</div>
          <Artifact familyId={ingredient.family} level={ingredient.level} />
        </div>
      ))}
    </div>
  );
}

export default Artifact;