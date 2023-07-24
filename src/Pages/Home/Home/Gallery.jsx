import  { useState } from "react";

const Gallery = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    "https://i.ibb.co/M8p3dw5/photo-1521737604893-d14cc237f11d-ixlib-rb-4-0.jpg",
    "https://i.ibb.co/VHHJzHL/photo-1498661694102-0a3793edbe74-ixlib-rb-4-0.jpg",
    "https://i.ibb.co/6Zb1sg0/photo-1470753323753-3f8091bb0232-ixlib-rb-4-0.jpg",
    "https://i.ibb.co/VHHJzHL/photo-1498661694102-0a3793edbe74-ixlib-rb-4-0.jpg"
  ];

  const handlePreviousSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
  };

  return (
        <div className="w-full mx-auto ">
            <h1 className="text-center sm:text-2xl sm:mb-7 md:text-4xl text-cyan-600 font-bold italic">College Gallery</h1>
      <div className="carousel flex items-center justify-center h-2/5">
        <div className="carousel-item relative bg-cyan-200">
          <img src={slides[currentSlide]} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <button onClick={handlePreviousSlide} className="btn btn-circle">
              ❮
            </button>
            <button onClick={handleNextSlide} className="btn btn-circle">
              ❯
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
