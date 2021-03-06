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
  border: 1px solid #eee;
  color: #424242;
  font-size: 18px;
  width: 100%;
`;

class Input extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <InputWrapper {...this.props} />
    );
  }
}

export default Input;
