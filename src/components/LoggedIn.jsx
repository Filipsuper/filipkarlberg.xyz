import React from 'react'
import gusti from "../gusti.jpg";

export default function LoggedIn() {
  return (
    <div className='w-full flex flex-col items-center'>
        <div className='bg-slate-900 p-5 m-5 rounded-3xl w-1/4 flex justify-center'>
            <img src={gusti} className='rounded-xl'/>
        </div>
        <button onClick={ () => {window.location.reload()} }>Back</button>
    </div>
  )
}
