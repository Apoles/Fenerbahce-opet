import React from 'react';

export default function Biyografi(data) {
  return (
    <div className='flex flex-row items-start justify-evenly '>
      <div className='flex flex-col w-1/4 space-y-9 '>
        <h1 className='font-semibold text-3xl '>BİYOGRAFİ</h1>
        <p className='font-light text-3xl text-gray-600 right-1'>{data.data.name}</p>
        <p className='font-light text-lg text-gray-500 '>
       {data.data.desc}
        </p>
      </div>
      <div className='flex flex-col space-y-9'>
        <h1 className='font-semibold text-3xl'>GEÇMİŞ </h1>
        <p className='font-light text-3xl text-gray-600 right-1'> Oybadığı Takımlar</p>
        <p>Fnerbahçe</p>
      </div>
    </div>
  );
}
