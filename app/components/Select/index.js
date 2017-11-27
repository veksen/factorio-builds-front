/**
*
* Select
*
*/

import React from 'react';
import styled from 'styled-components';

export const SelectWrapper = styled.select`
  border-radius: 5px;
  height: 55px;
  padding: 0 18px;
  border: 1px solid #eee;
  color: #424242;
  font-size: 18px;
  width: 100%;
`;

class Select extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <SelectWrapper {...this.props} />
    );
  }
}

export default Select;
