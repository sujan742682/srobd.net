import React from 'react'
import { useOutletContext,useNavigate } from 'react-router-dom'

const ProfileLayout = () => {
  const navigate=useNavigate()
  const {userAllData}=useOutletContext();
  console.log(userAllData);
  const {userName, userRole, userEmail,userOffice,userMobile,avatar}=userAllData
  
  return (
    <>
<div className="min-h-screen bg-gradient-to-br from-pink-500 to-rose-400 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-lg w-full max-w-md relative text-center pb-6 pt-20 px-6">
        {/* Top buttons */}
        <div className="absolute top-6 left-6 flex items-center gap-2 text-pink-500 font-medium cursor-pointer">
          <span className="text-xl">👥</span> Connect
        </div>
        <div className="absolute top-6 right-6 flex items-center gap-2 text-pink-500 font-medium cursor-pointer">
          <span className="text-xl">💬</span> Message
        </div>

        {/* Profile Image */}
        <div className="absolute -top-16 left-1/2 transform -translate-x-1/2">
          <img
            src={avatar?`${avatar}`:'https://randomuser.me/api/portraits/women/68.jpg'}
            alt="Profile"
            className="w-32 h-32 rounded-full border-4 border-white shadow-md object-cover"
          />
        </div>

        {/* User Info */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-4">{userName}({userRole})</h2>
        <p className="text-sm text-gray-500">New York, United States</p>
        <p className="mt-2 text-sm text-gray-600">Web Producer – Web Specialist</p>
        <p className="text-sm text-gray-600">Columbia University – New York</p>

        {/* Stats */}
        <div className="flex justify-around mt-6 text-gray-700">
          <div>
            <p className="font-bold text-lg">65</p>
            <p className="text-xs">Friends</p>
          </div>
          <div>
            <p className="font-bold text-lg">43</p>
            <p className="text-xs">Photos</p>
          </div>
          <div>
            <p className="font-bold text-lg">21</p>
            <p className="text-xs">Comments</p>
          </div>
        </div>

        {/* Button */}
        <button 
          className="mt-6 px-6 py-2 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition-all cursor-pointer"
          onClick={()=>{navigate('/dashboard/edit-profile')}}
          
          >
          Show more
        </button>
      </div>
    </div>
    </>
  )
}

export default ProfileLayout