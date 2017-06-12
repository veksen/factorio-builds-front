/*
 *
 * SideBar
 *
 */

import React, { PropTypes } from 'react';
import styled from 'styled-components';

export const SideBarWrapper = styled.div`
  background: #eee;
  width: 300px;
  padding: 20px 20px 20px 0;
  position: relative;
`;

const SideBarContent = styled.div`
  position: relative;
  z-index: 1;
`;

const SideBarBG = styled.div`
  position: absolute;
  background: #eee;
  top: 0;
  bottom: 0;
  right: 0;
  width: 100vh;
`;

export class SideBar extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <SideBarWrapper>
        <SideBarContent>{this.props.children}</SideBarContent>
        <SideBarBG />
      </SideBarWrapper>
    );
  }
}

SideBar.propTypes = {
  children: PropTypes.node,
};

export default SideBar;
