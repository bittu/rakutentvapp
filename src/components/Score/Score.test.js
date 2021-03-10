import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Score from "./Score";

describe('<Score />', () => {
  it('renders a <svg>', () => {

    const { getByTestId, getByText } = render(
      <Score
        percentage={10}
      />
    );

    const svg = getByTestId('score-svg')

    expect(svg).toBeInTheDocument()
    expect(getByText('10')).toBeInTheDocument()
  });

  it('renders a <svg> shows title and label', () => {

    const { getByTestId, getByText } = render(
      <Score
        percentage={10}
        label="7.5"
        title="scoretitle"
      />
    );

    const svg = getByTestId('score-svg')

    expect(svg).toBeInTheDocument()
    expect(getByText('7.5')).toBeInTheDocument()
    expect(getByText('scoretitle')).toBeInTheDocument()
  });

  it('renders a <svg> in a link', () => {

    const { getByTestId } = render(
      <Score
        percentage={10}
        link="navigate/to/link"
      />
    );

    const svg = getByTestId('score-svg')

    expect(svg).toBeInTheDocument()
    expect(svg.closest('a')).toHaveAttribute('href', 'navigate/to/link')
  });

  it('throws error without required props `percentage`', () => {
    console.error = jest.fn();
    render(<Score />)
    expect(console.error).toHaveBeenCalled()
  })
})