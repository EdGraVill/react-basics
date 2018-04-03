// @flow
import React from 'react';

import navImg from './assets/IMG_0104.jpg';

const Navbar = () => (
  <div className="page">
    <header>
      <h1 className="hidden">Navbar</h1>
      <img className="logo" src={navImg} alt="Navbar logo" />
    </header>
    <main>
      <p>This is under develop. Please visit <a href="https://github.com/EdGraVill/rb-navbar">Navbar Repository to see documentation</a></p>
    </main>
  </div>
);

export default Navbar;
