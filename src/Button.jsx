import React, { Component } from 'react';
import Button from 'rb-buttons';
import Prism from './Prism';

import buttonImg from './assets/IMG_0105.jpg';

class ButtonPage extends Component {
  state = {
    spinnerButton: false,
    textSpinnerButton: false,
    fillerButton: false,
    fillerNumberButton: 0.5,
    buttonActive: true,
    textButtonLoading: false,
    textButtonLoaded: false,
    styleButtonLoading: false,
    styleButtonLoaded: false,
    styleButtonLucky: 0,
  }

  render() {
    return (
      <div className="page">
        <header>
          <h1 className="hidden">Button</h1>
          <img className="logo" src={buttonImg} alt="Button logo" />
        </header>
        <main>
          <article>
            <p>
              If you are searching for an english guide, please go to{' '}
              <a href="https://github.com/EdGraVill/rb-buttons" target="_blank" rel="noopener noreferrer">https://github.com/EdGraVill/rb-buttons</a>
            </p>
          </article>
          <article>
            <h2>Instalación</h2>
            <p>En el directorio raiz de tu proyecto, ejecuta el siguiente comando:</p>
            <p><strong>npm</strong></p>
            <Prism language="powershell">
              {`
npm i -P rb-buttons
              `}
            </Prism>
            <p><strong>yarn</strong></p>
            <Prism language="powershell">
              {`
yarn add rb-buttons
              `}
            </Prism>
            <p>
              El componente Button está construido para poder recibir constantes
              cambios y se adapte justo a las necesidades del desarrollador.
            </p>
          </article>
          <article>
            <h2>Implementación</h2>
            <p>
              Para implementarlo, primero debemos importar el componente a nuestro código:
            </p>
            <Prism language="jsx" lineHighlight="2">
              {`
import React from 'react';
import Button from 'rb-buttons';

// Básicamente se llama rb-buttons por dos razones:
//
// 1. Aunque es un botón, puede tomar diferentes formas,
//    tanto que parecen varios botones en uno.
//
// 2. rb-button ya estaba ocupado :( como nombre de un
//    paquete en npm.
              `}
            </Prism>
            <p>
              Y Para explicar la implementación, primero hay que entender que un mismo botón
              tiene diferentes tipos:
            </p>
            <div className="button__exampleContainer">
              <h3>Tipo <pre>spinner</pre> <strong><small>Default</small></strong></h3>
              <Button
                loading
                onClick={() => {}}
                style={{ margin: '1rem auto' }}
                text="Botón"
              />
              <div className="button__example">
                <div>
                  <p>
                    Este es el más sencillo de todos. Porque el tipo de loading es el
                    predeterminado.
                  </p>
                  <p>Presiona el botón para ver cómo funciona:</p>
                  <Button
                    loading={this.state.spinnerButton}
                    onClick={() => this.setState({ spinnerButton: !this.state.spinnerButton })}
                    text="Spinner"
                  />
                </div>
                <aside>
                  <Prism language="jsx" lineHighlight="11-15">
                    {`
this.state = {
  spinnerButton: ${this.state.spinnerButton ? 'true' : 'false'}
}

function onClick() {
  this.setState({
    spinnerButton: !this.state.spinnerButton,
  });
}

<Button
  loading={this.state.spinnerButton}
  onClick={onClick}
  text="spinner"
/>
                    `}
                  </Prism>
                </aside>
              </div>
            </div>
            <div className="button__exampleContainer">
              <h3>Tipo <pre>textSpinner</pre></h3>
              <Button
                loading
                loadingType="textSpinner"
                onClick={() => {}}
                style={{ margin: '1rem auto' }}
                text="Botón"
              />
              <div className="button__example">
                <div>
                  <p>
                    Similar al tipo spinner, sólo que en lugar de convertir el botón entero
                    en un spinner, en éste, es sólo el texto el que se convierte en un spinner.
                  </p>
                  <p>Presiona el botón para ver cómo funciona:</p>
                  <Button
                    loading={this.state.textSpinnerButton}
                    loadingType="textSpinner"
                    onClick={() => this.setState({
                      textSpinnerButton: !this.state.textSpinnerButton,
                    })}
                    text="textSpinner"
                  />
                </div>
                <aside>
                  <Prism language="jsx" lineHighlight="11-16">
                    {`
this.state = {
  textSpinnerButton: ${this.state.textSpinnerButton ? 'true' : 'false'}
}

function onClick() {
  this.setState({
    spinnerButton: !this.state.textSpinnerButton,
  });
}

<Button
  loading={this.state.textSpinnerButton}
  loadingType="textSpinner"
  onClick={onClick}
  text="textSpinner"
/>
                    `}
                  </Prism>
                </aside>
              </div>
            </div>
            <div className="button__exampleContainer">
              <h3>Tipo <pre>filler</pre></h3>
              <Button
                loading
                loadingType="filler"
                onClick={() => {}}
                style={{ margin: '1rem auto' }}
                text="Botón"
              />
              <div className="button__example">
                <div>
                  <p>
                    Este botón rellena su contenido con una capa alpha que ilumina
                    el botón de izquierda a derecha.
                  </p>
                  <p>Presiona el botón para ver cómo funciona:</p>
                  <Button
                    loading={this.state.fillerButton}
                    loadingType="filler"
                    onClick={() => this.setState({ fillerButton: !this.state.fillerButton })}
                    text="filler"
                  />
                </div>
                <aside>
                  <Prism language="jsx" lineHighlight="11-16">
                    {`
this.state = {
  fillerButton: ${this.state.fillerButton ? 'true' : 'false'}
}

function onClick() {
  this.setState({
    spinnerButton: !this.state.fillerButton,
  });
}

<Button
  loading={this.state.fillerButton}
  loadingType="filler"
  onClick={onClick}
  text="filler"
/>
                    `}
                  </Prism>
                </aside>
              </div>
              <div className="button__example">
                <div>
                  <p>
                    Al ser una capa alpha que rellena el botón, también se puede controlar
                    la cantidad rellenada, en lugar de sólo pasar un <span className="token boolean">true</span>
                    {' '}o <span className="token boolean">false</span>, pasando un número
                    entre 0 y 1.
                  </p>
                  <p>Desliza el input para ver cómo funciona:</p>
                  <Button
                    loading={this.state.fillerNumberButton}
                    loadingType="filler"
                    onClick={() => {
                      this.setState({
                        fillerNumberButton: this.state.fillerNumberButton ? false : 0.5,
                      });
                    }}
                    text={this.state.fillerNumberButton ? `${this.state.fillerNumberButton * 100}%` : '0%'}
                  />
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.0001"
                    onChange={(event) => {
                      const { value } = event.target;

                      this.setState({ fillerNumberButton: Number(value) });
                    }}
                    value={this.state.fillerNumberButton}
                  />
                </div>
                <aside>
                  <Prism language="jsx" lineHighlight="18-24">
                    {`
this.state = {
  fillerNumberButton: ${this.state.fillerNumberButton}
}

function onClick() {
  this.setState({
    fillerNumberButton: this.state.fillerNumberButton ? false : 0.5,
  });
}

function onChange(event) {
  const { value } = event.target;

  this.setState({ fillerNumberButton: Number(value) });
}

<Button
  loading={this.state.fillerNumberButton}
  loadingType="filler"
  onClick={onClick}
  text={this.state.fillerNumberButton ? \`\${this.state.fillerNumberButton * 100}%\` : '0%'}
/>

<input
  type="range"
  min="0"
  max="1"
  step="0.0001"
  onChange={onChange}
  value={this.state.fillerNumberButton}
/>
                    `}
                  </Prism>
                </aside>
              </div>
            </div>
            <p>
              Además de modificar y presentar los diferentes tipos, podemos jugar un poco más
              con otras props y obtener varios resultados con un mismo componente de Button.
            </p>
            <p>Como por ejemplo:</p>
            <h3>Activo o Inactivo</h3>
            <p>
              Se puede desactivar el botón de una forma segura, mediante CSS para evitar que
              el usuario realice una acción inesperada.
            </p>
            <Button
              active={this.state.buttonActive}
              onClick={() => this.setState({ buttonActive: !this.state.buttonActive })}
              style={this.state.buttonActive ? {} : { backgroundColor: '#ecf0f1', color: '#7f8c8d' }}
              text={this.state.buttonActive ? 'Presióname :)' : 'Desactivado :('}
            />
            {!this.state.buttonActive && (
              <Button
                onClick={() => this.setState({ buttonActive: true })}
                text="Activar de nuevo ;)"
              />
            )}
            <Prism language="jsx" lineHighlight="26-31">
              {`
this.state = {
  buttonActive: ${this.state.buttonActive ? 'true' : 'false'}
}

function onClick() {
  this.setState({
    buttonActive: !this.state.buttonActive,
  });
}

<input
  type="range"
  min="0"
  max="1"
  step="0.0001"
  onChange={onChange}
  value={this.state.fillerNumberButton}
/>

const style = this.state.buttonActive ?
  {} : { backgroundColor: '#ecf0f1', color: '#7f8c8d' };

const text = this.state.buttonActive ?
  'Presióname :)' : 'Desactivado :(';

<Button
  active={this.state.buttonActive}
  onClick={onClick}
  style={style}
  text={text}
/>
              `}
            </Prism>
            <h3>Texto dinámico</h3>
            <p>
              También es posible declarar un texto diferente para cuando el botón
              está normal, está cargando y ha cargado. Todo eso sin preocuparse de
              la lógica boleana común.
            </p>
            <Button
              loaded={this.state.textButtonLoaded}
              loadedText="Se cargó :)"
              loading={this.state.textButtonLoading}
              loadingText="Cargando..."
              loadingType="filler"
              onClick={() => {
                if (this.state.textButtonLoaded) {
                  this.setState({
                    textButtonLoading: false,
                    textButtonLoaded: false,
                  });
                } else {
                  this.setState({
                    textButtonLoading: true,
                  }, () => {
                    setTimeout(() => {
                      this.setState({
                        textButtonLoaded: true,
                      });
                    }, 3000);
                  });
                }
              }}
              text="Presióname"
            />
            <p>
              Esto sólo es posible en los loading types <strong>filler</strong> y
              {' '}<strong>text</strong>. Esto es algo obvio, porque en los otros
              dos, pues... sencillamente no hay texto.
            </p>
            <Prism language="jsx" lineHighlight="18-25">
              {`
this.state = {
  textButtonLoaded: ${this.state.textButtonLoaded ? 'true' : 'false'}
  textButtonLoading: ${this.state.textButtonLoading ? 'true' : 'false'}
}

function onClick() {
  this.setState({
    textButtonLoading: true,
  }, () => {
    setTimeout(() => {
      this.setState({
        textButtonLoaded: true,
      });
    }, 3000);
  });
}

<Button
  loaded={this.state.textButtonLoaded}
  loadedText="Se cargó :)"
  loading={this.state.textButtonLoading}
  loadingText="Cargando..."
  loadingType="filler"
  text="Presióname"
/>
              `}
            </Prism>
            <h3>Estilos dinámicos</h3>
            <p>
              Así como se pueden declarar diferentes textos para diferentes
              situaciones, lo mismo se puede hacer con los estilos, aunque
              estos si, pueden aplicarse para todos los tipos de botones.
            </p>
            <p>
              En el siguiente ejemplo, digamos que estamos esperando saber
              si hemos hecho algo bien o mal:
            </p>
            <Button
              loaded={this.state.styleButtonLoaded}
              loadedStyle={this.state.styleButtonLucky ? {
                backgroundColor: '#2ecc71',
                color: '#fff',
              } : {
                backgroundColor: '#e74c3c',
                color: '#fff',
              }}
              loadedText={this.state.styleButtonLucky ? 'Ganaste :)' : 'Perdiste :('}
              loading={this.state.styleButtonLoading}
              loadingStyle={{
                borderLeftColor: '#f1c40f',
                borderRightColor: '#f1c40f',
              }}
              onClick={() => {
                if (this.state.styleButtonLoaded) {
                  this.setState({
                    styleButtonLoaded: false,
                    styleButtonLoading: false,
                  });
                } else {
                  this.setState({
                    styleButtonLoading: true,
                  }, () => {
                    setTimeout(() => {
                      this.setState({
                        styleButtonLoaded: true,
                        styleButtonLucky: Math.round(Math.random()),
                      });
                    }, 3000);
                  });
                }
              }}
              text="Presióname"
            />
            <Prism language="jsx" lineHighlight="20-37">
              {`
this.state = {
  styleButtonLoaded: ${this.state.styleButtonLoaded ? 'true' : 'false'}
  styleButtonLoading: ${this.state.styleButtonLoading ? 'true' : 'false'}
  styleButtonLucky: ${this.state.styleButtonLucky}
}

function onClick() {
  this.setState({
    styleButtonLoading: true,
  }, () => {
    setTimeout(() => {
      this.setState({
        styleButtonLoaded: true,
        styleButtonLucky: Math.round(Math.random()),
      });
    }, 3000);
  });
}

<Button
  loaded={this.state.styleButtonLoaded}
  loadedStyle={this.state.styleButtonLucky ? {
    backgroundColor: '#2ecc71',
    color: '#fff',
  } : {
    backgroundColor: '#e74c3c',
    color: '#fff',
  }}
  loadedText={this.state.styleButtonLucky ? 'Ganaste :)' : 'Perdiste :('}
  loading={this.state.styleButtonLoading}
  loadingStyle={{
    borderLeftColor: '#f1c40f',
    borderRightColor: '#f1c40f',
  }}
  onClick={onClick}
  text="Presióname"
/>
              `}
            </Prism>
          </article>
          <article>
            <h2>API</h2>
            <p>El ejemplo de cómo están declaradas las props con flowtype es el siguiente</p>
            <Prism language="jsx">
              {`
// @flow

type PropsType = {
  active?: boolean,
  loaded?: boolean,
  loadedStyle?: Object,
  loadedText?: string,
  loading?: boolean | number,
  loadingStyle?: Object,
  loadingText?: string,
  loadingType?: 'spinner' | 'textSpinner' | 'filler' | 'text',
  onClick: () => any,
  style?: Object,
  text: string,
};
              `}
            </Prism>
            <p>En la siguiente lista, se podrán encontrar todas las props soportadas.</p>
            <h3><pre>active</pre> Prop</h3>
            <div className="center">
              <pre>Requerido: <span className="token boolean">false</span></pre>
              <pre>Tipo: <span className="token tag">boolean</span></pre>
              <pre>Default: <span className="token boolean">true</span></pre>
            </div>
            <p>
              Prop que determina si el botón recibe la acción de click.
            </p>
            <h3><pre>loaded</pre> Prop</h3>
            <div className="center">
              <pre>Requerido: <span className="token boolean">false</span></pre>
              <pre>Tipo: <span className="token tag">boolean</span></pre>
              <pre>Default: <span className="token boolean">false</span></pre>
            </div>
            <p>
              Prop que determina si el botón ha terminado de cargar.
            </p>
            <h3><pre>loadedStyle</pre> Prop</h3>
            <div className="center">
              <pre>Requerido: <span className="token boolean">false</span></pre>
              <pre>Tipo: <span className="token tag">Object</span></pre>
              <pre>Default: <span className="token punctuation">{'{}'}</span></pre>
            </div>
            <p>
              Estilo del botón si ha terminado de cargar. Determinado por el <span className="code">loaded</span> prop.
            </p>
            <h3><pre>loadedText</pre> Prop</h3>
            <div className="center">
              <pre>Requerido: <span className="token boolean">false</span></pre>
              <pre>Tipo: <span className="token tag">string</span></pre>
              <pre>Default: <span className="token attr-value">{'\'\''}</span></pre>
            </div>
            <p>
              Texto del botón si ha terminado de cargar. Determinado por el <span className="code">loaded</span> prop.
              Sólo funciona en filler o text <span className="code">loadingType</span> prop.
            </p>
            <h3><pre>loading</pre> Prop</h3>
            <div className="center">
              <pre>Requerido: <span className="token boolean">false</span></pre>
              <pre>Tipo: <span className="token tag">boolean</span></pre>
              <pre>Default: <span className="token boolean">false</span></pre>
            </div>
            <p>
              Prop que determina si el botón se encuentra cargando y debe desplegar la animación.
            </p>
            <h3><pre>loadingStyle</pre> Prop</h3>
            <div className="center">
              <pre>Requerido: <span className="token boolean">false</span></pre>
              <pre>Tipo: <span className="token tag">Object</span></pre>
              <pre>Default: <span className="token punctuation">{'{}'}</span></pre>
            </div>
            <p>
              Estilo del botón si se encuentra cargando. Determinado por el <span className="code">loaded</span> prop.
            </p>
            <h3><pre>loadingText</pre> Prop</h3>
            <div className="center">
              <pre>Requerido: <span className="token boolean">false</span></pre>
              <pre>Tipo: <span className="token tag">string</span></pre>
              <pre>Default: <span className="token attr-value">{'\'\''}</span></pre>
            </div>
            <p>
              Texto del botón si se encuentra cargando. Determinado por el <span className="code">loaded</span> prop.
              Sólo funciona en filler o text <span className="code">loadingType</span> prop.
            </p>
            <h3><pre>loadingType</pre> Prop</h3>
            <div className="center">
              <pre>Requerido: <span className="token boolean">false</span></pre>
              <pre>Tipo: <span className="token tag">string</span></pre>
              <pre>Default: <span className="token attr-value">{'\'spinner\''}</span></pre>
            </div>
            <p>
              Prop que define qué tipo de animación se despliega si el botón se encuentra cargando.
              Pudiendo ser: <span className="code token attr-value">{'\'spinner\''}</span>
              {' '}<span className="code token attr-value">{'\'textSpinner\''}</span>
              {' '}<span className="code token attr-value">{'\'filler\''}</span>
              {' '}<span className="code token attr-value">{'\'text\''}</span>
            </p>
            <div className="center">
              <Button
                loading
                loadingType="spinner"
                onClick={() => {}}
                text="spinner"
              />
              <Button
                loading
                loadingType="textSpinner"
                onClick={() => {}}
                text="textSpinner"
              />
              <Button
                loading
                loadingType="filler"
                onClick={() => {}}
                text="filler"
              />
              <Button
                loading
                loadingType="text"
                onClick={() => {}}
                text="text"
              />
            </div>
            <h3><pre>onClick</pre> Prop</h3>
            <div className="center">
              <pre>Requerido: <span className="token boolean">true</span></pre>
              <pre>Tipo: <span className="token tag">Function</span></pre>
              <pre>Default: <span className="token comment">undefined</span></pre>
            </div>
            <p>
              Función que se ejecuta cuando el usuario da click al botón.
            </p>
            <h3><pre>style</pre> Prop</h3>
            <div className="center">
              <pre>Requerido: <span className="token boolean">false</span></pre>
              <pre>Tipo: <span className="token tag">Object</span></pre>
              <pre>Default: <span className="token punctuation">{'{}'}</span></pre>
            </div>
            <p>
              Estilo del botón cuando se encuentra normal.
            </p>
            <h3><pre>text</pre> Prop</h3>
            <div className="center">
              <pre>Requerido: <span className="token boolean">true</span></pre>
              <pre>Tipo: <span className="token tag">string</span></pre>
              <pre>Default: <span className="token comment">undefined</span></pre>
            </div>
            <p>
              Texto para mostrar cuando el botón se encuentra normal, o si no existe
              ningún texto personalizado para loading o loaded.
            </p>
          </article>
          <article>
            <h2>Metas</h2>
            <p><input type="checkbox" disabled /> Integración con íconos (En desarrollo).</p>
            <p><input type="checkbox" disabled /> Soportar deslizamientos en el botón para realizar acciones.</p>
            <blockquote>
              <p>¿Buscas más? - Haz un pull request con tus propuestas ;)</p>
            </blockquote>
          </article>
          <article>
            <h2>Colaboradores</h2>
            <ul>
              <li><p>Eduardo Grajales Villanueva <a href="https://github.com/EdGraVill" target="_blank" rel="noopener noreferrer">@EdGraVill</a></p></li>
            </ul>
            <blockquote>
              <p>
                Si quieres colaborar con éste u otros, existentes o nuevo componente dentro de
                React Basics, primero haz un pull request o publica tu componente en tu perfil
                de github, después envíame un email a <a href="mailto:edgravill@gmail.com">edgravill@gmail.com</a>
              </p>
            </blockquote>
            <p>Si quieres enviar algún cambio, no olvides ejecutar el siguiente comando antes:</p>
            <p><strong>npm</strong></p>
            <Prism language="powershell">
              {`
npm run build
              `}
            </Prism>
            <p><strong>Yarn</strong></p>
            <Prism language="powershell">
              {`
yarn build
              `}
            </Prism>
            <p>Una vez que seas colaborador, no olvides estas 3 reglas:</p>
            <ol>
              <li>
                <p>
                  Respecto al versionamiento, se debe aumentar uno a la mayor <span className="code">N.x.x</span>,
                  si los cambios modifican las APIs directamente. La media <span className="code">x.N.x</span>
                  aumenta uno si los cambios representan alguna reestructura lógica o
                  cambios dentro de una API, sin cambiar su nombre. Y la menor <span className="code">x.x.N</span>
                  aumenta uno si los cambios sin insignificantes, arreglo de errores o
                  modificaciones a la documentación. De esta manera, todas las versiones
                  <span className="code">1.x.x</span> son compatibles entre sí, pero pierden
                  compatibilidad con por ejemplo las versiones <span className="code">2.x.x</span>.
                </p>
              </li>
              <li>
                <p>Crea el mejor componente y la mejor documentación que puedas.</p>
              </li>
              <li>
                <p>
                  Comparte este y otros React Basics con tus amigos desarrolladores.
                  Podría ser útil para ellos.
                </p>
              </li>
            </ol>
            <p>No olvides <a href="https://join.slack.com/t/react-basics/shared_invite/enQtMzM4MDMyNzM5NjgxLTMxYzcwMDMwYmNkZGIxNWFkZGZhMDVmNWU3OTQ3ZDhlYmZhOWU0NTkwMTdkNzg5ZTJhNWE3MDJlNTc3OGU4YjA" target="_blank" rel="noopener noreferrer">unirte a la discusión en Slack</a></p>
          </article>
          <article>
            <h2>Licencia</h2>
            <p>MIT License</p>
            <p>
              Copyright (c) 2018 Eduardo Grajales Villanueva
            </p>
            <p>
              Permission is hereby granted, free of charge, to any person obtaining a copy
              of this software and associated documentation files (the {'"Software"'}), to deal
              in the Software without restriction, including without limitation the rights
              to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
              copies of the Software, and to permit persons to whom the Software is furnished
              to do so, subject to the following conditions:
            </p>
            <p>
              The above copyright notice and this permission notice shall be included in all
              copies or substantial portions of the Software.
            </p>
            <p>
              THE SOFTWARE IS PROVIDED {'"AS IS"'}, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
              IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
              FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
              COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
              IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
              WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
            </p>
          </article>
        </main>
      </div>
    );
  }
}

export default ButtonPage;
