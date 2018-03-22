// @flow
import React from 'react';

import Link from './Link';

type PropsType = {
  backgroundColor?: string,
  color?: string,
  height?: number,
  index: number,
  isMobile?: boolean,
  link: {
    href: string,
    title: string,
    icon?: string,
    links?: Array<{
      href: string,
      title: string,
      icon?: string,
    }>,
  },
};

const Dropdown = ({
  backgroundColor = '#4A5459',
  color = '#ecf0f1',
  height = 48,
  index,
  isMobile = false,
  link,
}: PropsType) => {
  const linksContainer: Array<HTMLDivElement> = [];
  const linkRef: Array<HTMLAnchorElement> = [];

  if (isMobile) {
    return (
      <div
        className="rbnav__linksContainer"
        style={{ backgroundColor, height }}
        onClick={() => {
          linksContainer[index].style.height = `${(Number(link.links instanceof Array && link.links.length) + 1) * height}px`;
          linkRef[index].style.pointerEvents = 'auto';
        }}
        onMouseLeave={() => {
          linksContainer[index].style.height = `${height}px`;
          linkRef[index].style.pointerEvents = 'none';
        }}
        onKeyDown={(event) => {
          const { keyCode } = event;

          if (keyCode === 8) {
            linksContainer[index].style.height = `${height}px`;
            linkRef[index].style.pointerEvents = 'none';
          }
        }}
        key={link.href}
        ref={(ref) => { linksContainer[index] = ref || document.createElement('div'); }}
        role="link"
        tabIndex={index}
      >
        <Link
          href={link.href}
          title={link.title}
          icon={link.icon}
          height={height}
          dropdown
          anchorRef={(ref) => { linkRef[index] = ref || document.createElement('a'); }}
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
            height={height}
            key={lnk.href}
            color={color}
          />
          ))}
      </div>
    );
  }

  return (
    <div
      className="rbnav__linksContainer"
      style={{ backgroundColor, height }}
      onMouseEnter={() => {
        linksContainer[index].style.height = `${(Number(link.links instanceof Array && link.links.length) + 1) * height}px`;
      }}
      onMouseLeave={() => { linksContainer[index].style.height = `${height}px`; }}
      key={link.href}
      ref={(ref) => { linksContainer[index] = ref || document.createElement('div'); }}
    >
      <Link
        dropdown
        href={link.href}
        title={link.title}
        icon={link.icon}
        height={height}
        color={color}
      />
      {link.links instanceof Array && link.links.length && link.links.map(lnk => (
        <Link
          href={lnk.href}
          title={lnk.title}
          icon={lnk.icon}
          height={height}
          key={lnk.href}
          color={color}
        />
        ))}
    </div>
  );
};

Dropdown.defaultProps = {
  backgroundColor: '#4A5459',
  color: '#ecf0f1',
  height: 48,
  isMobile: false,
};

export default Dropdown;
