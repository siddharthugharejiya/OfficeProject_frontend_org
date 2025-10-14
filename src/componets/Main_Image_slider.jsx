import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';

// import { Nav } from "./Navi";
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
    },
    // {
    //     id: 2,
    //     image: "/image/slider_2.jpg",
    // },
    // {
    //     id: 3,
    //     image: "/image/slider_3.jpg",
    // },
    // {
    //     id: 4,
    //     image: "/image/slider_4.jpg",
    // },
];

const Main_Image_slider = () => {
    const [activeIndex, setActiveIndex] = useState(0)
    const { height: screenHeight, width: screenWidth } = useWindowSize();

    // Dynamic vh: 40vh for 430-639px width; otherwise adjust based on height for other mobiles
    let mobileVh = 30;
    if (screenWidth >= 430 && screenWidth < 640) {
        mobileVh = 40;
    } else if (screenWidth < 430) {
        // For very small screens (<430px), adjust based on height
        if (screenHeight > 850) {
            mobileVh = 32;
        } else if (screenHeight < 750) {
            mobileVh = 28;
        }
    }
    const mobileHeight = screenWidth < 640 ? `${mobileVh}vh` : undefined;
    const swiperRef = useRef(null);

    return (
        <div className="w-full relative overflow-hidden -px-1">
            <div className="absolute top-0 w-full z-50 text-white">
                <Navi />
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
                onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                className="w-full sm:h-[60vh] md:h-[70vh] lg:h-[80vh] xl:h-[100vh] 2xl:h-[100vh]"
                style={{
                    height: screenWidth >= 1280 ? '100vh' : mobileHeight, // XL+ screens
                    overflow: screenWidth >= 1280 ? 'hidden' : 'visible', // scroll hide for XL+
                }}
            >
                {slidess.map((slide, index) => (
                    <SwiperSlide key={slide.id} className="!h-full !w-full">
                        <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
                            <img
                                src={slide.image}
                                alt={`Slide ${slide.id}`}
                                className="absolute top-0 inset-0 w-full h-full object-cover"
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

        </div>
    );
};

export default Main_Image_slider;