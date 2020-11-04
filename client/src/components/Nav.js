import React from "react";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <div>
      <section class="hero is-primary">
        <div class="hero-body">
          <div class="container">
            <h1 class="title">Accumulate</h1>
            <h2 class="subtitle">Personal Finance</h2>
          </div>
        </div>
      </section>
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <a class="navbar-item">
            <NavLink to="/">Track</NavLink>
          </a>
          <a class="navbar-item">
            <NavLink to="/set">Set</NavLink>
          </a>
          <a class="navbar-item">
            <NavLink to="/signin">Sign in</NavLink>
          </a>
          <a class="navbar-item">
            <NavLink to="/signup">Signup</NavLink>
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Nav;