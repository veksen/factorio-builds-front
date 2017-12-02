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
import Formsy from 'formsy-react';

import H2 from 'components/H2'; // eslint-disable-line import/first
import Container from 'containers/Container'; // eslint-disable-line import/first
import FormWrapper from 'components/FormWrapper'; // eslint-disable-line import/first
import FormInput from 'components/FormInput'; // eslint-disable-line import/first
import FormTextarea from 'components/FormTextarea'; // eslint-disable-line import/first
import FormSelect from 'components/FormSelect'; // eslint-disable-line import/first
import FormButtonsWrapper from 'components/FormButtonsWrapper'; // eslint-disable-line import/first
import Button from 'components/Button'; // eslint-disable-line import/first
import FormContainer from './FormContainer';
import SubmitPreviewExplanation from './SubmitPreviewExplanation';
import injectSaga from 'utils/injectSaga'; // eslint-disable-line import/first
import injectReducer from 'utils/injectReducer'; // eslint-disable-line import/first
import makeSelectBuildsCreatePage from './selectors';
import reducer from './reducer';
import { saveBuild } from 'containers/BuildList/actions'; // eslint-disable-line import/first
import saga from './saga';
import messages from './messages';

export class BuildsCreatePage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);

    this.disableButton = this.disableButton.bind(this);
    this.enableButton = this.enableButton.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      canSubmit: false,
    };
  }

  getModel() {
    return this.form && this.form.getModel();
  }

  enableButton() {
    this.setState({
      canSubmit: true,
    });
  }

  disableButton() {
    this.setState({
      canSubmit: false,
    });
  }

  canSubmit() {
    return this.state.canSubmit && this.getModel().image;
  }

  canSubmitPreview() {
    return this.state.canSubmit;
  }

  handleSubmit() {
    const build = this.getModel();

    return this.props.dispatch(saveBuild(build));
  }

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

        <Formsy onValid={this.enableButton} onInvalid={this.disableButton} ref={(r) => { this.form = r; }} onSubmit={() => this.handleSubmit()}>
          <FormContainer>
            <FormWrapper label={'Name'}>
              <FormInput
                name="name"
                required
              />
            </FormWrapper>

            <FormWrapper label={'Image'}>
              <FormInput
                name="image"
              />
            </FormWrapper>

            <FormWrapper label={'Category'}>
              <FormSelect
                name="category"
                placeholder={'Select a category...'}
                options={['Balancers', 'Smelting', 'Trains', 'Production']}
                required
              />
            </FormWrapper>

            <FormWrapper label={'Description'}>
              <FormTextarea
                name="desc"
                required
              />
            </FormWrapper>

            <FormWrapper label={'Blueprint'}>
              <FormInput
                name="blueprint"
              />
            </FormWrapper>

            {!this.canSubmit() && this.canSubmitPreview() && <SubmitPreviewExplanation>A build cannot be published without an image.</SubmitPreviewExplanation>}

            <FormButtonsWrapper>
              <Button disabled={!this.canSubmit()}>Add build</Button>
              <Button disabled={!this.canSubmitPreview()} onClick={() => this.form.submit()}>Preview</Button>
            </FormButtonsWrapper>
          </FormContainer>
        </Formsy>
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
