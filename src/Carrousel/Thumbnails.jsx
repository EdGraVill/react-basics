// @flow
import React, { Component } from 'react';
import Hammer from 'hammerjs';

import './carrousel.css';

type PropsType = {
  data: Array<{
    alt: string,
    src: string,
    onClick: ?() => any,
  }>,
  position: number,
  onClick: ?(position: number) => any,
};

class Thumbnails extends Component<PropsType> {
  componentDidMount() {
    this.hammerHandler = new Hammer(this.thumbnailsContainer);

    this.hammerHandler.on('panleft panright panend', (event) => {
      if (event.type === 'panend') {
        this.startLeft = Number(this.thumbnails[0].style.left.replace('px', ''));
        this.startPosition = undefined;
        this.thumbnails.forEach((element) => {
          const thumbnail = element;

          thumbnail.style.transition = 'all 0.3s cubic-bezier(.25, .8, .25, 1)';
          thumbnail.style.pointerEvents = 'auto';
        });
      } else if (this.startPosition === undefined) {
        this.startPosition = event.center.x;
        this.thumbnails.forEach((element) => {
          const thumbnail = element;

          thumbnail.style.transition = 'initial';
          thumbnail.style.pointerEvents = 'none';
        });
      } else {
        this.thumbnails.forEach((element) => {
          const thumbnail = element;

          thumbnail.style.left = `${this.startLeft + (event.center.x - (this.startPosition || 0))}px`;
        });
      }
    });
  }

  componentDidUpdate() {
    this.fixLeft();
  }

  totalWidth(position: number): number {
    let total:number = 0;

    if (position !== undefined) {
      this.thumbnails.forEach((element, index) => {
        if (index <= position) total += element.offsetWidth;
      });
    } else {
      this.thumbnails.forEach((element) => {
        total += element.offsetWidth;
      });
    }

    return total;
  }

  fixLeft(): void {
    const { data, position } = this.props;
    const width: number = this.thumbnailsContainer.offsetWidth;
    const pos: number = (position || 0) >= 0 ?
      (position || 0) % data.length :
      (data.length - 1) - ((Math.abs(position || 0) - 1) % data.length);

    this.thumbnails.forEach((element) => {
      const thumbnail = element;

      thumbnail.style.left = `${(((width / 2) - this.totalWidth(pos)) - (pos * 16)) + (this.thumbnails[pos].offsetWidth / 6)}px`;
    });

    this.startLeft = Number(this.thumbnails[0].style.left.replace('px', '')) || 0;
  }

  startLeft: ?number;
  startPosition: ?number;
  hammerHandler: Hammer;
  thumbnailsContainer: HTMLDivElement;
  thumbnails: Array<HTMLDivElement> = [];

  render() {
    const {
      data,
      position,
      onClick,
    } = this.props;

    return (
      <div
        className="rbcarrousel__thumbnails"
        ref={(ref) => {
          this.thumbnailsContainer = ref || document.createElement('div');
        }}
      >
        {data.map((element, index) => {
          const pos = (position || 0) >= 0 ?
            (position || 0) % data.length :
            (data.length - 1) - ((Math.abs(position || 0) - 1) % data.length);

          return (
            <div
              className={`rbcarrousel__thumbnail${pos === index ? ' rbcarrousel__thumbnail--current' : ''}`}
              key={element.alt}
              onClick={() => {
                if (onClick) onClick(index);
              }}
              onKeyDown={(event) => {
                const { keyCode } = event;

                if (keyCode === 8) {
                  if (onClick) onClick(index);
                }
              }}
              ref={(ref) => { this.thumbnails[index] = ref || document.createElement('div'); }}
              role="button"
              tabIndex={index}
            >
              <img
                src={element.src}
                alt={element.alt}
                onLoad={() => this.fixLeft.bind(this)()}
                onError={() => this.fixLeft.bind(this)()}
              />
            </div>
          );
        })}
      </div>
    );
  }
}

export default Thumbnails;
