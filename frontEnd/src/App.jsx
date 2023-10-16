import './App.css';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Menu from './pages/Menu';
import AboutUs from './pages/AboutUs';
import Sign from './pages/Sign';
import Cart from "./components/Cart";
import Admin from './pages/Admin';
<<<<<<< HEAD
import Footer from "./pages/Footer";
import Orders from './components/orders';
import { Routes , Route , useLocation} from 'react-router-dom';  
=======
import Footer from "./pages/Footer"
import { Routes , Route } from 'react-router-dom';  
>>>>>>> 2ff4a5d80170fd7218e08324a10b6ff4f2251dd3
import { ShopContextProvider } from './components/shop-context';
import Inventory from './components/Inventory';
import Customers from './components/Customers';

// import Header from './components/Header';


function App() {
  const location = useLocation();

  
  const isUnderAdminPath = location.pathname.startsWith('/admin');

  return (
    <>
      <ShopContextProvider>
      {isUnderAdminPath ? null : <Navbar />}
      
      <Routes>
        <Route path='/' Component={Home}></Route> 
        <Route path='/menu' Component={Menu}></Route> 
        <Route path='/aboutus' Component={AboutUs}></Route> 
        <Route path='/Sign' Component={Sign} ></Route> 
        <Route path='/Cart' Component={Cart} ></Route> 
        <Route path='/admin' Component={Admin} >
          <Route path='' Component={Orders} />
          <Route path='inventory' Component={Inventory} />
          <Route path='customers' Component={Customers} />
          
        </Route>
      
        
      </Routes>
      {isUnderAdminPath ? null : <Footer />}
      </ShopContextProvider>
    </>
  )
}

export default App
