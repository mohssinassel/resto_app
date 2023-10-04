import './App.css';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Menu from './pages/Menu';
import AboutUs from './pages/AboutUs';
import Sign from './pages/Sign';
import Cart from "./components/Cart";
import Admin from './pages/Admin';
import Footer from "./pages/Footer"
import { Routes , Route } from 'react-router-dom';  
import { ShopContextProvider } from './components/shop-context';

// import Header from './components/Header';


function App() {
  

  return (
    <>
      <ShopContextProvider>
      <Navbar />
      {/* <Header/> */}
      <Routes>
        <Route path='/' Component={Home}></Route> 
        <Route path='/menu' Component={Menu}></Route> 
        <Route path='/aboutus' Component={AboutUs}></Route> 
        <Route path='/Sign' Component={Sign} ></Route> 
        <Route path='/Cart' Component={Cart} ></Route> 
        <Route path='/Admin' Component={Admin} ></Route>
      </Routes>
      <Footer/>
      </ShopContextProvider>
    </>
  )
}

export default App
