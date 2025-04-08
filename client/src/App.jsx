import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Error, Home,Login,Register,Landing,Dashboard,DashboardHome,AddInjunction,ShowAllInjunctions,InjunctionEdit, AdminLayout,ProfileLayout,EditProfileLayout, AddRoleLayout } from './pages';
import { registrationAction,loginFormAction, addInjunctionFormAction,InjunctionEditFormSave,injunctionDeleteAction,ProfileEditAction } from './actions/FormSubmitAction.js';
import { AdminLoader, dashboardLoaders,getAllInjunctionsLoader,injunctionEditLoader,ProfileLoader} from './Loaders/AllLoaders.js';
const router=createBrowserRouter([
  {
    path:'/',
    element: <Home/>,
    errorElement:<Error/>,
    children:[
        {
          index:true,
          element:<Landing/>
        },
        {
          path:'/register',
          element:<Register/>,
          action:registrationAction
        },
        {
          path:'/login',
          element:<Login/>,
          action:loginFormAction
        },
        {
          path:'/dashboard',
          element:<Dashboard/>,
          loader:dashboardLoaders,
          children:[
            {
              index:true,
              element:<DashboardHome/>
            },
            {
              path:'admin',
              element:<AdminLayout/>,
              loader:AdminLoader
            },
            {
              path:'add-role',
              element:<AddRoleLayout/>
            },
            {
              path:'profile',
              element:<ProfileLayout/>,
              loader:ProfileLoader,
            },
            {
              path:'edit-profile',
              element:<EditProfileLayout/>,
              action:ProfileEditAction
            },
            {
              path:'add-injunction',
              element:<AddInjunction/>,
              action: addInjunctionFormAction,
            },
            {
              path:'show-all-injunctions',
              element:<ShowAllInjunctions/>,
              loader:getAllInjunctionsLoader
            },
            {
              path:'edit-injunction/:id',
              element:<InjunctionEdit/>,
              loader:injunctionEditLoader,
              action:InjunctionEditFormSave,
            },
            {
              path:'delete-injunction/:id',
              action:injunctionDeleteAction
            }
          ]
        }
    ]
  },
])
const App = () => {
  return <RouterProvider 
  router={router}
  hydrateFallback={<div className="text-center p-4">Hydrating...</div>}
  />
}

export default App