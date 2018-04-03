// @flow
import React from 'react';
import { Link } from 'react-router-dom';

import navImg from './assets/IMG_0104.jpg';
import buttonImg from './assets/IMG_0105.jpg';
import carrouselImg from './assets/IMG_0106.jpg';

const Components = () => (
  <div className="page">
    <header>
      <h1>Componentes</h1>
    </header>
    <main>
      <h2>Conoce los componentes</h2>
      <article className="home__components">
        <Link to="/navbar" href="/navbar">
          <img src={navImg} alt="Navbar Logo" />
        </Link>
        <Link to="/button" href="/button">
          <img src={buttonImg} alt="Button Logo" />
        </Link>
        <Link to="/carrousel" href="/carrousel">
          <img src={carrouselImg} alt="Carrousel Logo" />
        </Link>
      </article>
    </main>
  </div>
);

export default Components;
