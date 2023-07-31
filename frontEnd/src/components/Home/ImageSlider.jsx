import { useState } from "react"

const ImageSlider = ({ slides }) => {
    const [currentIndex,setCurrentIndex] = useState(0);
    const sliderStyles={
        height:'100%',
        width:'100%',
        position:'relative',
        display:'flex',
        // justifyContent:'centre',
        // backgroundColor:'blue'
    }
    const slideStyles = {
        width: '100%',
        height: '100%',
        backgroundImage : `url(${slides[currentIndex].url})`,
        backgroundPosition: 'centre',
        backgroundSize: 'cover',
        borderRadius:'50px',
        // boxShadow: 'rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px'
        boxShadow: 'rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px'

        
    };
    const goToSlide = (slideIndex) =>{
        setCurrentIndex(slideIndex)
    }
    const switchers ={
        display : 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        marginRight:'2%',
        fontSize:'25px',
        cursor: 'pointer'
    }
    return(
        <div style={sliderStyles}>
            <div style={switchers}>
                {slides.map((slide,slideIndex) => (
                    <div key={slideIndex} onClick={() => goToSlide(slideIndex)} >
                            ⦿<br/>
                    </div>
                ))}
            </div>
            <div style={slideStyles}>
            </div>
        </div>
    )
}
export default ImageSlider