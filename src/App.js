import logo from './logo.svg';
import './App.css';
import { Box } from '@chakra-ui/react';
import { Navbar } from './Pages/Navbar';
import { BsFill1SquareFill } from "react-icons/bs"
import { Home } from './Pages/Home';
import { Footer } from './Pages/Footer';
import { Hair } from './Pages/categories/Hair';
import { Makeup } from './Pages/categories/Makeup';
import { Facecare } from './Pages/categories/Facecare';
import { MainRoutes } from './Routes/MainRoutes';
import { ProductCard } from './Components/ProductCard';
import { ProductList } from './Components/ProductList';

import { AddressPage } from './Pages/AddressPage';
import { Payment } from './Pages/Payment';
import { OrderConfirmation } from './Pages/OrderConfirmation';

function App() {
  return (
    <div className="App">
  
   <MainRoutes />
    </div>
  );
}

export default App;
