/**
*
* Search
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SearchWrapper = styled.div`
  position: relative;
`;

const SVG = styled.svg`
  position: absolute;
  top: 50%;
  margin-top: -10px;
  left: 17px;
  width: 20px;
  height: 20px;
`;

class Search extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <SearchWrapper>
        <SVG xmlns="http://www.w3.org/2000/svg" width="475.084" height="475.084" viewBox="0 0 475.084 475.084">
          <g><path d="M464.524 412.846l-97.93-97.925C390.194 280.86 402 242.88 402 201.01c0-27.218-5.282-53.25-15.85-78.087-10.56-24.842-24.84-46.254-42.825-64.24-17.987-17.99-39.396-32.265-64.233-42.827C254.247 5.286 228.218.003 201 .003c-27.217 0-53.248 5.283-78.086 15.848-24.842 10.57-46.254 24.84-64.24 42.83-17.99 17.99-32.265 39.407-42.828 64.24C5.282 147.76 0 173.79 0 201.01c0 27.213 5.282 53.235 15.846 78.08 10.562 24.84 24.838 46.247 42.827 64.234 17.987 17.994 39.403 32.265 64.24 42.833C147.755 396.717 173.783 402 201 402c41.877 0 79.85-11.808 113.92-35.406l97.93 97.64c6.85 7.232 15.405 10.85 25.692 10.85 9.897 0 18.467-3.617 25.694-10.85 7.23-7.23 10.848-15.795 10.848-25.692.003-10.082-3.518-18.65-10.56-25.694zm-173.16-121.488c-25.03 25.033-55.15 37.55-90.365 37.55-35.21 0-65.33-12.52-90.36-37.55-25.04-25.03-37.55-55.144-37.55-90.36 0-35.21 12.52-65.334 37.54-90.36 25.025-25.032 55.15-37.546 90.36-37.546s65.33 12.52 90.363 37.546 37.55 55.15 37.55 90.36c0 35.216-12.52 65.33-37.55 90.36z" /></g>
        </SVG>
        {this.props.children}
      </SearchWrapper>
    );
  }
}

Search.propTypes = {
  children: PropTypes.node,
};

export default Search;
