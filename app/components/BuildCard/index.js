/**
*
* BuildCard
*
*/

import React, { PropTypes } from 'react';
import styled from 'styled-components';

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
  background: url(${(props) => props.image}) no-repeat 50% 50% / cover;
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

class BuildCard extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const buildImage = require(`./${this.props.build.image}.jpg`); // eslint-disable-line global-require

    return (
      <BuildCardWrapper image={buildImage}>
        <HiddenImage src={buildImage} />
        <Info>
          <Title>{this.props.build.name}</Title>
          <Category>
            <Tag>{this.props.build.category}</Tag>
          </Category>
        </Info>
      </BuildCardWrapper>
    );
  }
}

BuildCard.propTypes = {
  build: PropTypes.object.isRequired,
};

export default BuildCard;
