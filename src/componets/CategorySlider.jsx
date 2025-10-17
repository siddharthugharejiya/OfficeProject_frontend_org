import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { fetchCategoryProducts } from "../Redux/action";
import { useNavigate } from "react-router-dom";
import { getImageUrl } from "../utils/imageUtils";

const categories = [
    "One Piece Closet",
    "Wall Hung Closet",
    "Water Closet",
    "Table Top Basin",
    "One Piece Basin",
    "Counter Basin",
    "Basin With Pedestal",
    "Basin With Half Pedestal",
    "Wall Hung Basin",
    "Urinal",
    "Pan",
    "Pastel Series",
];

export function CategorySlider() {
    const nav = useNavigate();
    const dispatch = useDispatch();
    const { loading, products } = useSelector((state) => state.categoryProducts);
    console.log(products);



    const handleclick = (e) => {
        nav(`/Product/${e}`);
    };

    useEffect(() => {
        dispatch(fetchCategoryProducts(categories));
    }, [dispatch]);

    // Get the product with lowest product code for each category
    const lowestCodeProductOfEachCategory = products ? categories.map(category => {
        // Get all products of this category
        const categoryProducts = products.filter(product => product.category === category);

        if (categoryProducts.length === 0) return null;

        // Sort products by product code and get the one with lowest code
        return categoryProducts.sort((a, b) => {
            // Extract product code from name (e.g., "milano - 5105" -> "5105")
            const getProductCode = (name) => {
                const match = name?.match(/(\d+)$/);
                return match ? parseInt(match[0]) : 0;
            };

            return getProductCode(a.name) - getProductCode(b.name);
        })[0]; // Get the first product after sorting (lowest code)
    }).filter(Boolean) : []; // Filter out undefined values (categories with no products)

    // Skeleton Slides
    const skeletonSlides = Array(4).fill(0).map((_, index) => (
        <SwiperSlide key={index}>
            <div className="flex justify-center items-stretch h-full">
                <div className="card w-full max-w-[18rem] sm:max-w-[20rem] md:max-w-[22rem] lg:max-w-[18rem] xl:max-w-[20rem] flex flex-col items-center cursor-pointer overflow-hidden m-1">
                    <div className="h-[350px] w-full bg-gray-300 animate-pulse rounded-md"></div>
                    <div className="card-body mt-4 p-2 w-full">
                        <div className="h-4 bg-gray-300 animate-pulse rounded w-3/4 mx-auto mb-2"></div>
                        <div className="h-4 bg-gray-300 animate-pulse rounded w-1/2 mx-auto"></div>
                    </div>
                </div>
            </div>
        </SwiperSlide>
    ));

    return (
        <div className="w-full flex justify-center px-2 sm:px-4 py-6">
            <div className="w-full max-w-7xl mx-auto my-5">
                <Swiper
                    navigation
                    spaceBetween={20}
                    slidesPerView={1}
                    breakpoints={{
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                        1280: { slidesPerView: 4 },
                    }}
                >
                    {loading
                        ? skeletonSlides
                        : lowestCodeProductOfEachCategory.map((item) => (
                            <SwiperSlide key={item.id}>
                                <div className="flex justify-center items-stretch h-full">
                                    <div
                                        className="card w-full bg-white max-w-[18rem] sm:max-w-[20rem] md:max-w-[22rem] lg:max-w-[18rem] xl:max-w-[17rem] flex flex-col items-center hover:shadow-sm transition-transform duration-300 cursor-pointer overflow-auto m-1 z-0"
                                        onClick={() => handleclick(item._id)}
                                    >
                                        <div className="h-[350px] relative overflow-hidden w-full group">
                                            <img
                                                src={getImageUrl(item.Image?.[0])}
                                                alt={item.name}
                                                className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 ease-in-out"
                                            />
                                        </div>
                                        <div className="card-body mt-4 p-2">
                                            <h2 className="card-title text-lg font-mono uppercase text-[14px] text-center  text-gray-700">
                                                {item.name}
                                            </h2>
                                            <p className="card-title text-gray-500 text-lg font-mono uppercase text-[14px] text-center hover:text-[#393185]">
                                                {item.category}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                </Swiper>
            </div>
        </div>
    );
}
