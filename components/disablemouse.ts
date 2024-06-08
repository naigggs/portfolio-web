'use client'
import { useEffect } from 'react';

const useDisableMouse = () => {
  useEffect(() => {
    const disableMouse = (event:any) => event.preventDefault();

    document.addEventListener('mousemove', disableMouse);
    document.addEventListener('mousedown', disableMouse);
    document.addEventListener('mouseup', disableMouse);

    return () => {
      document.removeEventListener('mousemove', disableMouse);
      document.removeEventListener('mousedown', disableMouse);
      document.removeEventListener('mouseup', disableMouse);
    };
  }, []);
};

export default useDisableMouse;