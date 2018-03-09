// @flow
import React from 'react';

type PropsType = {
  size?: 'big' | 'medium' | 'small',
  placeholder?: string,
  onChange: ?(value: string) => any,
  onSubmit: ?(value: string) => any,
  tabIndex: number,
  width?: string | number,
}

const Search = ({
  size = 'medium',
  placeholder = 'Type something to search',
  onChange,
  onSubmit,
  tabIndex,
  width = '20rem',
}: PropsType) => {
  let searchInput: ?HTMLInputElement;
  let searchBar: ?HTMLDivElement;

  return (
    <div className={`nav__search nav__search--${size}`}>
      <div
        className="nav__searchBar"
        ref={(ref) => { searchBar = ref; }}
        style={size === 'big' ? { width } : {}}
      >
        <i
          className="fas fa-search"
          onClick={() => searchInput && searchInput.focus()}
          onKeyPress={(event) => {
            if (searchInput && event.key === 'Enter') {
              searchInput.focus();
            }
          }}
          role="button"
          tabIndex={tabIndex}
        />
        <input
          type="search"
          className="nav__searchInput"
          placeholder={(() => {
            if (size === 'small') return '';
            else if (size === 'medium') return 'Buscar';
            return placeholder;
          })()}
          onChange={() => {
            if (onChange && searchInput) onChange(searchInput.value);
          }}
          onKeyPress={(event) => {
            if (event.key === 'Enter') {
              if (onSubmit && searchInput) onSubmit(searchInput.value);
            }
          }}
          onFocus={() => {
            if (size !== 'big' && searchInput) {
              searchInput.placeholder = placeholder;
              searchInput.style.padding = '.3rem 1.5rem .3rem 1.7rem';
            }

            if (size !== 'big' && searchBar) {
              searchBar.style.width = '30rem';
            }

            const searchButton = document.getElementById('searchButton');

            if (size !== 'big' && searchButton) {
              searchButton.style.width = '6.5px';
              searchButton.style.padding = '.5rem';
            }
          }}
          onBlur={() => {
            if (size === 'medium' && searchInput) {
              searchInput.placeholder = 'Buscar';
              searchInput.style.padding = '.3rem .5rem .3rem 1.7rem';
            } else if (size === 'small' && searchInput) {
              searchInput.placeholder = '';
              searchInput.style.padding = '.3rem .1rem .3rem 1.7rem';
            }

            if (size === 'medium' && searchBar) {
              searchBar.style.width = '5.5rem';
            } else if (size === 'small' && searchBar) {
              searchBar.style.width = '1.75rem';
            }

            const searchButton = document.getElementById('searchButton');

            if (size !== 'big' && searchButton) {
              searchButton.style.width = '0';
              searchButton.style.padding = '.5rem 0';
            }
          }}
          ref={(ref) => { searchInput = ref; }}
          tabIndex={tabIndex + 1}
        />
        <i
          className="fas fa-angle-right"
          onClick={() => {
            if (onSubmit && searchInput) onSubmit(searchInput.value);
          }}
          onKeyPress={(event) => {
            if (event.key === 'Enter') {
              if (onSubmit && searchInput) onSubmit(searchInput.value);
            }
          }}
          role="button"
          tabIndex={tabIndex + 2}
          id="searchButton"
        />
      </div>
    </div>
  );
};

Search.defaultProps = {
  size: 'medium',
  placeholder: 'Type something to search',
  width: '20rem',
};

export default Search;
