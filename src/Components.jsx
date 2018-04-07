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
      <p>
        Hay dos componentes dentro de este sitio web que no se han publicado de forma oficial porque
        se encuentran en estado alfa, pero que si eres observador ya los habrás notado:
      </p>
      <ul>
        <li>
          <p>
            <strong>Code:</strong> Es el componente que se usar para mostrar el código con estilos
            similares a los de un editor de texto. El cual usa el motor de Prismjs, pero con algunas
            mejoras.
          </p>
        </li>
        <li>
          <p>
            <strong>Always On Top:</strong> Este componente es más pre alfa que otra cosa, porque su
            función, es arrastrar un elemento por la pantalla mientras hacemos scroll sin importar
            las dimensiones del componente que queramos arrastrar. Inclusive, poner un tope es
            posible.
          </p>
        </li>
      </ul>
    </main>
  </div>
);

export default Components;
