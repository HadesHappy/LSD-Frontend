import { FaTwitter, FaGithub, FaDiscord } from 'react-icons/fa'
import { BsMedium } from 'react-icons/bs'

interface Props {
  name: string,
  icon: JSX.Element,
  link: string,
}
const Media = ({ name, icon, link }: Props) => {
  return (
    <a href={`${link}`} target='_blank' className='z-10'>
      <div className="text-[#AFAFAF] bg-[#0F0F10] md:w-40 md:h-32 w-32 h-28 flex flex-col items-center justify-center gap-5 rounded-2xl z-10 cursor-pointer">
        {icon}
        <div>
          {name}
        </div>
      </div>
    </a>
  )
}

const Social = () => {
  return (
    <div className="vector bg-[#050505]">
      <div className="mx-auto text-center">
        <div className="flex flex-row justify-center">
          <div className="absolute w-[400px] h-[500px]">
            <img className="pt-32 -ml-20" src="/assets/dots.png" alt='dots' />
          </div>
        </div>
        <div className="text-md text-[#AFAFAF] md:pt-32 pt-20 font-passenger">
          *social media
        </div>
        <div className="pt-10 text-2xl text-white text-[36px] sm:text-[54px] md:text-[64px] font-passenger font-extrabold">
          Keep in touch
        </div>
        <div className="mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-10 px-5 py-10 sm:px-20 md:flex-row md:py-32">
            <Media name='Twitter' icon={<FaTwitter className='w-10 h-10' />} link="https://twitter.com/lsderivatives/"/>
            <Media name='Discord' icon={<FaDiscord className='w-10 h-10' />} link="https://discord.com/invite/lsderivatives/" />
            <Media name='Medium' icon={<BsMedium className='w-10 h-10' />} link="https://lsderivatives.medium.com/"/>
            <Media name='Github' icon={<FaGithub className='w-10 h-10' />} link="https://github.com/lsderivatives/"/>
            <Media name='Coinmarketcap' icon={<img className='w-10 h-10' src='/assets/coinmarketcap.png' alt='coinmarketcap' />} link="https://www.lsdprotocol.io/#" />
            <Media name='Coingecko' icon={<img className='w-10 h-10' src='/assets/coingecko.png' alt='coingecko' />} link="https://www.coingecko.com/en/coins/liquid-staking-derivative"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Social