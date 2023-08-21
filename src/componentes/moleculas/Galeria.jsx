import { useState } from "react";

import ImagenCarousel1 from "../../assets/img/C1.jpg";
import ImagenCarousel2 from "../../assets/img/C2.png";
import ImagenCarousel3 from "../../assets/img/C3.jpg";
import ImagenCarousel4 from "../../assets/img/C4.png";
import ImagenCarousel5 from "../../assets/img/C5.png";

import "../../assets/styles/Galeria.css";

function Galeria() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    ImagenCarousel1,
    ImagenCarousel2,
    ImagenCarousel3,
    ImagenCarousel4,
    ImagenCarousel5,
  ];

  const visibleImages = images.slice(currentIndex, currentIndex + 3);

  const goToPreviousSlide = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 3 : currentIndex - 1);
  };

  const goToNextSlide = () => {
    setCurrentIndex(currentIndex === images.length - 3 ? 0 : currentIndex + 1);
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-12 d-flex justify-content-center align-items-center">
          <button className="carousel-prev" onClick={goToPreviousSlide}>
            {"<"}
          </button>
          <div className="image-carousel">
            <div className="carousel-images">
              {visibleImages.map((image, index) => (
                <div
                  key={index}
                  className="carousel-slide"
                  style={{ backgroundImage: `url(${image})` }}
                ></div>
              ))}
            </div>
          </div>
          <button className="carousel-next" onClick={goToNextSlide}>
            {">"}
          </button>
        </div>
      </div>
    </div>
  );
}
export default Galeria;
