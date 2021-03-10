import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Loading from "./Loading";

describe('<Loading />', () => {
  it('renders a <div>', () => {

    const { getByTestId } = render(
      <Loading />
    );

    const loading = getByTestId('loading')
    expect(loading).toBeInTheDocument()
    expect(loading).toHaveClass('loading')
  });
})