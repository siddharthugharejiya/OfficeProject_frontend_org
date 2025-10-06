import React, { useEffect } from 'react';
import { Product_Action } from '../Redux/action';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import "../App.css"
import Navbar_1 from './Navbar_1';
import Footer1 from './Footer1';
function Product_Page() {
    const { id } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        if (id) {
            dispatch(Product_Action(id));
        }
    }, [id, dispatch]);

    const products = useSelector(state => state.Product_getting?.Product);
    // console.log(products);
    const nav = useNavigate()

    const productList = products?.data || [];
    const handleSinglePageClick = (productId) => {
        nav(`/SinglePage/${productId}`);

    }

    return (
        <>
            <Navbar_1 />
            <div className='bg-[#F6F4F2] text-center py-10 text-[#514633] font-semibold text-md'>Home / Storage</div>


            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">Products</h1> */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 cursor-pointer">
                    {productList.map((item) => (
                        <div
                            key={item._id}
                            className="hover:scale-105 transition-all duration-300  flex flex-col"
                            onClick={() => handleSinglePageClick(item._id)}
                        >
                            {/* Image Flip Container */}
                            <div className="relative w-[285px] h-[285px] card-flip flex justify-center items-center mx-auto">
                                <div className="card-inner">
                                    {/* Front Image */}
                                    <div className="card-front">
                                        <img
                                            src={item.Image?.[0] || '/placeholder.png'}
                                            alt={item.name}
                                            className="w-full h-full object-cover"
                                        />
                                        {item.tag && (
                                            <span className="absolute top-3 -left-3 text-xs font-semibold rounded-full z-10">
                                                <div className="bg-[#B0D3FF] text-white h-[20px] px-2 flex items-center justify-center rounded-full">
                                                    {item.tag}
                                                </div>
                                            </span>
                                        )}

                                    </div>

                                    {/* Back Image */}
                                    <div className="card-back">
                                        <img
                                            src={item.Image?.[1] || '/placeholder.png'}
                                            alt={item.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>
                            </div>



                            {/* Product Text */}
                            <div className="p-4 flex-1 flex flex-col justify-between">
                                <div className='text-center'>
                                    <h2 className="text-lg font-medium uppercase text-[#BF624C] mb-1">{item.name}</h2>
                                    <p className="text-gray-500 text-sm line-clamp-3 wrap-anywhere">{item.des}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <Footer1 />
        </>

    );
}

export default Product_Page;
