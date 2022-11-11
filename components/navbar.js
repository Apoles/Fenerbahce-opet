import React from 'react'
import { SocialIcon } from 'react-social-icons';


export default function Navbar() {
  return (
    <div  className=' bg-blue-900 flex flex-col '>
    <img src='https://media.fenerbahce.org/getattachment/Controls/mohikan/109574/fbskuygulamabanner.jpg?lang=tr-TR&width=1920&height=156&ext=.jpg'></img>

   

    <div
      className=' 
      flex-wrap
    text-sm text-white   
    w-screen	h-24 flex flex-row space-x-8   items-center justify-center
    lg:text-lg lg:font-semibold
    '
    > 
      <a href='/'>Haberler</a>
      <a href='/'>Klüp</a>
      <a href='/'>Branşlar</a>
      <a href='/'>Fikstür</a>
      <a href='/'>Taraftar</a>
      <a href='/'>Markalar</a>
      <a href='/'>Fenerium</a>
      <a href='/'>FenerMarkt</a>
      <div className='space-x-2'>
      <SocialIcon style={{ width: '23px' }} url='https://twitter.com/jaketrent'></SocialIcon>

      <SocialIcon style={{ width: '23px' }} url='https://instagram.com/jaketrent'></SocialIcon>

      <SocialIcon style={{ width: '23px' }} url='https://youtube.com/jaketrent'></SocialIcon>

      <SocialIcon style={{ width: '23px' }} url='https://facebook.com/jaketrent'></SocialIcon>
    </div>
    </div>
  </div>
  )
}
