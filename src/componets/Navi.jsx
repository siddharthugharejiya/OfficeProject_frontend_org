import React, { useEffect, useRef, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Product_category } from '../Redux/action';
import { useDispatch, useSelector } from 'react-redux';

export function Navi({ textColor = 'white' }) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    const [open, setOpen] = useState(false);
    const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);
    const productDropdownRef = useRef(null);

    const dispatch = useDispatch();
    const nav = useNavigate();
    const location = useLocation();

    const handleToggle = () => setIsOpen(prev => !prev);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    useEffect(() => {
        const handleMouseEnter = () => {
            if (window.innerWidth >= 1024) setIsProductDropdownOpen(true);
        };
        const handleMouseLeave = (event) => {
            if (window.innerWidth >= 1024) {
                const relatedTarget = event.relatedTarget || document.elementFromPoint(event.clientX, event.clientY);
                if (!productDropdownRef.current?.contains(relatedTarget)) {
                    setIsProductDropdownOpen(false);
                }
            }
        };
        const productDropdown = productDropdownRef.current;
        if (productDropdown) {
            productDropdown.addEventListener('mouseenter', handleMouseEnter);
            productDropdown.addEventListener('mouseleave', handleMouseLeave);
        }
        return () => {
            if (productDropdown) {
                productDropdown.removeEventListener('mouseenter', handleMouseEnter);
                productDropdown.removeEventListener('mouseleave', handleMouseLeave);
            }
        };
    }, []);

    const handleCategory = (e) => {
        dispatch(Product_category(e));
        nav(`/category/${e}`);
        setIsProductDropdownOpen(false);
        setIsOpen(false);
    };

    const handleCategoryMobile = (e) => {
        dispatch(Product_category(e));
        setIsProductDropdownOpen(false);
        setIsOpen(false);
        nav(`/category/${e}`);
    };

    const baseLinkTextClass = textColor === 'black' ? 'text-black' : 'text-white';
    const hoverLightClass = 'hover:text-gray-200';
    const hoverDarkClass = 'hover:text-gray-800';

    const pathname = location.pathname || '/';
    const isHomeActive = pathname === '/';
    const isAboutActive = pathname.startsWith('/whoWeAre');
    const isProductActive = pathname.startsWith('/category') || pathname.startsWith('/product');
    const isNewActive = pathname.startsWith('/new');
    const isVisionActive = pathname.startsWith('/v');
    const isContactActive = pathname.startsWith('/contact');

    return (
        <>
            <header className="md:py-3 md:px-30 sm:py-2 py-3 lg:px-5 sm:px-30 px-3 relative z-50">
                <div className="max-w-[1440px] mx-auto">
                    {/* MOBILE HEADER */}
                    <div className="block lg:hidden">
                        <div className="w-full flex justify-between items-center mb-3">
                            <img src="../image/Logo CLR.png" alt="Logo" className="sm:h-8 h-5" />
                            <button onClick={handleToggle} className="sm:text-xl text-md">
                                <FaBars />
                            </button>
                        </div>
                    </div>

                    {/* DESKTOP HEADER */}
                    <div className="hidden lg:flex items-center justify-between pt-5 lg:px-30 flex-wrap">
                        <div className='2xl:w-[20%] xl:w-[20%] lg:w-[20%] w-full flex justify-center items-center'>
                            <img src="../image/Logo CLR.png" alt="Logo" className="h-8" />
                        </div>

                        <nav className="hidden md:flex space-x-8 items-center relative z-50 text-2xl">
                            {/* HOME */}
                            <div className="relative group flex">
                                <Link
                                    to="/"
                                    onClick={() => setActiveIndex(0)}
                                    className={`text-[17px] font-medium ${baseLinkTextClass} ${textColor === 'black' ? hoverDarkClass : hoverLightClass} focus:outline-none relative`}
                                >
                                    Home
                                    <span className={`absolute left-1/2 -bottom-1 h-[2px] bg-[#393185] transition-all duration-300 ${isHomeActive ? 'w-full translate-x-[-50%]' : 'w-0 group-hover:w-full group-hover:translate-x-[-50%]'} `}></span>
                                </Link>
                            </div>

                            {/* WHO WE ARE */}
                            <div className="relative group flex">
                                <Link
                                    to="/about"
                                    onClick={() => setActiveIndex(1)}
                                    className={`text-[17px] font-medium ${baseLinkTextClass} ${textColor === 'black' ? hoverDarkClass : hoverLightClass} focus:outline-none relative`}

                                >
                                    About Us
                                    <span className={`absolute left-1/2 -bottom-1 h-[2px] bg-[#393185] transition-all duration-300 ${isAboutActive ? 'w-full translate-x-[-50%]' : 'w-0 group-hover:w-full group-hover:translate-x-[-50%]'} `}></span>
                                </Link>
                            </div>

                            {/* PRODUCT DROPDOWN */}
                            <div className="relative group text-[17px]" ref={productDropdownRef}>
                                <Link
                                    onClick={() => {
                                        if (window.innerWidth < 768) {
                                            setIsProductDropdownOpen(!isProductDropdownOpen);
                                        }
                                        setActiveIndex(2);
                                    }}
                                    className={`text-[17px] font-medium ${baseLinkTextClass} ${textColor === 'black' ? hoverDarkClass : 'hover:text-white'} focus:outline-none relative transition`}
                                >
                                    Product
                                    <span className={`absolute left-1/2 -bottom-1 h-[2px] bg-[#393185] transition-all duration-300 ${isProductActive ? 'w-full translate-x-[-50%]' : 'w-0 group-hover:w-full group-hover:translate-x-[-50%]'} `}></span>
                                </Link>
                                {/* Centered Dropdown */}
                                <div className={`absolute left-1/2 transform -translate-x-1/2 top-[60%] mt-2 z-50 w-[90vw] max-w-[300px] sm:w-[80vw] sm:max-w-[380px] md:w-[60vw] md:max-w-[420px] lg:w-[36rem] lg:max-w-[550px] bg-white shadow-lg rounded-md max-h-[60vh] lg:max-h-[50vh] overflow-y-auto ${isProductDropdownOpen ? 'block' : 'hidden'}`}>
                                    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 p-3">
                                        {[
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
                                            "Coming Soon"
                                        ].map(category => (
                                            <li key={category}>
                                                <button
                                                    onClick={() => handleCategory(category)}
                                                    className="w-full text-left px-3 py-2 text-sm text-gray-700 rounded hover:bg-gray-100 hover:text-[#393185] transition"
                                                >
                                                    {category}
                                                </button>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* NEW ARRIVALS */}
                            <div className="relative group flex">
                                <Link
                                    to="/new"
                                    onClick={() => setActiveIndex(4)}
                                    className={`text-[17px] font-medium ${baseLinkTextClass} ${textColor === 'black' ? hoverDarkClass : 'hover:text-white'} focus:outline-none relative`}
                                >
                                    New Arrivals
                                    <span className={`absolute left-1/2 -bottom-1 h-[2px] bg-[#393185] transition-all duration-300 ${isNewActive ? 'w-full translate-x-[-50%]' : 'w-0 group-hover:w-full group-hover:translate-x-[-50%]'} `}></span>
                                </Link>
                            </div>

                            {/* <div className="relative group flex">
                                <Link
                                    to="/v"
                                    onClick={() => setActiveIndex(4)}
                                    className={`text-[17px] font-medium ${baseLinkTextClass} ${textColor === 'black' ? hoverDarkClass : 'hover:text-white'} focus:outline-none relative`}
                                >
                                    Vision & Mission
                                    <span className={`absolute left-1/2 -bottom-1 h-[2px] bg-[#393185] transition-all duration-300 ${isVisionActive ? 'w-full translate-x-[-50%]' : 'w-0 group-hover:w-full group-hover:translate-x-[-50%]'} `}></span>
                                </Link>
                            </div> */}

                            {/* CONTACT */}
                            <div className="relative group flex">
                                <Link
                                    to="/contact"
                                    onClick={() => setActiveIndex(5)}
                                    className={`text-[17px] font-medium ${baseLinkTextClass} ${textColor === 'black' ? hoverDarkClass : 'hover:text-white'} focus:outline-none relative`}
                                >
                                    Contact
                                    <span className={`absolute left-1/2 -bottom-1 h-[2px] bg-[#393185] transition-all duration-300 ${isContactActive ? 'w-full translate-x-[-50%]' : 'w-0 group-hover:w-full group-hover:translate-x-[-50%]'} `}></span>
                                </Link>
                            </div>
                        </nav>
                    </div>
                </div>
            </header>

            {/* MOBILE DRAWER */}
            <div className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 overflow-auto ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className="flex justify-between items-center px-4 py-4 border-b">
                    <h2 className="text-lg font-semibold text-black">Menu</h2> {/* Text black */}
                    <button onClick={handleToggle} className="text-xl text-black"><FaTimes /></button> {/* Icon black */}
                </div>
                <nav className="flex flex-col p-4 space-y-3">
                    <Link
                        to="/"
                        onClick={() => { setActiveIndex(0); setIsOpen(false); }}
                        className="text-left text-black hover:text-gray-700" // Text black
                    >
                        Home
                    </Link>
                    <Link
                        to="/about"
                        onClick={() => { setActiveIndex(1); setIsOpen(false); }}
                        className="text-left text-black hover:text-gray-700" // Text black
                    >
                        About Us
                    </Link>
                    <div>
                        <button
                            onClick={() => { setActiveIndex(2); setIsProductDropdownOpen(!isProductDropdownOpen); }}
                            className="text-left text-black hover:text-gray-700 w-full" // Text black
                        >
                            Product
                        </button>
                        {isProductDropdownOpen && (
                            <ul className="mt-2 pl-4 space-y-2">
                                {[
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
                                    "Coming Soon"
                                ].map(category => (
                                    <li key={category}>
                                        <button
                                            onClick={() => handleCategoryMobile(category)}
                                            className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:text-gray-900" // Text gray-700
                                        >
                                            {category}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                    <Link
                        to="/new"
                        onClick={() => { setActiveIndex(4); setIsOpen(false); }}
                        className="text-left text-black hover:text-gray-700" // Text black
                    >
                        New Arrivals
                    </Link>
                    <Link
                        to="/contact"
                        onClick={() => { setActiveIndex(5); setIsOpen(false); }}
                        className="text-left text-black hover:text-gray-700" // Text black
                    >
                        Contact
                    </Link>
                </nav>
            </div>
            {/* MOBILE BACKDROP */}
            {isOpen && <div onClick={handleToggle} className="fixed top-0 left-0 w-full h-full bg-black opacity-30 z-40 sm:hidden"></div>}
        </>
    );
}
