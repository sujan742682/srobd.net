import { redirect } from 'react-router-dom';
import customFetch from '../FrontHelper/CustomAxios.js'
import { toast } from 'react-toastify';
// import { request } from 'express';
// import { param } from 'express-validator';

export const registrationAction = async ({ request }) => {
  const formData = await request.formData();
  const inputData=Object.fromEntries(formData)  
  try {
    await customFetch.post('/user/register', inputData);
    toast.success('You have successfully complete your registration')
    return redirect('/login');
  } catch (error) {
    console.log(error);
    toast.error(error?.response?.data?.msg)
    return error;
  }
};

export const loginFormAction=async({request})=>{
    const inputData=Object.fromEntries(await request.formData())
    const errors={msg:''}
    if(inputData.userPassword.length<3){
      errors.msg='Password is too short'
      return errors
    }
    try {
        await customFetch.post('/user/login',inputData)
        toast.success('You have logged successfully')
        return redirect('/dashboard')
    } catch (error) {
        errors.msg=error?.response?.data?.msg
        return errors
    }
}
export const addInjunctionFormAction=async({request})=>{
  const inputData=Object.fromEntries(await request.formData())  
  const errors={msg:''}
  if(inputData.mouzaJlNo.length<1){
    errors.msg='mouzaJlNo name is required'
    return errors //This error is shown by useActionData
  }
  try {
    await customFetch.post('/injunctions/addInjunctions',inputData)
    toast.success('Data saved successfully')
  } catch (error) {
    errors.msg=error?.response?.data?.msg
    return errors //This error is shown by useActionData
  }
}
export const InjunctionEditFormSave = async ({ request, params }) => {
  const inputData = Object.fromEntries(await request.formData());
  try {
    await customFetch.patch(`/injunctions/${params.id}`, inputData);
    toast.success('Injunction Updated Successfully');
  } catch (error) {
    toast.error(error?.response?.data?.msg);
  }
};
export const injunctionDeleteAction=async({params})=>{
  const id=params.id
  if(!id) return null
  try {
    await customFetch.delete(`/injunctions/${id}`)
    toast.success('Injunction Deleted Successfully')
    return redirect('/dashboard/show-all-injunctions')
  } catch (error) {
    console.log(error);
    toast.error(error?.response?.data?.msg)
    
  }
}
export const ProfileEditAction=async({request})=>{
  const formData=await request.formData(); // For multipart form data data need to send to the server as formData
  const file=formData.get('avatar')
  if(file && file.size>500000){
    toast.error('File size is too large')
    return null
  }
  try {
    await customFetch.patch('/stats/updateUser',formData);
    toast.success('Profile Updated Successfully')
    return null
  } catch (error) {
    console.log(error);
    toast.error(error?.response?.data?.msg)
    return null
    
  }
}