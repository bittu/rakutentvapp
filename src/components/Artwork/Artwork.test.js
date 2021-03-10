import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { MemoryRouter } from 'react-router-dom';

import Artwork from "./Artwork";

describe('<Artwork />', () => {
  it('renders a <img>', () => {

    const { getByRole } = render(
      <Artwork
        src="dummy/link"
        title="arttitle"
      />
    );

    const img = getByRole('img')

    expect(img).toHaveAttribute('src', 'dummy/link')
  });

  it('renders a <img> as a link', () => {

    const { getByRole, getByTestId } = render(
      <MemoryRouter>
        <Artwork
          src="dummy/link"
          title="arttitle"
          link="/navigate/to/link"
        />
      </MemoryRouter>
    );

    const img = getByRole('img')
    expect(img).toHaveAttribute('src', 'dummy/link')
    const link = getByTestId('artwork-link')
    expect(link).toHaveAttribute('href', "/navigate/to/link")
  });

  it('throws error without required props `src` and `title`', () => {
    console.error = jest.fn();
    render(<Artwork />)
    expect(console.error).toHaveBeenCalled()
  })
})