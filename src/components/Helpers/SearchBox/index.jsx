import { useEffect, useState } from "react";

export default function SearchBox({ className,type }) {
  const placeholders = [
    "Flash Sale... 🔥",
    "Skin Care... 💆‍♀️",
    "Visit Our Location... 📍"
  ];
  const [placeholderIndex, setPlaceholderIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholderIndex((prevIndex) => (prevIndex + 1) % placeholders.length);
    }, 2000);

    return () => clearInterval(interval); // Cleanup when component unmounts
  }, []);
  return (
    <>
      <div
        className={`w-full h-full flex items-center  border border-qgray-border bg-white ${
          className || ""
        }`}
      >
        <div className="flex-1 bg-red-500 h-full">
          <form action="#" className="h-full">
            <input
              type="text"
              className="search-input"
              placeholder={placeholders[placeholderIndex]}
            />
          </form>
        </div>
        {/* <div className="w-[1px] h-[22px] bg-qgray-border"></div> */}
        {/* <div className="flex-1 flex items-center px-4">
          <button
            type="button"
            className="w-full text-xs font-500 text-qgray flex justify-between items-center"
          >
            <span>All Categories</span>
            <span>
              <svg
                width="10"
                height="5"
                viewBox="0 0 10 5"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="9.18359"
                  y="0.90918"
                  width="5.78538"
                  height="1.28564"
                  transform="rotate(135 9.18359 0.90918)"
                  fill="#8E8E8E"
                />
                <rect
                  x="5.08984"
                  y="5"
                  width="5.78538"
                  height="1.28564"
                  transform="rotate(-135 5.08984 5)"
                  fill="#8E8E8E"
                />
              </svg>
            </span>
          </button>
        </div> */}
        <button
          className={` w-[93px] h-full text-sm font-600  ${type===3?'bg-[#005670] text-white':'search-btn'}`}
          type="button"
        >
          Search
        </button>
      </div>
    </>
  );
}
