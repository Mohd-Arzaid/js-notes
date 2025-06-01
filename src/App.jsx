import { Link, Route, Routes } from "react-router-dom";
import VariablesAndDataTypes from "./components/manual/VariablesAndDataTypes.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/VariablesAndDataTypes" element={<VariablesAndDataTypes />} />
    </Routes>
  );
}

export default App;

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 h-screen">
      <Link to="/VariablesAndDataTypes">
        <div className="font-geist text-[18px] font-medium underline underline-offset-4">
          Variables And Data Types (Javascript)
        </div>
      </Link>
   
  
    </div>
  );
};
