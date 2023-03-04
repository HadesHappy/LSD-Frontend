import { FaTwitter, FaGithub, FaDiscord  } from 'react-icons/fa'
import { BsMedium } from 'react-icons/bs'

interface Props{
  name: string,
  icon: JSX.Element,
}
const Media = ({name, icon}: Props) => {
  return (
    <div className="text-[#AFAFAF] bg-[#0F0F10] md:w-40 md:h-32 w-32 h-28 flex flex-col items-center justify-center gap-5 rounded-2xl z-10 cursor-pointer">
      {icon}
      <div>
        {name}
      </div>
    </div>
  )
}

const Social = () => {
  return (
    <div className="vector bg-[#050505]">
      <div className="text-center mx-auto">
        <div className="flex flex-row justify-center">
          <div className="absolute w-[400px] h-[500px]">
            <img className="pt-32 -ml-20" src="/assets/dots.png" alt='dots' />
          </div>
        </div>
        <div className="text-md text-[#AFAFAF] md:pt-32 pt-20">
          *social media
        </div>
        <div className="md:text-5xl text-2xl text-white pt-10">
          Keep in touch
        </div>
        <div className="mx-auto">
          <div className="flex md:flex-row flex-wrap items-center justify-center gap-10 md:py-32 py-10">
              <Media name='Twitter' icon={<FaTwitter className='w-10 h-10' />} />
              <Media name='Discord' icon={<FaDiscord className='w-10 h-10' />} />
              <Media name='Medium' icon={<BsMedium className='w-10 h-10' />} />
              <Media name='Github' icon={<FaGithub className='w-10 h-10' />} />
              <Media name='Coinmarketcap' icon={<img className='w-10 h-10' src='/assets/coinmarketcap.png' alt='coinmarketcap'/>} />
              <Media name='Coingecko' icon={<img className='w-10 h-10' src='/assets/coingecko.png' alt='coingecko' />} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Social