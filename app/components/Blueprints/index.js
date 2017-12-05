/**
*
* Blueprints
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

const Blueprint = styled.div`
  & + & {
    margin-top: 15px;
  }
`;

const Label = styled.label`
  margin-bottom: 5px;
  display: block;
`;

const Textarea = styled.textarea`
  background: #D8D8D8;
  width: 100%;
  min-height: 100px;
  padding: 7px;
`;

class Blueprints extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        {this.props.blueprints.map((blueprint) => {
          const blueprintId = blueprint._id; // eslint-disable-line no-underscore-dangle
          return (
            <Blueprint>
              <Label htmlFor={blueprintId}>{blueprint.name}</Label>
              <Textarea key={blueprintId} id={blueprintId} defaultValue={blueprint.hash} readonly rows={'4'} />
            </Blueprint>
          );
        })}
      </div>
    );
  }
}

Blueprints.propTypes = {
  blueprints: PropTypes.array.isRequired,
};

export default Blueprints;
