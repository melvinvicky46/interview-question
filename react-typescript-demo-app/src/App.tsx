import React, { useEffect, useState } from "react";
import { withRouter, Switch, Route } from "react-router-dom";
import GenericScreenLoad from './components/GenericScreenLoad';
import LoginScreenLoad from './components/LoginScreenLoad';
import PaymentInformationCheckout from './components/Checkout/Payment/PaymentInformationCheckout';
import PaymentScreenLoad from './components/Checkout/Payment/PaymentScreenLoad';
import CheckoutCart from './components/Checkout/CheckoutCart';
import Header from './components/Header';
import './App.css';
import { connect } from 'react-redux';
import { checkRoute } from './redux';

// Detect the global window object
declare global {
    interface Window { adobeDataLayer: any; }
}
window.adobeDataLayer = window.adobeDataLayer || [];

function App(props: any) {
  const { location, checkStatus } = props;
  const [currentPath, setCurrentPath] = useState(location.pathname);

  useEffect(() => {
    if (location.pathname !== currentPath) {
      props.checkRoute("screenload");
    } else {
      props.checkRoute("pageload");
    }
    setCurrentPath(location.pathname);
  }, [location.pathname]);

  return (
    <div className="App">
      <Header />
      <div className="p-1">
        <div className="alert alert-info mt-1" role="alert">
          Current path: {currentPath} <br />
          Screen type: { checkStatus }
        </div>
      </div>
      <Switch>
        <Route exact path="/" component={GenericScreenLoad}/>
        <Route path="/login" component={LoginScreenLoad} />
        <Route path="/Check@out/Payment" component={PaymentInformationCheckout} />
        <Route path="/Checkout" component={CheckoutCart} />
        {/* <Route path="*" component={NotFound} /> */}
      </Switch>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    checkStatus: state.routeChange.checkStatus
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    checkRoute: (type: any) => dispatch(checkRoute(type))
  }
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(App))
