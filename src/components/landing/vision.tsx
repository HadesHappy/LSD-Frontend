const Vision = () => {
  return (
    <div className="pt-20 pr-7 pl-7 md:pr-32 md:pt-40">
      <span className="text-[#AFAFAF] font-suisse">
        *ecosystem
      </span>
      <div className="flex flex-row items-center gap-5 text-[36px] sm:text-[54px] font-extrabold text-white md:text-[64px] font-passenger">
        The LSD Vision
        <img className="hidden md:block" src='/assets/vision.png' alt='vision' />
      </div>
      <div className="flex md:flex-row flex-col justify-between gap-10 items-start text-[#AFAFAF] pt-5 text-[16px] sm:text-[18px] font-suisse">
        <div className="md:max-w-[450px]">
          Staking has to-date, offered and will likely continue to offer themost reliable yields in DeFi. Liquid staking - or the ability to stakeETH via swapping for a liquid asset,
          has emerged as the leader in this DeFi ecosystem.
          However investors must still contend with the difficulty of - evaluatig yield (both in ETH and native tokens),
          choosing a protocol, and continually re-evaluating this over time. Enter $LSD.
        </div>
        <div className="md:max-w-[463px]">
          Simply put - users swap ETH for $LS-ETH, a wrapper around the $LSD Aggregator protocol - and our protocol will do the rest, ensuring the highest possible staked ETH yield across a multitude of liquid staking protocols via our proprietary smart contract.
          Custody of staked assets remains always with the user, which will aim to allow them to access that liquidity across the entire DeFi ecosystem.
        </div>
      </div>
    </div>
  )
}

export default Vision