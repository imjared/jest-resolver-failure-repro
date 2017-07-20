import React from 'react';
import { render } from 'enzyme';

import Component1 from 'components/Component1/Component1';

describe(`Component 1`, () => {
  it(`renders`, () => {
    const component = render(<Component1 />);
    expect(component).toMatchSnapshot();
  });
});
