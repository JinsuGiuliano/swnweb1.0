import React, {useState} from 'react';
import  './carousel.css';

export const CarouselItem = ({children, width}) => (
    <div className='carousel-item' style={{ width: width }}>
         {children && children}
    </div>
)

const Carousel = ({children}) => {
    const [activeIndex, setActiveIndex] = useState(0)
    const updateIndex = (newIndex) => {
        if( newIndex < 0 ){
            newIndex = 0;
        } else if (newIndex >= React.Children.count(children)){
            newIndex = React.Children.count(children) - 1;
        }
        setActiveIndex(newIndex);
    }
    
    return(
    <div className='carousel'>
        <div className='inner' style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
            {
                React.Children && React.Children.map( children, (child, index)=>{
                    return child? React.cloneElement(child,{  width: '100%'}) : null;
                })
            }
        </div>
        <div className='indicators'>
            <button onClick={() => { 
                updateIndex(activeIndex - 1);
             } }> PREV </button>
             <button onClick={() => { 
                updateIndex(activeIndex + 1);
             } }> Next </button>
        </div>
    </div>
)}

export default Carousel;