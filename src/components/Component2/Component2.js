import PropTypes from 'prop-types';
import React from 'react';

import NestedComponent from 'components/Component2/NestedComponent/NestedComponent';

class Component2 extends React.Component {
  render() {
    return (
      <div>
        <NestedComponent />
      </div>
    );
  }
}

export default Component2;
