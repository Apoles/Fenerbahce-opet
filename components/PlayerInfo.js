import React from 'react'

export default function PlayerInfo( info ) {
  console.log('************',info)
  return (
    <div className='flex flex-col space-y-1' > 
    <p className='text-sm font-light text-gray-600'>Uyruğu</p>
    <div className='flex flex-row space-x-1'>
      <img className='h-5 w-5 object-cover' src={info.info.url} ></img>
      <p className='sm:text-sm  lg:text-lg'>{info.info.two}</p>
    </div>
  </div>
  )
}
