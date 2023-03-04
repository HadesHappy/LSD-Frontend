import { FaBolt } from 'react-icons/fa'
import { HiArrowUpRight } from 'react-icons/hi2'

const Header = () => {
  return (
    <div className="bg-[#050505] flex flex-row justify-between items-center md:py-7 md:px-10 py-5 px-10">
      <img className="md:w-14 md:h-14 w-10 h-10" src='/assets/logo.png' alt='logo' />
      <div className="md:flex md:flex-row md:gap-1 hidden ">
        <a href="#home" className='z-10'>
          <div className='cursor-pointer border border-[#4B4B4F] rounded-r-full rounded-l-full px-5 py-0.5 text-white text-md hover:bg-[#4B4B4F]'>
            Home
          </div>
        </a>
        <a href="#Chart" className='z-10'>
          <div className='cursor-pointer border border-[#4B4B4F] rounded-r-full rounded-l-full px-5 py-0.5 text-white text-md hover:bg-[#4B4B4F]'>
            Chart
          </div>
        </a>
        <a href="Contract" className='z-10'>
          <div className='cursor-pointer border border-[#4B4B4F] rounded-r-full rounded-l-full px-5 py-0.5 text-white text-md hover:bg-[#4B4B4F]'>
            Contract
          </div>
        </a>
        <a href="Stake" className='z-10'>
          <div className='cursor-pointer border border-[#4B4B4F] rounded-r-full rounded-l-full px-5 py-0.5 text-white text-md hover:bg-[#4B4B4F]'>
            Stake
          </div>
        </a>
        
      </div>
      <div className="flex flex-row gap-1 items-center">
        <div className="flex flex-row justify-center items-center gap-2 rounded-r-full rounded-l-full bg-[#6761D7] text-white py-1 px-3 cursor-pointer">
          Buy LSD
          <div className='w-6 h-6 rounded-full bg-white flex flex-col items-center justify-center'>
            <FaBolt className='text-[#6761D7]' />
          </div>
        </div>
        <div className="hidden md:block">
          <div className='cursor-pointer border border-[#4B4B4F] rounded-r-full rounded-l-full px-3 py-1 text-white text-md hover:bg-[#4B4B4F]'>
            Connect
          </div>
        </div>
        <img className="md:hidden h-[50%] ml-3 cursor-pointer" src='/assets/menu.png' alt='menu' />
      </div>
    </div>
  )
}

const Main = () => {
  return (
    <div className="">
      <div className="flex flex-row justify-center">
        <div className="absolute z-10">
          <img className='md:pt-10 pt-32' src='/assets/main.png' alt='main' />
        </div>
      </div>
      <Header />
      <div className="bg-[#050505] h-[30vh]" />
      <div className="md:pt-32 pt-12 text-center px-1">
        <div className="md:font-extrabold font-passenger text-transparent md:text-8xl text-5xl bg-clip-text bg-black">
          Stake with ease,
        </div>
        <div className="md:font-extrabold font-passenger font-bold text-transparent md:text-8xl text-5xl bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">
          earn with peace
        </div>
        <div className="md:text-2xl font-passenger text-lg pt-10">
          Staking with LSD keeps your assets liquid while you earn passive income.
        </div>
      </div>
      <div className="flex flex-row justify-center items-center mx-auto py-20">
        <div className="flex flex-row gap-5">
          <div className="flex flex-row font-passenger justify-center items-center gap-5 bg-black text-white px-5 py-3 rounded-r-full rounded-l-full cursor-pointer">
            Get Started
            <HiArrowUpRight />
          </div>
          <a href="https://liquid-staking-derivatives.gitbook.io/whitepaper" target='_blink' className="">
            <div className="bg-[#F0F1F3] font-passenger px-5 py-3 rounded-r-full rounded-l-full cursor-pointer">
              Read documentation
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Main;