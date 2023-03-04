import Main from "./main";
import Social from "./social";
import Vision from './vision';
import Work from './work';
import Steps from './steps';

const Landing = () => {
  return (
    <div>
      <Main />
      <Social />
      <div className="bg-[#050304]">
        <div className="mx-auto max-w-[1200px]">
          <Vision />
          <Work />
        </div>
      </div>
      <div className="bg-[#050304]">
        <div className="mx-auto max-w-[1200px]">
          <Steps />
        </div>
      </div>
    </div>
  )
}

export default Landing;