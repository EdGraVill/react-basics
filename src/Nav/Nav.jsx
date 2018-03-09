// @flow
import React from 'react';
import { isMobile } from 'react-device-detect';

import '../fontAwesome/fontawesome-all.css';
import './nav.css';

import Link from './Link';

type PropsType = {
  backgroundColor?: string,
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
  backgroundColor,
  color,
  height,
  links,
  style,
} : PropsType) => {
  let h: number = height || 64;
  if (height && height < 32) h = 32;

  const linksContainer: Array<HTMLDivElement> = [];
  const linkRef: Array<HTMLAnchorElement> = [];

  return (
    <nav className="nav" style={{ ...style, ...{ backgroundColor, height: h } }}>
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
          } else if (!isMobile) {
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
                <Link
                  dropdown
                  href={link.href}
                  title={link.title}
                  icon={link.icon}
                  height={h}
                  color={color}
                />
                {link.links instanceof Array && link.links.length && link.links.map(lnk => (
                  <Link
                    href={lnk.href}
                    title={lnk.title}
                    icon={lnk.icon}
                    height={h}
                    key={lnk.href}
                    color={color}
                  />
                ))}
              </div>
            );
          }

          return (
            <div
              className="nav__linksContainer"
              style={{ backgroundColor }}
              onClick={() => {
                linksContainer[i].style.height = `${Number(link.links instanceof Array && link.links.length) + 1}00%`;
                linkRef[i].style.pointerEvents = 'auto';
              }}
              onMouseLeave={() => {
                linksContainer[i].style.height = '100%';
                linkRef[i].style.pointerEvents = 'none';
              }}
              onKeyDown={(event) => {
                const { keyCode } = event;

                if (keyCode === 8) {
                  linksContainer[i].style.height = '100%';
                  linkRef[i].style.pointerEvents = 'none';
                }
              }}
              key={link.href}
              ref={(ref) => { linksContainer[i] = ref || document.createElement('div'); }}
              role="link"
              tabIndex={i}
            >
              <Link
                href={link.href}
                title={link.title}
                icon={link.icon}
                height={h}
                dropdown
                anchorRef={(ref) => { linkRef[i] = ref || document.createElement('a'); }}
                style={{
                  pointerEvents: 'none',
                }}
                color={color}
              />
              {link.links instanceof Array && link.links.length && link.links.map(lnk => (
                <Link
                  href={lnk.href}
                  title={lnk.title}
                  icon={lnk.icon}
                  height={h}
                  key={lnk.href}
                  color={color}
                />
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
  color: '#ecf0f1',
  height: 64,
  style: {},
};

export default Nav;
