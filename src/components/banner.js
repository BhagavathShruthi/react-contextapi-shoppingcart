import React from 'react';
import { NavLink } from 'react-router-dom';
const Banner = (props) => {
  return (
    <div className="banner">
      <NavLink
        to="/products"
        className="banner-link"
        activeClassName="banner-link-active"
      >
        Products
      </NavLink>
      <NavLink
        to="/cart"
        className="banner-link"
        activeClassName="banner-link-active"
      >
        Cart ({props.itemCount})
      </NavLink>
    </div>
  );
};
export default Banner;
