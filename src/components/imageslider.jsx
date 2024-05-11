// import React, { useState } from 'react';

// const ImageSlider = ({ imageUrls }) => {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   const nextImage = () => {
//     setCurrentImageIndex((prevIndex) => (prevIndex === imageUrls.length - 1 ? 0 : prevIndex + 1));
//   };

//   const prevImage = () => {
//     setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? imageUrls.length - 1 : prevIndex - 1));
//   };

//   return (
//     <div className="image-slider-container">
//       <img
//         src={imageUrls[currentImageIndex]}
//         alt={`Image ${currentImageIndex + 1}`}
//         className="slider-image"
//       />
//       <div className="slider-info">
//         <span>{currentImageIndex + 1} of {imageUrls.length}</span>
//       </div>
//       <button className="slider-control left" onClick={prevImage}>&#10094;</button>
//       <button className="slider-control right" onClick={nextImage}>&#10095;</button>
//     </div>
//   );
// };

// export default ImageSlider;

import React, { useState } from 'react';
import '../../public/css/imageslider.css'; // Import the CSS file

const ImageSlider = ({ imageUrls }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === imageUrls.length - 1 ? 0 : prevIndex + 1));
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? imageUrls.length - 1 : prevIndex - 1));
  };

  return (
    <div className="image-slider-container">
      <div className="slider-controls">
        <button className="prev" onClick={prevImage}>&#10094;</button>
        <span>{currentImageIndex + 1} / {imageUrls.length}</span>
        <button className="next" onClick={nextImage}>&#10095;</button>
      </div>
      <div className="image-slider">
        <img
          src={imageUrls[currentImageIndex]}
          alt={`Image ${currentImageIndex + 1}`}
          className="active"
        />
      </div>
    </div>
  );
};

export default ImageSlider;
