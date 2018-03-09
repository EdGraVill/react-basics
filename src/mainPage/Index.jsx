import React from 'react';

import './normalize.css';
import Nav from '../Nav';

const Index = () => (
  <div>
    <Nav
      brand={{
        name: 'React Basics',
        icon: 'react',
      }}
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
      }]}
      search={{
        size: 'small',
        placeholder: 'Presiona Enter para buscar',
        onChange(value) {
          console.log(value);
        },
        onSubmit(value) {
          console.log(value);
        },
      }}
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
