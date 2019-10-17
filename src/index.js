import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Home from "./components/Home.js";
import SideNavigation from "./components/sidebar.js";
import * as serviceWorker from "./serviceWorker";
import {
  Route,
  Redirect,
  Link,
  BrowserRouter as Router,
  Switch
} from "react-router-dom";
import Login from "./components/login";
import AddUsers from "./components/add_users";
import ListUsers from "./components/list_users";
import Header from "./components/header.js";
import Scripts from "./components/script.js";
import Footer from "./components/footer";
import Quicksidebar from "./components/quicksidebar";
import Dashboard from "./components/dashboard";
import ContentMasterList from "./components/content_master_list";
import ContentMasterAdd from "./components/content_master_add";
import AddPortal from "./components/add_portal";
import ListPortal from "./components/list_portal";
import ContentPortalMapping from "./components/content_portal_mapping";
import ReviewContent from "./components/review_content";
import ContentCategoryAdd from "./components/content_category_add";
import SubscriptionAdd from "./components/subscription_add";
import SubscriptionPlans from "./components/subscription_plans";
import FeatureAdd from "./components/feature_add";
import FeatureList from "./components/feature_list";
import CouponAdd from "./components/coupon_add";
import CouponList from "./components/coupon_list";
import CouponMap from "./components/coupon_map";
import Profile from "./components/profile";
import Orders from "./components/orders";
import Support from "./components/support"

import "@fortawesome/fontawesome-free/css/all.min.css";
import "mdbreact/dist/css/mdb.css";

import axios from "./axios";

var sidebarcomponent = <SideNavigation />;
var headercomponent = <Header />;
var footerComponent = <Footer />;

function Loader(props) {
  return <div>Loading...</div>;
}

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = { loading: false };
  }

  render() {
    return (
      <div>
        {this.props.loader ? <Loader /> : null}
        <Router>
          <Switch>
            <Route path="/" component={App}>
              <Route
                exact
                path="/"
                component={() => {
                  const isLogged = axios.isLoggedIn();
                  if (!isLogged) return <Login />;
                  return <Home />;
                }}
              />
              <Route path="/login" component={Login} />
              <Route
                path="/users"
                component={() => {
                  return <h1>Hello</h1>;
                }}
              />
              <Route
                path="/add_user"
                component={() => {
                  return (
                    <AddUsers
                      sidebar={sidebarcomponent}
                      footer={footerComponent}
                      header={headercomponent}
                    />
                  );
                }}
              />

              <Route
                path="/list_user"
                component={() => {
                  return (
                    <ListUsers
                      sidebar={sidebarcomponent}
                      footer={footerComponent}
                      header={headercomponent}
                    />
                  );
                }}
              />

              <Route
                path="/content_master_list"
                component={() => {
                  return (
                    <ContentMasterList
                      sidebar={sidebarcomponent}
                      footer={footerComponent}
                      header={headercomponent}
                    />
                  );
                }}
              />
              <Route
                path="/content_master_add"
                component={() => {
                  return (
                    <ContentMasterAdd
                      sidebar={sidebarcomponent}
                      footer={footerComponent}
                      header={headercomponent}
                    />
                  );
                }}
              />
              <Route
                path="/add_portal"
                component={() => {
                  return (
                    <AddPortal
                      sidebar={sidebarcomponent}
                      footer={footerComponent}
                      header={headercomponent}
                    />
                  );
                }}
              />
              <Route
                path="/list_portal"
                component={() => {
                  return (
                    <ListPortal
                      sidebar={sidebarcomponent}
                      footer={footerComponent}
                      header={headercomponent}
                    />
                  );
                }}
              />
              <Route
                path="/content_portal_mapping"
                component={() => {
                  return (
                    <ContentPortalMapping
                      sidebar={sidebarcomponent}
                      footer={footerComponent}
                      header={headercomponent}
                    />
                  );
                }}
              />
              <Route
                path="/review_content"
                component={() => {
                  return (
                    <ReviewContent
                      sidebar={sidebarcomponent}
                      footer={footerComponent}
                      header={headercomponent}
                    />
                  );
                }}
              />
              <Route
                path="/content_category_add"
                component={() => {
                  return (
                    <ContentCategoryAdd
                      sidebar={sidebarcomponent}
                      footer={footerComponent}
                      header={headercomponent}
                    />
                  );
                }}
              />
              <Route
                path="/subscription_add"
                component={() => {
                  return (
                    <SubscriptionAdd
                      sidebar={sidebarcomponent}
                      footer={footerComponent}
                      header={headercomponent}
                    />
                  );
                }}
              />
              <Route
                path="/subscription_plans"
                component={() => {
                  return (
                    <SubscriptionPlans
                      sidebar={sidebarcomponent}
                      footer={footerComponent}
                      header={headercomponent}
                    />
                  );
                }}
              />
              <Route
                path="/feature_add"
                component={() => {
                  return (
                    <FeatureAdd
                      sidebar={sidebarcomponent}
                      footer={footerComponent}
                      header={headercomponent}
                    />
                  );
                }}
              />
              <Route
                path="/feature_list"
                component={() => {
                  return (
                    <FeatureList
                      sidebar={sidebarcomponent}
                      footer={footerComponent}
                      header={headercomponent}
                    />
                  );
                }}
              />
              <Route
                path="/coupon_add"
                component={() => {
                  return (
                    <CouponAdd
                      sidebar={sidebarcomponent}
                      footer={footerComponent}
                      header={headercomponent}
                    />
                  );
                }}
              />
              <Route
                path="/coupon_list"
                component={() => {
                  return (
                    <CouponList
                      sidebar={sidebarcomponent}
                      footer={footerComponent}
                      header={headercomponent}
                    />
                  );
                }}
              />
              <Route
                path="/coupon_map"
                component={() => {
                  return (
                    <CouponMap
                      sidebar={sidebarcomponent}
                      footer={footerComponent}
                      header={headercomponent}
                    />
                  );
                }}
              />
              <Route
                path="/profile"
                component={() => {
                  return (
                    <Profile
                      sidebar={sidebarcomponent}
                      footer={footerComponent}
                      header={headercomponent}
                    />
                  );
                }}
              />

              <Route
                path="/orders"
                component={() => {
                  return (
                    <Orders
                      sidebar={sidebarcomponent}
                      footer={footerComponent}
                      header={headercomponent}
                    />
                  );
                }}
              />
              <Route
                path="/support"
                component={() => {
                  return (
                    <Support
                      sidebar={sidebarcomponent}
                      footer={footerComponent}
                      header={headercomponent}
                    />
                  );
                }}
              />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
