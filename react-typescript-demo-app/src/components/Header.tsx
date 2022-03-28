import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Link to="/">Generic ScreenLoad</Link>
      <Link to="/login">Login 
      Click
      </Link>
      {/* <Link to='/Checkout/Payment'>Membership</Link> */}
      <Link to="/Checkout">Checkout</Link>
    </header>
  );
};

export default React.memo(Header);
