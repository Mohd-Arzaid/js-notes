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
      <h2 className="text-[20px] md:text-[48px] text-center font-geist font-semibold text-[#181818]">
      Javascript Q/A
      </h2>
      <p className="text-[#52525b] text-center text-[15px] md:text-[20px] font-geist">
      Javascript Foundations{" "}
      <span className="text-[#27272a] font-geist text-[15px] md:text-[20px] font-medium underline underline-offset-4">
      Questions & Answers
        </span>
      </p>

      {/* Accordion of Q/A */}
      <div className="w-full max-w-[1104px] mt-[8px] md:mt-[24px] mx-auto">
        <Accordion type="single" collapsible className="w-full">
          {/* Q - 1 */}
          <AccordionItem value="item-1">
          <AccordionTrigger className="font-geist text-[15px] md:text-[18px] tracking-wider text-neutral-800 font-medium">
          Variables ?
            </AccordionTrigger>
            <AccordionContent className="font-geist text-[15px] md:text-[18px] tracking-wider text-neutral-600">
            We store data in memory and access it using its address. But since
              we can't remember addresses, we give them names — these names are
              called{" "}
              <span className="text-neutral-800 font-geist text-[15px] md:text-[18px] font-medium underline decoration-neutral-200 decoration-2 underline-offset-[0.27em] transition-colors hover:decoration-neutral-800 ">
                Variables
              </span>
              {/* Quick Summary */}
              <div className="mt-5 p-4 bg-neutral-200 rounded-lg">
                <span className="flex gap-1 md:gap-2">
                  <Star className="block md:hidden fill-current text-neutral-800 " size={17} />
                  <Star className="hidden md:block fill-current text-neutral-800 " size={20} />
                  <h3 className="text-neutral-800 font-geist text-[15px] md:text-[18px] font-medium mb-2">
                    Summary
                  </h3>
                </span>

                <div className="font-geist text-[15px] md:text-[18px] tracking-wider text-neutral-600">
                  Variables = Named memory location that store data in memory
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
