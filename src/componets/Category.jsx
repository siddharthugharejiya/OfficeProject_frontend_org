import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Product_category } from '../Redux/action';
import "../App.css";
import { getImageUrl } from '../utils/imageUtils';
import { Navi } from './Navi';
import Footer from './Footer';
import { SwiperSlide } from 'swiper/react';

function Category() {
    const { category } = useParams();
    const dispatch = useDispatch();
    const nav = useNavigate();

    const products = useSelector(state => state.category.category || []);
    const [loading, setLoading] = useState(true); // 👈 Loading state

    useEffect(() => {
        if (category) {
            setLoading(true);
            dispatch(Product_category(category)).finally(() => setLoading(false)); // 👈 Skeleton stop when data load
        }
    }, [category, dispatch]);

    const handleSinglePageClick = (productId) => {
        nav(`/SinglePage/${productId}`);
    };

    // Skeleton loader design
    const skeletonSlides = Array(8)
        .fill(0)
        .map((_, index) => (
            <div key={index} className="flex justify-center items-stretch h-full">
                <div className="w-full max-w-sm flex flex-col items-center overflow-hidden m-1">
                    <div className="h-[350px] w-full bg-gray-300 animate-pulse rounded-lg"></div>
                    <div className="w-full mt-4 p-2">
                        <div className="h-4 bg-gray-300 animate-pulse rounded w-3/4 mx-auto mb-2"></div>
                        <div className="h-4 bg-gray-300 animate-pulse rounded w-1/2 mx-auto"></div>
                    </div>
                </div>
            </div>
        ));

    return (
        <>
            <Navi textColor="black" />
            <div className='text-center py-10 text-[#514633] font-semibold text-md cursor-pointer'>
                <Link to="/"> Home </Link> / Category / {category}
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {loading ? (
                    // 👇 Skeleton Loader shown while loading
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {skeletonSlides}
                    </div>
                ) : products.length === 0 ? (
                    <p className="text-center text-lg text-gray-600">No products found.</p>
                ) : (
                    // 👇 Real Products
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 cursor-pointer">
                        {products.map((item) => (
                            <div key={item._id} className="flex justify-center items-stretch h-full">
                                <div
                                    className="card w-full bg-white max-w-[18rem] sm:max-w-[20rem] md:max-w-[22rem] lg:max-w-[18rem] xl:max-w-[17rem] flex flex-col items-center hover:shadow-sm transition-transform duration-300 cursor-pointer overflow-auto m-1 z-0"
                                    onClick={() => handleSinglePageClick(item._id)}
                                >
                                    <div className="h-[350px] relative overflow-hidden w-full group">
                                        <img
                                            src={getImageUrl(item.Image?.[0])}
                                            alt={item.name}
                                            className="h-full w-full object-cover transition-all duration-500 ease-in-out"
                                        />
                                    </div>
                                    <div className="card-body mt-4 p-2">
                                        <h2 className="card-title text-lg font-mono uppercase text-[14px] text-center text-gray-700">
                                            {item.name}
                                        </h2>
                                        <p className="card-title text-gray-500 text-lg font-mono uppercase text-[14px] text-center hover:text-[#393185]">
                                            {item.category}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            <div className="overflow-hidden">
                <Footer />
            </div>
        </>
    );
}

export default Category;
