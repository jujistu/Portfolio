'use client';
import { useTheme } from '@/context/Theme-context';
import React from 'react';
import { BsMoon, BsSun } from 'react-icons/bs';

export const ThemeSwitch = () => {
  const { theme, toogleTheme } = useTheme();

  return (
    <button
      className='fixed bottom-5 right-5 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950'
      onClick={toogleTheme}
    >
      {theme === 'light' ? <BsSun /> : <BsMoon />}
    </button>
  );
};
