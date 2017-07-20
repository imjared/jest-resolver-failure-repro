import PropTypes from 'prop-types';
import React from 'react';

import translations from './translations';

class Component1 extends React.Component {
  render() {
    return (
      <div>
        {translations[`en-US`].content}
      </div>
    );
  }
}

export default Component1;
