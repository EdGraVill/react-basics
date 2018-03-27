// @flow
import React from 'react';

import './carrousel.css';

import Indicator from './Indicator';

type PropsType = {
  children: React$Element<'div'>,
  data: Array<{
    alt: string,
    src: string,
    onClick: ?() => any,
  }>,
  indicator?: boolean,
  indicatorOnClick: ?(position: number) => any,
  position?: number,
  style?: Object,
};

const Carrousel = ({
  children,
  data,
  indicator,
  indicatorOnClick,
  position,
  style,
}: PropsType) => {
  if (!data || !(data instanceof Array) || !data.length) {
    throw new Error('"data" prop is required as Array');
  }

  return (
    <div
      className="rbcarrousel"
      style={{
        ...style,
        ...{
          overflow: 'hidden',
          position: 'relative',
        },
      }}
    >
      <div
        className="rbcarrousel__images"
        style={{
          width: `${data.length}00%`,
          left: position && position >= 0 ?
            `-${position ? (position % data.length) * 100 : 0}%` :
            `-${position ? ((data.length - 1) - ((Math.abs(position) - 1) % data.length)) * 100 : 0}%`,
        }}
      >
        {data.map((element, index) => (
          <div
            className="rbcarrousel__image"
            key={element.alt}
            onClick={element.onClick}
            onKeyDown={(event) => {
              const { keyCode } = event;

              if (keyCode === 8) {
                if (element.onClick) element.onClick();
              }
            }}
            role="button"
            style={element.onClick ? {
              cursor: 'pointer',
            } : {}}
            tabIndex={index}
          >
            <img src={element.src} alt={element.alt} />
          </div>
        ))}
      </div>
      {React.cloneElement(children, { data, position })}
      {indicator && (
        <Indicator
          data={data}
          indicatorOnClick={indicatorOnClick}
          position={position || 0}
        />
      )}
    </div>
  );
};

Carrousel.defaultProps = {
  indicator: false,
  position: 0,
  style: {},
};

export default Carrousel;
