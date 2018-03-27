// @flow
import React, { Component } from 'react';

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
  componentDidUpdate() {
    this.fixLeft();
  }

  thumbnailsContainer: HTMLDivElement;
  thumbnails: Array<HTMLDivElement> = [];

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
    const pos = (position || 0) >= 0 ?
      (position || 0) % data.length :
      (data.length - 1) - ((Math.abs(position || 0) - 1) % data.length);

    this.thumbnails.forEach((element) => {
      const thumbnail = element;

      thumbnail.style.left = `${(((width / 2) - this.totalWidth(pos)) - (pos * 16)) + (this.thumbnails[pos].offsetWidth / 6)}px`;
    });
  }

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
