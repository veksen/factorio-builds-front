/**
*
* FormInput
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { withFormsy } from 'formsy-react';

import { InputWrapper } from 'components/Input';

const Wrapper = styled.div`
  width: 100%;
`;

const Input = InputWrapper.extend`
  border-color: #bcbcbc;
`;

class FormInput extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.changeValue = this.changeValue.bind(this);
  }

  changeValue(event) {
    this.props.setValue(event.currentTarget.value);
  }

  render() {
    const errorMessage = this.props.getErrorMessage();

    return (
      <Wrapper>
        <Input
          onChange={this.changeValue}
          value={this.props.getValue() || ''}
          {...this.props}
        />
        <span>{errorMessage}</span>
      </Wrapper>
    );
  }
}

FormInput.propTypes = {
  getErrorMessage: PropTypes.func.isRequired,
  getValue: PropTypes.func.isRequired,
  setValue: PropTypes.func.isRequired,
};

export default withFormsy(FormInput);
