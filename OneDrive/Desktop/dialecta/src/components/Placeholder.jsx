import { useState } from "react";

function Placeholder() {
  const [email, setEmail] = useState("");
  return (
    <div className="flex flex-col items-center justify-center p-4 sm:p-6 md:p-6 lg:p-4">
      <form className="max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl w-full">
        <div className="flex">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="YOUR EMAIL"
            className="flex-1 p-2 sm:p-3 border rounded-l-md focus:outline-none focus:ring focus:border-blue-300 text-sm md:text-base" // Responsive input padding and text size
          />
          <button className="bg-green-800 hover:bg-green-400 text-white font-bold py-2 sm:py-3 px-4 sm:px-6 rounded-r-md text-sm md:text-base">
            SUBSCRIBE
          </button>
        </div>
      </form>
    </div>
  );
}

export default Placeholder;
