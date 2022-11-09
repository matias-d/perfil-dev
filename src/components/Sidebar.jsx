import React, { useState } from 'react'

// Icons
import {
  RiHome3Line,
  RiFileCopyLine,
  RiWalletLine,
  RiPieChartLine,
  RiMore2Line,
  RiCloseFill
} from 'react-icons/ri'

export const Sidebar = () => {
  const [show, setShow] = useState(false)

  return (
    <>
      <div className={`bg-primary-900 h-full fixed w-[70%] lg:static  lg:w-full ${show ? 'left-0' : '-left-full'} transition-all duration-300 md:w-[40%] z-50`}>
        {/* Profile */}
        <div className='flex flex-col items-center justify-center p-8 gap-2 h-[30vh]'>
          <img src='https://i.pinimg.com/564x/6e/16/33/6e16339e12a879f1df6f80b190c96e46.jpg' className='w-20 h-20 object-cover rounded-full ring-2 ring-gray-300' />
          <h1 className='text-xl text-white font-bold'>Matias Ezequiel</h1>
          <p className='bg-primary-100 py-2 px-4 rounded-full text-white font-normal'>Pro level</p>
        </div>
        {/* Nav */}
        <div className='bg-primary-300 p-8 rounded-tr-[100px] h-[70vh] overflow-y-auto flex flex-col justify-between'>
          <nav className='flex flex-col gap-6'>
            <a href='#' className='flex items-center text-white gap-3 py-2 px-4 rounded-xl hover:bg-primary-900/50 transition-colors'>
              <RiHome3Line /> Home
            </a>
            <a href='#' className='flex items-center text-white gap-3 py-2 px-4 rounded-xl hover:bg-primary-900/50 transition-colors'>
              <RiFileCopyLine /> Projects
            </a>
            <a href='#' className='flex items-center text-white gap-3 py-2 px-4 rounded-xl hover:bg-primary-900/50 transition-colors'>
              <RiWalletLine /> Invoices
            </a>
            <a href='#' className='flex items-center text-white gap-3 py-2 px-4 rounded-xl hover:bg-primary-900/50 transition-colors'>
              <RiPieChartLine /> Reports
            </a>
          </nav>
          <div className='bg-primary-900/50 text-white p-4 rounded-xl'>
            <p className='text-gray-300'>Having troubles?</p>
            <a href='#'>Contact us</a>
          </div>
        </div>
      </div>
      <button className='fixed z-40 right-8 bottom-4 bg-primary-100 text-white p-2 rounded-full text-xl lg:hidden' onClick={() => setShow(!show)}>{show ? <RiCloseFill /> : <RiMore2Line />}</button>
    </>
  )
}
