import ImageSlider from "./ImageSlider";
import './Home.css';
const Home = () => {
    const slides = [
        {url:'/images/panini.jpg',title: 'burger'},
        {url:'/images/coffee.jpg',title: 'burger'},
        {url:'/images/frise.jpg',title: 'burger'}
    ]
    const containerStyles = {
        width : '400px',
        height: '500px',

        
        // margin: '0 auto'
    };
    
    return (
        <div className="mainContainer">
        <div className="containerSlider">
            <div style={containerStyles}>
            <ImageSlider slides={slides}/>
            </div>
        </div>
        <div className="containerSearch">
            <div className="searchSentence">Experience the joy of food </div>
            <div className="searchSentence">that's crafted with <span style={{color:'var(--second-color)'}}>PASSION</span></div>
            <div className="searchSentence">and served with <span style={{color:'var(--main-color)'}}>LOVE</span>. </div>
        </div>
        </div>
    )}
export default Home;