import React from "react";
import ReactCardSlider from "react-card-slider-component";

import './Style/slider.css'
const slides = [
  {
    image: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
    title: "Nick's Baker",
    description: "Connaught Place, Delhi"
    
  },
  {
    image: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
    title: "Nick's Baker",
    description: "Connaught Place, Delhi"
    
  },
  {
    image: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
    title: "Nick's Baker",
    description: "Connaught Place, Delhi"
    
  },
  {
    image: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
    title: "Nick's Baker",
    description: "Connaught Place, Delhi"
    
  },
  {
    image: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
    title: "Nick's Baker",
    description: "Connaught Place, Delhi"
    
  },
  {
    image: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
    title: "Nick's Baker",
    description: "Connaught Place, Delhi"
    
  },
  {
    image: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
    title: "Nick's Baker",
    description: "Connaught Place, Delhi"
    
  },
  {
    image: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
    title: "Nick's Baker",
    description: "Connaught Place, Delhi"
    
  },
  {
    image: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
    title: "Nick's Baker",
    description: "Connaught Place, Delhi"
    
  },
  {
    image: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
    title: "Nick's Baker",
    description: "Connaught Place, Delhi"
    
  },
  {
    image: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
    title: "Nick's Baker",
    description: "Connaught Place, Delhi"
    
  },
  {
    image: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
    title: "Nick's Baker",
    description: "Connaught Place, Delhi"
    
  },
  {
    image: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
    title: "Nick's Baker",
    description: "Connaught Place, Delhi"
    
  },
  {
    image: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
    title: "Nick's Baker",
    description: "Connaught Place, Delhi"
    
  },
];
export const Carousel = () => {
  return (
    <div className="Slider">
        <div className="your-taste">
            <h3>Your Taste</h3>
            <p>See All + </p>
        </div>
      <ReactCardSlider slides={slides} />
    </div>
  );
};

export default Carousel;