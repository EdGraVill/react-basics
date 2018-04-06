import React, { Component } from 'react';
import Carrousel, { Thumbnails } from 'rb-carrousel';
import Button from 'rb-buttons';
import swal from 'sweetalert2';

import AoT from './AoT';
import Prism from './Prism';

import carrouselImg from './assets/IMG_0106.jpg';

class CarrouselPage extends Component {
  state = {
    data: [{
      alt: 'Imagen 0',
      src: 'https://source.unsplash.com/random/0',
      onClick: () => {
        swal('Imagen', 'Has presionado la imagen 1', 'info');
      },
    }],
    ej2: 0,
    ej3: 0,
    ej4: 0,
  };

  componentDidMount() {
    this.getData();
  }

  getData() {
    for (let index = 1; index < 10; index += 1) {
      this.state.data.push({
        alt: `Image ${index}`,
        src: `https://source.unsplash.com/random/${index}`,
        onClick: () => {
          swal('Imagen', `Has presionado la imagen ${index + 1}`, 'info');
        },
      });
    }

    this.forceUpdate();
  }

  render() {
    return (
      <div className="page">
        <header>
          <h1 className="hidden">Carrousel</h1>
          <img className="logo" src={carrouselImg} alt="Carrousel logo" />
        </header>
        <main>
          <article>
            <p>
              If you are searching for an english guide, please go to{' '}
              <a href="https://github.com/EdGraVill/rb-carrousel" target="_blank" rel="noopener noreferrer">https://github.com/EdGraVill/rb-carrousel</a>
            </p>
          </article>
          <article>
            <h2>Instalación</h2>
            <p>En el directorio raiz de tu proyecto, ejecuta el siguiente comando:</p>
            <p><strong>npm</strong></p>
            <Prism language="powershell">
              {`
    npm i -P rb-carrousel
              `}
            </Prism>
            <p><strong>yarn</strong></p>
            <Prism language="powershell">
              {`
    yarn add rb-carrousel
              `}
            </Prism>
          </article>
          <article>
            <h2>Implementación</h2>
            <p>
              Digamos que tenemos diez imágenes y en vez de mostrarla todas en forga de galería,
              decidimos mostrarlas en un carrusel, así:
            </p>
            <div className="center">
              <Carrousel
                data={this.state.data}
                style={{
                  backgroundColor: '#ecf0f1',
                  border: '2px solid #2f3542',
                  borderRadius: '1rem',
                  height: '10rem',
                  padding: '1rem 0',
                  width: '50%',
                }}
              />
            </div>
            <Prism language="jsx">
              {`
<Carrousel
  data={data()}
  style={{
    backgroundColor: '#ecf0f1',
    border: '2px solid #2f3542',
    borderRadius: '1rem',
    height: '10rem',
    padding: '1rem 0',
    width: '50%',
  }}
/>
              `}
            </Prism>
            <blockquote>
              <p>
                En los siguientes códigos obviaremos una función que es con la que obtenemos las
                imágenes:
              </p>
              <Prism language="javascript">
                {`
function data() {
  const data = [];

  for (let index = 1; index < 11; index += 1) {
    data.push({
      alt: \`Image \${index}\`,
      src: \`https://source.unsplash.com/random/\${index}\`,
      onClick: () => {
        window.alert(\`Has presionado la imagen \${index}\`);
      },
    });
  }

  return data;
}
                `}
              </Prism>
            </blockquote>
            <h3>Position</h3>
            <p>
              Ahora si, en lo que estábamos. Lo primero que se debe de saber sobre este componente,
              es que aunque tenga inteligencia para determinar la próxima posición, no la puede
              implementar por si mismo, porque el componente no almacena ningún estado, con la
              intención de que los desarrolladores controlen por completo la posición con el estado
              del componente padre o con por ejemplo, <span className="code">redux</span>.
            </p>
            <p>
              La manera más sencilla de cambiar la posición, es aprovechando la prop <span className="code">onSwipe</span>,
              la cual escucha la acción de deslizar el dedo y dependiendo de la dirección regresa
              la próxmia posición de la imagen:
            </p>
            <div className="center">
              <AoT to="#buttonsEj2">
                <Carrousel
                  data={this.state.data}
                  onSwipe={position => this.setState({ ej2: position })}
                  position={this.state.ej2}
                  style={{
                    backgroundColor: '#ecf0f1',
                    border: '2px solid #2f3542',
                    borderRadius: '1rem',
                    height: '10rem',
                    padding: '1rem 0',
                    width: '50%',
                  }}
                />
              </AoT>
            </div>
            <Prism language="jsx" lineHighlight="11-12">
              {`
this.state = {
  carrouselPosition: ${this.state.ej2},
}

function goTo(position) {
  this.setState({
    carrouselPosition: position,
  });
}

<Carrousel
  data={data()}
  onSwipe={goTo}
  position={this.state.carrouselPosition}
  style={{
    backgroundColor: '#ecf0f1',
    border: '2px solid #2f3542',
    borderRadius: '1rem',
    height: '10rem',
    padding: '1rem 0',
    width: '50%',
  }}
/>
              `}
            </Prism>
            <p id="buttonsEj2">
              Aunque lamentablemente, en los navegadores de escritorio es complicado
              reproducir un deslizamiento de dedo y puede que lo interprete como un click.
            </p>
            <p>Otra forma de cambiarlo, es introducir botones:</p>
            <div className="center">
              <Button
                onClick={() => {
                  this.setState({
                    ej2: this.state.ej2 - 1,
                  });
                }}
                text="Anterior"
              />
              <Button
                onClick={() => {
                  this.setState({
                    ej2: this.state.ej2 + 1,
                  });
                }}
                text="Siguiente"
              />
            </div>
            <Prism language="jsx" lineHighlight="11-22">
              {`
// this.state.carrouselPosition = ${this.state.ej2}
import Button from 'rb-buttons'; // <- Componente muy recomendable.

function goTo(position) {
  this.setState({
    carrouselPosition: position,
  });
}

<div className="botones">
  <Button
    onClick={() => {
      goTo(this.state.carrouselPosition - 1);
    }}
    text="Anterior"
  />
  <Button
    onClick={() => {
      goTo(this.state.carrouselPosition + 1);
    }}
    text="Siguiente"
  />
</div>
              `}
            </Prism>
            <h3>Indicator</h3>
            <p>
              También, además de lo anterior, podemos indicarle al usuario dónde se encuentra,
              y otorgarle más control sobre lo que él ve, añadiendo unos indicadores.
            </p>
            <div className="center">
              <Carrousel
                indicator
                data={this.state.data}
                position={this.state.ej3}
                indicatorOnClick={position => this.setState({ ej3: position })}
                style={{
                  backgroundColor: '#ecf0f1',
                  border: '2px solid #2f3542',
                  borderRadius: '1rem',
                  height: '10rem',
                  padding: '1rem 0',
                  width: '50%',
                }}
              />
            </div>
            <Prism language="jsx" lineHighlight="14-15">
              {`
this.state = {
  carrouselPosition: ${this.state.ej3},
}

function goTo(position) {
  this.setState({
    carrouselPosition: position,
  });
}

<Carrousel
  data={data()}
  position={this.state.carrouselPosition}
  indicator
  indicatorOnClick={goTo}
  style={{
    backgroundColor: '#ecf0f1',
    border: '2px solid #2f3542',
    borderRadius: '1rem',
    height: '10rem',
    padding: '1rem 0',
    width: '50%',
  }}
/>
              `}
            </Prism>
            <blockquote>
              <p>
                Algo a tomar en cuenta, y quizá ya se hayan dado cuenta, es no olvidar
                aplicar un estilo al componente, esto porque por default no tiene ningún
                estilo estético. Se puede hacer mediante el <span className="code">style</span> prop,
                o por medio de la hoja de estilos con la clase rbcarrousel.
              </p>
            </blockquote>
            <h3>Miniaturas</h3>
            <p>
              Una de las características principales que se ofrecen en cualquier carrusel
              es una vista previa o miniaturas de las imágenes, éste componente no es la
              excepción. Incluye un componente que muestra las miniaturas, y además soporta
              mostrar más imágenes de las que pueden caber capturando el deslizamiento del dedo
              del usuario.
            </p>
            <div className="center">
              <Carrousel
                data={this.state.data}
                position={this.state.ej4}
                style={{
                  backgroundColor: '#ecf0f1',
                  border: '2px solid #2f3542',
                  borderRadius: '1rem',
                  height: '10rem',
                  padding: '1rem 0 0',
                  width: '50%',
                }}
              >
                <Thumbnails onClick={position => this.setState({ ej4: position })} />
              </Carrousel>
            </div>
            <Prism language="jsx" lineHighlight="25">
              {`
import Carrousel, { Thumbnails } from 'rb-carrousel';

this.state = {
  carrouselPosition: ${this.state.ej4},
}

function goTo(position) {
  this.setState({
    carrouselPosition: position,
  });
}

<Carrousel
  data={data()}
  position={this.state.carrouselPosition}
  style={{
    backgroundColor: '#ecf0f1',
    border: '2px solid #2f3542',
    borderRadius: '1rem',
    height: '10rem',
    padding: '1rem 0 0',
    width: '50%',
  }}
>
  <Thumbnails onClick={goTo} />
</Carrousel>
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
  children?: React$Element<'div'>,
  data: Array<{
    alt: string,
    src: string,
    onClick: ?() => any,
  }>,
  indicator?: boolean,
  indicatorOnClick: ?(position: number) => any,
  onSwipe: ?(position: number) => any,
  position?: number,
  style?: Object,
};
              `}
            </Prism>
            <p>En la siguiente lista, se podrán encontrar todas las props soportadas.</p>
            <h3><pre>children</pre> Prop</h3>
            <div className="center">
              <pre>Requerido: <span className="token boolean">false</span></pre>
              <pre>Tipo: <span className="token tag">React$Element{'<\''}div{'\'>'}</span></pre>
              <pre>Default: <span className="token comment">undefined</span></pre>
            </div>
            <p>
              Capa que se muestra delante del carrusel. No hace falta declararlo como prop,
              sencillamente colocándolo dentro de las etiquetas del componente.
            </p>
            <p>Un ejemplo de lo que se puede colocar, son las miniaturas incluidas en el paquete</p>
            <h3><pre>data</pre> Prop</h3>
            <div className="center">
              <pre>Requerido: <span className="token boolean">true</span></pre>
              <pre>Tipo: <span className="token tag">Array{'<'}Object{'>'}</span></pre>
              <pre>Default: <span className="token comment">undefined</span></pre>
            </div>
            <p>
              Array de los objetos de imagen, con la siguiente definición de objeto:
            </p>
            <Prism language="javascript">
              {`
const imageObject = {
  alt: 'string', // Texto alternativo si la imagen no carga. (Requerido)
  src: 'string', // Ruta de la imagen. (Requerido)
  onClick: 'Function', // Función a ejecutar cuando se da click sobre la imagen.
};
              `}
            </Prism>
            <h3><pre>indicator</pre> Prop</h3>
            <div className="center">
              <pre>Requerido: <span className="token boolean">false</span></pre>
              <pre>Tipo: <span className="token tag">boolean</span></pre>
              <pre>Default: <span className="token boolean">false</span></pre>
            </div>
            <p>
              Prop que determina mediante un boleano si aparecen los puntos indicadores
              de posición o no. Se recomienda deshabilitar mientras se muestran las
              miniaturas incluidas en el componente.
            </p>
            <h3><pre>indicatorOnClick</pre> Prop</h3>
            <div className="center">
              <pre>Requerido: <span className="token boolean">false</span></pre>
              <pre>Tipo: <span className="token tag">Function</span></pre>
              <pre>Default: <span className="token comment">undefined</span></pre>
            </div>
            <p>
              Función que se ejecuta al presionar uno de los puntos indicadores, esta
              función pasa por parámetro el índice del punto seleccionado, esto para
              establecer una nueva posición en el carrusel.
            </p>
            <h3><pre>onSwipe</pre> Prop</h3>
            <div className="center">
              <pre>Requerido: <span className="token boolean">false</span></pre>
              <pre>Tipo: <span className="token tag">Function</span></pre>
              <pre>Default: <span className="token comment">undefined</span></pre>
            </div>
            <p>
              Función que se ejecuta al deslizar el dedo dentro del carrusel, dependiendo
              la dirección del dedo, la función pasa por parámetro el siguiente índice.
            </p>
            <h3><pre>position</pre> Prop</h3>
            <div className="center">
              <pre>Requerido: <span className="token boolean">true</span></pre>
              <pre>Tipo: <span className="token tag">number</span></pre>
              <pre>Default: <span className="token number">0</span></pre>
            </div>
            <p>
              Índice de la imagen que se va a mostrar. Si esta prop recibe un número
              mayor que la cantidad de índices disponibles, calcula una posición que sea
              equivalente si es que regresara desde cero. Por ejemplo: Si hay 5 imágenes,
              los índices van de 0 a 4, pero si nosotros pasamos un 5, el carrousel lo
              interpretará como 0; y si pasamos 6, lo iterpreta como 1.
            </p>
            <h3><pre>style</pre> Prop</h3>
            <div className="center">
              <pre>Requerido: <span className="token boolean">false</span></pre>
              <pre>Tipo: <span className="token tag">Object</span></pre>
              <pre>Default: <span className="token punctuation">{'{}'}</span></pre>
            </div>
            <p>
              Estilo del carrusel.
            </p>
          </article>
          <article>
            <h2>Metas</h2>
            <p><input type="checkbox" checked="checked" disabled /> Soporte al añadir imágenes de forma asíncrona.</p>
            <p><input type="checkbox" checked="checked" disabled /> Deslizar el dedo para interactuar con la posición.</p>
            <p><input type="checkbox" checked="checked" disabled /> Componente de miniaturas con detección de arrastre.</p>
            <p><input type="checkbox" disabled /> Colisiones en componente de miniaturas (En desarrollo).</p>
            <p><input type="checkbox" disabled /> Lazy loading (En desarrollo).</p>
            <p><input type="checkbox" disabled /> Soportar otro tipo de componentes además de imágenes. Esto lo dotaría de la capacidad de incluir videos por ejemplo.</p>
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

export default CarrouselPage;
