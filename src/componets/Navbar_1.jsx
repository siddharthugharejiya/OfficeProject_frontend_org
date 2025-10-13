import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import Product_category from "../Redux/action";
import { useDispatch, useSelector } from 'react-redux';
import { FaTimes } from 'react-icons/fa';
import { Product_category } from "../Redux/action";

function Navbar_1() {
    // removed unused openDropdown state from original Nav copy
    const [openMenu, setOpenMenu] = useState(false);
    const [animateMenu, setAnimateMenu] = useState(false);
    // const [open, setOpen] = useState(false);
    const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false); // New state for Product dropdown
    const dropdownRef = useRef(null);
    const productDropdownRef = useRef(null); // Ref for Product dropdown

    // New mobile offcanvas state & toggle (for the provided design)
    const [isOpen, setIsOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState(null);
    const handleToggle = () => setIsOpen(prev => !prev);



    const navi = useNavigate();
    const dispatch = useDispatch();

    // Click outside to close user dropdown and product dropdown
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                // close the user menu
                setOpen(false);
            }
            if (productDropdownRef.current && !productDropdownRef.current.contains(event.target)) {
                setIsProductDropdownOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // category list from redux (kept for parity with Nav.jsx even if unused)
    const categories = useSelector(state => state.category?.category);

    // Handle Product dropdown hover on desktop
    useEffect(() => {
        const handleMouseEnter = () => {
            if (window.innerWidth >= 768) { // md breakpoint
                setIsProductDropdownOpen(true);
            }
        };
        const handleMouseLeave = (event) => {
            if (window.innerWidth >= 768) {
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

    const handleOpenMenu = () => {
        setOpenMenu(true);
        setTimeout(() => setAnimateMenu(true), 10);
    };

    const handleCloseMenu = () => {
        setAnimateMenu(false);
        setIsProductDropdownOpen(false); // Close Product dropdown when closing menu
        setTimeout(() => setOpenMenu(false), 300);
    };
    const handleCategoryMobile = (e) => {
        console.log(e);

        try {
            dispatch(Product_category(e));
        } catch (err) {
            console.debug('dispatch error in handleCategoryMobile:', err);
        }

        setIsProductDropdownOpen(false);
        setIsOpen(false);
        navi(`/category/${e}`);
    };







    return (
        <div className="bg-white text-black w-full relative z-50 py-1">
            {/* 🔹 Top Bar */}
            <div className="flex justify-between items-center px-4 sm:px-6 py-4 lg:px-30">
                {/* Mobile Menu Icon */}
                <div className="md:hidden">
                    <button onClick={() => { handleOpenMenu(); setIsOpen(true); }}>
                        <i className="fa fa-bars text-2xl text-[#333]"></i>
                    </button>
                </div>

                {/* Left: Phone (desktop only) */}
                <a href="tel:9879800170" className="font-medium text-xl hidden md:block text-black hover:underline">
                    9879800170
                </a>


                {/* Center: Logo */}
                <div className="flex justify-center">
                    <img
                        src="../image/Logo CLR.png"
                        alt="logo"
                        className="w-[120px]"
                    />
                </div>

                {/* Right: Icons (desktop only) */}
                {/* <div className="hidden sm:flex items-center space-x-6 text-[18px] text-[#333] font-normal">
                    <img src="../image/search.png" className='h-[20px]' alt="" />
                    <img src="../image/heart.png" className='h-[20px]' alt="" />
                    <div className="relative" ref={dropdownRef}>
                        <img src="../image/user.png" className='h-[20px]' alt="" onClick={() => setOpen(!open)} />
                        {open && (
                            <div className="absolute right-0 mt-2 w-40 bg-white border rounded-lg shadow-lg z-10">
                                <ul className="flex flex-col">
                                    <li>
                                        <Link
                                            to="/admin"
                                            className="block px-4 py-2 hover:bg-gray-100 hover:rounded-lg cursor-pointer"
                                        >
                                            Admin Panel
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>
                    <div className="relative cursor-pointer hover:scale-110 transition">
                        <img src="../image/shopping-cart.png" className='h-[20px]' alt="" />
                    </div>
                </div> */}
            </div>

            {/* 🔹 Feature Divider */}
            <div className="flex items-center justify-center space-x-4 py-3">
                <div className="border-t border-gray-400 flex-grow"></div>
                <span className="px-3 font-medium bg-[#b86c59] text-white rounded-2xl text-sm">
                    Featured
                </span>
                <div className="border-t border-gray-400 flex-grow"></div>
            </div>

            {/* 🔹 Navigation Menu - Desktop */}
            <nav className="hidden md:flex space-x-8 overflow-visible justify-center items-center text-[17px] font-medium py-2">
                <Link to="/" className="hover:text-[#b86c59] transition">Home</Link>
                <Link to="/whoWeAre" className="hover:text-[#b86c59] transition">Who We Are</Link>
                <div
                    className="relative"
                    ref={productDropdownRef}
                    onMouseEnter={() => {
                        if (window.innerWidth >= 768) setIsProductDropdownOpen(true);
                    }}
                    onMouseLeave={() => {
                        if (window.innerWidth >= 768) setIsProductDropdownOpen(false);
                    }}
                >
                    <Link
                        onClick={() => {
                            if (window.innerWidth < 768) {
                                setIsProductDropdownOpen(!isProductDropdownOpen);
                            }
                        }}
                        className="hover:text-[#b86c59] transition cursor-pointer"
                    >
                        Product
                    </Link>

                    <div
                        className={`absolute left-0 top-[60%] mt-2 z-50 w-[90vw] max-w-[300px] sm:w-[80vw] sm:max-w-[380px] md:w-[60vw] md:max-w-[420px] lg:w-[36rem] lg:max-w-[650px] bg-white shadow-lg rounded-md max-h-[60vh] lg:max-h-[50vh] overflow-y-auto ${isProductDropdownOpen ? 'block' : 'hidden'
                            }`}
                    >
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
                            ].map((category) => (
                                <li key={category}>
                                    <Link
                                        to={`/category/${encodeURIComponent(category)}`}
                                        onClick={() => {
                                            try {
                                                dispatch(Product_category(category));
                                            } catch (err) {
                                                console.debug('dispatch error:', err);
                                            }
                                            setIsProductDropdownOpen(false);
                                            setAnimateMenu(false);
                                            setOpenMenu(false);
                                        }}
                                        className="w-full text-left px-3 py-2 text-sm text-gray-700 rounded hover:bg-gray-100 hover:text-[#b86c59] transition"
                                    >
                                        {category}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <Link to="/new" className="hover:text-[#b86c59] transition">New Arrivals</Link>
                <Link to="/v" className="hover:text-[#b86c59] transition">Vision & Mission</Link>
                <Link to="/contact" className="hover:text-[#b86c59] transition">Contact</Link>
            </nav>

            {/* 🔹 Offcanvas Menu - Mobile Only (replaced with provided design) */}
            <div className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 overflow-auto ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className="flex justify-between items-center px-4 py-4 border-b">
                    <h2 className="text-lg font-semibold">Menu</h2>
                    <button onClick={handleToggle} className="text-xl">
                        <FaTimes />
                    </button>
                </div>

                <nav className="flex flex-col p-4 space-y-3">
                    <Link
                        to="/"
                        onClick={() => { setActiveIndex(0); setIsOpen(false); }}
                        className="text-left hover:text-[#b86c59]"
                    >
                        Home
                    </Link>
                    <Link
                        to="/whoWeAre"
                        onClick={() => { setActiveIndex(1); setIsOpen(false); }}
                        className="text-left hover:text-[#b86c59]"
                    >
                        Who We Are
                    </Link>

                    <div className="relative" ref={productDropdownRef}>
                        <button
                            onClick={() => {
                                setActiveIndex(2);
                                setIsProductDropdownOpen(!isProductDropdownOpen);
                            }}
                            className="text-left hover:text-[#b86c59] w-full"
                        >
                            Product
                        </button>
                        {isProductDropdownOpen && (
                            <ul className="mt-2 pl-4 space-y-2">
                                {[
                                    "One Piece Closet", "Wall Hung Closet", "Water Closet", "Table Top Basin", "One Piece Basin",
                                    "Counter Basin", "Basin With Pedestal", "Basin With Half Pedestal", "Wall Hung Basin",
                                    "Urinal", "Pan", "Pastel Series"
                                ].map((category) => (
                                    <li key={category}>
                                        <Link
                                            to={`/category/${encodeURIComponent(category)}`}
                                            onClick={() => {
                                                dispatch(Product_category(category));
                                                setIsProductDropdownOpen(false);
                                                setIsOpen(false);
                                            }}
                                            className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:text-[#b86c59] cursor-pointer"
                                        >
                                            {category}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>

                    <Link
                        to="/new"
                        onClick={() => { setActiveIndex(4); setIsOpen(false); }}
                        className="text-left hover:text-[#b86c59]"
                    >
                        New Arrivals
                    </Link>
                    <Link
                        to="/contact"
                        onClick={() => { setActiveIndex(5); setIsOpen(false); }}
                        className="text-left hover:text-[#b86c59]"
                    >
                        Contact
                    </Link>
                </nav>
            </div>

            {isOpen && (
                <div onClick={handleToggle} className="fixed top-0 left-0 w-full h-full bg-black opacity-30 z-40 sm:hidden"></div>
            )}
        </div>
    )
}

export default Navbar_1;