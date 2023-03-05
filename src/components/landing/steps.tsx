
const Steps = () => {
  return(
    <div className="flex flex-col justify-between lg:flex-row steps-background">
      <div className="pt-12 rounded-r-3xl lg:max-w-[370px] md:pb-32 bg-[#050304] pr-7 lg:pr-24 pl-7">
        <div className="bg-[#151617] text-center py-1 w-20 rounded-lg text-[#898D94] font-suisse"> Step 1</div>
        <div className="pt-6 text-2xl text-white md:text-4xl font-passenger">
          Staking your assets
        </div>
        <div className="text-[#AFAFAF] pt-6 font-suisse">
          Stake $ETH or $LSD and be rewarded with both sustainable APY's and liquid reward tokens for lending your assets to the LSD aggregator protocols.
        </div>
        <div className="text-[#AFAFAF] pt-6 font-suisse">
          Rewards tokens can be used in governance decisions with veLSD or liquid DEFI ventures with LS-ETH giving you flexibility to take advantage of other facets of DEFI while earning passive income.
        </div>
      </div>
      <div className="pt-12 rounded-3xl lg:max-w-[350px] md:pb-28 pl-7 pr-7 lg:pr-12">
        <div className="bg-[#151617] text-center py-1 w-20 rounded-lg text-[#898D94] font-suisse"> Step 2</div>
        <div className="pt-6 text-2xl text-white md:text-4xl font-passenger">
          Governance
        </div>
        <div className="text-[#AFAFAF] pt-6 font-suisse">
          Protocol decision making will be governed via $veLSD, giving power to the community and the investors of the protocol. This mechanism will ensure malicious actors are unable to exploit the protocol and uphold a decentralized governance structure.
        </div>
        <div className="text-[#AFAFAF] pt-6 font-suisse">
          $LSD tokens must be locked to receive $veLSD. Additionally, community members who volountarily lock their $LSD will receive a multiplier on their staked ETH rewards.
        </div>
      </div>
      <div className="pt-12 rounded-l-3xl lg:max-w-[400px] md:pb-32 bg-[#050304] px-7 lg:px-10 pb-10">
        <div className="bg-[#151617] text-center py-1 w-20 rounded-lg text-[#898D94] font-suisse"> Step 3</div>
        <div className="pt-6 text-2xl text-white md:text-4xl font-passenger">
          Future Proofing
        </div>
        <div className="text-[#AFAFAF] pt-6 font-suisse">
          The LSD aggregator protocol not only generates passive income but sustainable and safe growth of your assets.
        </div>
        <div className="text-[#AFAFAF] pt-6 font-suisse">
          The APY generated is automatically rebased through our smart contract and any decisions made will be governed by the veLSD governance token to prevent the threat of centralized control.
        </div>
        <div className="text-[#AFAFAF] pt-6 font-suisse">
          Protocol audits coming soon.
        </div>
      </div>
    </div>
  )
}

export default Steps