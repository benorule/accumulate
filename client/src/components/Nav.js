import React from "react";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <div>
      <section className="hero is-primary">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">Accumulate</h1>
            <h2 className="subtitle">Personal Finance</h2>
          </div>
        </div>
      </section>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <div className="navbar-item">
            <NavLink to="/">Track</NavLink>
          </div>
          <div className="navbar-item">
            <NavLink to="/set">Set</NavLink>
          </div>
          <div className="navbar-item">
            <NavLink to="/signin">Sign in</NavLink>
          </div>
          <div className="navbar-item">
            <NavLink to="/signup">Signup</NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;