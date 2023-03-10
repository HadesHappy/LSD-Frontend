import { HiArrowUpRight } from "react-icons/hi2";
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

const Main = () => {
  return (
    <div className="">
      <div className="flex flex-row justify-center">
        <div className="absolute z-7">
          <img
            className="pt-32 md:pt-10 h-[500px] sm:h-[600px]"
            src="/assets/main.png"
            alt="main"
          />
        </div>
      </div>
      <Header />
      <div className="bg-[#050505] h-[28vh] sm:h-[34vh]" />
      <div className="px-1 text-center pt-44 md:pt-32">
        <div className="text-5xl text-transparent bg-black font-extrabold font-passenger sm:text-[80px] bg-clip-text">
          Stake with ease,
        </div>
        <div className="text-5xl text-transparent font-extrabold font-passenger sm:text-[80px] bg-clip-text custom-gradient">
          earn with peace
        </div>
        <div className="pt-10 text-gray-500 text-[16px] md:text-[20px] font-passenger px-7">
          Staking with LSD keeps your assets liquid while you earn
          <span className="inline sm:block"> passive income.</span>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center py-10 mx-auto">
        <div className="flex flex-row gap-5">
          <div className="flex flex-row items-center justify-center gap-5 px-6 py-3 text-white bg-black rounded-l-full rounded-r-full cursor-pointer font-passenger">
            Get Started
            <HiArrowUpRight />
          </div>
          <a
            href="https://liquid-staking-derivatives.gitbook.io/whitepaper"
            target="_blink"
            className=""
          >
            <div className="bg-[#F0F1F3] hidden sm:block font-passenger px-6 py-3 rounded-r-full rounded-l-full cursor-pointer">
              Read documentation
            </div>
            <div className="bg-[#F0F1F3] block sm:hidden font-passenger px-6 py-3 rounded-r-full rounded-l-full cursor-pointer">
              Read document
            </div>
          </a>
        </div>
      </div>
      <div className="w-screen overflow-hidden">
        <div className="border-gray-500 border-y-[1px] py-7 sm:py-10 md:py-12 font-passenger font-extrabold w-[5000px] gap-5 flex mt-28">
          {new Array(3).fill(0).map((each, index) => (
            <div
              style={{ wordSpacing: 15 }}
              key={index}
              className={`${index === 0 ? "loop-anim" : ""}`}
            >
              BTC $23,476.09 / ETH $1,647.92 / BNB $300.44 / XRP $0.3808 / ADA
              $0.3501 / Doge $0.08079 / MATIC $1.22 / SOL $22.08 / Dot $3.33 /
              LTC $96.05 /
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Main;
