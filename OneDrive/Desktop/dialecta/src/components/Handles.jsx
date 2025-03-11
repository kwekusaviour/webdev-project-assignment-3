import Facebook from "../assets/videos/facebook-icon.png";
import Gmail from "../assets/videos/gmail-icon.png";
import Instagram from "../assets/videos/instagram-icon.png";
import Tweeter from "../assets/videos/tweeter-icon.png";

const Handles = () => {
  return (
    <div className="flex ml-3 space-x-4 sm:space-x-8 md:space-x-8 lg:space-x-10 items-center justify-center mt-20 sm:mt-6 md:mt-8 lg:mt-2">
      <img
        src={Facebook}
        className="bg-blue-500 h-6 sm:h-8 md:h-8 lg:h-6 rounded-full"
        alt="fb"
      />
      <img
        src={Gmail}
        className="bg-red-500 h-6 sm:h-8 md:h-8 lg:h-6 rounded-full"
        alt="G+"
      />
      <img
        src={Instagram}
        className="bg-amber-500 h-6 sm:h-8 md:h-8 lg:h-6 rounded-full"
        alt="IG"
      />
      <img
        src={Tweeter}
        className="bg-blue-300 h-6 sm:h-8 md:h-8 lg:h-6 rounded-full"
        alt="twt"
      />
    </div>
  );
};

export default Handles;
