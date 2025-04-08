import React from 'react'
import {useHomeContext} from '../context/HomeContext'
const Landing = () => {
  const data=useHomeContext();
  console.log(data);
  
  return (
    <div>Landing</div>
  )
}

export default Landing