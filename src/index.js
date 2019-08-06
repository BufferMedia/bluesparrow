import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Home from './components/Home.js' 
import SideNavigation from './components/sidebar.js'
import * as serviceWorker from './serviceWorker';
import { Route, Redirect, Link, BrowserRouter as Router, Switch } from 'react-router-dom'
import LoginModel from './request.js';
import Login from './components/login';
import Users from './components/users'
import ListUsers from './components/list_users'
import Header from './components/header.js'
import Scripts from './components/script.js'
import Footer from './components/footer'
import Quicksidebar from './components/quicksidebar'
import Dashboard from './components/dashboard'


var sidebarcomponent = <SideNavigation/>;
var headercomponent = <Header/>;
var footerComponent = <Footer/>;

const routing = (
  <Router>
    <Switch>
      <Route path="/" component={App}>
      	<Route exact path="/" component={()=>{
      		const isLogged = (new LoginModel()).isLogged();
			if(!isLogged)
				return <Login/>;
      		return <Home/>
      	}}/>
      	<Route path="/login" component={Login} />
      	<Route path="/users" component={()=>{
      		return <h1>Hello</h1>
      	}} />
        <Route path="/add_user" component={()=>{
          
          return <Users sidebar={sidebarcomponent} footer={footerComponent} header={headercomponent}/>
        }} />

        <Route path="/list_user" component={()=>{
          
          return <ListUsers sidebar={sidebarcomponent} footer={footerComponent} header={headercomponent}/>
        }} />
      </Route>
    </Switch>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();