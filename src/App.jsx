import { Link, Route, Routes } from "react-router-dom";
import VariablesAndDataTypes from "./components/manual/VariablesAndDataTypes.jsx";
import ReferenceTypes from "./components/manual/ReferenceTypes.jsx";
import Hoisting from "./components/manual/Hoisting.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/VariablesAndDataTypes"
        element={<VariablesAndDataTypes />}
      />
      <Route path="/ReferenceTypes" element={<ReferenceTypes />} />
      <Route path="/Hoisting" element={<Hoisting />} />
    </Routes>
  );
}

export default App;

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 min-h-screen p-4">
      <div className="w-full max-w-md space-y-3">
        <Link to="/VariablesAndDataTypes" className="block">
          <div className="font-geist text-base sm:text-[18px] font-medium underline underline-offset-4 text-center hover:text-blue-950 transition-colors">
            Variables And Data Types (Javascript)
          </div>
        </Link>
        <Link to="/ReferenceTypes" className="block">
          <div className="font-geist text-base sm:text-[18px] font-medium underline underline-offset-4 text-center hover:text-blue-950 transition-colors">
            Reference Types : Objects & Arrays (Javascript)
          </div>
        </Link>
        <Link to="/Hoisting" className="block">
          <div className="font-geist text-base sm:text-[18px] font-medium underline underline-offset-4 text-center hover:text-blue-950 transition-colors">
            Hoisting (Javascript)
          </div>
        </Link>
      </div>
    </div>
  );
};
