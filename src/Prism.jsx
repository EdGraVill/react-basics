// @flow
import React, { Component } from 'react';
import Prism from 'prismjs';

type PropsType = {
  children: string,
  language: string,
  lineHighlight: string,
}

class PrismComponent extends Component<PropsType> {
  displayName = 'Prism';

  componentDidMount() {
    const {
      children,
      language,
    } = this.props;

    import(`prismjs/components/prism-${language}`).then(() => {
      const highlight = Prism.highlight(children, Prism.languages[language]);

      this.code.innerHTML = highlight;
    }).catch(() => {
      throw new Error(`Language "${language}" is not supported`);
    });
  }

  componentDidUpdate() {
    const {
      children,
      language,
    } = this.props;

    import(`prismjs/components/prism-${language}`).then(() => {
      const highlight = Prism.highlight(children, Prism.languages[language]);

      this.code.innerHTML = highlight;
    }).catch(() => {
      throw new Error(`Language "${language}" is not supported`);
    });
  }

  render() {
    const {
      children,
      language,
      lineHighlight,
    } = this.props;

    return (
      <pre
        className={`language-${language}`}
      >
        {lineHighlight && (
          <div
            className="line-highlight"
            style={{
              top: !lineHighlight.includes('-') ?
                `calc(${Number(lineHighlight) * 20}px - .2rem)` :
                `calc(${Number(lineHighlight.split('-')[0]) * 20}px - .2rem)`,
              height: !lineHighlight.includes('-') ?
                '20px' :
                `${((Number(lineHighlight.split('-')[1]) - Number(lineHighlight.split('-')[0])) + 1) * 20}px`,
            }}
          />
        )}
        <code
          className={`language-${language}`}
          ref={(ref) => { this.code = ref; }}
        >
          {children}
        </code>
      </pre>
    );
  }
}

export default PrismComponent;
