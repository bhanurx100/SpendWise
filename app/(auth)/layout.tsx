import Logo from '@/components/Logo'
import React, { ReactNode } from 'react'

function layout( { children }:{ children: ReactNode } ) {
  return (
    <div className='relative flex h-screen w-full flex-col
    items-center justify-center bg-gray-100'>
      <Logo />
      <div className='mt-12'> {children}</div>
      
    </div>
  )
}

export default layout
