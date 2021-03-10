import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import RakutenTVLogo from "./RakutenTVLogo";

describe('<RakutenTVLogo />', () => {
  it('renders a <svg> logo', () => {

    const { getByTestId } = render(
      <RakutenTVLogo />
    );

    const logo = getByTestId('rakuten-logo')
    expect(logo).toBeInTheDocument()
  });

  it('renders a <svg> logo with custom fillColor', () => {

    const { getByTestId } = render(
      <RakutenTVLogo
        fillColor="#123456"
      />
    );

    const logo = getByTestId('rakuten-logo')
    expect(logo).toBeInTheDocument()
    expect(logo.firstChild).toHaveAttribute('fill', '#123456')
  });
})