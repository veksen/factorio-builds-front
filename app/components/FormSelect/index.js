/**
*
* FormSelect
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { withFormsy } from 'formsy-react';

import { SelectWrapper } from 'components/Select';

const Wrapper = styled.div`
  width: 100%;
`;

const Select = SelectWrapper.extend`
  border-color: #bcbcbc;
`;

class FormSelect extends React.Component { // eslint-disable-line react/prefer-stateless-function
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
        <Select
          onChange={this.changeValue}
          value={this.props.getValue() || ''}
          {...this.props}
        >
          {this.props.placeholder && (<option value="">{this.props.placeholder}</option>)}
          {this.props.options.map((option) => (<option key={option.toLowerCase()} value={option.toLowerCase()}>{option}</option>))}
        </Select>
        <span>{errorMessage}</span>
      </Wrapper>
    );
  }
}

FormSelect.propTypes = {
  getErrorMessage: PropTypes.func.isRequired,
  getValue: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
  placeholder: PropTypes.string,
  setValue: PropTypes.func.isRequired,
};

export default withFormsy(FormSelect);
