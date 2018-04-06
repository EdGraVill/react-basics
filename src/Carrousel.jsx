import React from 'react';

import carrouselImg from './assets/IMG_0106.jpg';

const Carrousel = () => (
  <div className="page">
    <header>
      <h1 className="hidden">Carrousel</h1>
      <img className="logo" src={carrouselImg} alt="Carrousel logo" />
    </header>
    <main>
      <p>This is under develop. Please visit <a href="https://github.com/EdGraVill/rb-carrousel">Carrousel Repository to see documentation</a></p>
    </main>
  </div>
);

export default Carrousel;
