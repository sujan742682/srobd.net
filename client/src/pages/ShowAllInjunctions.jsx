import React from 'react'
import { useLoaderData } from 'react-router-dom'
import { AllInjunctionContext } from '../context/AllInjunctionContext'
import { TableForShowInjunction } from '../components'

const ShowAllInjunctions = () => {
    const data=useLoaderData()
  return (
    <AllInjunctionContext.Provider value={{data}}>
      <TableForShowInjunction/>
    </AllInjunctionContext.Provider>
  )
}

export default ShowAllInjunctions