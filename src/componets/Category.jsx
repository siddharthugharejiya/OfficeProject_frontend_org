import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Product_category } from '../Redux/action';
import Navbar_1 from './Navbar_1';
import Footer1 from './Footer1';
import "../App.css";
import { getImageUrl } from '../utils/imageUtils';
import Footer from './Footer';
import { Navi } from './Navi';

function Category() {
    const { category } = useParams();
    const dispatch = useDispatch();
    const nav = useNavigate();

    const products = useSelector(state => state.category.category || []);
    console.log(products);

    useEffect(() => {
        if (category) {
            dispatch(Product_category(category));
        }
    }, [category, dispatch]);

    const handleSinglePageClick = (productId) => {
        nav(`/SinglePage/${productId}`);
    };

    return (
        <>
            <Navi textColor="black" />
            <div className=' text-center py-10 text-[#514633] font-semibold text-md cursor-pointer'>
                <Link to="/"> Home </Link> / Category  / {category}
            </div >

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {products.length === 0 ? (
                    <p className="text-center text-lg text-gray-600">No products found.</p>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 cursor-pointer">
                        {products.map((item) => (
                            <div className="flex justify-center items-stretch h-full">
                                <div
                                    className="card w-full bg-white max-w-[18rem] sm:max-w-[20rem] md:max-w-[22rem] lg:max-w-[18rem] xl:max-w-[17rem] flex flex-col items-center hover:shadow-sm transition-transform duration-300 cursor-pointer overflow-auto m-1 z-0"
                                    onClick={() => handleSinglePageClick(item._id)}
                                >
                                    <div className="h-[350px] relative overflow-hidden w-full group">
                                        <img
                                            src={getImageUrl(item.Image?.[0])}
                                            alt={item.name}
                                            className="h-full w-full object-cover  transition-all duration-500 ease-in-out"
                                        // onError={(e) => handleImageError(e, 'No Image')}
                                        // onLoad={() => handleImageLoad(item.Image?.[0])}
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
