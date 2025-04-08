import { createContext, useContext } from "react";

export const AllInjunctionContext=createContext();
export const useAllInjunctionContext=()=>{
    const context=useContext(AllInjunctionContext)
    return context
}