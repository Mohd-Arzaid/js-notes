import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

const Hoisting = () => {
  return (
    <div className=" max-w-[88rem] mx-auto px-4 py-8 md:p-12">
      {/* Heading */}
      <h2 className="text-[20px] md:text-[48px] text-center font-geist font-semibold text-primary">
        Hoisting Q/A
      </h2>

      {/* Accordion of Q/A */}
      <div className="w-full max-w-[1104px]  mx-auto">
        <Accordion type="single" collapsible className="w-full">
          {/* Q - 1 */}
          <AccordionItem value="item-1">
            <AccordionTrigger className="font-geist text-sm md:text-[18px] tracking-wider text-primary font-medium">
              1. Hoisting ?
            </AccordionTrigger>
            <AccordionContent className="font-geist text-sm md:text-[18px] tracking-wider text-secondary">
              Hoisting means that the declarations of variables and functions
              are moved to the top of their scope.
              <br /> <br />
              For variables declared with var, only declaration is hoisted, not
              value. That&apos;s why it shows undefined if used
              before assign.
              <br /> <br />
              For functions, the entire function (declaration + code) is
              hoisted, can call before declared.
              <br /> <br />
              Hoisting only works with var. With let and const, hoisting happens
              but you can&apos;t access them before they are declared — it gives
              a ReferenceError: &quot;Cannot access before initialization&quot;.
            </AccordionContent>
          </AccordionItem>

          {/* The End */}
        </Accordion>
      </div>
    </div>
  );
};

export default Hoisting;
