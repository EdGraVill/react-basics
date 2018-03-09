// @flow
import React from 'react';

type PropsType = {
  color?: string,
  dropdown?: boolean,
  height?: number,
  href: string,
  icon: ?string,
  style?: {},
  title: string,
  anchorRef?: (anchorRef: HTMLAnchorElement) => any,
};

const Link = ({
  color = '#ecf0f1',
  dropdown = false,
  height = 64,
  href,
  icon,
  style = {},
  title,
  anchorRef = () => {},
}: PropsType) => (
  <a
    href={href}
    className="nav__linkContainer"
    key={href}
    style={{ color, height, ...style }}
    ref={ref => anchorRef(ref || document.createElement('a'))}
  >
    {icon ? <i className={`fas fa-${icon}`} /> : null}
    <span className="nav__linkTitle">{title}</span>
    {dropdown && <i className="fas fa-angle-down" />}
  </a>
);

Link.defaultProps = {
  color: '#ecf0f1',
  dropdown: false,
  height: 64,
  style: {},
  anchorRef: () => {},
};

export default Link;
