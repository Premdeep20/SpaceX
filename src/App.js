import { Route, Switch, Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { BrowserRouter } from 'react-router-dom';
import HomePage from './modules/HomePage/HomePage';
import HistoryContainer from './modules/History/container/HistoryContainer';
import AddressContainer from './modules/Address/container/AddressContainer';
import { Provider } from 'react-redux';
import store from './state_management/store';

import './style.css';

function App() {
  const history = createBrowserHistory();
  const path = () => (<Redirect to="/home" />);
  return (
    <Provider store={store}>
      <BrowserRouter history={history}>
        <Switch>
          <Route path="/" exact={true} render={path} />
          <Route path="/home" exact={true} component={HomePage} />
          <Route path="/history" exact={true} component={HistoryContainer} />
          <Route path="/address" exact={true} component={AddressContainer} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
