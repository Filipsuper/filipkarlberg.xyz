import React, {useRef, useEffect, useState} from 'react'
import gusti from "../gusti.jpg"

export default function ConsoleInput({changeText, getInput}) {

    const [input, setInput] = useState("");
    const inpRef = useRef();
    const [inputLine, setInputLine] = useState("user@filipkarlberg.xyz:~$ ");
    const [text1, setText1] = useState("");

    useEffect(() => {
        inpRef.current.focus();
    }, [])

    useEffect(() => {
        checkInput(input.data)
    }, [input])

    document.addEventListener("keydown", e => {
        if(e.key !== "Enter"){
            inpRef.current.focus();
        }
    })

    const commands = () => {
        return(`
-----------------------------
'normal' - for a normal website
-----------------------------

'whois' - Info about me
'skills' - All my skills
'login' - log in to user
'clear' - Clears the terminal
'projects' - My projects
'portfolio' - Cool presentation of my projects
'cd' - change directory to another dir
'dirs' - list of available dirs

-----------------------------

Some are hidden so test it out
        `)
    }

    const whois = () => {
        return (`
Hi, my name is Filip Karlberg. I am a web developer with a background in graphic design from Sweden who loves making websites.
I have experience in React aswell as other webdev libraries and I am always seeking to learn more. For more info see my portfolio or write 'skills'.
                `)
    }
    const skills = "Javascript, Typescript, CSS, HTML, Tailwind, Bootstrap, React, NodeJS, Electron";

    function projects(){
        return(
            <ul className='flex flex-col w-fit'>
                <h1>Try the command "Portfolio" also</h1>
                <li className='flex flex-row items-center oddeven'>
                    <a className='link' href='http://www.filipkarlberg.xyz/wordle'>Wordle</a><h2 className=' ml-2'>- Made a wordle copy using playing javascript, html and css</h2>
                </li>
                <li className='flex flex-row items-center oddeven'>
                    <a className='link' href='#'>This website</a><h2 className=' ml-2'>- Made with react and tailwind</h2>
                </li>
                <li className='flex flex-row items-center oddeven'>
                    <a className='link' href='http://www.filipkarlberg.xyz/f1'>F1 stats</a><h2 className=' ml-2'>- Made with react. Data from a public api to learn API fetching</h2>
                </li>
            </ul>
        )
    }

    const randomInt = (min, max) => {
        return Math.round(Math.random()*(max - min) + min);
    }

    const typeText = (text) => {

        let textArray = text.split("");
        let newText = [];
        let count = 0;
        let interval = 200;

        (function loop(){
            interval = randomInt(100, 200)
            setTimeout(() => {
                if(count === text.length) return;
                
                newText.push(textArray[count]);
                setText1([...newText]);
                count++;

                loop();
            }, interval)
        })();
    }
    function dirs(){
        return(<ul className='flex flex-col w-fit'>
            <li className='flex flex-row items-center oddeven'><a href="www.filipkarlberg.xyz/f1">/f1</a></li>
            <li className='flex flex-row items-center oddeven'><a href="www.filipkarlberg.xyz/wordle">/wordle</a></li>
        </ul>)
    }

    //INPUTHANDLER
    const checkInput = (input) => {
        if(input === undefined) return;
        let check = input.toLowerCase();
        switch(check){
            case "help":
                changeText(current => [...current, inputLine+ check +  "\nTry: " + commands()]);
                break;
            case "clear":
                changeText([]);
                break;
            case "login":
                setInputLine("Enter password: ")
                break;
            case "gusti":
                changeText(current => [...current, inputLine + check])
                changeText(current => [<img className="max-w-xs border-2 border-orange-300 rounded-xl my-2" src={gusti}/>])
                break;
            case "whois":
                changeText(current => [...current, inputLine + check + whois()])
                break;
            case "skills":
                changeText(current => [...current, inputLine + check + " " + skills])
                break;
            case "portfolio":
                changeText([]);
                break;
            case "projects":
                changeText(current => [...current, inputLine + check])
                changeText(current => [...current, projects()])
                break;
            case "cd wordle":
                changeText(current => [...current, inputLine+ check])
                window.location='http://www.filipkarlberg.xyz/wordle'
                break;
            case "cd f1":
                changeText(current => [...current, inputLine+ check])
                window.location='http://www.filipkarlberg.xyz/f1'
                break;
            case "cd 2048":
                changeText(current => [...current, inputLine+ check])
                window.location='http://www.filipkarlberg.xyz/2048'
                break;
            case "dirs":
                changeText(current => [...current, inputLine + check])
                changeText(current => [...current, dirs()])
                break;
            default:
                changeText(current => [...current, inputLine + check])
                changeText(current => [...current, `ERROR - "${check}" is an invalid command
                    `])
        }
    }

    return (
        <>
            <h1 className=' flex-wrap'>{inputLine}</h1>
            <div>
                <input ref={inpRef} onKeyDown={e => {
                    if(e.key === "Enter"){
                        setInput({data: e.target.value})
                        getInput(e.target.value)
                        e.target.value = "";
                    }
                }} autoFocus type="text" className="w-max bg-inherit outline-none border-b-2 border-solid rounded-none border-orange-300 sm:mx-2 md:border-none"/>
            </div>
        </>
    )
}
