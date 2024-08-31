import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/view/Home';
import Seacond from './components/view/Seacond';
import Lottie from './components/home/Laniamtion';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/seacond' element={<Seacond />} />
        <Route path='/lottie' element={<Lottie />} />
      </Routes>
    </>
  );
}

export default App;
