import React from 'react'
import { RiSearch2Line } from 'react-icons/ri'

export const Header = () => {
  return (
    <header className='flex flex-col lg:flex-row items-center lg:justify-between gap-4 lg:gap-0'>
      <h1 className=' text-2xl lg:text-3xl font-bold order-1 lg:order-none'>🌞 Good morning, <span className='text-primary-100'>Matias</span></h1>
      <form className='w-full lg:w-auto'>
        <div className='relative'>
          <RiSearch2Line className='absolute top-1/2 -translate-y-1/2 left-2 text-gray-500 ' />
          <input
            type='text'
            placeholder='Search proyects'
            className='bg-gray-100 py-2 pl-8 pr-4 outline-none rounded-xl w-full'
          />
        </div>
      </form>
    </header>
  )
}
