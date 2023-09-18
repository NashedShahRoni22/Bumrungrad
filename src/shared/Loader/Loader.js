import React from 'react'

export default function Loader() {
  return (
    <div className='min-h-[40vh] flex justify-center items-center gap-4'>
        <div className='h-8 w-8 bg-blue shadow-xl rounded-full animate-bounce duration-300 ease-linear'></div>
        <div className='h-8 w-8 bg-blue shadow-xl rounded-full'></div>
        <div className='h-8 w-8 bg-blue shadow-xl rounded-full animate-bounce duration-300 ease-linear'></div>
    </div>
  )
}
