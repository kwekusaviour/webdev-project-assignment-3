import React, { useState } from "react";
import dialectaLogo from "./assets/videos/dialecta-logo.png";
import Hero from "./components/Hero";
import Background from "./components/Background";
import Countdown from "./components/Countdown";
import Placeholder from "./components/Placeholder";
import Handles from "./components/Handles";
const App = () => {
  const endDate = new Date().getTime() + 7 * 24 * 60 * 60 * 1000;
  // const [heroCount, setHeroCount] = useState(0);
  const [playStatus, setPlayStatus] = useState(false);

  const heroData = {
    text1: "DIALECTA IS COMING SOON",
    text2: "Stay tuned!",
    text3: "Something exciting is coming.",
  };
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <div className="overlay fixed inset-0 bg-black opacity-50 z-5"></div>
      <div>
        <img
          src={dialectaLogo}
          className="flex left-2 top-0 justify-items-start relative z-10 h-10 sm:h-20 md:h-30 lg:h-20 p-2 sm:p-2 md:p-2 lg:p-0"
          alt="LOGO"
        />
        <Background playStatus={playStatus} />
        <div className="absolute inset-0 z-10 flex flex-col items-start  p-4 sm:p-6 md:p-8 lg:p-10">
          <Hero
            heroData={heroData}
            setPlayStatus={setPlayStatus}
            playStatus={playStatus}
          />
          <Countdown endDate={endDate} />

          <Placeholder />
          <Handles />
        </div>
      </div>
    </div>
  );
};

export default App;
