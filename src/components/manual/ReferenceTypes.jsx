import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

const ReferenceTypes = () => {
  return (
    <div className=" max-w-[88rem] mx-auto px-4 py-8 md:p-12">
      {/* Heading */}
      <h2 className="text-[20px] md:text-[48px] text-center font-geist font-semibold text-primary">
        Reference Types : Objects & Arrays Q/A
      </h2>

      {/* Accordion of Q/A */}
      <div className="w-full max-w-[1104px]  mx-auto">
        <Accordion type="single" collapsible className="w-full">
          {/* Q - 1 */}
          <AccordionItem value="item-1">
            <AccordionTrigger className="font-geist text-sm md:text-[18px] tracking-wider text-primary font-medium">
              1. Primitive Types vs Reference Types ?
            </AccordionTrigger>
            <AccordionContent className="font-geist text-sm md:text-[18px] tracking-wider text-secondary">
              <span className="text-highlight">Primitive types</span>
              <div className="flex flex-col my-2 md:my-3 gap-1">
                <div className="flex items-center  gap-2">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-neutral-600 animate-pulse"></span>
                  <p>Value is fixed</p>
                </div>

                <div className="flex items-center  gap-2">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-neutral-600 animate-pulse"></span>
                  <p>Value stored directly in stack</p>
                </div>
              </div>

              <span className="text-highlight">Reference types</span>
              <div className="flex flex-col my-2 md:my-3 gap-1">
                <div className="flex items-center  gap-2">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-neutral-600 animate-pulse"></span>
                  <p>Value is not fixed (can change)</p>
                </div>

                <div className="flex items-center  gap-2">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-neutral-600 animate-pulse"></span>
                  <p>
                    {" "}
                    Memory is allocated in two parts : Heap (stores the actual
                    data) & Stack (stores the address of that data known as
                    pointer)
                  </p>
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

export default ReferenceTypes;
