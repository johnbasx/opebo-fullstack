import React from "react";

import { Route, Switch } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Services from "../pages/Services";
import SingleService from "../pages/SingleService";
import Signup from "../pages/Signup";
import Signin from "../pages/Login";
import Error from "../pages/ErrorPage";
import User from "../pages/User";
import Disclaimer from "../pages/Disclaimer";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import TermsAndConditions from "../pages/TermsAndConditions";
import CookiesPolicy from "../pages/CookiesPolicy";
import ReturnRefundPolicy from "../pages/ReturnRefundPolicy";
import EndUserLicense from "../pages/EndUserLicense";

function Routes() {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/about/' component={About} />
      <Route exact path='/services/' component={Services} />
      <Route exact path='/services/:serv' component={SingleService} />
      <Route exact path='/contact/' component={Contact} />
      <Route exact path='/signup/' component={Signup} />
      <Route exact path='/Signin/' component={Signin} />
      <Route exact path='/user/' component={User} />
      <Route exact path='/disclaimer/' component={Disclaimer} />
      <Route exact path='/privacypolicy/' component={PrivacyPolicy} />
      <Route exact path='/termsandconditions/' component={TermsAndConditions} />
      <Route exact path='/cookiespolicy/' component={CookiesPolicy} />
      <Route exact path='/returnrefundpolicy/' component={ReturnRefundPolicy} />
      <Route exact path='/enduserlicense/' component={EndUserLicense} />
      <Route component={Error} />
    </Switch>
  );
}

export default Routes;
