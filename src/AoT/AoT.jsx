// @flow
import React, { Component } from 'react';

type PropsType = {
  children: React$Element<any>,
  to: HTMLElement | string,
};

class AoT extends Component<PropsType> {
  componentDidMount() {
    this.findTo();
    this.prepareContainer();
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.function);
  }

  findTo() {
    const { to } = this.props;

    if (to && typeof to === 'string') {
      this.toElement = document.querySelector(to);
    }
  }

  prepareContainer() {
    const { container, transporter } = this;

    const children = transporter.children[0];

    this.children = children;

    const {
      clientHeight,
      clientWidth,
      offsetHeight,
      offsetWidth,
    } = this.children;

    this.initialDimentions = {
      clientHeight,
      clientWidth,
      offsetHeight,
      offsetWidth,
    };

    container.style.height = `${this.initialDimentions.offsetHeight}px`;
    container.style.width = `${this.initialDimentions.offsetWidth}px`;
    container.style.position = 'relative';

    transporter.style.height = `${this.initialDimentions.offsetHeight}px`;
    transporter.style.width = `${this.initialDimentions.offsetWidth}px`;
    transporter.style.position = 'relative';

    this.children.style.height = `${this.initialDimentions.clientHeight - this.children.style.paddingTop - this.children.style.paddingBottom}px`;
    this.children.style.width = `${this.initialDimentions.clientWidth}px`;

    this.prepareListener();
    this.handleScroll();
    // setTimeout(() => {
    // }, 1500);
  }

  prepareListener() {
    this.function = () => {
      this.handleScroll();
    };

    document.addEventListener('scroll', this.function);
  }

  handleScroll() {
    const { top } = this.children.getBoundingClientRect();

    if (top <= 0) {
      this.transporter.style.position = 'fixed';
      this.transporter.style.top = '0';
      this.transporter.style.zIndex = '99';
    }

    if (this.container.getBoundingClientRect().top >= 0) {
      this.transporter.style.position = 'relative';
      this.transporter.style.top = 'inherit';
      this.transporter.style.zIndex = 'inherit';
    }

    if (
      this.toElement &&
      (
        this.toElement.getBoundingClientRect().top - this.initialDimentions.offsetHeight
      ) <= 0
    ) {
      this.transporter.style.position = 'absolute';
      this.transporter.style.top = `${(this.toElement.getBoundingClientRect().top -
        this.container.getBoundingClientRect().top) - this.initialDimentions.offsetHeight}px`;
    } else if (this.container.getBoundingClientRect().top <= 0) {
      this.transporter.style.position = 'fixed';
      this.transporter.style.top = '0';
    } else {
      this.transporter.style.position = 'relative';
      this.transporter.style.top = 'inherit';
      this.transporter.style.zIndex = 'inherit';
    }
  }

  children: HTMLElement;
  container: React$Element<'div'>;
  transporter: React$Element<'div'>;
  toElement: ?HTMLElement;
  initialDimentions: {
    clientHeight: number,
    clientWidth: number,
    offsetHeight: number,
    offsetWidth: number,
  };
  function: () => any;

  render() {
    const {
      children,
    } = this.props;

    return (
      <div
        className="rbaot"
        ref={(ref) => { this.container = ref; }}
        style={{
          width: '100%',
        }}
      >
        <div
          className="rbaot__transporter"
          ref={(ref) => { this.transporter = ref; }}
          style={{
            width: '100%',
          }}
        >
          {children}
        </div>
      </div>
    );
  }
}

export default AoT;
