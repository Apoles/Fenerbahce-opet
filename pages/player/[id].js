import axios from 'axios';
import React from 'react';
import Biyografi from '../../components/Biyografi.js';
import DropwDownButton from '../../components/dropdown.js';
import Navbar from '../../components/navbar.js';
import PlayerInfo from '../../components/PlayerInfo.js';
import PlayerInfoExeptIng from '../../components/PlayerInfoExeptIng.js';

import posts from '../../post.js';

const PlayerDetail = ({ data }) => {
  console.log(data)
  return (
    <div>
      <Navbar></Navbar>
      <div
        className='
      bg-blue-400   flex flex-col items-center space-y-12 justify-center 
       sm:flex sm:flex-row sm:items-center sm:justify-center sm:space-x-12  sm:bg-blue-400 
      
      lg:-blue-400  lg:flex lg:flex-row lg:items-center lg:justify-evenly lg:w-auto 
                       

      '
      >
        <div
          className=' 
         flex flex-col space-y-12 items-center justify-center 

        sm:space-x-24 sm:flex sm:flex-row sm:items-center sm:justify-around  '
        >
          {' '}
          <div className='flex flex-row items-center justify-center space-x-4'>
            {' '}
            <div className='flex flex-col items-start justify-center '>
              {' '}
              <p
                className='
            sm:text-4xl sm:text-white
            lg:text-3xl lg:text-white'
              >
                {data.playerName}
              </p>
              <p
                className='
             sm:text-7xl sm:text-white
            lg:text-8xl lg:text-white'
              >
                Ünal
              </p>
            </div>
            <img
              className='object-cover lg:w-3/4  sm:w-2/3 '
              src={data.imageUrl}
            ></img>
          </div>{' '}
          <div
            className='
          
          lg:flex lg:flex-col lg:space-y-4
          sm:hidden
          '
          >
            <DropwDownButton></DropwDownButton>
            <a className=' text-white text-xs w-32 h-9  rounded-md border  border-transparent text-center px-4 py-2.5  shadow-sm   bg-green-800 '>
              {' '}
              FORMA SATIN AL
            </a>
          </div>
        </div>
      </div>
      <div className='
      relative 
      sm:flex sm:flex-col sm:items-center   sm:mb-6  sm:relative '>
        <div className='

       
        flex flex-col  bg-green-400 w-screen p-4 space-y-8   divide-y-2 divide-gray-500
        sm:w-max sm:overflow-auto  sm:flex-row sm:flex sm:space-x-12  sm:absolute  sm:bottom-0  sm:border-white   sm:p-2  sm:border sm:rounded-md sm:bg-white  sm:space-y-0  sm:divide-y-0

        md:w-5/6  md:overflow-auto  md:flex-row md:flex md:items-center md:justify-center md:space-x-20  md:absolute  md:bottom-0  md:border-white   md:bg-white md:p-2  md:border md:rounded-md 

        lg:w-2/3 lg:flex-row lg:flex lg:space-x-18 lg:absolute  lg:bottom-0 lg:h-max lg:border-white  lg:bg-white lg:p-2  lg:border lg:rounded-md '>
        
        
        
        <PlayerInfo
            info={{
              url:`${data.flagUrl}`,
              two: `${data.nation}`,
            }}
          ></PlayerInfo>
          <PlayerInfoExeptIng
            info={{
              one: 'Doğum yeri',
              two: `${data.birdthPlace}`,
            }}
          ></PlayerInfoExeptIng>
          <PlayerInfoExeptIng
            info={{
              one: 'Boy / Kilo',
              two: `${data.weight}`,
            }}
          ></PlayerInfoExeptIng>
          <PlayerInfoExeptIng
            info={{
              one: 'Yaş',
              two: `${data.year}`,
            }}
          ></PlayerInfoExeptIng>
          <PlayerInfoExeptIng
            info={{
              one: 'Mevki',
              two: `${data.playerPosition}`
            }}
          ></PlayerInfoExeptIng>
        </div>
        <div className='  sm:absolute sm:top-36'>
          {' '}
          <Biyografi
          data={{
            name:data.playerName,
            desc:data.description,
            
          }}
          
          ></Biyografi>
        </div>
      </div>
    </div>
  );
};

export default PlayerDetail;

export const getServerSideProps = async (context) => {
  //const data=posts.find

console.log(context.query.id)

  const fetchData=await axios.get(`http://localhost:8000/player/${context.query.id}`,)
  
  const data=fetchData.data
  

  return {
    props: {
      data
    },
  };
};
