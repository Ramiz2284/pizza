
import { Header } from './components/Header';
import Home from './pages/Home';
import NotFound from './pages/Not-found';


import { Route, Routes } from 'react-router-dom';


import './scss/app.scss';
import Cart from './pages/Cart';
import { createContext, useState } from 'react';

export const SerchContext = createContext();

function App() {


  const [serchInput, setSerchInput] = useState('');

  return (
    <div className="wrapper">
      <SerchContext.Provider value={{ serchInput, setSerchInput }}>
        <Header />
        <div className="content">
          <div className="container">
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='*' element={<NotFound />} />
              <Route path='/cart' element={<Cart />} />
            </Routes>
          </div>
        </div>
      </SerchContext.Provider>
    </div >
  );
}

export default App;
