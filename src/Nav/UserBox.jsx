// @flow
import React from 'react';

type PropsType = {
  backgroundColor?: string,
  Box: ?React.Element<'div'>,
  icon: ?string,
  text: string,
};

const UserBox = ({
  backgroundColor = '#4A5459',
  Box,
  icon,
  text,
}: PropsType) => (
  <div className="nav__userbox">
    <div className="nav__userboxText">
      {!!icon && (
        <i className={`fas fa-${icon}`} />
      )}
      {text}
    </div>
    {!!Box && (
      <div className="nav__userboxBox" style={{ backgroundColor }}>
        <Box />
      </div>
    )}
  </div>
);

UserBox.defaultProps = {
  backgroundColor: '#4A5459',
};

export default UserBox;
