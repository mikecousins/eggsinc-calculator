import { Switch, Route, useHistory, useParams } from 'react-router-dom';
import AppLayout from '../layout/AppLayout';
import Artifact from '../components/Artifact';
import { useArtifactOptions } from '../hooks';

const Artifacts = () => {
  const history = useHistory();
  const artifacts = useArtifactOptions();
  const { familyId, level } = useParams<{ familyId?: string, level?: string }>();

  return (
    <AppLayout>
      <div>
        <label htmlFor="artifacts" className="text-xl font-bold mr-4">Artifacts</label>
        <select
          id="artifacts"
          value={`${familyId}/${level}`}
          onChange={(selection) => history.push(`/${selection.target.value}`)}
          className="pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        >
          <option />
          {artifacts.map(artifact => <option value={artifact.path} key={artifact.path}>{artifact.name}</option>)}
        </select>
      </div>
      <Switch>
        <Route path="/:familyId/:level">
          <Artifact familyId={parseInt(familyId ?? '')} level={parseInt(level ?? '')} />
        </Route>
      </Switch>
    </AppLayout>
  );
}

export default Artifacts;