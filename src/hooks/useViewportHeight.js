// src/hooks/useViewportHeight.js
import { useEffect } from 'react';

const setVhProperty = () => {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
};

const useViewportHeight = () => {
  useEffect(() => {
    setVhProperty();

    window.addEventListener('resize', setVhProperty);
    return () => window.removeEventListener('resize', setVhProperty);
  }, []);
};

export default useViewportHeight;
