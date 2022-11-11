import React from 'react'

export default function PlayerInfoExeptIng(info) {
    console.log(info)
  return (
    <div>
 <div className='flex flex-col space-y-1 ' > 
    <p className=' text-sm font-light text-gray-600'>{info.info.one}</p>
   <p className=' sm:text-sm  lg:text-lg '> {info.info.two}</p>
  </div>

    </div>
  )
}
