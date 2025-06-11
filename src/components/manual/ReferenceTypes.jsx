import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

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
                <div className="flex items-center gap-2">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-neutral-600 animate-pulse"></span>
                  <p>Value is fixed</p>
                </div>

                <div className="flex items-center gap-2">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-neutral-600 animate-pulse"></span>
                  <p>Value stored directly in stack</p>
                </div>
              </div>

              <span className="text-highlight">Reference types</span>
              <div className="flex flex-col my-2 md:my-3 gap-1">
                <div className="flex items-center gap-2">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-neutral-600 animate-pulse"></span>
                  <p>Value is not fixed (can change)</p>
                </div>

                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-neutral-600 animate-pulse"></span>
                    <p>Memory is allocated in two parts : </p>
                  </div>

                  <p> i. Heap (stores the actual data)</p>
                  <p> ii. Stack (stores the address of that data known as pointer)</p>

                </div>
              </div>
            </AccordionContent>
          </AccordionItem>


          {/* Q - 2 */}
          <AccordionItem value="item-2">
            <AccordionTrigger className="font-geist text-sm md:text-[18px] tracking-wider text-primary font-medium">
              2. Object ?
            </AccordionTrigger>
            <AccordionContent className="font-geist text-sm md:text-[18px] tracking-wider text-secondary">
              <p>A Collection of key value pair</p>

              <p className="font-geist text-sm md:text-[18px] tracking-wider text-secondary mt-2">
                <span className="text-highlight">Example:</span>
              </p>

              <pre className="my-5 p-4 bg-neutral-100 rounded-lg shadow-input mx-1 overflow-x-auto">
                <code className="text-secondary text-[15px] md:text-[20px] font-geist whitespace-pre">
                  {`let obj = {
  name: "Samar",
  age: 22,
  weight: 72,
  height: "6ft",
  greet: function() {
    console.log("hello world");
  }
};

console.log(obj);
obj.greet();`}
                </code>
              </pre>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger className="font-geist text-sm md:text-[18px] tracking-wider text-primary font-medium">
              3. Reference Assignment ?
            </AccordionTrigger>
            <AccordionContent className="font-geist text-sm md:text-[18px] tracking-wider text-secondary">
              <p>When we create an object, two things happen in memory:</p>

              <div className="flex flex-col my-2 md:my-3 gap-1">
                <div className="flex items-center gap-2">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-neutral-600 animate-pulse"></span>
                  <p><strong>Stack memory</strong>: Stores the reference to the object</p>
                </div>

                <div className="flex items-center gap-2">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-neutral-600 animate-pulse"></span>
                  <p><strong>Heap memory</strong>: Stores the actual object data</p>
                </div>
              </div>

              <p className="mt-4">
                When we do <span className="text-highlight">let obj2 = obj</span>:
              </p>

              <div className="flex flex-col my-2 md:my-3 gap-1">
                <div className="flex items-center gap-2">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-neutral-600 animate-pulse"></span>
                  <p>A new reference <code>obj2</code> is created in stack memory</p>
                </div>

                <div className="flex items-center gap-2">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-neutral-600 animate-pulse"></span>
                  <p>No new object is created in heap memory</p>
                </div>

                <div className="flex items-center gap-2">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-neutral-600 animate-pulse"></span>
                  <p><code>obj2</code> points to the same object as <code>obj</code> in heap memory</p>
                </div>
              </div>

              <p className="mt-4">
                This is called a <span className="text-highlight">Reference Assignment</span>.
              </p>
            </AccordionContent>

          </AccordionItem>


          {/* The End */}
        </Accordion>
      </div>
    </div>
  );
};

export default ReferenceTypes;
