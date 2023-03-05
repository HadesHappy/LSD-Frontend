import { useState } from "react";
import { BsFillLightningChargeFill } from "react-icons/bs";

const Header = () => {
  const [popup, setPopup] = useState<boolean>(false);

  const togglePopup = () => {
    setPopup(!popup);
  };

  return (
    <div className="bg-[#050505] flex flex-row justify-between items-center md:py-7 md:px-10 py-5 px-3 font-suisse">
      <div
        className={`absolute w-screen ${
          popup ? "h-screen" : "h-0"
        } overflow-hidden bg-[#050505] top-0 left-0 z-8 flex items-center duration-500`}
      >
        <div className="flex flex-col items-center w-full gap-4">
          <a href="#home" className="z-10">
            <div className="cursor-pointer rounded-l-full px-5 py-0.5 text-white text-4xl">
              Home
            </div>
          </a>
          <a href="#Chart" className="z-10">
            <div className="cursor-pointer rounded-l-full px-5 py-0.5 text-white text-4xl">
              Chart
            </div>
          </a>
          <a href="#contract" className="z-10">
            <div className="cursor-pointer rounded-l-full px-5 py-0.5 text-white text-4xl">
              Contract
            </div>
          </a>
          <a href="#stake" className="z-10">
            <div className="cursor-pointer rounded-l-full px-5 py-0.5 text-white text-4xl">
              Stake
            </div>
          </a>
          <a href="#connect" className="z-10">
            <div className="cursor-pointer rounded-l-full px-5 py-0.5 text-white text-4xl">
              Connect
            </div>
          </a>
        </div>
      </div>
      <img
        className="relative z-10 w-10 h-10 md:w-14 md:h-14"
        src="/assets/logo.png"
        alt="logo"
      />
      <div className="absolute hidden lg:flex lg:flex-row md:gap-1 left-[50%] translate-x-[-50%] z-10">
        <a href="#home" className="z-10">
          <div className="cursor-pointer border border-[#4B4B4F] rounded-r-full rounded-l-full px-5 py-0.5 text-white text-md hover:bg-[#4B4B4F]">
            Home
          </div>
        </a>
        <a href="#Chart" className="z-10">
          <div className="cursor-pointer border border-[#4B4B4F] rounded-r-full rounded-l-full px-5 py-0.5 text-white text-md hover:bg-[#4B4B4F]">
            Chart
          </div>
        </a>
        <a href="#Contract" className="z-10">
          <div className="cursor-pointer border border-[#4B4B4F] rounded-r-full rounded-l-full px-5 py-0.5 text-white text-md hover:bg-[#4B4B4F]">
            Contract
          </div>
        </a>
        <a href="#Stake" className="z-10">
          <div className="cursor-pointer border border-[#4B4B4F] rounded-r-full rounded-l-full px-5 py-0.5 text-white text-md hover:bg-[#4B4B4F]">
            Stake
          </div>
        </a>
      </div>
      <div className="flex flex-row items-center gap-1">
        <div className="flex flex-row justify-center items-center gap-2 rounded-r-full rounded-l-full bg-[#6761D7] text-white py-1 pr-2 pl-4 cursor-pointer sm:z-10">
          Buy LSD
          <div className="flex flex-col items-center justify-center w-5 h-5 p-[3px] bg-white rounded-full">
            <BsFillLightningChargeFill className="text-[#6761D7]" />
          </div>
        </div>
        <div className="hidden lg:block">
          <div className="cursor-pointer border border-[#4B4B4F] rounded-r-full rounded-l-full px-3 py-1 text-white text-md hover:bg-[#4B4B4F]">
            Connect
          </div>
        </div>
        <div className="z-10 p-5 cursor-pointer" onClick={togglePopup}>
          <img
            className="lg:hidden h-[50%] ml-3"
            src={`/assets/menu_${popup ? "close" : "open"}.png`}
            alt="menu"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;