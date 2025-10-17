import React, { useEffect, useState, useLayoutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import Nav from './Nav';
import Footer1 from './Footer1';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Product_Action, SingleProduct_Action } from '../Redux/action';
import Navbar_1 from './Navbar_1';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { getImageUrl } from '../utils/imageUtils';
import { Navi } from './Navi';
import Footer from './Footer';

function SinglePage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const products = useSelector(state => state.SinglePageProduct?.Product);
  const product = products?.data || null;
  console.log(product);

  const [selectedImage, setSelectedImage] = useState(null);

  const nav = useNavigate()
  useEffect(() => {
    if (id) {
      dispatch(Product_Action(id));
    }
  }, [id, dispatch]);

  const releted = useSelector(state => state.Product_getting?.Product?.data) || [];


  useEffect(() => {
    if (id) {
      dispatch(SingleProduct_Action(id));
    }
  }, [id, dispatch]);
  const handleSinglePageClick = (productId) => {
    nav(`/SinglePage/${productId}`);
  }

  useEffect(() => {
    if (product?.Image?.[0]) {
      setSelectedImage(product.Image[0]);
    }
  }, [product]);

  useLayoutEffect(() => {
    const container = document.querySelector(".image-container");
    const img = container?.querySelector("img");

    if (img && container) {
      const handleMouseMove = (e) => {
        const { left, top, width, height } = container.getBoundingClientRect();
        const x = ((e.clientX - left) / width) * 100;
        const y = ((e.clientY - top) / height) * 100;

        img.style.transformOrigin = `${x}% ${y}%`;
        img.style.transform = "scale(2.5)";
      };

      const handleMouseLeave = () => {
        img.style.transform = "scale(1)";
        img.style.transformOrigin = "center center";
      };

      container.addEventListener("mousemove", handleMouseMove);
      container.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        container.removeEventListener("mousemove", handleMouseMove);
        container.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, [product, id, selectedImage]);

  if (!product) return <div className="text-center p-10 text-xl font-medium">Loading...</div>;

  return (
    <div >
      <Navi textColor='black' />
      <div className='bg-[#F6F4F2] text-center py-10 text-[#514633] font-semibold text-md'><Link to="/"> Home </Link> / Storage / {product.category}</div>


      <section className="px-4 md:px-10 lg:px-20 py-12 min-h-screen">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Image Section */}
          <div className="w-fit">
            <div className="overflow-hidden  group relative image-container border border-gray-200">
              <img
                src={getImageUrl(selectedImage)}
                alt={product.name}
                className="w-full h-[560px] object-contain transition-transform duration-300 ease-in-out"
              // onError={(e) => handleImageError(e, 'No Image')}
              // onLoad={() => handleImageLoad(selectedImage)}
              />
            </div>

            {/* Thumbnail Images */}
            <div className="mt-5 flex gap-3 flex-wrap">
              {Array.isArray(product.Image) && product.Image.length > 0 ? (
                product.Image.slice(0, 2).map((img, index) => (
                  <img
                    key={index}
                    src={getImageUrl(img)}
                    alt={`preview-${index}`}
                    onClick={() => setSelectedImage(img)}
                    className={`w-20 h-20 object-contain rounded-lg border cursor-pointer
          ${selectedImage === img
                        ? "ring-2 ring-indigo-500"
                        : "hover:ring-2 ring-offset-2 ring-indigo-300"}`}
                  />
                ))
              ) : (
                <p className="text-gray-500 text-sm">No Images Available</p>
              )}
            </div>


          </div>

          {/* Details Section */}
          <div className="p-4 sm:p-6 flex flex-col ">
            <div className="pt-5 w-fit ">
              <h1 className="text-2xl font-semibold text-gray-800 mb-2 uppercase">{product.name}</h1>
              <div className="text-gray-600 text-sm mb-4">
                L {product.l || 0} | W {product.w || 0} | H {product.h || 0} mm
              </div>

              <div className="flex items-start gap-10">
                <div>
                  <h2 className="text-gray-800 font-semibold text-md">S-Trap</h2>
                  <span className="text-gray-600 text-sm">{product.s_trap}</span>
                </div>

                {/* Vertical line between S-Trap and P-Trap */}
                <div className="h-12 border-l border-gray-300"></div>

                <div>
                  <h2 className="text-gray-800 font-semibold text-md">P-Trap</h2>
                  <span className="text-gray-600 text-sm">{product.p_trap}</span>
                </div>
              </div>

            </div>
            <div className="">
              <img
                src={product.Image[1]}
                alt=""
                className="w-full max-w-[300px] h-auto object-contain rounded-xl mt-5"
              />
            </div>

            <div className='mt-6'>
              <p className='text-gray-500'>{product.des}</p>
            </div>

          </div>
        </div>
      </section>
      <div>
        <h1 className='uppercase text-2xl text-center font-semibold text-[#514633] mb-7 pb-5 border-b-[#eaeaea] border-b-1'>
          You might also like
        </h1>

        <div className="w-full flex justify-center px-2 sm:px-4 py-6">
          <div className="w-full max-w-7xl mx-auto">
            <Swiper
              spaceBetween={20}
              slidesPerView={4}
              breakpoints={{
                1536: { slidesPerView: 4 },
                1280: { slidesPerView: 3 },
                1024: { slidesPerView: 3 },
                768: { slidesPerView: 2 },
                640: { slidesPerView: 1 },
                480: { slidesPerView: 1 },
                300: { slidesPerView: 1 },
              }}
              loop={releted.length > 4}
            >
              {releted.map((item, index) => (
                <SwiperSlide key={item.id}>
                  <div key={index} className="flex justify-center items-stretch h-full">
                    <div className="card bg-white w-full max-w-[18rem] sm:max-w-[20rem] md:max-w-[22rem] lg:max-w-[18rem] xl:max-w-[17rem] flex flex-col items-center hover:shadow-sm transition-transform duration-300 cursor-pointer overflow-auto m-1 z-0" onClick={() => handleSinglePageClick(item._id)} >
                      <div
                        className="h-[350px] relative overflow-hidden w-full group"

                      >
                        <img
                          src={getImageUrl(item.Image?.[0])}
                          alt={item.name}
                          className="h-full w-full object-cover  transition-all duration-500 ease-in-out"
                        // onError={(e) => handleImageError(e, 'No Image')}
                        // onLoad={() => handleImageLoad(item.Image?.[0])}
                        />
                      </div>
                      <div className="card-body mt-4 p-2" >
                        <h2 className="card-title text-lg font-mono uppercase text-[14px] text-center text-[#393185]">{item.name}</h2>
                        <p className="card-title text-gray-500 text-lg font-mono uppercase text-[14px] text-center hover:text-[#393185] ">{item.category}</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
      <div className="overflow-hidden">

        <Footer />
      </div>
    </div>
  );
}

export default SinglePage;
