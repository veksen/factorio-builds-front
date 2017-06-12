/**
*
* Headline
*
*/

import React from 'react';
import styled from 'styled-components';

import Container from 'containers/Container';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

const HeadlineWrapper = styled.div`
  background: #424242;
  color: #D6D6D6;
  padding: 30px 20px;
`;

const Title = styled.h2`
  font-weight: 700;
  font-size: 28px;
  margin: 0;
`;

const SubTitle = styled.h3`
  font-weight: 400;
  font-size: 18px;
  margin: 5px 0 0;
`;

class Headline extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <HeadlineWrapper>
        <Container direction="column">
          <Title>
            <FormattedMessage {...messages.title} />
          </Title>
          <SubTitle>
            <FormattedMessage {...messages.subTitle} />
          </SubTitle>
        </Container>
      </HeadlineWrapper>
    );
  }
}

Headline.propTypes = {

};

export default Headline;
