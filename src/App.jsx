import React, {useState,useEffect} from "react";
import Console from "./components/ConsoleWrapper";
import Footer from "./components/Footer";
import InitialInfo from "./components/InitialInfo";



function App() {

  const [displayText, setDisplayText] = useState([]);
  const [normal, setNormal] = useState(false);

  return (
    <main className="bg-gradient-to-b bg-slate-900 sm:from-slate-900 sm:to-slate-800 min-h-screen h-fit flex flex-col p-5 sm:p-12">
      {/* Initial text */}
      <header>
        <InitialInfo/>
      </header>
      <article>
          <ul>
            <pre className="whitespace-pre-wrap">
              {displayText.map((elem, idx) => {
                return(
                  <li key={idx}>{elem}</li>
                )
              })}
            </pre>
          </ul>
      </article>
      <section className="flex flex-col sm:flex-row">
        <Console changeText={setDisplayText} btnClick={normal}/>
      </section>
      <Footer btnClick={setNormal}/>
    </main>
  );
}

export default App;
