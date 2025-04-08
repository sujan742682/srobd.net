import React from 'react'
import { LoginForm } from '../components'
const Login = () => {
  return (
    <>
    <div className="flex flex-col min-h-screen bg-gray-100 p-4">
      <div className="flex-1 flex items-center justify-center">
        <div className="w-full max-w-md bg-white p-6 rounded-2xl shadow-lg">
          <LoginForm/>
        </div>
      </div>
      <footer className="text-center py-4 bg-white shadow-md mt-4">
        <p className="text-gray-600">&copy; 2025 My Company. All rights reserved.</p>
      </footer>
    </div>
    </>
  )
}

export default Login