import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Home from './components/pages/Home.js'
import SideNavigation from './components/widgets/sidebar.js'
import * as serviceWorker from './serviceWorker';
import {Route, Redirect, Link, BrowserRouter as Router, Switch} from 'react-router-dom'
import LoginModel from './services/request.js';
import Login from './components/pages/login';
import Users from './components/pages/users'
import ListUsers from './components/pages/list_users'
import Header from './components/widgets/header.js'
import Scripts from './components/includes/script.js'
import Footer from './components/widgets/footer'
import Quicksidebar from './components/widgets/quicksidebar'
import Dashboard from './components/pages/dashboard'


var sidebarcomponent = <SideNavigation/>;
var headercomponent = <Header/>;
var footerComponent = <Footer/>;

const routing = (
  <Router>
    <Switch>
      <Route path="/" component={App}>
        <Route exact path="/" component={() => {
          const isLogged = (new LoginModel()).isLogged();
          if (!isLogged)
            return <Login/>;
          return <Home/>
        }}/>
        <Route path="/login" component={Login}/>
        <Route path="/users" component={() => {
          return <h1>Hello</h1>
        }}/>
        <Route path="/add_user" component={() => {

          return <Users sidebar={sidebarcomponent} footer={footerComponent} header={headercomponent}/>
        }}/>

        <Route path="/list_user" component={() => {

          return <ListUsers sidebar={sidebarcomponent} footer={footerComponent} header={headercomponent}/>
        }}/>
      </Route>
    </Switch>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();