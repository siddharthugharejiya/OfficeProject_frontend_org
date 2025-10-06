import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import { Navigation, Pagination } from "swiper";

const products = [
    { id: 1, name: "Product 1", image: "https://via.placeholder.com/300" },
    { id: 2, name: "Product 2", image: "https://via.placeholder.com/300/ff7f7f" },
    { id: 3, name: "Product 3", image: "https://via.placeholder.com/300/77ff77" },
    { id: 4, name: "Product 4", image: "https://via.placeholder.com/300/7777ff" },
    { id: 5, name: "Product 5", image: "https://via.placeholder.com/300/ff77ff" },
];

const ProductSwiper = () => {
    return (
        <div className="w-full max-w-7xl mx-auto py-8">
            <Swiper
                // modules={[Navigation, Pagination]}
                // navigation
                // pagination={{ clickable: true }}
                spaceBetween={20}
                slidesPerView={4} // Desktop default
                breakpoints={{
                    1536: { slidesPerView: 4 }, // 4 products on XL
                    1280: { slidesPerView: 3 },
                    1024: { slidesPerView: 3 },
                    768: { slidesPerView: 2 },
                    640: { slidesPerView: 1 },
                    480: { slidesPerView: 1 },
                    300: { slidesPerView: 1 },
                }}
                loop={true}
            >
                {
                products.map((item) => (
                    <SwiperSlide key={item.id}>
                        <div className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center">
                            <img src={item.image} alt={item.name} className="w-full h-48 object-cover rounded-md" />
                            <h3 className="mt-3 text-lg font-semibold">{item.name}</h3>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default ProductSwiper;
