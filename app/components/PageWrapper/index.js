/**
*
* PageWrapper
*
*/

import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  display: flex;
  flex: 1;
`;

class PageWrapper extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Wrapper>
        {this.props.children}
      </Wrapper>
    );
  }
}

PageWrapper.propTypes = {
  children: PropTypes.node,
};

export default PageWrapper;
