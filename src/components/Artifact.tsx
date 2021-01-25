import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FunctionComponent } from 'react';
import { useArtifact } from '../hooks';
import Type from './Type';

type Props = {
  id: number;
}

const Artifact: FunctionComponent<Props> = ({ id }) => {
  const artifact = useArtifact(id);

  if (!artifact) {
    return <FontAwesomeIcon icon={faSpinner} spin />;
  }

  return (
    <div className="flex-1 mt-6">
      <div className="w-full block border rounded-lg shadow-lg bg-gray-50 p-4">
        <div>
          <span className="font-bold">{artifact.name}</span>
          <span className="ml-4 text-gray-400"><Type type={artifact.type} /></span>
        </div>
        <div>{artifact.effect}</div>
        {artifact.rareEffect && <div className="text-blue-400">{artifact.rareEffect}</div>}
        {artifact.epicEffect && <div className="text-purple-400">{artifact.epicEffect}</div>}
        {artifact.legendaryEffect && <div className="text-yellow-400">{artifact.legendaryEffect}</div>}
      </div>
      {artifact.ingredients && <div className="mt-4 text-lg">Ingredients</div>}
      {artifact?.ingredients?.map(ingredient => (
        <div className="mt-2 flex">
          <div className="text-xl mt-6 p-4">{ingredient.count}x</div>
          <Artifact id={ingredient.id} />
        </div>
      ))}
    </div>
  );
}

export default Artifact;