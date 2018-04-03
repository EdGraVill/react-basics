// @flow
import React from 'react';

import buttonImg from './assets/IMG_0105.jpg';

const Button = () => (
  <div className="page">
    <header>
      <h1 className="hidden">Button</h1>
      <img className="logo" src={buttonImg} alt="Button logo" />
    </header>
    <main>
      <p>This is under develop. Please visit <a href="https://github.com/EdGraVill/rb-buttons">Button Repository to see documentation</a></p>
    </main>
  </div>
);

export default Button;
