import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Cast from "./Cast";

describe('<Cast />', () => {
  it('renders a <img>', () => {

    const { getByRole, getByText } = render(
      <Cast
        src="dummy/link"
        name="castname"
      />
    );

    const img = getByRole('img')
    expect(img).toHaveAttribute('src', 'dummy/link')
    expect(getByText('castname')).toBeInTheDocument()
  });

  it('renders a <img> with director text', () => {

    const { getByRole, getByText } = render(
      <Cast
        src="dummy/link"
        name="castname"
        isDirector
      />
    );

    const img = getByRole('img')
    expect(img).toHaveAttribute('src', 'dummy/link')
    expect(getByText('castname')).toBeInTheDocument()
    expect(getByText('Director')).toBeInTheDocument()
  });

  it('renders a <img> with custom className', () => {

    const { getByTestId } = render(
      <Cast
        src="dummy/link"
        name="castname"
        className="customClass"
      />
    );

    expect(getByTestId('cast')).toHaveClass('customClass')
  });

  it('throws error without required props `src` and `name`', () => {
    console.error = jest.fn();
    render(<Cast />)
    expect(console.error).toHaveBeenCalled()
  })
})