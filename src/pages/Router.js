import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { CardTable } from './cardTable';
import { MainHall } from './mainHall';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={MainHall} />
        <Route exact path='/table' component={CardTable} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
