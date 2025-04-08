import React from 'react';
import { NavLink, Outlet, useLoaderData,useNavigate } from 'react-router-dom';
import { DashboardContext } from '../context/DashboardContext';
import { makeUserLogedOutFunc } from '../actions/LogoutActions';
import menuLinks from '../FrontHelper/MenuLinks.js';

const Dashboard = () => {
  console.log('Í am Dashboard');
  
  const navigate=useNavigate()
  const handleLogout = async () => {
    try {
      await makeUserLogedOutFunc();
      navigate('/'); // Navigate to the home page after logout
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };
  const dashboardLoaderData=useLoaderData();
  const userName = dashboardLoaderData?.userWithoutPassword?.userName;
  const userRole = dashboardLoaderData?.userWithoutPassword?.userRole;
  const userAllData=dashboardLoaderData?.userWithoutPassword
  
  const handleAddInjunction=()=>{
    navigate('/dashboard/add-injunction')
  }
  const handleShowAllInjunctions=()=>{
    navigate('/dashboard/show-all-injunctions')
  }
  
  return (
    <DashboardContext.Provider value={{userName}}>
      <div className="flex min-h-screen bg-gray-100">
        {/* Sidebar (30% width) */}
        <aside className="w-[30%] bg-gray-800 text-white p-6 space-y-6">
          <h2 className="text-xl font-bold">Dashboard</h2>
          <p className="text-gray-300">{userName}</p>
          <div className='space-y-2 flex flex-col'>
            {
              menuLinks.map((link)=>{
                const { text, path, isLogout } = link;
                if (isLogout) {
                  return (
                    <button
                      key={text}
                      onClick={handleLogout}
                      className="w-full px-4 py-2 bg-red-600 text-white rounded-lg cursor-pointer hover:bg-red-700 transition-all"
                    >
                      {text}
                    </button>
                  );
                }
                if(path==='/dashboard/profile' && userRole!=='Admin') return
                return(
                  <NavLink to={path} key={text} className='w-full px-4 py-2 bg-blue-600 text-white rounded-lg cursor-pointer'>
                    {text}
                  </NavLink>
                )
              })
            }
          </div>
          <button
            className="w-full px-4 py-2 bg-red-600 text-white font-semibold rounded-lg shadow-md 
                      hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 
                      focus:ring-opacity-50 transition-all duration-300 cursor-pointer"
            onClick={handleLogout}
          >
            Log Out
          </button>
          <button 
          onClick={handleAddInjunction}
          className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg cursor-pointer">
            Add Injunction
          </button>
          <button 
            onClick={handleShowAllInjunctions}
            className='w-full px-4 py-2 bg-blue-600 text-white rounded-lg cursor-pointer'>
            Show All Injunctions
          </button>
        </aside>

        {/* Main Content (Remaining 70%) */}
        <main className="w-[70%] p-6">
          <h1 className="text-2xl font-bold">Welcome, {userName}!</h1>
          <Outlet context={{ userName,userAllData }} /> {/* This renders child routes */}
        </main>
      </div>
    </DashboardContext.Provider>
  );
};

export default Dashboard;
