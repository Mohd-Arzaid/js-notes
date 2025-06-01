import { Star } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

const VariablesAndDataTypes = () => {
  return (
    <div className=" max-w-[88rem] mx-auto px-4 py-8 md:p-12">
      {/* Heading */}
      <h2 className="text-[20px] md:text-[48px] text-center font-inter font-semibold text-neutral-800">
        Javascript Q/A
      </h2>
      <p className="text-neutral-600 text-center text-[15px] md:text-[20px] font-inter">
        Javascript Foundations{" "}
        <span className="text-neutral-800 font-inter text-[15px] md:text-[20px] font-medium underline underline-offset-4">
          Questions & Answers
        </span>
      </p>

      {/* Accordion of Q/A */}
      <div className="w-full max-w-[1104px] mt-[8px] md:mt-[24px] mx-auto">
        <Accordion type="single" collapsible className="w-full">
          {/* Q - 1 */}
          <AccordionItem value="item-1">
            <AccordionTrigger className="font-inter text-[15px] md:text-[18px] tracking-wider text-neutral-800 font-medium">
              Variables ?
            </AccordionTrigger>
            <AccordionContent className="font-inter text-[15px] md:text-[18px] tracking-wider text-neutral-600">
              We store data in memory and access it using its address. But since
              we can't remember addresses, we give them names — these names are
              called{" "}
              <span className="text-neutral-800 font-inter text-[15px] md:text-[18px] font-medium ">
                variables
              </span>
              {/* Quick Summary */}
              <div className="mt-2 p-4 bg-neutral-100 rounded-lg">
                <span className="flex gap-1 md:gap-2">
                  <Star className="block md:hidden fill-current text-[#160E34] " size={17} />
                  <Star className="hidden md:block fill-current text-[#160E34] " size={20} />
                  <h3 className="text-neutral-800 font-inter text-[15px]  md:text-[18px] font-medium mb-2">
                    Summary
                  </h3>
                </span>

                <div className="text-neutral-600 text-[15px] md:text-[18px] font-medium">
                  Data → Store → Memory → Access → Address → Variable
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* The End */}
        </Accordion>
      </div>
    </div>
  );
};

export default VariablesAndDataTypes;
