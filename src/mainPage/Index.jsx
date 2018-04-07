import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Nav from 'rb-navbar';

import './gatsby.css';
import './normalize.css';
import './styles.css';

import Home from '../Home';
import Components from '../Components';
import Navbar from '../Navbar';
import Button from '../Button';
import Carrousel from '../Carrousel';

const Index = () => (
  <Router>
    <Fragment>
      <Nav
        backgroundColor="#4A5459"
        brand={{ name: 'React Basics' }}
        color="#ecf0f1"
        links={[{
          href: '/',
          title: 'Inicio',
          icon: 'home',
          AnchorComponent: <Link to="/" href="/" />,
        }, {
          href: '/components',
          title: 'Componentes',
          AnchorComponent: <Link to="/components" href="/components" />,
          links: [{
            href: '/navbar',
            title: 'Navbar',
            AnchorComponent: <Link to="/navbar" href="/navbar" />,
          }, {
            href: '/button',
            title: 'Button',
            AnchorComponent: <Link to="/button" href="/button" />,
          }, {
            href: '/carrousel',
            title: 'Carrousel',
            AnchorComponent: <Link to="/carrousel" href="/carrousel" />,
          }],
        }]}
      />
      <Route exact path="/" component={Home} />
      <Route path="/components" component={Components} />
      <Route path="/navbar" component={Navbar} />
      <Route path="/button" component={Button} />
      <Route path="/carrousel" component={Carrousel} />
    </Fragment>
  </Router>
);

export default Index;
