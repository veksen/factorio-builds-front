/**
*
* FormWrapper
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;

  & + & {
    margin-top: 10px;
  }
`;

const Label = styled.label`
  width: 150px;
  flex: 0 0 150px;
  padding: 10px 30px 10px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-weight: 700;
`;

class FormWrapper extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Wrapper>
        {this.props.label && <Label>{this.props.label}</Label>}
        {this.props.children}
      </Wrapper>
    );
  }
}

FormWrapper.propTypes = {
  children: PropTypes.object,
  label: PropTypes.string,
};

export default FormWrapper;
