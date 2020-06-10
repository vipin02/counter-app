import React from "react";
import { Badge } from "react-bootstrap";

// Stateless Functional Component
const NavBar = ({ totalCounters }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="navbar-brand">
        <i className="fa fa-shopping-cart fa-lg m-2" aria-hidden="true" />
        <Badge pill variant="primary" style={{ width: 50 }} className="m-2">
          {totalCounters}
        </Badge>
        Items
      </div>
    </nav>
  );
};

export default NavBar;
