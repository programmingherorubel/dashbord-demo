import React from "react";
import { Link, Outlet } from "react-router-dom";

function Dashbord() {
  return (
    <div style={{display:'flex'}}>
      <div>
        <div className="menu">
          <Link to="/dashbord/market">Market</Link> <br />
          <Link to="/dashbord/hotel">Hotel</Link>
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default Dashbord;
