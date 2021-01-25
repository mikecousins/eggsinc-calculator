import { FunctionComponent } from 'react';
import { ArtifactType } from '../hooks';

type Props = {
  type: ArtifactType;
}

const Type: FunctionComponent<Props> = ({ type }) => {
  switch (type) {
    case ArtifactType.ARTIFACT:
    default:
      return <>Artifact</>;
    case ArtifactType.INGREDIENT:
      return <>Ingredient</>;
    case ArtifactType.STONE:
      return <>Stone</>;
  }
}

export default Type;