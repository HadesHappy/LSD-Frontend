const Work = () => {
  return (
    <div className="md:py-20 pt-10 px-2">
      <div className="border border-[#4B4B4F] rounded-xl md:p-5 p-2">
        <div className="text-white md:text-4xl text-2xl p-2">
          How does Ethereum<br />
          staking work
        </div>
        <img className="h-full w-full md:w-[100%]" src='/assets/Image.png' alt='ethereum' />
      </div>
      <div className="flex md:flex-row flex-col gap-5 pt-5">
        <div className="border border-[#4B4B4F] rounded-xl md:p-5 p-2 flex flex-col">
          <img className="h-full w-full md:w-[100%]" src='/assets/Image1.png' alt='lsd' />
          <div className="text-white md:text-4xl text-2xl">
            How does $LSD<br />
            staking work
          </div>
        </div>
        <div className="border border-[#4B4B4F] rounded-xl md:p-5 p-2 flex flex-col">
          <img className="h-full w-full md:w-[100%]" src='/assets/Image2.png' alt='allocation' />
          <div className="text-white md:text-4xl text-2xl p-2">
            $LSD token<br />
            Allocation
          </div>
        </div>
      </div>
    </div>
  )
}

export default Work