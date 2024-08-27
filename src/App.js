import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/view/Home';
import Seacond from './components/view/Seacond';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/seacond' element={<Seacond />} />
      </Routes>
    </>
  );
}

export default App;
