import { treasuryData } from "../../mockup/treasury";

const Treasury = () => {
  return (
    <div className="flex flex-col items-start justify-center py-32 px-7 md:items-center md:px-16 lg:px-24 2xl:px-0 treasury-background">
      <div className="text-[#AFAFAF] text-[18px]">* rewards</div>
      <div className="text-[36px] sm:text-[54px] md:text-[64px] font-passenger text-white text-center py-5 font-extrabold">
        Treasury and Asset Backing
      </div>
      <div className="max-w-[1200px] lg:mt-24 mt-20 gap-16 text-white flex-col lg:flex-row flex">
        {
          treasuryData.map((treasury, index) => (
            <div className="flex w-full gap-7 lg:w-1/3" key={index}>
              <div>
                <img
                  className="h-[116px]"
                  alt="icon"
                  src={treasury.icon}
                  width="116"
                />
                <div className="mt-10 text-2xl font-passenger">
                  {treasury.title}
                </div>
                <div className="mt-7 text-md text-[#AFAFAF] font-suisse">
                  {treasury.desc}
                </div>
              </div>          
              {
                index < 2 ? <img alt="divider" src="assets/divider.png" className="hidden lg:block mt-44 h-[84px]"/>:""
              }          
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Treasury;
