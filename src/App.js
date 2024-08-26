import { Route, Routes } from "react-router-dom";
import Header from "./common/Header";
import Hero from "./components/home/Hero";
import Form from "./components/home/Form";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Form/>
    </>
  );
}

export default App;
