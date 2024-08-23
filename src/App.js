import { Route, Routes } from "react-router-dom";
import Home from "./components/view/Home";
import Footer from "./components/view/Footer";

function App() {
  return (
    <>
      <Routes>
        <Route path="/Home" element={<Home />} ></Route>
        <Route path="/Footer" element={<Footer />} ></Route>
      </Routes>
    </>
  );
}

export default App;
