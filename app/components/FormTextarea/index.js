/**
*
* FormTextarea
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { withFormsy } from 'formsy-react';

import { TextareaWrapper } from 'components/Textarea';

const Wrapper = styled.div`
  width: 100%;
`;

const Textarea = TextareaWrapper.extend`
  border-color: #bcbcbc;
`;

class FormTextarea extends React.Component { // eslint-disable-line react/prefer-stateless-function
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
        <Textarea
          onChange={this.changeValue}
          value={this.props.getValue() || ''}
          {...this.props}
        />
        <span>{errorMessage}</span>
      </Wrapper>
    );
  }
}

FormTextarea.propTypes = {
  getErrorMessage: PropTypes.func.isRequired,
  getValue: PropTypes.func.isRequired,
  setValue: PropTypes.func.isRequired,
};

export default withFormsy(FormTextarea);
