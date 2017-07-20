import React from 'react';
import { render } from 'enzyme';

import NestedComponent from 'components/Component2/NestedComponent/NestedComponent';

describe(`Nested Component`, () => {
  it(`renders`, () => {
    const component = render(<NestedComponent />);
    expect(component).toMatchSnapshot();
  });
});
