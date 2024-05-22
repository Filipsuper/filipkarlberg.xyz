import React, { useEffect } from "react";
import trademaxxer from "../components/portfolio_imgs/trademaxxer.png";

export default function Portfolio({ changeText }) {
  useEffect(() => {
    if (changeText == undefined) return;
    changeText([]);
  }, []);

  return (
    <section className="w-full h-full flex flex-col items-center justify-center">
      <h1 className="text-5xl m-8">Projects</h1>
      <div className="flex flex-col justify-center items-center w-full">
        <a href="https://trademaxxer.com/login">
          <div className="col">
            <img className="w-full h-full rounded" src={trademaxxer} />
          </div>
        </a>
      </div>
    </section>
  );
}
