import Link from 'next/link';
import React from 'react';

export const PlayerCard = (post) => {

  console.log('==============================>',post.post._id)

 
  return (

    

    <div
      key={post.title}
      className='flex flex-col rounded-lg shadow-lg overflow-hidden'
    >
      <Link href={`/player/${post.post._id}`} >
      <a onClick={()=>{
        
      }} >
      <div className='flex-shrink-0'>
        <img className='h-72 w-full object-cover' src={post.post.previewUrl} alt='' />
      </div>

      <div className='flex-1 bg-white p-6 flex flex-col justify-between'>
        <div className='flex-1'>
          <div>
            <p className='text-xl font-semibold text-yellow-600'  >{post.post.PlayerName}</p>
           
            <p className='text-lg font-medium  text-yellow-600'>{post.post.playerPosition}</p>
            <div className='mt-6 flex items-center'>
              <div className='flex-shrink-0'>
                <div>
                  <span className='sr-only'>{post.post.PlayerName}</span>
                  <img className='h-10 w-10 rounded-full' src={post.post.flagUrl} alt='' />
                </div>
              </div>
              <div className='ml-3'>
                <p className='text-sm font-medium text-gray-900'>
                  <div className='hover:underline'>{post.post.playerName}</div>
                </p>
                <div className='flex space-x-1 text-sm text-yellow-600'>
                  
                  <span aria-hidden='true'>&middot;</span>
                  <span>{post.post.year} </span>
                </div>
              </div>
            </div>
          </div>
        
        </div>
      </div>
      </a>
      </Link>
    </div>
  );
};
