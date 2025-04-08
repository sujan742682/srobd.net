import React from 'react'
import { useLoaderData } from 'react-router-dom'
const AdminLayout = () => {
    const data=useLoaderData()
    const {TotalScan,TotalUser}=data
  return (
    <>
        <p>Total user: {TotalUser}</p>
        <p>Total scan: {TotalScan}</p>
    </>
  )
}

export default AdminLayout