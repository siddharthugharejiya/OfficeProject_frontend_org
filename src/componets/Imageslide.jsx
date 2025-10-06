import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import { motion } from "framer-motion";
import { Nav } from "./Nav";

const slidess = [
    {
        id: 1,
        image: "https://cdn.shopify.com/s/files/1/0905/2012/files/shopiodecor-slider02.jpg?v=1645586328",
        subtitle: "Just a Click Away",
        title: "Effortless ways to bring strength and style to your space.",
        description: "Best surfaces for your space",
        buttonText: "View Collection",
    },
    {
        id: 2,
        image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2016&q=80",
        subtitle: "The Latest in Elegance",
        title: "The Latest in Elegance",
        description: "Transform your living space with our premium collection.",
        buttonText: "Shop Now",
    },
];

const AnimatedImageSlider = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className="w-full relative overflow-hidden">
            <div className="absolute top-0 w-full z-50">
                <Nav />
            </div>

            <Swiper
                slidesPerView={1}
                loop={true}
                onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            >
                {slidess.map((slide, index) => (
                    <SwiperSlide key={slide.id}>
                        <div
                            className="relative w-full flex items-center justify-center h-[90vh] sm:h-[60vh] md:h-[80vh] lg:h-[90vh] xl:h-[130vh] 2xl:h-[110vh]"
                        // style={{
                        //     height: '40vh',
                        //     minHeight: '500px',
                        //     maxHeight: '1000px'
                        // }}
                        >
                            {/* Background Image */}
                            <div
                                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                                style={{ backgroundImage: `url(${slide.image})` }}
                            ></div>

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/40 sm:bg-[#00000058]"></div>

                            {/* Content */}
                            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 ">
                                <div className="grid grid-cols-1 lg:grid-cols-2 items-center h-full py-10 sm:py-20">
                                    <div className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left space-y-4 sm:space-y-6">
                                        <motion.div
                                            key={activeIndex + "-group"}
                                            initial="hidden"
                                            animate="show"
                                            variants={{
                                                hidden: {},
                                                show: { transition: { staggerChildren: 0.12 } }
                                            }}
                                        >
                                            {/* Subtitle */}
                                            <motion.p
                                                variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
                                                transition={{ duration: 0.6, ease: "easeOut", type: "tween" }}
                                                className="text-[#f3c5b8] font-semibold uppercase tracking-wider"
                                                style={{ fontSize: 'clamp(12px, 1.3vw, 18px)' }}
                                            >
                                                {slide.subtitle}
                                            </motion.p>

                                            {/* Title */}
                                            <motion.h1
                                                variants={{ hidden: {}, show: { transition: { staggerChildren: 0.04 } } }}
                                                className="font-bold uppercase leading-tight text-white"
                                                style={{ fontSize: 'clamp(22px, 4vw, 46px)' }}
                                            >
                                                {slide.title.split(' ').map((word, wi) => (
                                                    <motion.span
                                                        key={wi + '-' + word}
                                                        variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0 } }}
                                                        transition={{ duration: 0.6, ease: "easeOut", type: "tween" }}
                                                        className="inline-block pb-1 mr-1"
                                                    >
                                                        {word}
                                                    </motion.span>
                                                ))}
                                            </motion.h1>

                                            {/* Description */}
                                            <motion.p
                                                variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
                                                transition={{ duration: 0.6, ease: "easeOut", type: "tween" }}
                                                className="text-gray-200 font-medium leading-relaxed max-w-2xl mx-auto lg:mx-0"
                                                style={{ fontSize: 'clamp(14px, 1.6vw, 24px)' }}
                                            >
                                                {slide.description}
                                            </motion.p>

                                            {/* Button */}
                                            <motion.button
                                                variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
                                                transition={{ duration: 0.6, ease: "easeOut", type: "tween" }}
                                                className="bg-gradient-to-r from-[#b86c59] to-[#d4a574] hover:from-[#a55a4a] hover:to-[#c19a6b] text-white font-bold px-6 py-3 sm:px-8 sm:py-4 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                                                style={{ fontSize: 'clamp(12px, 1.1vw, 16px)' }}
                                            >
                                                {slide.buttonText}
                                                <i className="fa-solid fa-arrow-right ml-2"></i>
                                            </motion.button>
                                        </motion.div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default AnimatedImageSlider;
