/**
*
* Blueprints
*
*/

import React from 'react';
import PropTypes from 'prop-types';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

import Blueprint from './Blueprint';
import Label from './Label';
import Textarea from './Textarea';

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
