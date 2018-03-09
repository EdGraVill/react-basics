import React from 'react';

import './normalize.css';
import Nav from '../Nav';

const Index = () => (
  <div>
    <Nav
      links={[{
        href: '/',
        title: 'Inicio',
        icon: 'home',
      }, {
        href: '/componentes',
        title: 'Componentes',
        icon: 'cubes',
        links: [{
          href: '/nav',
          title: 'Nav',
          icon: 'th-large',
        }],
      }, {
        href: '/componentes',
        title: 'Componentes',
        icon: 'cubes',
        links: [{
          href: '/nav',
          title: 'Nav',
          icon: 'th-large',
        }],
      }]}
    />
    <header>
      React Basics
    </header>
    <main>
      For Common Cases
    </main>
  </div>
);

export default Index;
