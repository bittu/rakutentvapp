import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Parallax from "./Parallax";

describe('<Parallax />', () => {
  it('renders a <div>', () => {

    const { getByTestId } = render(
      <Parallax
        src="dummy/link"
      />
    );

    const parallax = getByTestId('parallax')
    expect(parallax).toHaveStyle({backgroundImage: 'url(dummy/link)'})
  });

  it('renders a <div> with children', () => {

    const { getByTestId } = render(
      <Parallax
        src="dummy/link"
      >
        <div data-testid="child">Child</div>
      </Parallax>
    );

    const parallax = getByTestId('parallax')
    expect(parallax).toHaveStyle({backgroundImage: 'url(dummy/link)'})
    expect(parallax).toContainElement(getByTestId('child'))
  });

  fit('test parallax effect', () => {

    const { getByTestId } = render(
      <div style={{height: 2000}}>
        <Parallax
          src="dummy/link"
        />
      </div>
    );

    const parallax = getByTestId('parallax')
    expect(parallax).toHaveStyle({backgroundImage: 'url(dummy/link)'})

    fireEvent.scroll(window, { target: { scrollY: 10 }})
    expect(parallax).toHaveStyle({backgroundPosition: 'center top'})
  });

  it('throws error without required props `src`', () => {
    console.error = jest.fn();
    render(<Parallax />)
    expect(console.error).toHaveBeenCalled()
  })
})