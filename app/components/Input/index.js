/**
*
* Input
*
*/

import React from 'react';
import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

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
      <InputWrapper>
        <FormattedMessage {...messages.header} />
      </InputWrapper>
    );
  }
}

Input.propTypes = {

};

export default Input;
