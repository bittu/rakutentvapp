import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import { Carousel, CarouselItem } from "./Carousel";

describe('<CarouselItem />', () => {
  it('renders a <li>', () => {
    const { getByText } = render((
      <CarouselItem>
        Hello
      </CarouselItem>
    ))

    expect(getByText('Hello')).toBeInTheDocument()
  })

  it('renders a <li> with custom className', () => {
    const { getByText } = render((
      <CarouselItem className="customClass">
        Hello
      </CarouselItem>
    ))

    expect(getByText('Hello')).toBeInTheDocument()
    expect(getByText('Hello')).toHaveClass('customClass')
  })

  it('throws error without required props `children`', () => {
    console.error = jest.fn();
    render(<CarouselItem />)
    expect(console.error).toHaveBeenCalled()
  })
})

describe('<Carousel />', () => {
  it('renders a <ul>', () => {
    const { getByText } = render(
      <Carousel>
        <CarouselItem>1</CarouselItem>
        <CarouselItem>2</CarouselItem>
      </Carousel>
    );
    expect(getByText('1')).toBeInTheDocument()
    expect(getByText('2')).toBeInTheDocument()
  });

  it('renders a <ul> with custom className', () => {
    const { getByTestId } = render(
      <Carousel className="customClass">
        <CarouselItem>1</CarouselItem>
        <CarouselItem>2</CarouselItem>
      </Carousel>
    );
    const carousel = getByTestId('carousel')
    expect(carousel).toBeInTheDocument()
    expect(carousel).toHaveClass('customClass')
  });
})