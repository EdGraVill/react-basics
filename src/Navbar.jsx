import React, { Component } from 'react';
import Nav from 'rb-navbar';
import { Route, Link } from 'react-router-dom';
import Button from 'rb-buttons';
import prism from 'prismjs';

import Prism from './Prism';

import navImg from './assets/IMG_0104.jpg';

class NavbarPage extends Component {
  state = {
    searchSize: 'medium',
    searchEj: '',
    logged: false,
  };

  render() {
    return (
      <div className="page">
        <header>
          <h1 className="hidden">Navbar</h1>
          <img className="logo" src={navImg} alt="Navbar logo" />
        </header>
        <main>
          <article>
            <p>
              If you are searching for an english guide, please go to{' '}
              <a href="https://github.com/EdGraVill/rb-navbar" target="_blank" rel="noopener noreferrer">https://github.com/EdGraVill/rb-navbar</a>
            </p>
          </article>
          <article>
            <h2>Instalación</h2>
            <p>En el directorio raiz de tu proyecto, ejecuta el siguiente comando:</p>
            <p><strong>npm</strong></p>
            <Prism language="powershell">
              {`
npm i -P rb-navbar
              `}
            </Prism>
            <p><strong>yarn</strong></p>
            <Prism language="powershell">
              {`
yarn add rb-navbar
              `}
            </Prism>
          </article>
          <article>
            <h2>Implementación</h2>
            <p>
              El mejor ejemplo de implementación de este componente, está en esta página, en la
              parte superior. Pero aún hay más cosas que se pueden hacer:
            </p>
            <blockquote>
              <p>
                Es importante mencionar que el componente toma por defecto el 100% del componente
                padre, por ello siempre es recomendable colocarlo como hijo del componente superior.
              </p>
              <p>Por ello, en lo subsecuente, la navbar ocupará el 100% de esta sección.</p>
            </blockquote>
            <p>
              Pero comenzando con lo más básico, lo único que necesita la navbar es un arreglo con
              los objetos de link:
            </p>
            <Nav
              links={[{
                href: '/',
                title: 'Inicio',
              }, {
                href: '/link1',
                title: 'Link 1',
              }, {
                href: '/link2',
                title: 'Link 2',
              }, {
                href: '/link3',
                title: 'Link 3',
              }]}
            />
            <Prism language="jsx">
              {`
const links = [{
  href: '/',
  title: 'Inicio',
}, {
  href: '/link1',
  title: 'Link 1',
}, {
  href: '/link2',
  title: 'Link 2',
}, {
  href: '/link3',
  title: 'Link 3',
}];

<Nav
  links={links}
/>
              `}
            </Prism>
            <h3>Despliegue</h3>
            <p>
              Como se puede apreciar en la barra de navegación de este sitio, hay un enlace que al
              colocar el mouse encima, despliega una ista de más enlaces. Esto se consigue
              introduciendo un objeto de enlaces dentro de un enlace:
            </p>
            <Nav
              links={[{
                href: '/',
                title: 'Inicio',
              }, {
                href: '/link1',
                title: 'Links 1',
                links: [{
                  href: '/link1',
                  title: 'Link 1.1',
                }, {
                  href: '/link2',
                  title: 'Link 1.2',
                }, {
                  href: '/link3',
                  title: 'Link 1.3',
                }],
              }, {
                href: '/link2',
                title: 'Link 2',
              }, {
                href: '/link3',
                title: 'Links 3',
                links: [{
                  href: '/link1',
                  title: 'Link 3.1',
                }, {
                  href: '/link2',
                  title: 'Link 3.2',
                }, {
                  href: '/link3',
                  title: 'Link 3.3',
                }],
              }]}
              style={{ position: 'relative', zIndex: 99 }}
            />
            <Prism language="jsx" lineHighlight="7-16;23-32">
              {`
const links = [{
  href: '/',
  title: 'Inicio',
}, {
  href: '/link1',
  title: 'Links 1',
  links: [{
    href: '/link1',
    title: 'Link 1.1',
  }, {
    href: '/link2',
    title: 'Link 1.2',
  }, {
    href: '/link3',
    title: 'Link 1.3',
  }],
}, {
  href: '/link2',
  title: 'Link 2',
}, {
  href: '/link3',
  title: 'Links 3',
  links: [{
    href: '/link1',
    title: 'Link 3.1',
  }, {
    href: '/link2',
    title: 'Link 3.2',
  }, {
    href: '/link3',
    title: 'Link 3.3',
  }],
}];

<Nav
  links={links}
/>
              `}
            </Prism>
            <h3>Marca</h3>
            <p>
              Otra de las cosas que podemos agregar a la barra de navegación, es una sección
              muy básica donde se muestra el nombre de la marca:
            </p>
            <Nav
              brand={{
                name: 'React Basics',
              }}
              links={[{
                href: '/',
                title: 'Inicio',
              }, {
                href: '/link1',
                title: 'Link 1',
              }, {
                href: '/link2',
                title: 'Link 2',
              }]}
            />
            <Prism language="jsx" lineHighlight="13-15">
              {`
const links = [{
  href: '/',
  title: 'Inicio',
}, {
  href: '/link1',
  title: 'Link 1',
}, {
  href: '/link2',
  title: 'Link 2',
}];

<Nav
  brand={{
    name: 'React Basics',
  }}
  links={links}
/>
              `}
            </Prism>
            <h3>Búsqueda</h3>
            <p>
              El componente también incluye soporte nativo para una barra de busqueda con
              distintos tamaños y animaciones optimizadas con css.
            </p>
            <p>
              Escoge un tamaño:{' '}
              <select onChange={event => this.setState({ searchSize: event.target.value })}>
                <option value="small">Pequeño</option>
                <option value="medium" selected>Mediano</option>
                <option value="big">Grande</option>
              </select>
            </p>
            <Nav
              links={[{
                href: '/',
                title: 'Inicio',
              }, {
                href: '/link1',
                title: 'Link 1',
              }, {
                href: '/link2',
                title: 'Link 2',
              }]}
              search={{
                mediumPlaceholder: 'Buscar',
                size: this.state.searchSize,
                placeholder: 'Escribe algo para buscar',
                onChange: value => this.setState({ searchEj: value }),
                onSubmit: value => this.setState({ searchEj: value }),
              }}
            />
            <div className="center">
              <h4>
                {this.state.searchEj ? `Buscado: ${this.state.searchEj}` : 'Buscador'}
              </h4>
            </div>
            <Prism language="jsx" lineHighlight="12-18">
              {`
const links = [{
  href: '/',
  title: 'Inicio',
}, {
  href: '/link1',
  title: 'Link 1',
}, {
  href: '/link2',
  title: 'Link 2',
}];

const search = {
  mediumPlaceholder: 'Buscar',
  size: '${this.state.searchSize}',
  placeholder: 'Escribe algo para buscar',
  onChange: value => this.setState({ searchEj: value }),
  onSubmit: value => this.setState({ searchEj: value }),
};

<Nav
  links={links}
  search={search}
/>
              `}
            </Prism>
            <blockquote>
              <p>
                Al presionar la tecla enter, cuando se ejecuta la función onSubmit, el valor del
                input se elimina.
              </p>
            </blockquote>
            <h3>{'"'}User Box{'"'}</h3>
            <p>
              Esta es la función más excentrica, porque aunque se piensa que se puede usar para
              una caja de inicio de sesión, su uso se puede extender para varias cosas, por ejemplo,
              para integrar un switch de cambio de idioma, algo que se hará en el futuro en este
              sitio web.
            </p>
            <p>Un ejemplo de cómo utilizar esta característica como userBox es:</p>
            <Nav
              links={[{
                href: '/',
                title: 'Inicio',
              }, {
                href: '/link1',
                title: 'Link 1',
              }, {
                href: '/link2',
                title: 'Link 2',
              }]}
              userBox={{
                text: this.state.logged ? '@foosername' : 'Iniciar Sesión',
                box: !this.state.logged ? () => (
                  <div>
                    <p style={{ color: '#fff' }}>Ingresar</p>
                    <form id="navbarSignIn">
                      <input name="username" placeholder="Username" value="foosername" />
                      <input type="password" name="password" placeholder="Password" value="barword" />
                      <hr />
                      <div className="center">
                        <Button text="Entrar" onClick={() => this.setState({ logged: true })} />
                      </div>
                    </form>
                  </div>
                ) : () => (
                  <div>
                    <p style={{ color: '#fff' }}>Hola de nuevo Foodon Barman</p>
                    <div className="center">
                      <Button text="Salir" onClick={() => this.setState({ logged: false })} />
                    </div>
                  </div>
                ),
              }}
              style={{ position: 'relative', zIndex: 99 }}
            />
            <Prism language="jsx" lineHighlight="16-28;30-37;42-45">
              {`
this.state = {
  logged: ${this.state.logged},
};

const links = [{
  href: '/',
  title: 'Inicio',
}, {
  href: '/link1',
  title: 'Link 1',
}, {
  href: '/link2',
  title: 'Link 2',
}];

const login = () => (
  <div>
    <p style={{ color: '#fff' }}>Ingresar</p>
    <form id="navbarSignIn">
      <input name="username" placeholder="Username" value="foosername" />
      <input type="password" name="password" placeholder="Password" value="barword" />
      <hr />
      <div className="center">
        <Button text="Entrar" onClick={() => this.setState({ logged: true })} />
      </div>
    </form>
  </div>
);

const user = () => (
  <div>
    <p style={{ color: '#fff' }}>Hola de nuevo Foodon Barman</p>
    <div className="center">
      <Button text="Salir" onClick={() => this.setState({ logged: false })} />
    </div>
  </div>
);

<Nav
  links={links}
  search={search}
  userBox={{
    text: this.state.logged ? '@foosername' : 'Iniciar Sesión',
    box: this.state.logged ? user : login,
  }}
/>
              `}
            </Prism>
            <h3><pre>{'<a>'}</pre> Personalizado</h3>
            <p>
              Ocurre que en algunas ocaciones se usan ruteadores personalizados para hacer una
              experiencia de usuario más fluida. Por ejemplo, en este sitio se utiliza el{' '}
              <a href="https://reacttraining.com/react-router/" target="_blank" rel="noopener noreferrer">React Router</a>{' '}
              y los links convencionales no funcionan, por ello, se dotó a la navbar la capacidad de
              poder reemplazar el <span className="code">{'<a>'}</span> por defecto.
            </p>
            <blockquote>
              <p>Con asterisco se indican los enlaces con el <span className="code">{'<a>'}</span> personalizado.</p>
            </blockquote>
            <Nav
              links={[{
                href: '/navbar/inicio',
                title: 'Inicio *',
                AnchorComponent: <Link to="/navbar/inicio" href="/navbar/inicio" />,
              }, {
                href: '/navbar/link1',
                title: 'Link 1',
              }, {
                href: '/navbar/link2',
                title: 'Link 2 *',
                AnchorComponent: <Link to="/navbar/link2" href="/navbar/link2" />,
              }, {
                href: '/navbar/link3',
                title: 'Link 3',
              }]}
            />
            <Route
              path="/navbar/:link"
              component={({ match }) => (
                <h4>Entraste al enlace: {match.params.link}</h4>
              )}
            />
            <Prism language="jsx" lineHighlight="6;13;19-21;26-29">
              {`
import { Route, Link } from 'react-router-dom';

const links = [{
  href: '/navbar/inicio',
  title: 'Inicio *',
  AnchorComponent: <Link to="/navbar/inicio" href="/navbar/inicio" />,
}, {
  href: '/navbar/link1',
  title: 'Link 1',
}, {
  href: '/navbar/link2',
  title: 'Link 2 *',
  AnchorComponent: <Link to="/navbar/link2" href="/navbar/link2" />,
}, {
  href: '/navbar/link3',
  title: 'Link 3',
}];

const component = ({ match }) => (
  <h4>Entraste al enlace: {match.params.link}</h4>
);

<Nav
  links={links}
/>
<Route
  path="/navbar/:link"
  component={component}
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
  backgroundColor?: string,
  brand: ?{
    name?: string,
    icon?: string,
  },
  color?: string,
  height?: number,
  links: ?Array<{
    href: string,
    title: string,
    icon?: string,
    AnchorComponent: ?React$Element<any>,
    links?: Array<{
      href: string,
      title: string,
      icon?: string,
      AnchorComponent: ?React$Element<any>,
    }>,
  }>,
  search: ?{
    mediumPlaceholder?: string,
    size?: 'big' | 'medium' | 'small',
    placeholder?: string,
    onChange: ?(value: string) => any,
    onSubmit: ?(value: string) => any,
    width?: number | string,
  },
  style?: Object,
  userBox: ?{
    icon: string,
    text: string,
    box: ?() => any | ?React$Element<'div'>,
  },
};
              `}
            </Prism>
            <p>En la siguiente lista, se podrán encontrar todas las props soportadas.</p>
            <h3><pre>backgroundColor</pre> Prop</h3>
            <div className="center">
              <pre>Requerido: <span className="token boolean">false</span></pre>
              <pre>Tipo: <span className="token tag">string</span></pre>
              <pre>Default: <span className="token attr-value">{'\'#4A5459\''}</span></pre>
            </div>
            <p>
              Color de fondo de la barra de navegación. También se puede definir dotándolo de ese
              estilo.
            </p>
            <h3><pre>brand</pre> Prop</h3>
            <div className="center">
              <pre>Requerido: <span className="token boolean">false</span></pre>
              <pre>Tipo: <span className="token tag">Object</span></pre>
              <pre>Default: <span className="token comment">undefined</span></pre>
            </div>
            <p>
              Objeto con la información básica de la empres o la marca. Esta sólo es una información
              para mostrar.
            </p>
            <p>La definición del objeto es la siguiente:</p>
            <Prism language="jsx">
              {`
const brand = {
  name: 'string', // Texto para mostrar. (Requerido)
  icon: 'string', // Nombre del ícono para mostrar. (Obsoleto)
};
              `}
            </Prism>
            <h3><pre>color</pre> Prop</h3>
            <div className="center">
              <pre>Requerido: <span className="token boolean">false</span></pre>
              <pre>Tipo: <span className="token tag">string</span></pre>
              <pre>Default: <span className="token attr-value">{'\'#ecf0f1\''}</span></pre>
            </div>
            <p>
              Color del texto de la barra de navegación. También se puede definir dotándolo de ese
              estilo.
            </p>
            <h3><pre>height</pre> Prop</h3>
            <div className="center">
              <pre>Requerido: <span className="token boolean">false</span></pre>
              <pre>Tipo: <span className="token tag">number</span></pre>
              <pre>Default: <span className="token number">48</span></pre>
            </div>
            <p>
              Altura de la barra de navegación. También se puede definir dotándolo de ese estilo.
            </p>
            <h3><pre>links</pre> Prop</h3>
            <div className="center">
              <pre>Requerido: <span className="token boolean">false</span></pre>
              <pre>Tipo: <span className="token tag">{'Array<Object>'}</span></pre>
              <pre>Default:{' '}
                <span dangerouslySetInnerHTML={{ __html: prism.highlight('[{ href: \'/\', title: \'Home\', icon: \'home\' }]', prism.languages.javascript) }} />
              </pre>
            </div>
            <p>
              Array de objetos de link.
            </p>
            <p>La definición del objeto es la siguiente:</p>
            <Prism language="jsx">
              {`
const link = {
  href: 'string', // Dirección del enlace. (Requerido)
  title: 'string', // Texto a mostrar en el enlace. (Requerido)
  icon: 'string', // Nombre del ícono para mostrar. (Obsoleto)
  links: [{ // Arreglo para agregar enlaces despegables.
    href: 'string',
    title: 'string',
    icon: 'string',
  }],
};
              `}
            </Prism>
            <h3><pre>search</pre> Prop</h3>
            <div className="center">
              <pre>Requerido: <span className="token boolean">false</span></pre>
              <pre>Tipo: <span className="token tag">Object</span></pre>
              <pre>Default: <span className="token comment">undefined</span></pre>
            </div>
            <p>
              Objeto con la configuración para la barra de búsqueda.
            </p>
            <p>La definición del objeto es la siguiente:</p>
            <Prism language="jsx">
              {`
const search = {
  mediumPlaceholder: 'string', // Placeholder para mostrar en el tamaño mediano.
  size: 'string', // Tamaño del input. Puede ser 'small', 'medium', 'big'.
  placeholder: 'string', // Placeholder para mostrar en el tamaño grande o cuando está en el foco.
  onChange: 'Function', // Función que se dispara cuando el usuario teclea una letra y regresa el valor total por parámetro.
  onSubmit: 'Function', // Función que se dispara cuando el usuario presiona enter y regresa el valor total por parámetro. (Requerido)
  width: 'string', // Tamaño que toma el input al expandirse o en el tamaño grande.
};
              `}
            </Prism>
            <h3><pre>style</pre> Prop</h3>
            <div className="center">
              <pre>Requerido: <span className="token boolean">false</span></pre>
              <pre>Tipo: <span className="token tag">Object</span></pre>
              <pre>Default: <span className="token punctuation">{'{}'}</span></pre>
            </div>
            <p>
              Estilo de la barra de navegación.
            </p>
            <h3><pre>userBox</pre> Prop</h3>
            <div className="center">
              <pre>Requerido: <span className="token boolean">false</span></pre>
              <pre>Tipo: <span className="token tag">Object</span></pre>
              <pre>Default: <span className="token comment">undefined</span></pre>
            </div>
            <p>
              Objeto con la configuración para la {'"userBox"'}.
            </p>
            <p>La definición del objeto es la siguiente:</p>
            <Prism language="jsx">
              {`
const search = {
  icon: 'string', // Nombre del ícono para mostrar. (Obsoleto)
  text: 'string', // Texto a mostrar en la barra de navegción. (Requerido)
  box: React$Element<any>, // Componente que se mostrará en la caja. (Requerido)
};
              `}
            </Prism>
          </article>
          <article>
            <h2>Metas</h2>
            <p><input type="checkbox" checked="checked" disabled /> Touch móvil para abrir el desplegable</p>
            <p><input type="checkbox" checked="checked" disabled /> Soporte SEO con Schema.org</p>
            <p><input type="checkbox" checked="checked" disabled /> Soporte para etiquetas de link personalizadas. Para ruteadores.</p>
            <p><input type="checkbox" disabled /> Integración con otros íconos (En desarrollo)</p>
            <p><input type="checkbox" disabled /> Soporte responsivo (En desarrollo)</p>
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

export default NavbarPage;
