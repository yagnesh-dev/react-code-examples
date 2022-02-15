import { BrowserRouter,Route,Routes  } from 'react-router-dom';
import './App.css';
import Header from './components/Header'
import Cart from './components/Cart'
import Home from './components/Home';
function App() {

  return (
   <div className="App">
    
     <BrowserRouter>
     <Routes>
     <Route path ="/" element={<Header />} />
     <Route path ="/cart" element={<Cart />} />
     <Route path ="/home" element={<Home />} />
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
