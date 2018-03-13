// @flow
import React from 'react';

type PropsType = {
  mediumPlaceholder?: string,
  onChange: ?(value: string) => any,
  onSubmit: ?(value: string) => any,
  placeholder?: string,
  size?: 'big' | 'medium' | 'small',
  tabIndex: number,
  width?: string,
}

const Search = ({
  mediumPlaceholder = 'Search',
  onChange,
  onSubmit,
  placeholder = 'Type something to search',
  size = 'medium',
  tabIndex,
  width = '20rem',
}: PropsType) => {
  let searchInput: ?HTMLInputElement;
  let searchBar: ?HTMLDivElement;

  const w = typeof width === 'number' ? `${width}px` : width;

  return (
    <div className={`nav__search nav__search--${size}`}>
      <div
        className="nav__searchBar"
        ref={(ref) => { searchBar = ref; }}
        style={{
          ...size === 'big' ? { width: w } : {},
          ...size === 'medium' ? { width: `${(mediumPlaceholder.length * 5.5) / 6}rem` } : {},
        }}
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
            else if (size === 'medium') return mediumPlaceholder;
            return placeholder;
          })()}
          onChange={() => {
            if (onChange && searchInput) onChange(searchInput.value);
          }}
          onKeyPress={(event) => {
            if (event.key === 'Enter') {
              if (onSubmit && searchInput) onSubmit(searchInput.value);
              if (searchInput) {
                searchInput.value = '';
                searchInput.blur();
              }
            }
          }}
          onFocus={() => {
            if (size !== 'big' && searchInput) {
              searchInput.placeholder = placeholder;
              searchInput.style.padding = '.3rem 1.5rem .3rem 1.7rem';
            }

            if (size !== 'big' && searchBar) {
              searchBar.style.width = w;
            }

            const searchButton = document.getElementById('searchButton');

            if (size !== 'big' && searchButton) {
              searchButton.style.width = '6.5px';
              searchButton.style.padding = '.5rem';
            }
          }}
          onBlur={() => {
            if (size !== 'big' && searchInput && searchInput.value === '') {
              if (size === 'medium' && searchInput) {
                searchInput.placeholder = 'Buscar';
                searchInput.style.padding = '.3rem .5rem .3rem 1.7rem';
              } else if (size === 'small' && searchInput) {
                searchInput.placeholder = '';
                searchInput.style.padding = '.3rem .1rem .3rem 1.7rem';
              }

              if (size === 'medium' && searchBar) {
                searchBar.style.width = `${(mediumPlaceholder.length * 5.5) / 6}rem`;
              } else if (size === 'small' && searchBar) {
                searchBar.style.width = '1.75rem';
              }

              const searchButton = document.getElementById('searchButton');

              if (size !== 'big' && searchButton) {
                searchButton.style.width = '0';
                searchButton.style.padding = '.5rem 0';
              }
            }
          }}
          ref={(ref) => { searchInput = ref; }}
          tabIndex={tabIndex + 1}
        />
        <i
          className="fas fa-angle-right"
          onClick={() => {
            if (onSubmit && searchInput) onSubmit(searchInput.value);
            if (searchInput) searchInput.value = '';
          }}
          onKeyPress={(event) => {
            if (event.key === 'Enter') {
              if (onSubmit && searchInput) onSubmit(searchInput.value);
              if (searchInput) searchInput.value = '';
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
  mediumPlaceholder: 'Search',
  placeholder: 'Type something to search',
  size: 'medium',
  width: '20rem',
};

export default Search;
