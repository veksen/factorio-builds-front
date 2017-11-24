/**
*
* Checkbox
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  & + & {
    margin-top: 15px;
  }
`;

const Box = styled.div`
  width: 18px;
  height: 18px;
  background: #fff;
  position: relative;
  margin-right: 14px;

  &:hover:after {
    display: block;
    opacity: 0.5;
  }

  &:after {
    display: ${(props) => props.checked ? 'block' : 'none'};
    content: '';
    position: absolute;
    top: 2px;
    left: 2px;
    right: 2px;
    bottom: 2px;
    background: #8FCE5B;
  }
`;

const Text = styled.span`
  color: #424242;
  opacity: ${(props) => props.checked ? '1' : '0.5'};
  user-select: none;
`;

class Checkbox extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <CheckboxWrapper onClick={this.props.onClickEvent}>
        <Box checked={this.props.checked} />
        <Text checked={this.props.checked}>{this.props.children}</Text>
      </CheckboxWrapper>
    );
  }
}

Checkbox.propTypes = {
  children: PropTypes.node,
  onClickEvent: PropTypes.func,
  checked: PropTypes.bool,
};

export default Checkbox;
