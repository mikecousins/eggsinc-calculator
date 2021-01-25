import { Switch, Route, useHistory, useParams } from 'react-router-dom';
import AppLayout from '../layout/AppLayout';
import Artifact from '../components/Artifact';
import { useArtifacts } from '../hooks';

const Artifacts = () => {
  const history = useHistory();
  const artifacts = useArtifacts();
  const { id } = useParams<{ id?: string }>();

  return (
    <AppLayout>
      <div>
        <label htmlFor="artifacts" className="text-xl font-bold mr-4">Artifacts</label>
        <select
          id="artifacts"
          value={id}
          onChange={(selection) => history.push(`/${selection.target.value}`)}
          className="pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        >
          <option />
          {artifacts.map(artifact => <option value={artifact.id.toString()} key={artifact.id}>{artifact.name}</option>)}
        </select>
      </div>
      <Switch>
        <Route path="/:id">
          <Artifact id={parseInt(id ?? '')} />
        </Route>
      </Switch>
    </AppLayout>
  );
}

export default Artifacts;