// @flow
import React from 'react';

import './button.css';

type PropsType = {
  text: string,
}

const Button = ({
  text,
}: PropsType) => (
  <button className="rbbutton">
    {text}
  </button>
);

export default Button;
