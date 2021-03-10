import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Icon, { Icons } from "./Icon";

describe('<Icon />', () => {
  it('renders a <span>', () => {

    const { getByTestId } = render(
      <Icon
        use={Icons.CALENDAR}
      />
    );

    const icon = getByTestId('icon')
    expect(icon).toHaveClass('calendar')
  });

  it('renders a <span> with custom className', () => {

    const { getByTestId } = render(
      <Icon
        use={Icons.CALENDAR}
        className="customClass"
      />
    );

    const icon = getByTestId('icon')
    expect(icon).toHaveClass('calendar')
    expect(icon).toHaveClass('customClass')
  });

  it('throws error without required props `use`', () => {
    console.error = jest.fn();
    render(<Icon />)
    expect(console.error).toHaveBeenCalled()
  })
})