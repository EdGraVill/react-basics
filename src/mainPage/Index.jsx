// @flow
import React, { Component } from 'react';

import './normalize.css';
import Nav from '../Nav';
import Button from '../Button';
import Carrousel, { Thumbnails } from '../Carrousel';

const { log } = console;
const { alert } = window;

type StateType = {
  username: string,
  name: string,
  logged: boolean,
  loaded: boolean,
  loading: boolean,
  range: number,
  images: number,
  position: number,
};

class Index extends Component<{}, StateType> {
  state = {
    logged: false,
    username: 'foosername',
    name: 'Gordon Fooman',
    loaded: false,
    loading: false,
    range: 0.5,
    images: 5,
    position: 0,
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
          <Button
            text="Botón"
            loaded={this.state.loaded}
            loading={this.state.loading}
            loadedStyle={{
              backgroundColor: 'lightgreen',
              color: 'green',
            }}
            onClick={() => {
              this.setState({ loading: !this.state.loading });
            }}
          />
          <Button
            text="Botón"
            loaded={this.state.loaded}
            loading={this.state.loading}
            loadingType="textSpinner"
            loadedStyle={{
              backgroundColor: 'lightgreen',
              color: 'green',
            }}
            onClick={() => {
              this.setState({ loaded: !this.state.loaded });
            }}
          />
          <Button
            text="Botón"
            loaded={this.state.loaded}
            loading={this.state.loading}
            loadingType="text"
            loadingText="Cargando..."
            loadedText="Cargado (:"
            loadedStyle={{
              backgroundColor: 'lightgreen',
              color: 'green',
            }}
            onClick={() => {
              this.setState({ loading: !this.state.loading });
            }}
          />
          <Button
            text="Botón"
            loaded={this.state.loaded}
            loading={this.state.loading}
            loadingType="filler"
            loadedStyle={{
              backgroundColor: 'lightgreen',
              color: 'green',
            }}
            onClick={() => {
              this.setState({ loaded: !this.state.loaded });
            }}
          />
          <Button
            text="Botón"
            loaded={this.state.loaded}
            loading={this.state.range}
            loadingType="filler"
            loadedStyle={{
              backgroundColor: 'lightgreen',
              color: 'green',
            }}
            onClick={() => {
              this.setState({ loading: !this.state.loading });
            }}
          />
          <input
            type="range"
            min="0"
            max="1"
            step="any"
            value={this.state.range}
            onChange={(event) => {
              this.setState({ range: Number(event.target.value) });
            }}
          />
          <p>Loading: {this.state.loading ? 'true' : 'false'}</p>
          <p>Loaded: {this.state.loaded ? 'true' : 'false'}</p>
          <Carrousel
            data={(() => {
              const data = [];
              for (let index = 0; index < this.state.images; index += 1) {
                data.push({
                  src: `https://source.unsplash.com/random/${index}`,
                  alt: `Image ${index + 1}`,
                  onClick: () => {
                    alert(`You pressed the ${index + 1}° image`);
                  },
                });
              }
              return data;
            })()}
            position={this.state.position}
            style={{
              height: 200,
              width: 500,
            }}
          >
            <Thumbnails
              onClick={position => this.setState({ position })}
            />
          </Carrousel>
          <p>Position: {this.state.position}</p>
          <div>
            <button
              onClick={() => {
                this.setState({ position: this.state.position - 1 });
              }}
            >
              Menos
            </button>
            <button
              onClick={() => {
                this.setState({ position: this.state.position + 1 });
              }}
            >
              Más
            </button>
          </div>
          <div>
            <button
              onClick={() => {
                this.setState({ images: this.state.images - 1 });
              }}
            >
              Quitar
            </button>
            <button
              onClick={() => {
                this.setState({ images: this.state.images + 1 });
              }}
            >
              Añadir
            </button>
          </div>
        </main>
      </div>
    );
  }
}

export default Index;
