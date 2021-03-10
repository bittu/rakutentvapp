import React, { createContext, useContext, useMemo, useState } from 'react'

export const DataContext = createContext()

export const useData = () => useContext(DataContext)

export const DataProvider = ({ children }) => {
  const [data, setData] = useState(null)
  const ctx = useMemo(() => ({ data, setData }), [data])

  return (
    <DataContext.Provider value={ctx}>
      {children}
    </DataContext.Provider>
  )
}
