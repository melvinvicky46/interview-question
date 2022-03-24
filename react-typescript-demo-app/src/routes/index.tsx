import React from "react";
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";

import GenericScreenLoad from '../components/GenericScreenLoad';
import LoginScreenLoad from '../components/LoginScreenLoad';
import MembershipScreenLoad from '../components/MembershipScreenLoad';
import CheckoutCart from '../components/CheckoutCart';

const Routes = () => {
  return (
    <BrowserRouter>
        <Switch>
          <Route exact path="/" component={GenericScreenLoad}/>
          <Route path="/login" component={LoginScreenLoad} />
          <Route path="/Membership" component={MembershipScreenLoad} />
          <Route path="/checkout" component={CheckoutCart} />
          {/* <Route path="*" component={NotFound} /> */}
        </Switch>
    </BrowserRouter>
  );
}

export default Routes;