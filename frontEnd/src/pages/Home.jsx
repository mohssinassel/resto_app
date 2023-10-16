import ImageSlider from "../components/ImageSlider";
import { BiSearch } from 'react-icons/bi';
import { useState , useEffect } from "react";
import '../styles/Home.css';
import Menu from "./Menu"; 
import AboutUs from "./AboutUs";
import Cart from "../components/Cart";
import axios from 'axios';
const Home = () => {
    const slides = [
        {url:'/images/panini.jpg',title: 'burger'},
        {url:'/images/coffee.jpg',title: 'burger'},
        {url:'/images/frise.jpg',title: 'burger'}
    ]
    const [data, setData] = useState([]);

    const fetchData = async () => {
    try {
        const response = await axios.get('/dish/getAll'); // Replace with your API endpoint
        const data = response.data;
        console.log(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
    };
    useEffect(() => {
        fetchData()
      }, []);
    
    
    return (
        <>
        <div className="mainContainer">
        <div className="containerSlider">
            <div className="containerStyles">
            <ImageSlider slides={slides} />
            </div>
        </div>
        <div className="search">
            <div className="searchSentence">Experience the joy of food </div>
            <div className="searchSentence">that&apos;s crafted with <span style={{color:'var(--second-color)'}}>PASSION</span></div>
            <div className="searchSentence">and served with <span style={{color:'var(--main-color)'}}>LOVE</span>. </div>
            <div className="searchSentence2">Discover Your Perfect Meal: Unleash Your Appetite and Find Your Culinary Desire!</div>
            <div className="containerSearch">
                        
                        <button type="submit" className="orderbtn">Order Now </button>
                        <button type="submit" className="seeFoodbtn">See Foods</button>
                    
            </div>
        </div>
        </div>
        <div>
        {data.map((item) => (
        <div key={item._id}>{item.name}</div>
      ))}

        </div>
        <br/><br/><br/>
        <Menu/>
        
        <AboutUs/>
        </>
    )}
export default Home;