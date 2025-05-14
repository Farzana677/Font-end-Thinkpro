import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ImgOne from "../assets/Slide.png";
import { useRef, MutableRefObject } from "react";
import { CircleChevronLeft, CircleChevronRight } from "lucide-react";

const slides = [
  {
    image: ImgOne,
    title: "This is the first Item",
    subtitle:
      "Pioneering the future of construction with designs that blend innovation, functionality, and sustainability.",
  },
  {
    image: ImgOne,
    title: "This is the second image",
    subtitle:
      "Pioneering the future of construction with designs that blend innovation, functionality, and sustainability.",
  },
  {
    image: ImgOne,
    title: "You are viewing the third item",
    subtitle:
      "Pioneering the future of construction with designs that blend innovation, functionality, and sustainability.",
  },
  {
    image: ImgOne,
    title: "Welcome to the fouth slide",
    subtitle:
      "Pioneering the future of construction with designs that blend innovation, functionality, and sustainability.",
  },
];

function SimpleSlider() {
  let sliderRef = useRef<Slider | null>(
    null
  ) as MutableRefObject<Slider | null>;

  // Custom functions for next and previous slides
  const next = () => {
    sliderRef.current!.slickNext();
  };
  const previous = () => {
    sliderRef.current!.slickPrev();
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="slider-container relative">
      <Slider
        ref={(slider) => {
          sliderRef.current = slider;
        }}
        {...settings}
      >
        {slides.map((slide, index) => (
          <div key={index} className="relative">
            {/* Background Image with Overlay */}
            <div className="relative w-full h-full">
              <img
                src={slide.image}
                alt={`Slide ${index + 1}`}
                className="w-full"
              />
              <div className="absolute inset-0 bg-black/40" />
            </div>

            {/* Content Overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
              <h1 className="text-3xl md:text-4xl text-white font-bold text-center mb-6">
                {slide.title}
              </h1>

              <div className="bg-black/30 backdrop-blur-sm rounded-lg px-8 py-4 mb-8 max-w-3xl">
                <p className="text-white text-center text-lg">
                  {slide.subtitle}
                </p>
              </div>

              <button className="bg-white hover:bg-gray-100 text-gray-800 px-8 py-3 rounded-md transition-colors duration-200">
                Book Consultation
              </button>
            </div>
          </div>
        ))}
      </Slider>

      {/* Custom Navigation Buttons */}
      <div className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10">
        <button
          className="text-white text-3xl  px-4 py-2 rounded-full cursor-pointer"
          onClick={previous}
        >
          <CircleChevronLeft className="w-16 h-16" strokeWidth={1} />
        </button>
      </div>
      <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10 ">
        <button
          className="text-white px-4 py-2 rounded-full cursor-pointer"
          onClick={next}
        >
          <CircleChevronRight className="w-16 h-16" strokeWidth={1} />
        </button>
      </div>
    </div>
  );
}

export default SimpleSlider;
