import React from 'react';
import Layout from './Common/Layout'
import Login from './Pages/Login'
import Home from './Pages/Home'
import { Provider} from 'redux'
import {BrowserRouter as Router,Route,Switch}  from 'react-router-dom'
let LayoutRouter = (
  <Layout> 
      <Switch>
          <Route exact path="/" component={Home}/>
      </Switch>
  </Layout>
);
function App() {
  return (
    <Provider store={store}>
      <div className="App">
            <Router>
              <Switch>
              <Route path='/login' component={Login} />
              <Route path='/'  render={props=>LayoutRouter}/>
              </Switch>
            </Router>      
          </div>
    </Provider>
   
  );
}

export default App;
