import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Artifacts from './pages/Artifacts';


const App = () => (
  <Router>
    <Switch>
      <Route path="/:familyId?/:level?">
        <Artifacts />
      </Route>
    </Switch>
  </Router>
);

export default App;