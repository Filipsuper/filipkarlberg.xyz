import React, {useState,useEffect} from 'react'


export default function InitialInfo() {

    let [text, setText] = useState("");

    useEffect(() => {
        typeText("Welcome, type 'help' for a list of available commands.");
    }, [])

    const randomInt = (min, max) => {
        return Math.round(Math.random()*(max - min) + min);
    }

    const typeText = (text) => {

        let textArray = text.split("");
        let newText = [];
        let count = 0;
        let interval = 200;

        (function loop(){
            interval = randomInt(50, 100)
            setTimeout(() => {
                if(count == text.length) return;
                
                newText.push(textArray[count]);
                setText([...newText]);
                count++;

                loop();
            }, interval)
        })();
    }

  return (
    <h1>{text}<span className='animate-ping'>_</span></h1>
  )
}
