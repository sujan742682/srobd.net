import { redirect } from "react-router-dom";
import customFetch from "../FrontHelper/CustomAxios.js";
import { toast } from "react-toastify";

export const dashboardLoaders = async () => {
    try {
        const { data } = await customFetch.get('/stats/currentUser'); // Fix destructuring

        return data; // Returning the user data
    } catch (error) {
        return redirect('/'); // Redirect if there's an error
    }
};
export const getAllInjunctionsLoader = async () => {
    try {
        const {data}=await customFetch.get('/injunctions/getAllInjunctions');
        return data;
    } catch (error) {
        toast.error(error?.response?.data?.msg)
        return error
        
    }
}
export const injunctionEditLoader=async({params})=>{
    try {
        const id=params?.id
        const {data}=await customFetch.get(`injunctions/${id}`)
        return data
    } catch (error) {
        toast.error(error?.response?.data?.msg)
        redirect('/dashboard')
    }
}
export const AdminLoader=async()=>{
    try {
        const {data}=await customFetch.get('/stats/admin/totalUser')
        return data
    } catch (error) {
        toast.error(error?.response?.data?.msg)
        redirect('/dashboard')
    }
}
export const ProfileLoader=async()=>{
    return 0;
}