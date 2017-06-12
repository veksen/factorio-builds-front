/*
 *
 * Content
 *
 */

import React, { PropTypes } from 'react';
import styled from 'styled-components';

export const ContentWrapper = styled.div`
  padding: 20px 0 20px 20px;
  flex: 1;
`;

export class Content extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <ContentWrapper>
        {this.props.children}
      </ContentWrapper>
    );
  }
}

Content.propTypes = {
  children: PropTypes.node,
};

export default Content;
