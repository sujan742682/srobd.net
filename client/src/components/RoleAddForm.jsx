import React from 'react'
import { Form } from 'react-router-dom'

const RoleAddForm = () => {
  return (
    <>
        <Form method='post' className='space-y-4'>
            <div>
                <label htmlFor="userId" className="block text-sm font-medium text-gray-700">Enter User ID</label>
                <input
                    type="text"
                    id="userId"
                    name="userId"
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter User ID"
                    required
                />
            </div>
            <div>
                <label htmlFor="role" className="block text-sm font-medium text-gray-700">Select Role</label>
                <select
                id="role"
                name="role"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                required
                >
                <option value="">Select Role</option>
                <option value="admin">Admin</option>
                <option value="user">User</option>
                </select>
            </div>
            <button type='submit' className='bg-blue-500 text-white px-4 py-2 rounded'>Add Role</button>

        </Form>
    </>
  )
}

export default RoleAddForm