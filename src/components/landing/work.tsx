const Work = () => {
  return (
    <div className="pt-10 px-7 md:py-20">
      <div className="border border-[#4B4B4F] rounded-3xl md:p-5 p-2">
        <div className="p-5 text-2xl text-white md:text-4xl font-passenger">
          How does Ethereum<br />
          staking work
        </div>
        <img className="h-[300px] sm:h-[480px] md:h-full w-full md:w-[100%]" src='/assets/Image.png' alt='ethereum' />
      </div>
      <div className="flex flex-col gap-5 pt-5 md:flex-row">
        <div className="border border-[#4B4B4F] rounded-3xl md:p-7 p-5 flex flex-col">
          <img className="h-[350px] sm:h-[480px] md:h-full w-full md:w-[100%]" src='/assets/Image1.png' alt='lsd' />
          <div className="text-2xl text-white md:text-4xl font-passenger">
            How does $LSD<br />
            staking work
          </div>
        </div>
        <div className="border border-[#4B4B4F] rounded-3xl md:p-7 p-5 flex flex-col font-passenger">
          <img className="h-[350px] sm:h-[480px] md:h-full w-full md:w-[100%]" src='/assets/Image2.png' alt='allocation' />
          <div className="p-2 text-2xl text-white md:text-4xl">
            $LSD token<br />
            Allocation
          </div>
        </div>
      </div>
    </div>
  )
}

export default Work