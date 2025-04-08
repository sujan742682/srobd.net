import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'react-toastify/ReactToastify.css'
import { ToastContainer } from 'react-toastify';
// import customFetch from './FrontHelper/CustomAxios.js'

// const testData=await customFetch.get('/test')
// console.log(testData);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <ToastContainer position='top-center' />
  </StrictMode>,
)
