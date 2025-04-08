import React from 'react'
import { Form, Link, useActionData } from 'react-router-dom'
import FormSubmitButton from './FormSubmitButton'
const LoginForm = () => {
  const errors = useActionData();
    return (
        <>
        {errors && <p style={{ color: 'red' }}>{errors.msg}</p>}
          <h2 className="text-xl font-semibold mb-4 text-center">Login</h2>
          <Form method='post' className="space-y-4">
            <div>
              <label htmlFor="userMobile" className="block text-sm font-medium text-gray-700">Mobile No.</label>
              <input
                type="mobile"
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
                name="userPassword"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your password"
                required
              />
            </div>
            <FormSubmitButton btnText="Login" />
          </Form>
            <div className='mt-5 text-center'>
              <p>Don't have an account? <Link className='text-blue-600  md:ml-2' to={"/register"}>Register</Link></p>
            </div>
        </>
      )
}

export default LoginForm