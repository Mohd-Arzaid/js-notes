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

const VariablesAndDataTypes = () => {
  return (
    <div className=" max-w-[88rem] mx-auto px-4 py-8 md:p-12">
      {/* Heading */}
      <h2 className="text-[20px] md:text-[48px] text-center font-geist font-semibold text-primary">
        Variables And DataTypes Q/A
      </h2>
      <p className="text-secondary text-center text-[15px] md:text-[20px] font-geist">
        Variables And DataTypes{" "}
        <span className="text-primary font-geist text-[15px] md:text-[20px] font-medium underline underline-offset-4">
          Questions & Answers
        </span>
      </p>

      {/* Accordion of Q/A */}
      <div className="w-full max-w-[1104px] mt-[8px] md:mt-[24px] mx-auto">
        <Accordion type="single" collapsible className="w-full">
          {/* Q - 1 */}
          <AccordionItem value="item-1">
            <AccordionTrigger className="font-geist text-sm md:text-[18px] tracking-wider text-primary font-medium">
              1. Variables?
            </AccordionTrigger>
            <AccordionContent className="font-geist text-sm md:text-[18px] tracking-wider text-secondary">
              We store data in memory and access it using its address. But since
              we can't remember addresses, we give them names — these names are
              called <span className="text-highlight">Variables</span>
              {/* Quick Summary */}
              <div className="mt-5 my-2 p-4 bg-neutral-100 rounded-lg shadow-input mx-1 overflow-x-auto">
                <div className="font-geist text-sm md:text-[18px] tracking-wider text-secondary">
                  Variables ={" "}
                  <span className="text-highlight">Named memory location</span>{" "}
                  that store data in memory
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Q - 2 */}
          <AccordionItem value="item-2">
            <AccordionTrigger className="font-geist text-sm md:text-[18px] tracking-wider text-primary font-medium">
              2. Types of Variables?
            </AccordionTrigger>
            <AccordionContent className="font-geist text-sm md:text-[18px] tracking-wider text-secondary">
              In JS, there are three ways to declare variables ={" "}
              <span className="text-highlight">var</span>,{" "}
              <span className="text-highlight">let</span>, and{" "}
              <span className="text-highlight">const</span>
              {/* Quick Summary */}
              <div className="mt-5 my-2 p-4 bg-neutral-100 rounded-lg shadow-input mx-1 overflow-x-auto">
                <Table className="w-full text-sm md:text-[18px]">
                  <TableHeader>
                    <TableRow>
                      <TableHead className="min-w-[80px] font-geist text-primary text-center">
                        Variables
                      </TableHead>
                      <TableHead className="min-w-[120px] font-geist text-primary text-center">
                        Scope
                      </TableHead>
                      <TableHead className="min-w-[150px] font-geist text-primary text-center">
                        Reassigned
                      </TableHead>
                      <TableHead className="min-w-[150px] font-geist text-primary text-center">
                        Redeclared
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody className="font-geist text-secondary text-center">
                    <TableRow>
                      <TableCell className="text-center">
                        <span className="text-highlight">var</span>
                      </TableCell>
                      <TableCell className="text-center">
                        Functional / Global
                      </TableCell>
                      <TableCell className="text-center">✅ Yes</TableCell>
                      <TableCell className="text-center">✅ Yes</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="text-center">
                        <span className="text-highlight">let</span>
                      </TableCell>
                      <TableCell className="text-center">Block</TableCell>
                      <TableCell className="text-center">✅ Yes</TableCell>
                      <TableCell className="text-center">❌ No</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="text-center">
                        <span className="text-highlight">const</span>
                      </TableCell>
                      <TableCell className="text-center">Block</TableCell>
                      <TableCell className="text-center">❌ No</TableCell>
                      <TableCell className="text-center">❌ No</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Q - 3 */}
          <AccordionItem value="item-3">
            <AccordionTrigger className="font-geist text-sm md:text-[18px] tracking-wider text-primary font-medium">
              3. Practical Ques based on var , let & const?
            </AccordionTrigger>
            <AccordionContent className="font-geist text-sm md:text-[18px] tracking-wider text-secondary">
              <span className="text-highlight">1st example:</span>

              <pre className="my-5 p-4 bg-neutral-100 rounded-lg shadow-input mx-1 overflow-x-auto">
                <code className="text-secondary text-[15px] md:text-[20px] font-geist whitespace-pre">
                  {`var a = 200;

{
  a = 400; 
}

let b = a; 

{
  let b = 400; 
}

console.log(b); // ?`}
                </code>
              </pre>

              <p className="font-geist text-sm md:text-[18px] tracking-wider text-secondary">
                <span className="text-highlight">Explanation :</span>
              </p>

              <pre className="my-5 p-4 bg-neutral-100 rounded-lg shadow-input mx-1 overflow-x-auto">
                <code className="text-secondary text-[15px] md:text-[20px] font-geist whitespace-pre">
                  {`var a = 200;

{
  a = 400; // a is now 400 because var is function-scoped, not block-scoped
}

let b = a; // b = a and a = 400 so b is 400

{
  let b = 400; // let is block-scoped, so this doesn't affect the outer b
}

console.log(b); // so b = 400`}
                </code>
              </pre>

              <span className="text-highlight">2nd example:</span>

              <pre className="my-5 p-4 bg-neutral-100 rounded-lg shadow-input mx-1 overflow-x-auto">
                <code className="text-secondary text-[15px] md:text-[20px] font-geist whitespace-pre">
                  {`var a = 200;

{
  let a = 400;
}

let b = a;

{
  let b = 400;
}

console.log(b); // ?`}
                </code>
              </pre>

              <p className="font-geist text-sm md:text-[18px] tracking-wider text-secondary">
                <span className="text-highlight">Explanation :</span>
              </p>

              <pre className="my-5 p-4 bg-neutral-100 rounded-lg shadow-input mx-1 overflow-x-auto">
                <code className="text-secondary text-[15px] md:text-[20px] font-geist whitespace-pre">
                  {`var a = 200;

{
  let a = 400; // let a is block-scoped, doesn't affect outer var a
}

let b = a; // b gets value of outer var a, which is 200

{
  let b = 400; // let b is block-scoped, doesn't affect outer let b
}

console.log(b); // logs the outer let b, which is 200`}
                </code>
              </pre>
            </AccordionContent>
          </AccordionItem>

          {/* The End */}
        </Accordion>
      </div>
    </div>
  );
};

export default VariablesAndDataTypes;
