import React from 'react'
import { Form } from 'react-router-dom'
import {DakhilaCheckingAction} from '../actions/DakhilaCheckingAction.js'
const DakhilaCheckingForm = () => {
  const handleKeyDown=(event)=>{
    if (event.key === " ") {
      event.preventDefault(); // Prevents moving to the next field
      console.log("Tab key pressed!");
      const form=document.forms['dakhilaCheckingForm'];
      const formData=new FormData(form);
      const inputValues=formData.getAll('scan');
      DakhilaCheckingAction(inputValues);
    }
  }
  return (
    <>
      <Form method='post' name='dakhilaCheckingForm' className='space-y-4'>
          <div>
              <input 
              type="text" 
              name="scan" 
              id="scan" 
              onKeyDown={handleKeyDown}
              className='mt-1 block w-full p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500'
              placeholder='Scan QR Code'
              required
              />
          </div>
      </Form>
    </>
  )
}

export default DakhilaCheckingForm