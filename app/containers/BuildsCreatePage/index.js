/**
 *
 * BuildsCreatePage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import H2 from 'components/H2'; // eslint-disable-line import/first
import Container from 'containers/Container'; // eslint-disable-line import/first
import FormWrapper from 'components/FormWrapper'; // eslint-disable-line import/first
import FormButtonsWrapper from 'components/FormButtonsWrapper'; // eslint-disable-line import/first
import Button from 'components/Button'; // eslint-disable-line import/first
import Input from './Input';
import Textarea from './Textarea';
import FormContainer from './FormContainer';
import injectSaga from 'utils/injectSaga'; // eslint-disable-line import/first
import injectReducer from 'utils/injectReducer'; // eslint-disable-line import/first
import makeSelectBuildsCreatePage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export class BuildsCreatePage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Container>
        <Helmet>
          <title>BuildsCreatePage</title>
          <meta name="description" content="Description of BuildsCreatePage" />
        </Helmet>

        <H2>
          <FormattedMessage {...messages.header} />
        </H2>

        <FormContainer>
          <FormWrapper label={'Name'}>
            <Input />
          </FormWrapper>

          <FormWrapper label={'Image'}>
            <Input />
          </FormWrapper>

          <FormWrapper label={'Category'}>
            <Input />
          </FormWrapper>

          <FormWrapper label={'Description'}>
            <Textarea />
          </FormWrapper>

          <FormWrapper label={'Blueprint'}>
            <Input />
          </FormWrapper>

          <FormButtonsWrapper>
            <Button>Add build</Button>
            <Button>Preview</Button>
          </FormButtonsWrapper>
        </FormContainer>
      </Container>
    );
  }
}

BuildsCreatePage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  buildscreatepage: makeSelectBuildsCreatePage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'buildsCreatePage', reducer });
const withSaga = injectSaga({ key: 'buildsCreatePage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(BuildsCreatePage);
