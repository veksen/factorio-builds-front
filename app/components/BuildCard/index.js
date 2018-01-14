/**
*
* BuildCard
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';

const BuildCardWrapper = styled.div`
  align-items: flex-end;
  display: inline-flex;
  flex: 1 0 50%;
  width: calc(50% - 40px);
  color: #fff;
  margin: 0 20px 20px;
  flex-direction: row;
  position: relative;
  min-height: 20vh;
  max-height: 60vh;
  overflow: hidden;
  background: #343434 url(${(props) => props.image}) no-repeat 50% 50% / cover;
  cursor: pointer;

  &:hover {
    opacity: 0.85;
  }
`;

const Info = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  margin-top: 0;
  padding: 0 30px 20px;
  background-image: linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 55%);
  display: flex;
  flex: 1 0 100%;
  flex-direction: column;
`;

const Title = styled.h4`
  color: #fff;
  font-size: 18px;
  font-weight: 700;
  margin: 75px 0 5px;
`;

const Category = styled.span`
  display: flex;
`;

const Tag = styled.span`
  display: inline-flex;
  font-weight: 700;
  font-size: 13px;
  line-height: 1;
  justify-content: center;
  align-items: center;
  color: #000;
  background: #fff;
  height: 20px;
  padding: 0 10px;
  border-radius: 10px;
`;

const HiddenImage = styled.img`
  display: block;
  opacity: 0;
  width: 100%;
  height: auto;
`;

export class BuildCard extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { build } = this.props;
    const buildId = build._id; // eslint-disable-line no-underscore-dangle

    const image = build.image
      ? `${build.image}.jpg`
      : 'trans.gif';
    const buildImage = require(`./${image}`); // eslint-disable-line global-require

    return (
      <BuildCardWrapper
        image={buildImage}
        onClick={() => this.props.dispatch(push(`/builds/${buildId}`))}
      >
        <HiddenImage src={buildImage} />
        <Info>
          <Title>{build.name}</Title>
          <Category>
            <Tag>{build.category}</Tag>
          </Category>
        </Info>
      </BuildCardWrapper>
    );
  }
}

BuildCard.propTypes = {
  build: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(BuildCard);
