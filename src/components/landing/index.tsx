import Main from "./main";
import Social from "./social";
import Vision from './vision';
import Work from './work';
import Steps from './steps';
import Treasury from "./treasury";
import FAQ from "./faq";
import Footer from "./footer";

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
      <Treasury />
      <FAQ />
      <Footer />
    </div>
  )
}

export default Landing;