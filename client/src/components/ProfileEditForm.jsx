import React from 'react'
import { Form } from 'react-router-dom'
const ProfileEditForm = () => {
  return (
    <div>
        <Form method="post" encType="multipart/form-data">
            <div>
                <label htmlFor='userName'>নামঃ </label>
                <input 
                    type='text'
                    name='userName'
                    id='userName'
                    defaultValue={'sdfgdfr'}
                    className=''                
                />
            </div>
            <div>
                <label htmlFor='avatar'>প্রোফাইল ছবি (৫০০ কেবি এর কম) </label>
                <input 
                    type='file'
                    name='avatar'
                    id='avatar'
                    accept='image/*'
                    className=''                
                />
            </div>
            <button 
            type='submit' 
            className='bg-blue-500 text-white px-4 py-2 rounded-lg mt-4 cursor-pointer'
            >
                Save Changes
            </button>
        </Form>
    </div>
  )
}

export default ProfileEditForm