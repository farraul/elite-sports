import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './Components/Header/Header';
import Home from './Containers/Home/Home';
import Teams from './Containers/Teams/Teams';

function App() {
  

  return (
    <div className="App">
       <BrowserRouter>
        <Header/>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/equipos" element={<Teams/>} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
