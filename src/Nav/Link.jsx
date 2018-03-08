// @flow
import React from 'react';

type PropsType = {
  dropdown?: boolean,
  height?: number,
  href: string,
  icon: ?string,
  title: string,
};

const Link = ({
  dropdown,
  height,
  href,
  icon,
  title,
}: PropsType) => (
  <a href={href} className="nav__linkContainer" key={href} style={{ height }}>
    {icon ? <i className={`fas fa-${icon}`} /> : null}
    <span className="nav__linkTitle">{title}</span>
    {dropdown && <i className="fas fa-angle-down" />}
  </a>
);

Link.defaultProps = {
  dropdown: false,
  height: 64,
};

export default Link;
