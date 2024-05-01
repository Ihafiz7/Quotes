import React from 'react'

const Header = () => {
  return (
    <div className='flex items-center justify-between sm:px-6 md:px-8 xl:px-12 py-4'>
        <div className='flex items-center gap-2'>
            <img src='logo.svg' alt='Logo' className='w-16 h-16' />
            <p className='text-xl font-sans font-semibold italic'>Quotes</p>
        </div>
        <div className='flex items-center text-xl font-sans font-semibold gap-4'>
            <button className='p-2 bg-blue-500 text-white rounded-md'>Sign Up</button>
            <button className='p-2 bg-green-500 text-white rounded-md'>Log In</button>
        </div>
    </div>
  )
}

export default Header