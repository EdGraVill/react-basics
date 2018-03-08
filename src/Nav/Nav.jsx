// @flow
import React from 'react';

import '../fontAwesome/fontawesome-all.css';
import './nav.css';

import Link from './Link';

type PropsType = {
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
  backgroundColor?: string,
  height?: number,
}

const Nav = ({
  links,
  backgroundColor,
  height,
} : PropsType) => {
  let h: number = height || 64;
  if (height && height < 32) h = 32;

  const linksContainer: Array<HTMLDivElement> = [];

  return (
    <nav className="nav" style={{ backgroundColor, height: h }}>
      <div className="nav__navbar">
        {!links && links instanceof Array && !links.length ? (
          <Link href="/" title="Inicio" icon="home" height={h} />
        ) : links instanceof Array && links.map((link, i) => {
          if (!link.links || (link.links instanceof Array && !link.links.length)) {
            return (
              <Link
                href={link.href}
                title={link.title}
                icon={link.icon}
                height={h}
                key={link.href}
              />
            );
          }

          return (
            <div
              className="nav__linksContainer"
              style={{ backgroundColor }}
              onMouseEnter={() => {
                linksContainer[i].style.height = `${Number(link.links instanceof Array && link.links.length) + 1}00%`;
              }}
              onMouseLeave={() => { linksContainer[i].style.height = '100%'; }}
              key={link.href}
              ref={(ref) => { linksContainer[i] = ref || document.createElement('div'); }}
            >
              <Link href={link.href} title={link.title} icon={link.icon} height={h} dropdown />
              {link.links instanceof Array && link.links.length && link.links.map(lnk => (
                <Link href={lnk.href} title={lnk.title} icon={lnk.icon} height={h} key={lnk.href} />
              ))}
            </div>
          );
        })}
      </div>
    </nav>
  );
};

Nav.defaultProps = {
  backgroundColor: '#4A5459',
  height: 64,
};

export default Nav;
