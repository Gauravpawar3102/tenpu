import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  let activeStyle = {
    fontWeight: 700,
  };

  return (
    <div className="navbar-container w-full   flex justify-between bg-slate-50 p-4 items-center ">
      <div className="left-container text-2xl font-bold ">
        <div className="logo">Tenpu</div>
      </div>
      <div className="right-container  w-1/2">
        <ul className="list-container flex justify-around">
          <NavLink
            to="/"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            {' '}
            Home{' '}
          </NavLink>
          <NavLink
            to="/resume-builder"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            {' '}
            Resume-Builder{' '}
          </NavLink>{' '}
          <NavLink
            to="/email-generator"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            {' '}
            Email-generator{' '}
          </NavLink>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
