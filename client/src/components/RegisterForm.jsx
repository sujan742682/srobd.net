import React from 'react'
import { Form, Link, useNavigation } from 'react-router-dom'
import FormSubmitButton from './FormSubmitButton'
const RegisterForm = () => {
  const isFormSubmitting=useNavigation().state==='submitting'
  return (
    <>
      <h2 className="text-xl font-semibold mb-4 text-center">Sign Up</h2>
      <Form method='post' className="space-y-4">
      <div>
        <label htmlFor="userOffice" className="block text-sm font-medium text-gray-700">
          Select Office
        </label>
        <select
          id="userOffice"
          name="userOffice"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
          required
        >
          <option value="234">234</option>
          <option value="1212">1212</option>
          <option value="4522">4522</option>
        </select>
      </div>

      <div>
        <label htmlFor="userRole" className="block text-sm font-medium text-gray-700">
          Select Office
        </label>
        <select
          id="userRole"
          name="userRole"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
          required
        >
          <option value="Admin">Admin</option>
          <option value="User">User</option>
        </select>
      </div>
        <div>
          <label htmlFor="userName" className="block text-sm font-medium text-gray-700">Full Name</label>
          <input
            type="text"
            id="userName"
            name="userName"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your name"
            required
          />
        </div>
        <div>
          <label htmlFor="userEmail" className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            id="userEmail"
            name="userEmail"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your email"
          />
        </div>
        <div>
          <label htmlFor="userMobile" className="block text-sm font-medium text-gray-700">Mobile No.</label>
          <input
            type="tel"
            id="userMobile"
            name="userMobile"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your mobile number"
            required
          />
        </div>
        <div>
          <label htmlFor="userPassword" className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            id="userPassword"
            name="userPassword"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your password"
            required
          />
        </div>
        <FormSubmitButton btnText="Register" />
        {/* <button
          type="submit"
          disabled={isFormSubmitting}
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 cursor-pointer"
        >
          {isFormSubmitting ? 'Submitting....':'Submit'}
        </button> */}
      </Form>
        <div className='mt-5 text-center'>
          <p>Already have an account? <Link className='text-blue-600  md:ml-2' to={"/login"}>Login</Link></p>
        </div>
    </>
  )
}

export default RegisterForm