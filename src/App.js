import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import rootReducer from './reducers';
import Article from "./components/article";
import Friend from "./components/friend"

export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

function App() {
  return (
      <Provider store={store}>
        <BrowserRouter>
          <React.Fragment>
            <Switch>
              <Route exact path={'/'} render={() => {
                return <Redirect to={'/home'}/>
              }}/>
              <Route exact path={'/home'} component={Article}/>
              <Route exact path={'/friends'} component={Friend}/>
            </Switch>
          </React.Fragment>
        </BrowserRouter>
      </Provider>
  );
}

export default App;
