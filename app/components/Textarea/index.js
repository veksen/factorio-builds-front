/**
*
* Textarea
*
*/

import React from 'react';
import styled from 'styled-components';

export const TextareaWrapper = styled.textarea`
  border-radius: 5px;
  padding: 18px;
  border: 0;
  color: #424242;
  font-size: 18px;
  border: 1px solid #eee;
  width: 100%;
  min-height: 120px;
`;

class Textarea extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <TextareaWrapper>
      </TextareaWrapper>
    );
  }
}

export default Textarea;
