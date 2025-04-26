import { useRef } from "react";
import { Link } from "react-router-dom";
import SimpleSlider from "../Helpers/SliderCom";

export default function Banner({ className }) {
  const sliderRef = useRef(null);
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    fade: true,
    arrows: false,
  };
  
  const data = [
    { img: `${import.meta.env.VITE_PUBLIC_URL}/assets/ipharm/home/IMG_0307.PNG`, title: 'Nasal Drips' },
    { img: `${import.meta.env.VITE_PUBLIC_URL}/assets/ipharm/home/IMG_0308.PNG`, title: 'Shaving Cream' },
    { img: `${import.meta.env.VITE_PUBLIC_URL}/assets/ipharm/home/IMG_0309.PNG`, title: 'Checkup Devices' },
    { img: `${import.meta.env.VITE_PUBLIC_URL}/assets/ipharm/home/IMG_0310.PNG`, title: 'Baby Diapers' },
    { img: `${import.meta.env.VITE_PUBLIC_URL}/assets/ipharm/home/IMG_0311.PNG`, title: 'Medicines' },
    { img: `${import.meta.env.VITE_PUBLIC_URL}/assets/ipharm/home/IMG_0312.PNG`, title: 'Lipstick' },
    { img: `${import.meta.env.VITE_PUBLIC_URL}/assets/ipharm/home/IMG_0313.PNG`, title: 'Perfume' },
    { img: `${import.meta.env.VITE_PUBLIC_URL}/assets/ipharm/home/IMG_0314.PNG`, title: 'Tooth Paste' },
    { img: `${import.meta.env.VITE_PUBLIC_URL}/assets/ipharm/home/IMG_0315.PNG`, title: 'New Arrival' },
    { img: `${import.meta.env.VITE_PUBLIC_URL}/assets/ipharm/home/IMG_0316.PNG`, title: 'Trending Items' },
  ];
  return (
    <>
      <div className={`w-full ${className || ""}`}>
        <div className="main-wrapper w-full lg:h-[75vh] flex lg:flex-row flex-col gap-3 px-3 lg:px-24 lg:py-5">
          <div className="w-full h-full w-/1/2 border-[#005670] overflow-hidden border-[3px] rounded-3xl">
              <img src={`${
                  import.meta.env.VITE_PUBLIC_URL
                }/assets/ipharm/home/IMG_0320.png`} className="object-cover h-full w-full" alt="" />
          </div>

          <div className="w-full h-full w-/1/2">
                <div className="overflow-hidden border-[#005670] h-[60%] border-[3px] rounded-3xl">
                  <img src={`${
                      import.meta.env.VITE_PUBLIC_URL
                    }/assets/ipharm/home/IMG_0318.png`} className="object-cover h-full w-full" alt="" />
                </div>
                <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 lg:gap-1 h-[40%] mt-3 place-items-center">
                {
                    (window.innerWidth < 640 
                      ? data.slice(-6)
                      : window.innerWidth < 1024 
                        ? data.slice(-8)
                        : data
                    ).map((elem, index) => (
                      <div key={index} className="flex justify-center items-center overflow-hidden border-[#005670] rounded-full md:h-40 lg:h-24 md:w-40 lg:w-24 border-[3px] relative">
                        <div className="w-full flex items-center justify-center h-full top-0 bg-black/20 absolute rounded hover:opacity-100 opacity-0 duration-300 transition cursor-pointer px-1">
                          <p className="text-white text-center font-bold">{elem?.title}</p>
                        </div>
                        <img className="" src={elem.img} alt="" />
                      </div>
                    ))
                  }
                </div>
          </div>
        </div>
      </div>
    </>
  );
}
