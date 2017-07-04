import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route,Redirect} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory'
import './index.css';
import Login from './login';
import Home from './home';
import registerServiceWorker from './registerServiceWorker';


const browserHistory = createBrowserHistory();

function isLogin(){
  return true;
}

const Routes = () =>{
  return(
    <Router history={browserHistory}>
      <div>
        <Route exact path="/" render={() => (
          isLogin() ? (<Redirect to="/login" />) : (<Home/>)
        )}/>
        <Route path="/login" component={Login} />
        <Route path="/home" component={Home} />
      </div>
    </Router>

  );
};
ReactDOM.render(<Routes />, document.getElementById('root'));
registerServiceWorker();
