// @flow
import React from 'react';

import './button.css';

const { warn } = console;

type PropsType = {
  active?: boolean,
  loaded?: boolean,
  loadedStyle?: Object,
  loadedText?: string,
  loading?: boolean | number,
  loadingStyle?: Object,
  loadingText?: string,
  loadingType?: 'spinner' | 'textSpinner' | 'filler' | 'text',
  onClick: () => any,
  style?: Object,
  text: string,
}

const Button = ({
  active,
  loaded,
  loadedStyle,
  loadedText,
  loading,
  loadingStyle,
  loadingText,
  loadingType,
  onClick,
  style,
  text,
}: PropsType) => {
  // Validations
  const loadingTypes = ['spinner', 'textSpinner', 'filler', 'text'];

  if (!text || typeof text !== 'string') throw new Error('"text" prop can\'t be empty or undefined');
  if (typeof loadingType !== 'string') throw new Error('"loadingType" prop can\'t be empty');
  if (loadingType && loadingTypes.indexOf(loadingType) === -1) {
    warn(`${loadingType} is incompatible`);
    throw new Error(`Only ${loadingTypes.join(', ')} are admited in "loadingType" prop`);
  }
  if ((loadedText || loadingText) && (loadingType.includes('pinner'))) {
    warn('"loadedText" or "loadingText" props are only displayed in \'filler\' or \'text\' loading type');
  }
  if (typeof loading === 'number' && loadingType !== 'filler') {
    warn('"loading" prop accept numbers but only if "loadingType" is filler');
  }
  if (typeof loading === 'number' && loading < 0 && loading > 1) {
    throw new Error('"loading" prop accept numbers but only between 0 and 1');
  }
  if (!onClick) warn('A funnction must be defined onClick action');
  // -----

  let status: ?string;
  let displayText: string = text;
  let activeStyle: Object = style || {};

  if (loaded) {
    status = 'loaded';
    displayText = loadedText || text;
    activeStyle = loadedStyle && Object.keys(loadedStyle).length ? loadedStyle : style || {};
  } else if (loading && !loaded) {
    status = loadingType;
    displayText = loadingText || text;
    activeStyle = loadingStyle && Object.keys(loadingStyle).length ? loadingStyle : style || {};
  }

  return (
    <button
      className={`rbbutton${status ? ` rbbutton--${status}` : ''}`}
      onClick={onClick}
      style={{
        ...activeStyle,
        pointerEvents: active ? 'auto' : 'none',
      }}
    >
      {loadingType === 'filler' && (
        <span
          className="rbbutton__filler"
          style={typeof loading === 'number' ? {
            animation: 'none',
            width: `${loading * 100}%`,
          } : {}}
        />
      )}
      <span className="rbbutton__text">
        {displayText}
      </span>
    </button>
  );
};

Button.defaultProps = {
  active: true,
  loaded: false,
  loadedStyle: {},
  loadedText: '',
  loading: false,
  loadingStyle: {},
  loadingText: '',
  loadingType: 'spinner',
  style: {},
};

export default Button;
