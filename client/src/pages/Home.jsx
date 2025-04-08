// Home.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import { HomeContext } from '../context/HomeContext';

const Home = () => {
  const name = 'Sujan';

  return (
    <HomeContext.Provider value={{ name }}>
      <div>Navbar</div>
      <Outlet />
      <div>Footer</div>
    </HomeContext.Provider>
  );
}

export default Home;