// HomeContext.js
import { createContext, useContext } from 'react';

export const HomeContext = createContext();

export const useHomeContext = () => {
  const context = useContext(HomeContext);
  if (!context) {
    throw new Error('useHomeContext must be used within a HomeProvider');
  }
  return context;
};