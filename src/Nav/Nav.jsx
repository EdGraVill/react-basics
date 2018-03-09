// @flow
import React from 'react';
import { isMobile } from 'react-device-detect';

import '../fontAwesome/fontawesome-all.css';
import './nav.css';

import Link from './Link';
import Dropdown from './Dropdown';
import Brand from './Brand';

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
    links?: Array<{
      href: string,
      title: string,
      icon?: string,
    }>,
  }>,
  style?: Object,
}

const Nav = ({
  backgroundColor = '#4A5459',
  brand,
  color = '#ecf0f1',
  height = 48,
  links,
  style = {},
} : PropsType) => {
  let h: number = height || 64;
  if (height && height < 32) h = 32;

  return (
    <nav className="nav" style={{ ...style, ...{ backgroundColor, height: h } }}>
      <div className="nav__container">
        {brand && (brand.name || brand.icon) && (
          <Brand color={color} name={brand.name || ''} icon={brand.icon} />
        )}
        <div className="nav__navbar">
          {!links && links instanceof Array && !links.length ? (
            <Link href="/" title="Inicio" icon="home" height={h} color={color} />
          ) : links instanceof Array && links.map((link, i) => {
            if (!link.links || (link.links instanceof Array && !link.links.length)) {
              return (
                <Link
                  href={link.href}
                  title={link.title}
                  icon={link.icon}
                  height={h}
                  key={link.href}
                  color={color}
                />
              );
            }

            return (
              <Dropdown
                backgroundColor={backgroundColor}
                color={color}
                height={h}
                index={i}
                isMobile={isMobile}
                link={link}
              />
            );
          })}
        </div>
      </div>
    </nav>
  );
};

Nav.defaultProps = {
  backgroundColor: '#4A5459',
  color: '#ecf0f1',
  height: 48,
  style: {},
};

export default Nav;
