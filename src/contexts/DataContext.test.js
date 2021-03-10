import React, { useContext, useEffect } from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { DataContext, DataProvider, useData} from './DataContext'

const CustomComp = () => {
  const data = useContext(DataContext)
  return (
    <div data-testid="custom-comp">
      {data && data.data ? data.data.name : 'No data'}
    </div>
  )
}

const SetData = () => {
  const { setData } = useData()

  useEffect(() => {
    setData({name: "hello from set data comp"})
  }, [])

  return null
}

test("DataContext tests null context data", () => {
  const { getByTestId } = render(
    <DataContext.Provider value={null}>
      <CustomComp />
    </DataContext.Provider>
  );
  expect(getByTestId('custom-comp')).toHaveTextContent('No data');
});

test("DataContext tests sample context data", () => {
  const { getByTestId } = render(
    <DataContext.Provider value={{data: {name: "hello"}}}>
      <CustomComp />
    </DataContext.Provider>
  );
  expect(getByTestId('custom-comp')).toHaveTextContent('hello');
});

test("DataProvider tests sample context data", () => {
  const { getByTestId } = render(
    <DataProvider value={{name: "hello"}}>
      <SetData />
      <CustomComp />
    </DataProvider>
  );
  expect(getByTestId('custom-comp')).toHaveTextContent('hello from set data comp');
});