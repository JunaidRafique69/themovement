import { useState } from "react";
import Sectors from "./sectors/sectors";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ToastContainer />
      <Sectors />
    </>
  );
}

export default App;
