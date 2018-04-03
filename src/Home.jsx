// @flow
import React from 'react';
import { Link } from 'react-router-dom';

import navImg from './assets/IMG_0104.jpg';
import buttonImg from './assets/IMG_0105.jpg';
import carrouselImg from './assets/IMG_0106.jpg';

const Home = () => (
  <div className="page">
    <header>
      <p className="home__introduce">Te presentamos</p>
      <h1>React Basics</h1>
      <p className="home__subtitle">Un suite de componentes básicos de React construidos para ti</p>
    </header>
    <main className="home__main">
      <p>
        <strong>Una meta:</strong> Cualquier desarrollador pueda construir su sitio / aplicación web
        usando sólo React Basics.
      </p>
      <br />
      <p><strong>Tres maneras en que lo logramos:</strong></p>
      <div className="home__ways">
        <article>
          <h3>Sencillez</h3>
          <p>
            Todos los componentes están construidos con la menor cantidad de líneas de
            código posible, esto con la finalidad de hacerlos muy fácil de debuggear; y
            si quieres aprender, puedas ver cláramente cómo funcionan en su código fuente.
          </p>
          <p>Todo esto, sin perder las mejores prácticas posibles en el código.</p>
        </article>
        <article>
          <h3>Optimización</h3>
          <p>CSS por sobre JS</p>
          <p>
            Esa es la filosofía de los componentes que se construyen para React Basics.
            Si algo se puede hacer con puro CSS, se usa sólo CSS, esto porque los
            navegadores optimizan CSS para usar el GPU del computador y resulta en unas
            animaciones muy fluidas.
          </p>
          <p>
            También algunos componentes cuentan con definiciones de Schema.org, con la
            finalidad de otorgar una estructura amigable con el SEO del sitio entero.
          </p>
        </article>
        <article>
          <h3>Personalización</h3>
          <p>
            React Basics cree en la idea sobre que el diseñador / desarrollador debe tener
            absoluto control sobre lo que crea, pudiéndose involucrar desde la idea principal
            hasta la concepción de la misma. Por ello, los componentes son creados pensados
            como lienzos en blanco donde se pueden transformar a voluntad y por ello,
            casi todos están listos para recibir nuevos estilos o aprovechar la nomenclatura
            BEM que se utiliza en los componentes.
          </p>
        </article>
      </div>
    </main>
    <div>
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
    </div>
  </div>
);

export default Home;
