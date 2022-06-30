import React, {useState, useRef, useEffect} from 'react'
import LoggedIn from './LoggedIn';

export default function LoginInput({changeText, rootInput}) {

    const [input, setInput] = useState("");
    const [inputLine, setInputLine] = useState("Enter password: ");
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    let password = "gusti123";

    useEffect(() => {
        checkInput(input.data)
    }, [input])

    const checkInput = (input) => {
        if(input === undefined) return;
        switch(input){
            case password:
                setIsLoggedIn(true)
                changeText([]);
                break;
            default:
                if(isLoggedIn === false){
                    changeText(current => [...current, inputLine + input]);
                    changeText(current => [...current, "ERROR - Invalid password"]);
                }
                break;
        }
    }

    if(isLoggedIn){
        return(
            <div className='flex flex-col w-full text-center'>
                <h1 className='text-3xl'>-- LOGGED IN --</h1>
                <LoggedIn />
            </div>
        )
    }else{
        return (
            <>
                <h1 className=' flex-wrap'>{inputLine}</h1>
                <div>
                    <input onKeyDown={e => {
                        if(e.key === "Enter"){
                            setInput({data: e.target.value})
                            rootInput(e.target.value)
                            e.target.value = "";
                        }
                    }} autoFocus type="text" className="w-max bg-inherit outline-none sm:mx-2 "/>
                </div>
            </>
          )
    }
}
