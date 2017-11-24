/**
*
* Input
*
*/

import React from 'react';
import styled from 'styled-components';

export const InputWrapper = styled.input`
  border-radius: 5px;
  height: 55px;
  padding: 0 18px;
  border: 0;
  color: #424242;
  font-size: 18px;
`;

class Input extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <InputWrapper />
    );
  }
}

export default Input;
