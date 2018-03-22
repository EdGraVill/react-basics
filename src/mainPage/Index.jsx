// @flow
import React, { Component } from 'react';

import './normalize.css';
import Nav from '../Nav';
import Button from '../Button';

const { log } = console;

type StateType = {
  username: string,
  name: string,
  logged: boolean,
};

class Index extends Component<{}, StateType> {
  state = {
    logged: false,
    username: 'foosername',
    name: 'Gordon Fooman',
  };

  render() {
    const { logged, username, name } = this.state;

    return (
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
            mediumPlaceholder: 'Buscar',
            onChange(value) {
              log(value);
            },
            onSubmit(value) {
              log(value);
            },
          }}
          userBox={{
            icon: logged ? 'user-circle' : 'sign-in-alt',
            text: logged ? name : 'Ingresar',
            box: logged ? () => (
              <div>
                <h3>Bienvenido {name}</h3>
                <span>Has iniciado como @{username}</span>
                <button onClick={() => this.setState({ logged: true })}>Salir</button>
              </div>
            ) : () => (
              <div>
                <input type="text" name="username" placeholder="Nombre de Usuario" />
                <input type="password" name="password" placeholder="Contraseña" />
                <button onClick={() => this.setState({ logged: true })}>
                  Ingresar
                </button>
              </div>
            ),
          }}
        />
        <header>
          React Basics
        </header>
        <main>
          For Common Cases
          <Button text="Hola" />
        </main>
      </div>
    );
  }
}

export default Index;
