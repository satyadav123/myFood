import { useEffect, useRef, useState } from 'react';
import './Style/singleSlider.css'
const colors = ["#0088FE", "#00C49F", "#FFBB28"];
const image = ['https://b.zmtcdn.com/data/pictures/chains/4/18793824/c6ee3d18909461075ef0f6eab8300913_o2_featured_v2.jpg', 'https://b.zmtcdn.com/data/pictures/chains/8/300988/f5b9b82dd1aec36e29c1fed164987cad_o2_featured_v2.jpg', 'https://b.zmtcdn.com/data/pictures/chains/3/143/46ab03171d9eec9cc24d2067569ef485_o2_featured_v2.jpg']
const delay = 2500;

export const SingleSlider = () => {
    const [index, setIndex] = useState(0);
    const timeoutRef = useRef(null);

    function resetTimeout() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }

    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
            () =>
                setIndex((prevIndex) =>
                    prevIndex === colors.length - 1 ? 0 : prevIndex + 1
                ),
            delay
        );

        return () => {
            resetTimeout();
        };
    }, [index]);

    return (
        <div className="slideshow">
            <div
                className="slideshowSlider"
                style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
            >
                {image.map((backgroundColor, index) => (
                    <div
                        className="slide"

                    ><img src={backgroundColor} alt='' /></div>
                ))}
            </div>

            <div className="slideshowDots">
                {colors.map((_, idx) => (
                    <div
                        key={idx}
                        className={`slideshowDot${index === idx ? " active" : ""}`}
                        onClick={() => {
                            setIndex(idx);
                        }}
                    ></div>
                ))}
            </div>
        </div>
    );
}