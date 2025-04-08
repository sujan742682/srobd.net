import customFetch from "../FrontHelper/CustomAxios";
import { MyBadRequestError } from "../../../errors/customErrors.js";
import { toast } from "react-toastify";

export const makeUserLogedOutFunc=async ()=>{
    try {
        await customFetch.post('/user/logout');
        toast.success('You have logged out successfully')
    } catch (error) {
        console.log(error);
        throw new MyBadRequestError(error?.response?.data?.msg || 'Logout failed'); // Custom error handling
    }
}