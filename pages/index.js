import axios from 'axios';
import { useEffect, useState } from 'react';
import Navbar from '../components/navbar';
import { PlayerCard } from '../components/PlayerCard';
import posts from '../post';

export default function Home() {


useEffect(() => {
  const data= axios.get('http://localhost:8000/player',).then(
    (r)=>{
      console.log(r)
      setState(r.data)
    }
  )
    
  },[]);


const [state, setState] = useState([]);




  return (
    <div>
      <Navbar></Navbar>
      <div className=' relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8'>
        <div className='  relative max-w-7xl mx-auto'>
          <p className='max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none text-2xl font-medium text-gray-900'>
            Tüm Sporcular
          </p>

          <div className='mt-10 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none'>
            {state.map((post) => (
              <PlayerCard post={post}></PlayerCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
