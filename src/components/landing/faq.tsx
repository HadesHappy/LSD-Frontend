import { faqData } from "../../mockup/faq";
import $ from "jquery";
import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

const FAQ = () => {
  const [selected, setSelected] = useState<any>(null);

  const toggle = (e: any) => {
    const accordion = e.target.parentElement;
    const answer = $(accordion).find(".answer");
    const arrow = $(accordion).find(".arrow");

    $(selected)?.find(".answer").slideUp();
    $(selected)?.find(".arrow").css("transform", "rotate(0deg)");

    if (selected == null || $(selected).find(".answer")[0] !== answer[0]) {
      answer.slideDown();
      arrow.css("transform", "rotate(180deg)");
    } else {
      setSelected(null);
      arrow.css("transform", "rotate(0deg)");
      return;
    }
    arrow.css("transform", "rotate(180deg)");
    setSelected(accordion);
  };

  return (
    <div className="bg-[#050304] flex justify-center pt-16 px-7 md:px-16 lg:px-24 2xl:px-0">
      <div className="w-[1200px]">
        <div className="text-[#AFAFAF] text-md font-suisse">
          * Frequently asked questions
        </div>
        <div className="pt-5 mb-16 text-2xl font-bold text-white md:text-5xl font-passenger">
          Answers here
        </div>
        {faqData.map((faq, index) => (
          <div key={index}>
            <div
              className="bg-[#141414] rounded-xl text-white md:text-lg px-6 py-4 mb-4 font-passenger cursor-pointer"
              onClick={toggle}
            >
              {faq.question}
              <div className="float-right mt-2 duration-150 arrow">
                <MdKeyboardArrowDown />
              </div>
            </div>
            <div
              className="answer text-[#AFAFAF] text-md px-5 pt-2 pb-5"
              hidden
            >
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
