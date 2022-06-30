import React, {useEffect, useState} from 'react'
import ConsoleInput from './ConsoleInput'
import LoginInput from './LoginInput'
import Normal from './Normal';
import Portfolio from './Portfolio';

export default function Console({changeText, btnClick}) {
  const [input, setInput] = useState([]);
  const [rootInput, setRootInput] = useState();

  if(input === "login" || input === "Login"){
    return(<LoginInput rootInput={setRootInput} changeText={changeText}/>)
  }else if(input === "portfolio" || input === "Portfolio"){
    return(
      <div className='flex flex-col'>
        <Portfolio changeText={changeText}/>
        <button className='my-10' onClick={e => {
            window.location.reload()
        }}>Back</button>
      </div>
    
    )
  }else if(input === "normal" || input === "Normal" || btnClick){
    return(<Normal changeText={changeText}/>)
  }
  else{
    return(<ConsoleInput changeText={changeText} getInput={setInput} />)
  }
}
