import React from 'react'
import { useEffect } from 'react'
import { BsDiscord } from "react-icons/bs"
import { GrMail } from "react-icons/gr"
import Portfolio from './Portfolio'
import {bootstrap, css, electron,html, js, nodejs, reactLogo, tailwindLogo, typescript} from "./images"


export default function Normal({changeText}) {

    useEffect(() => {
        changeText([])
    }, [])
    

    return (
        <main className='flex justify-center'>
            <section className='w-full flex flex-col items-center p-0 mt-5 sm:p-10 sm:w-2/3'>
                <header><h1 className='text-5xl text-slate-800 bg-orange-300 p-2 rounded-xl'>Filip Karlberg</h1></header>
                <div className='flex flex-col my-10'>
                    <h2 className='text-4xl'>About Me</h2>
                    <p>Hi, my name is Filip Karlberg. I am a web developer with a background in graphic design from Sweden who loves making websites.</p>
                    <p className='pt-10'>I have experience in React aswell as other webdev libraries and I am always seeking to learn more.</p>
                </div>
                <div className='flex flex-col w-full my-10'>
                    <h2 className='text-4xl'>Contact</h2>
                    <div className='flex flex-row items-center'><BsDiscord/> <h3>Filip#1200</h3></div>
                    <div className='flex flex-row items-center'><GrMail /><a className='underline' href="mailto:filipkarlberg1@gmail.com">filipkarlberg1@gmail.com</a></div>
                </div>
                <div className='flex flex-col w-full'>
                    <Portfolio />
                </div>
                <div className='flex flex-col pt-10 w-full'>
                    <h2 className='text-4xl'>Skills</h2>
                    <div className='flex flex-col pt-10 items-center sm:flex-row sm:justify-start'>
                        <img className='img-fit' src={bootstrap}/>
                        <img className='img-fit' src={css}/>
                        <img className='img-fit' src={electron}/>
                        <img className='img-fit' src={html}/>
                        <img className='img-fit' src={js}/>
                        <img className='img-fit' src={nodejs}/>
                        <img className='img-fit' src={reactLogo}/>
                        <img className='img-fit' src={tailwindLogo}/>
                        <img className='img-fit' src={typescript}/>
                    </div>
                </div>
                <button className='my-10' onClick={e => {
            window.location.reload()
        }}>Back</button>
            </section>
        </main>
        
    )
}
