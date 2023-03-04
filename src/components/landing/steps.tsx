
const Steps = () => {
  return(
    <div className="flex md:flex-row flex-col justify-between px-2">
      <div className="pt-12 rounded-3xl max-w-[350px] md:pb-32 bg-[#050304] px-2">
        <div className="bg-[#151617] text-center py-1 w-20 rounded-xl text-[#898D94]"> Step 1</div>
        <div className="text-white md:text-4xl text-2xl pt-6 font-passenger">
          Staking your assets
        </div>
        <div className="text-[#AFAFAF] pt-6">
          Stake $ETH or $LSD and be rewarded with both sustainable APY's and liquid reward tokens for lending your assets to the LSD aggregator protocols.
        </div>
        <div className="text-[#AFAFAF] pt-6">
          Rewards tokens can be used in governance decisions with veLSD or liquid DEFI ventures with LS-ETH giving you flexibility to take advantage of other facets of DEFI while earning passive income.
        </div>
      </div>
      <div className="pt-12 rounded-3xl max-w-[350px] md:pb-28 px-2">
        <div className="bg-[#151617] text-center py-1 w-20 rounded-xl text-[#898D94]"> Step 2</div>
        <div className="text-white md:text-4xl text-2xl pt-6 font-passenger">
          Governance
        </div>
        <div className="text-[#AFAFAF] pt-6">
          Protocol decision making will be governed via $veLSD, giving power to the community and the investors of the protocol. This mechanism will ensure malicious actors are unable to exploit the protocol and uphold a decentralized governance structure.
        </div>
        <div className="text-[#AFAFAF] pt-6">
          $LSD tokens must be locked to receive $veLSD. Additionally, community members who volountarily lock their $LSD will receive a multiplier on their staked ETH rewards.
        </div>
      </div>
      <div className="pt-12 rounded-3xl max-w-[350px] md:pb-32 bg-[#050304] px-2 pb-10">
        <div className="bg-[#151617] text-center py-1 w-20 rounded-xl text-[#898D94]"> Step 3</div>
        <div className="text-white md:text-4xl text-2xl pt-6 font-passenger">
          Future Proofing
        </div>
        <div className="text-[#AFAFAF] pt-6">
          The LSD aggregator protocol not only generates passive income but sustainable and safe growth of your assets.
        </div>
        <div className="text-[#AFAFAF] pt-6">
          The APY generated is automatically rebased through our smart contract and any decisions made will be governed by the veLSD governance token to prevent the threat of centralized control.
        </div>
        <div className="text-[#AFAFAF] pt-6">
          Protocol audits coming soon.
        </div>
      </div>
    </div>
  )
}

export default Steps