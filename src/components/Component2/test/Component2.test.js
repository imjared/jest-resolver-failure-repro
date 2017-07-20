import React from 'react';
import { render } from 'enzyme';

import Component2 from 'components/Component2/Component2';

describe(`Component 2`, () => {
  it(`renders`, () => {
    const component = render(<Component2 />);
    expect(component).toMatchSnapshot();
  });
});
