/**
*
* FormButtonsWrapper
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import A from 'components/Button/A';

const Wrapper = styled.div`
  margin-top: 10px;
  padding-left: 150px;
  display: flex;

  ${A} + ${A} {
    margin-left: 10px;
  }
`;

class FormButtonsWrapper extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Wrapper>
        {this.props.children}
      </Wrapper>
    );
  }
}

FormButtonsWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FormButtonsWrapper;
