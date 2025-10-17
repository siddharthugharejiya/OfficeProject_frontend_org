import React, { useEffect } from 'react';
import { Product_Action } from '../Redux/action';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import "../App.css";
// import Navbar_1 from './Navbar_1';

import Footer1 from './Footer1';
import { getImageUrl } from '../utils/imageUtils';
import { Navi } from './Navi';
import Footer from './Footer';
// import { Nav } from 'react-bootstrap';
// import { Navi } from './Navi';

function ProductPage() {
    const { id } = useParams();
    console.log(id);
    const dispatch = useDispatch();
    const nav = useNavigate();
    const rawData = useSelector(state => state.Product_getting?.Product);
    console.log(rawData);

    useEffect(() => {
        if (id) {
            dispatch(Product_Action(id));
        }
    }, [id, dispatch]);

    // ✅ Normalize data to always be an array
    let productList = [];
    if (Array.isArray(rawData?.data)) {
        productList = rawData.data;
    } else if (rawData?.data && typeof rawData.data === 'object') {
        productList = [rawData.data];
    }

    // Sort products by product number (e.g., extract 5112 from "afro - 5112")
    productList.sort((a, b) => {
        // Extract product numbers from name (numbers after the hyphen)
        const getProductNumber = (name) => {
            if (!name) return 0;
            const parts = name.split('-');
            if (parts.length > 1) {
                const numStr = parts[1].trim();
                return parseInt(numStr, 10) || 0;
            }
            return 0;
        };

        const numA = getProductNumber(a.name);
        const numB = getProductNumber(b.name);

        return numA - numB; // Ascending order by product number
    });

    const handleSinglePageClick = (productId) => {
        console.log("Clicked Product ID:", productId);
        nav(`/SinglePage/${productId}`);
    };

    // Scroll to top on component mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Navi textColor='black' />

            <div className='bg-[#F6F4F2] text-center py-10 text-[#514633] font-semibold text-md cursor-pointer'><Link to="/"> Home </Link> / Storage </div>

            <div className="min-h-screen flex flex-col">
                {/* Main content area */}
                <div className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 cursor-pointer justify-items-center">
                        {
                            productList.length > 0 ? (
                                productList.map((item) => (
                                    <div
                                        key={item._id}
                                        className="card bg-white w-full max-w-[18rem] sm:max-w-[20rem] md:max-w-[22rem] lg:max-w-[18rem] xl:max-w-[17rem] flex flex-col items-center hover:shadow-sm transition-transform duration-300 cursor-pointer overflow-auto m-1 z-0"
                                        onClick={() => handleSinglePageClick(item._id)}
                                    >
                                        <div className="h-[350px] relative overflow-hidden w-full group">
                                            <img
                                                src={getImageUrl(item.Image?.[0])}
                                                alt={item.name}
                                                className="h-full w-full object-cover transition-all duration-500 ease-in-out"
                                            />
                                        </div>
                                        <div className="card-body mt-4 p-2 text-center">
                                            <h2 className="card-title text-lg font-mono uppercase text-[14px] text-[#393185]">
                                                {item.name}
                                            </h2>
                                            <p className="card-title text-gray-500 text-lg font-mono uppercase text-[14px] hover:text-[#393185]">
                                                {item.category}
                                            </p>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="col-span-full flex justify-center">
                                    <p className="text-gray-500 text-center">No products found.</p>
                                </div>
                            )
                        }
                    </div>
                </div>

                <div className="overflow-hidden">

                    <Footer />
                </div>
            </div>
        </>
    );
}

export default ProductPage;