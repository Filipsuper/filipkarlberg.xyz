import React, { useEffect } from 'react'
import f1Img from "../components/portfolio_imgs/F1.png"
import Wordle from "../components/portfolio_imgs/Wordle.png"
import twoK from "../components/portfolio_imgs/2048.png"

export default function Portfolio({changeText}) {

    useEffect(() => {
        if(changeText == undefined) return;
        changeText([]);
    }, [])

  return (
      <section className='w-full flex flex-col items-center justify-center'>
        <h1 className='text-5xl m-8'>Projects</h1>
        <div className='grid grid-cols-1 grid-rows-2 gap-5 w-full md:grid-cols-3 sm:grid-rows-1 sm:w-1/2'>
            <a href="http://filipkarlberg.xyz/f1"><div className='col'><img className='w-full h-full object-cover rounded' src={f1Img}/></div></a>
            <a href="http://filipkarlberg.xyz/wordle"><div className='col'><img className=' w-full h-full  rounded' src={Wordle}/></div></a>
            <a href="http://filipkarlberg.xyz/2048"><div className='col'><img className=' w-full h-full  rounded' src={twoK}/></div></a>
        </div>
      </section>
  )
}
