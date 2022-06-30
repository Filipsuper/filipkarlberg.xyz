import React from 'react'

export default function Footer({btnClick}) {
  return (
    
    <footer className="fixed text-center bottom-5 left-1/2 translate-x-[-50%] px-4 py-2 bg-slate-900 rounded-lg bg-opacity-60">
      <ul>
        {/* <li>© Filip Karberg</li> */}
        <li className=''>Fast travel</li>
        <li className='bg-orange-400 rounded-lg animate-pulse'><button className='text-slate-800' onClick={() => {
          btnClick(true)
        }}>Portfolio</button></li>
      </ul>
      
    </footer>
  )
}
