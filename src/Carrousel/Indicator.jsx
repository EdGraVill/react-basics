// @flow
import React from 'react';

import './carrousel.css';

type PropsType = {
  data: Array<{
    alt: string,
    src: string,
    onClick: ?() => any,
  }>,
  indicatorOnClick: ?(position: number) => any,
  position: number,
}

const Indicator = ({
  data,
  indicatorOnClick,
  position,
}: PropsType) => (
  <div className="rbcarrousel__indicators">
    {data.map((element, index) => {
      const pos = (position || 0) >= 0 ?
        (position || 0) % data.length :
        (data.length - 1) - ((Math.abs(position || 0) - 1) % data.length);

      return (
        <button
          className={`rbcarrousel__indicator${pos === index ? ' rbcarrousel__indicator--current' : ''}`}
          key={element.alt}
          onClick={() => {
            if (indicatorOnClick) indicatorOnClick(index);
          }}
        />
      );
    })}
  </div>
);

export default Indicator;
