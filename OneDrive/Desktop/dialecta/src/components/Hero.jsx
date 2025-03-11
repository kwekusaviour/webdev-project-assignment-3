// import React from "react";
// // import arrowIcon from "../assets/videos/arrow-icon.png";
// import playIcon from "../assets/videos/play-icon.png";
// import pauseIcon from "../assets/videos/pause-icon.png";

// const Hero = ({
//   heroData,
//   setHeroCount,
//   heroCount,
//   setPlayStatus,
//   playStatus,
// }) => {
//   return (
//     <div className="text-center w-full max-w-xl p-4 sm:p-8 md:p-12 lg:p-16">
//       <div className="mb-8">
//         <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-2 ">
//           {heroData.text1}
//         </p>
//         <p className="text-lg sm:text-xl md:text-2xl">{heroData.text2}</p>
//       </div>
//       {/* <div className="flex items-center justify-center mb-8"> */}
//       {/* <div className="arrowicon">
//           <img
//             className="h-14 w-36"
//             src={arrowIcon}
//             alt="Explore the features"
//           />
//         </div> */}
//       {/* </div> */}
//       <div className="flex items-center justify-center flex-col sm:flex-row">
//         <ul className="flex space-x-4 mr-0 sm:mr-8 mb-4 sm:mb-0">
//           <li>
//             <button
//               onClick={() => setHeroCount(0)}
//               className={`hero-dot w-4 h-4 rounded-full ${
//                 heroCount === 0 ? "bg-orange-500" : "bg-gray-300"
//               }`}
//               aria-label="Go to video 1"
//             ></button>
//           </li>
//           <li>
//             <button
//               onClick={() => setHeroCount(1)}
//               className={`hero-dot w-4 h-4 rounded-full ${
//                 heroCount === 1 ? "bg-orange-500" : "bg-gray-300"
//               }`}
//               aria-label="Go to video 2"
//             ></button>
//           </li>
//           <li>
//             <button
//               onClick={() => setHeroCount(2)}
//               className={`hero-dot w-4 h-4 rounded-full ${
//                 heroCount === 2 ? "bg-orange-500" : "bg-gray-300"
//               }`}
//               aria-label="Go to video 3"
//             ></button>
//           </li>
//         </ul>
//         <div className="flex items-center">
//           <img
//             className="hero-play-icon w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 mr-2"
//             onClick={() => setPlayStatus(!playStatus)}
//             src={playStatus ? pauseIcon : playIcon}
//             alt={playStatus ? "Pause video" : "Play video"}
//           />
//           <p className="text-lg sm:text-xl md:text-2xl">See the video</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;

import React from "react";
import playIcon from "../assets/videos/play-icon.png";
import pauseIcon from "../assets/videos/pause-icon.png";

const Hero = ({ heroData, setPlayStatus, playStatus }) => {
  return (
    <div className="flex flex-col min-w-fit max-w-l p-4 sm:p-8 md:p-12 lg:p-16">
      <div className="mb-4 sm:mb-6 md:mb-8 lg:mb-8">
        <p className="text-orange-500  text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-2 sm:mt-6 md:mt-8 lg:mt-0 pb-2 sm:pb-4 md:pb-6 lg:pb-0">
          {heroData.text1}
        </p>
        <p className="flex items-center justify-center text-xl sm:text-2xl md:text-3xl lg:text-4xl pb-1 sm:pb-2 md:pb-3 lg:pb-4 font-semibold">
          {heroData.text2}
        </p>

        <p className="items-center justify-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold">
          {heroData.text3}
        </p>
      </div>
      <div className="flex items-center justify-center mb-4 sm:mb-6 md:mb-10 lg:mb-0"></div>{" "}
      <div className="flex items-center justify-center flex-col sm:flex-row">
        <div className="flex items-center">
          <img
            className="hero-play-icon w-8 h-8 sm:w-10 sm:h-10 md:w-6 md:h-6 lg:w-14 lg:h-14 mr-2" // Responsive icon size
            onClick={() => setPlayStatus(!playStatus)}
            src={playStatus ? pauseIcon : playIcon}
            alt={playStatus ? "Pause video" : "Play video"}
          />
          <p className="text-amber-200 text-lg sm:text-xl md:text-2xl">
            Press Play!, Time Is Ticking.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
