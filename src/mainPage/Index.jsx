import React from 'react';

import './normalize.css';
import Nav from '../Nav';

const { log } = console;

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
        size: 'medium',
        placeholder: 'Presiona Enter para buscar',
        onChange(value) {
          log(value);
        },
        onSubmit(value) {
          log(value);
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
