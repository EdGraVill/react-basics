// @flow
import React, { Component } from 'react';
import Hammer from 'hammerjs';

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
  onSwipe: ?(position: number) => any,
  position?: number,
  style?: Object,
};

class Carrousel extends Component<PropsType> {
  static defaultProps = {
    indicator: false,
    position: 0,
    style: {},
  };

  componentDidMount() {
    const { onSwipe } = this.props;

    this.hammerHandler = new Hammer(this.carrouselImages);
    this.hammerHandler.get('swipe').set({ direction: Hammer.DIRECTION_HORIZONTAL });

    this.hammerHandler.on('swipe', (event) => {
      if (event.direction === 2 && onSwipe) onSwipe(this.getNextPosition.bind(this)(true));
      else if (event.direction === 4 && onSwipe) onSwipe(this.getNextPosition.bind(this)(false));
    });
  }

  getNextPosition(forward: boolean = true): number {
    const { data, position } = this.props;

    const pos: number = (position || 0) >= 0 ?
      (position || 0) % data.length :
      (data.length - 1) - ((Math.abs(position || 0) - 1) % data.length);

    if (!forward) {
      return pos === 0 ? data.length - 1 : pos - 1;
    }

    return data.length === pos + 1 ? 0 : pos + 1;
  }

  hammerHandler: Hammer;
  carrouselImages: HTMLDivElement;

  render() {
    const {
      children,
      data,
      indicator,
      indicatorOnClick,
      position,
      style,
    } = this.props;

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
          ref={(ref) => { this.carrouselImages = ref || document.createElement('div'); }}
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
  }
}

export default Carrousel;
