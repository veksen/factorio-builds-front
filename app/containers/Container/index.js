/*
 *
 * Container
 *
 */

import React, { PropTypes } from 'react';
import styled from 'styled-components';

export const ContainerWrapper = styled.div`
  max-width: calc(1366px + 20px * 2);
  margin: 0 auto;
  display: flex;
  padding: 0 20px;
  flex: 1;
  flex-direction: ${(props) => props.direction ? props.direction : 'row'}
`;

export class Container extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <ContainerWrapper {...this.props}>
        {this.props.children}
      </ContainerWrapper>
    );
  }
}

Container.propTypes = {
  children: PropTypes.node,
  direction: PropTypes.string, // eslint-disable-line react/no-unused-prop-types
};

export default Container;
