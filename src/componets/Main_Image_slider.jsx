import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import { Navi } from './Navi';
import { Autoplay } from "swiper/modules";

const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined,
    });

    useEffect(() => {
        function handleResize() {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }

        handleResize();

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowSize;
};

const slidess = [
    {
        id: 1,
        image: "/image/slider_7.jpg",
        title: "Exclusive bathroom fixtures",
        subtitle: "Clean and classy designs",
        description: "Find your perfect fit with our exclusive luxury bath collection."
    },
    // {
    //     id: 2,
    //     image: "/image/slider_2.jpg",
    //     title: "Luxury Designs",
    //     subtitle: "Premium Quality Materials",
    //     description: "Experience the finest bathroom fittings collection"
    // },
    // {
    //     id: 3,
    //     image: "/image/slider_3.jpg",
    //     title: "Modern Solutions",
    //     subtitle: "Innovative Designs",
    //     description: "Transform your bathroom with our modern collection"
    // },
    // {
    //     id: 4,
    //     image: "/image/slider_4.jpg",
    //     title: "Elegant Collection",
    //     subtitle: "Timeless Beauty",
    //     description: "Choose from our wide range of elegant designs"
    // },
];

const Main_Image_slider = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const { height: screenHeight, width: screenWidth } = useWindowSize();

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 300);
        return () => clearTimeout(timer);
    }, [activeIndex]);

    // Dynamic vh calculation for mobile
    let mobileVh = 15;
    if (screenWidth >= 430 && screenWidth < 640) {
        mobileVh = 40;
    } else if (screenWidth < 430) {
        if (screenHeight > 850) {
            mobileVh = 15;
        } else if (screenHeight < 750) {
            mobileVh = 28;
        }
    }
    const mobileHeight = screenWidth < 640 ? `${mobileVh}vh` : undefined;

    const swiperRef = useRef(null);

    return (
        <div className="w-full relative overflow-hidden -px-1">
            <Navi textColor="black" />
            <div className="absolute top-0 w-full z-50 text-white">
            </div>
            <Swiper
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                modules={[Autoplay]}
                slidesPerView={1}
                loop={true}
                speed={1500}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                onSlideChange={(swiper) => {
                    setActiveIndex(swiper.realIndex);
                    setIsVisible(false);
                }}
                className="w-full sm:h-[60vh] md:h-[70vh] lg:h-[80vh] xl:h-[100vh] 2xl:h-[110vh]"
                style={{
                    height: screenWidth >= 1280 ? '100vh' : mobileHeight,
                    overflow: screenWidth >= 1280 ? 'hidden' : 'visible',
                }}
            >
                {slidess.map((slide, index) => (
                    <SwiperSlide key={slide.id} className="!h-full !w-full">
                        <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
                            <img
                                src={slide.image}
                                alt={`Slide ${slide.id}`}
                                className={`absolute top-0 inset-0 w-full h-full ${screenWidth < 640 ? 'object-contain' : 'object-cover'
                                    }`}
                            />

                            {/* Responsive Left Side Content */}
                            <div className="absolute left-4 sm:left-6 md:left-10 lg:left-20 2xl:left-56 xl:left-30 z-10 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg w-full px-2">
                                <div>
                                    {/* Responsive Title */}
                                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-black leading-tight sm:leading-tight md:leading-tight">
                                        {slide.title}
                                    </h1>

                                    {/* Responsive Subtitle */}
                                    <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-gray-800 font-medium">
                                        {slide.subtitle}
                                    </h2>

                                    {/* Responsive Description */}
                                    <p className="text-sm sm:text-base md:text-lg text-gray-700 max-w-full sm:max-w-md">
                                        {slide.description}
                                    </p>

                                    {/* Responsive Button */}
                                    <button className="mt-3 sm:mt-4 md:mt-6 px-4 sm:px-6 md:px-8 py-2 sm:py-3 bg-gray-300 text-black font-semibold rounded-lg hover:bg-gray-600 transition-colors duration-300 text-sm sm:text-base md:text-lg">
                                        Explore Collection
                                    </button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Main_Image_slider;