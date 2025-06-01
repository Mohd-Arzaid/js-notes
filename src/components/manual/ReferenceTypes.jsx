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
       {/* <p className="text-secondary text-center text-[14px] md:text-[20px] font-geist">
          Variables And DataTypes{" "}
          <span className="text-primary font-geist text-[14px] md:text-[20px] font-medium underline underline-offset-4">
            Questions & Answers
          </span>
        </p> */}
  
        {/* Accordion of Q/A */}
        <div className="w-full max-w-[1104px]  mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {/* Q - 1 */}
            <AccordionItem value="item-1">
              <AccordionTrigger className="font-geist text-sm md:text-[18px] tracking-wider text-primary font-medium">
                1. Reference Type?
              </AccordionTrigger>
              <AccordionContent className="font-geist text-sm md:text-[18px] tracking-wider text-secondary">

              {/* In primitive data types, the data remains fixed — In reference types, the data is not fixed.
              Reference types are stored/memory is allocated in two ways
            
              1st) stack memory 2nd) heap memory <br />
              All reference types are allocated in heap memory,
              and to access the heap memory, a pointer (address) is needed,
              which is created inside the stack */}

              Primitive types have fixed data, while reference types are mutable. Reference types use two memory types: stack (for addresses) and heap (for actual data). To access heap data, a pointer from stack is required.
             
              </AccordionContent>
            </AccordionItem>                                                                                                   
  
            {/* 2nd Questions : Object? 

Object is collection of key value pair      */}

            {/* The End */}
          </Accordion>
        </div>
      </div>
    );
  };
  
  export default ReferenceTypes;
  