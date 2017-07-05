import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route,Redirect,withRouter} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory'
import './index.css';
import Login from './login';
import Header from './header';
import Home from './main';
import registerServiceWorker from './registerServiceWorker';

const browserHistory = createBrowserHistory();

function isLogin(){
  return true;
}

// const AuthButton = withRouter(({ history }) => (
//   sessionStorage.getItem('onLogin')===true ?
//     history.push('/login') : <p>You are not logged in.</p>
//   )
// );

const Routes = () =>{
  return(
    <Router history={browserHistory}>
      <div>
        {/*<AuthButton/>*/}
        <Route exact path="/" render={() => (
          isLogin() ? (<Redirect to="/login" />) : (<Home/>)
        )}/>
        <Route path="/login" component={Login} />
        <Route path="/main" component={Home} />
        <Route path="/header" component={Header} />
      </div>
    </Router>
  );
};
ReactDOM.render(<Routes />, document.getElementById('root'));
registerServiceWorker();
