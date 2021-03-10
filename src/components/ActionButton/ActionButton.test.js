import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import ActionButton from "./ActionButton";
import { Icons } from '../Icon/Icon';

describe('<ActionButton />', () => {
  it('renders a <button>', () => {
    const onClickFn = jest.fn()

    const { getByTestId } = render(
      <ActionButton
        text="hello"
        onClick={onClickFn}
      />
    );

    const button = getByTestId('action-button')

    expect(button).toHaveTextContent('hello')

    fireEvent.click(button)

    expect(onClickFn).toHaveBeenCalledTimes(1)
  });

  it('renders a <button> with icon', () => {
    const onClickFn = jest.fn()

    const { getByTestId } = render(
      <ActionButton
        text="hello"
        onClick={onClickFn}
        icon={Icons.CALENDAR}
      />
    );

    const button = getByTestId('action-button')
    expect(button).toHaveTextContent('hello')
    const iconSpan = getByTestId('icon')
    expect(button).toContainElement(iconSpan)
  });

  it('throws error without required props `text` and `onClick`', () => {
    console.error = jest.fn();
    render(<ActionButton />)
    expect(console.error).toHaveBeenCalled()
  })
})