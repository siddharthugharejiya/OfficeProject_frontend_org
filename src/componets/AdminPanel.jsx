import React, { useEffect, useLayoutEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaGlobe } from "react-icons/fa";
import { FiHome, FiBox, FiPlusCircle, FiShoppingBag, FiUsers, FiDollarSign, FiEdit, FiTrash2, FiMenu, FiX, FiSearch } from 'react-icons/fi';
import { Line, Pie } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
    PointElement,
    LineElement
} from 'chart.js';
import { Product_del, Product_edite_get, Product_Get } from '../Redux/action';
import Product_add from './Product_add';
import { getImageUrl } from '../utils/imageUtils';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
    PointElement,
    LineElement
);

const AdminPanel = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const [activeSection, setActiveSection] = useState("dashboard");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const products = useSelector(state => state.Product.Product || []);
    const nav = useNavigate();

    const handleSectionChange = (section) => {
        setActiveSection(section);
        setIsMobileMenuOpen(false);
    };

    const handleDelete = (id) => {
        dispatch(Product_del(id));
    };

    const handleEdit = (id) => {
        dispatch(Product_edite_get(id)).then(() => {
            dispatch(Product_Get());
            setActiveSection("add");
        });
    };

    useLayoutEffect(() => {
        dispatch(Product_Get());
    }, [dispatch]);

    useEffect(() => {
        if (location.state?.reload) {
            dispatch(Product_Get());
        }
    }, [location.state, dispatch]);

    // Simple Chart Data
    const salesData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
            {
                label: 'Sales',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: 'rgba(99, 102, 241, 0.1)',
                borderColor: 'rgba(99, 102, 241, 1)',
                borderWidth: 2,
                tension: 0.4,
            },
        ],
    };

    const revenueData = {
        labels: ['Electronics', 'Clothing', 'Home', 'Food', 'Other'],
        datasets: [
            {
                data: [12, 19, 3, 5, 2],
                backgroundColor: [
                    'rgba(99, 102, 241, 0.8)',
                    'rgba(16, 185, 129, 0.8)',
                    'rgba(245, 158, 11, 0.8)',
                    'rgba(239, 68, 68, 0.8)',
                    'rgba(139, 92, 246, 0.8)',
                ],
            },
        ],
    };

    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'bottom',
            },
        },
    };
    // Add this state near your other state declarations
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredProducts, setFilteredProducts] = useState([]);

    // Add this useEffect to initialize filteredProducts when products change
    useEffect(() => {
        setFilteredProducts(products);
    }, [products]);

    // Add this search function
    const handleSearch = () => {
        if (!searchTerm.trim()) {
            setFilteredProducts(products);
            return;
        }

        const filtered = products.filter(product =>
            product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.category.toLowerCase().includes(searchTerm.toLowerCase())
        );

        setFilteredProducts(filtered);
    };

    // Optional: Add search on Enter key
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };
    return (
        <>
            {/* Header */}
            <header className="sticky top-0 z-[9999] bg-white shadow-sm">
                <div className="max-w-7xl mx-auto py-4 px-4 flex justify-between items-center">
                    <h1 className="text-xl font-bold">Admin Panel</h1>
                </div>
            </header>

            <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">


                <header className="bg-white shadow-sm border-b border-dashed border-gray-300 sticky top-0 z-[9999]">

                    <div className="max-w-7xl mx-auto px-2 xs:px-3 sm:px-4 md:px-6 py-2 xs:py-3 sm:py-4">
                        <div className="flex justify-between items-center">
                            {/* Left Section - Logo and Title */}
                            <div className="flex items-center space-x-1 xs:space-x-2 sm:space-x-3 md:space-x-4">
                                {/* Mobile Menu Button - Hidden on desktop */}
                                <button
                                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                    className="lg:hidden p-1 xs:p-2 rounded-lg border border-dashed border-gray-300 hover:bg-gray-50 transition-all duration-200"
                                    aria-label="Toggle menu"
                                >
                                    {isMobileMenuOpen ? (
                                        <FiX className="h-4 w-4 xs:h-5 xs:w-5 text-gray-600" />
                                    ) : (
                                        <FiMenu className="h-4 w-4 xs:h-5 xs:w-5 text-gray-600" />
                                    )}
                                </button>

                                {/* Logo - Responsive sizing */}
                                <div className="flex items-center space-x-1 xs:space-x-2 sm:space-x-3">
                                    <img
                                        src="/image/Logo CLR.png"
                                        alt="Company Logo"
                                        className='h-5 xs:h-6 sm:h-[25px] md:h-7 lg:h-8 transition-all duration-200'
                                    />

                                    {/* Title - Responsive text and visibility */}
                                    <h1 className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 whitespace-nowrap">
                                        <span className="hidden xs:inline">Admin</span>
                                    </h1>
                                </div>
                            </div>

                            {/* Right Section - Action Button */}
                            <button
                                onClick={() => nav("/")}
                                className="flex items-center px-2 xs:px-3 sm:px-4 md:px-5 py-1 xs:py-2 border border-dashed border-gray-400 rounded-lg text-gray-700 hover:bg-gray-50 active:bg-gray-100 transition-all duration-300 shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-opacity-50"
                            >
                                {/* Icon - Responsive sizing and spacing */}
                                <FaGlobe className="h-3 w-3 xs:h-4 xs:w-4 sm:h-5 sm:w-5 flex-shrink-0 mr-1 xs:mr-2" />

                                {/* Text - Responsive content */}
                                <span className="text-xs xs:text-sm sm:text-base font-medium whitespace-nowrap">
                                    <span className="hidden xxs:inline xs:hidden">Site</span>
                                    <span className="hidden xs:inline sm:hidden">Website</span>
                                    <span className="hidden sm:inline">View Website</span>
                                </span>
                            </button>
                        </div>
                    </div>
                </header>

                <div className="max-w-7xl mx-auto px-3 sm:px-4 py-4 sm:py-8">
                    {/* Mobile Menu Overlay */}
                    {isMobileMenuOpen && (
                        <div
                            className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
                            onClick={() => setIsMobileMenuOpen(false)}
                        />
                    )}

                    <div className="flex flex-col  lg:flex-row gap-4 sm:gap-8">
                        {/* Sidebar - Now properly separated */}
                        <aside className={`w-full lg:w-64 flex-shrink-0 ${isMobileMenuOpen
                            ? 'fixed left-0 top-0 h-screen z-40 bg-white p-4 shadow-xl lg:static lg:h-auto lg:shadow-none lg:p-0'
                            : 'hidden lg:block'
                            }`}>
                            <div className="bg-white rounded-xl shadow-sm border border-dashed border-gray-300 p-4 sm:p-6 transition-all duration-300 hover:shadow-md h-full lg:h-auto sticky top-24">
                                {isMobileMenuOpen && (
                                    <div className="flex justify-between items-center mb-4 lg:hidden">
                                        <h2 className="text-lg font-semibold text-gray-800">Menu</h2>
                                        <button
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            className="p-2 rounded-lg border border-dashed border-gray-300"
                                        >
                                            <FiX className="h-5 w-5" />
                                        </button>
                                    </div>
                                )}
                                <nav className="space-y-2">
                                    <button
                                        onClick={() => handleSectionChange("dashboard")}
                                        className={`flex items-center w-full px-3 py-3 sm:px-4 sm:py-3 text-left rounded-lg border transition-all duration-300 ${activeSection === "dashboard"
                                            ? 'bg-indigo-50 text-indigo-700 border-indigo-200 shadow-sm'
                                            : 'text-gray-600 border-dashed border-gray-300 hover:bg-gray-50 hover:shadow-sm'
                                            }`}
                                    >
                                        <FiHome className="mr-2 sm:mr-3" />
                                        Dashboard
                                    </button>
                                    <button
                                        onClick={() => handleSectionChange("products")}
                                        className={`flex items-center w-full px-3 py-3 sm:px-4 sm:py-3 text-left rounded-lg border transition-all duration-300 ${activeSection === "products"
                                            ? 'bg-indigo-50 text-indigo-700 border-indigo-200 shadow-sm'
                                            : 'text-gray-600 border-dashed border-gray-300 hover:bg-gray-50 hover:shadow-sm'
                                            }`}
                                    >
                                        <FiBox className="mr-2 sm:mr-3" />
                                        Products
                                    </button>
                                    <button
                                        onClick={() => handleSectionChange("add")}
                                        className={`flex items-center w-full px-3 py-3 sm:px-4 sm:py-3 text-left rounded-lg border transition-all duration-300 ${activeSection === "add"
                                            ? 'bg-indigo-50 text-indigo-700 border-indigo-200 shadow-sm'
                                            : 'text-gray-600 border-dashed border-gray-300 hover:bg-gray-50 hover:shadow-sm'
                                            }`}
                                    >
                                        <FiPlusCircle className="mr-2 sm:mr-3" />
                                        Add Product
                                    </button>
                                </nav>
                            </div>
                        </aside>

                        {/* Main Content - Now completely separate */}
                        <main className="flex-1 min-w-0">
                            {/* Dashboard Section */}
                            {activeSection === "dashboard" && (
                                <div className="space-y-6 sm:space-y-8">
                                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">Dashboard Overview</h2>

                                    {/* Stats Cards */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
                                        <div className="bg-white p-4 rounded-xl shadow-sm border border-dashed border-gray-300 transition-all duration-300 hover:shadow-md">
                                            <div className="flex items-center justify-between">
                                                <div>
                                                    <p className="text-xs sm:text-sm text-gray-600">Total Products</p>
                                                    <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 mt-1 sm:mt-2">{products.length}</p>
                                                </div>
                                                <div className="p-2 sm:p-3 bg-blue-100 rounded-lg shadow-sm">
                                                    <FiBox className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-blue-600" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="bg-white p-4 rounded-xl shadow-sm border border-dashed border-gray-300 transition-all duration-300 hover:shadow-md">
                                            <div className="flex items-center justify-between">
                                                <div>
                                                    <p className="text-xs sm:text-sm text-gray-600">Monthly Sales</p>
                                                    <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 mt-1 sm:mt-2">$12,345</p>
                                                </div>
                                                <div className="p-2 sm:p-3 bg-green-100 rounded-lg shadow-sm">
                                                    <FiDollarSign className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-green-600" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="bg-white p-4 rounded-xl shadow-sm border border-dashed border-gray-300 transition-all duration-300 hover:shadow-md">
                                            <div className="flex items-center justify-between">
                                                <div>
                                                    <p className="text-xs sm:text-sm text-gray-600">Customers</p>
                                                    <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 mt-1 sm:mt-2">124</p>
                                                </div>
                                                <div className="p-2 sm:p-3 bg-purple-100 rounded-lg shadow-sm">
                                                    <FiUsers className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-purple-600" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Charts */}
                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                                        <div className="bg-white p-4 sm:p-6 rounded-xl shadow-sm border border-dashed border-gray-300 transition-all duration-300 hover:shadow-md">
                                            <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-3 sm:mb-4">Sales Overview</h3>
                                            <div className="h-48 sm:h-64 lg:h-80">
                                                <Line data={salesData} options={chartOptions} />
                                            </div>
                                        </div>

                                        <div className="bg-white p-4 sm:p-6 rounded-xl shadow-sm border border-dashed border-gray-300 transition-all duration-300 hover:shadow-md">
                                            <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-3 sm:mb-4">Revenue Distribution</h3>
                                            <div className="h-48 sm:h-64 lg:h-80">
                                                <Pie data={revenueData} options={chartOptions} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Products Section */}
                            {activeSection === "products" && (
                                <div>
                                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 sm:mb-6 lg:mb-8 gap-3">
                                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">Product Management</h2>
                                        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                                            {/* Search Bar */}
                                            <div className="relative w-full sm:w-64">
                                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                    <FiSearch className="h-4 w-4 text-gray-400" />
                                                </div>
                                                <input
                                                    type="text"
                                                    placeholder="Search products..."
                                                    value={searchTerm}
                                                    onChange={(e) => setSearchTerm(e.target.value)}
                                                    className="pl-10 pr-4 py-2 w-full border border-dashed border-gray-400 rounded-lg text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-sm"
                                                />
                                            </div>

                                            {/* Submit Search Button */}
                                            <button
                                                onClick={handleSearch}
                                                className="flex items-center justify-center px-4 py-2 bg-blue-600 border border-blue-700 rounded-lg text-white shadow-sm hover:bg-blue-700 hover:shadow-md transition-all duration-300 w-full sm:w-auto text-sm font-medium"
                                            >
                                                <FiSearch className="mr-2" />
                                                Search
                                            </button>
                                        </div>
                                    </div>

                                    <div className="bg-white rounded-xl shadow-sm border border-dashed border-gray-300 overflow-hidden transition-all duration-300 hover:shadow-md">
                                        {filteredProducts.length === 0 ? (
                                            <div className="text-center py-8 sm:py-12 lg:py-16">
                                                <FiBox className="mx-auto h-10 w-10 sm:h-12 sm:w-12 lg:h-16 lg:w-16 text-gray-400 mb-3 sm:mb-4" />
                                                <h3 className="text-base sm:text-lg font-medium text-gray-900 mb-2">
                                                    {searchTerm ? 'No products found' : 'No products found'}
                                                </h3>
                                                <p className="text-gray-500 mb-4 text-sm sm:text-base">
                                                    {searchTerm ? 'Try different search terms' : 'Start by adding your first product'}
                                                </p>
                                                {!searchTerm && (
                                                    <button
                                                        onClick={() => handleSectionChange("add")}
                                                        className="px-4 py-2 sm:px-6 sm:py-2 border border-dashed border-gray-400 rounded-lg text-gray-700 hover:bg-gray-50 transition-all duration-300 text-sm sm:text-base"
                                                    >
                                                        Add Product
                                                    </button>
                                                )}
                                            </div>
                                        ) : (
                                            <div className="overflow-x-auto">
                                                <table className="w-full min-w-max">
                                                    <thead className="bg-gray-50 border-b border-dashed border-gray-300">
                                                        <tr>
                                                            <th className="px-2 py-2 xs:px-3 sm:px-4 md:px-6 text-left text-xs font-medium text-gray-700 whitespace-nowrap">
                                                                Product
                                                            </th>
                                                            <th className="px-2 py-2 xs:px-3 sm:px-4 md:px-6 text-left text-xs font-medium text-gray-700 whitespace-nowrap hidden xs:table-cell">
                                                                Category
                                                            </th>
                                                            <th className="px-2 py-2 xs:px-3 sm:px-4 md:px-6 text-left text-xs font-medium text-gray-700 whitespace-nowrap hidden sm:table-cell">
                                                                Dimensions
                                                            </th>
                                                            <th className="px-2 py-2 xs:px-3 sm:px-4 md:px-6 text-left text-xs font-medium text-gray-700 whitespace-nowrap">
                                                                Actions
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody className="divide-y divide-dashed divide-gray-300">
                                                        {filteredProducts
                                                            .sort((a, b) => {
                                                                const numA = Number(a.name.match(/\d+/)?.[0]) || 0;
                                                                const numB = Number(b.name.match(/\d+/)?.[0]) || 0;
                                                                return numA - numB;
                                                            })
                                                            .map((product) => (
                                                                <tr key={product._id} className="hover:bg-gray-50 transition-all duration-300">
                                                                    {/* Product Column - Always visible */}
                                                                    <td className="px-2 py-2 xs:px-3 sm:px-4 md:px-6">
                                                                        <div className="flex items-center space-x-2 sm:space-x-3">
                                                                            <div className="flex-shrink-0 h-8 w-8 xs:h-9 xs:w-9 sm:h-10 sm:w-10 md:h-12 md:w-12 border border-dashed border-gray-300 rounded-lg overflow-hidden shadow-sm">
                                                                                <img
                                                                                    className="h-8 w-8 xs:h-9 xs:w-9 sm:h-10 sm:w-10 md:h-12 md:w-12 object-cover"
                                                                                    src={getImageUrl(product.Image?.[0])}
                                                                                    alt={product.name}
                                                                                />
                                                                            </div>
                                                                            <div className="min-w-0 flex-1">
                                                                                <div className="text-xs xs:text-sm font-medium text-gray-900 truncate max-w-[120px] xs:max-w-[150px] sm:max-w-[200px]">
                                                                                    {product.name}
                                                                                </div>
                                                                                <div className="text-xs text-gray-500 truncate max-w-[120px] xs:max-w-[150px] sm:max-w-[200px] hidden xs:block">
                                                                                    {product.des}
                                                                                </div>
                                                                                {/* Mobile-only category badge */}
                                                                                <div className="xs:hidden mt-1">
                                                                                    <span className="inline-flex items-center px-1.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 border border-dashed border-blue-300">
                                                                                        {product.category}
                                                                                    </span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </td>

                                                                    {/* Category Column - Hidden on mobile */}
                                                                    <td className="px-2 py-2 xs:px-3 sm:px-4 md:px-6 whitespace-nowrap hidden xs:table-cell">
                                                                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 border border-dashed border-blue-300">
                                                                            {product.category}
                                                                        </span>
                                                                    </td>

                                                                    {/* Dimensions Column - Hidden on small screens */}
                                                                    <td className="px-2 py-2 xs:px-3 sm:px-4 md:px-6 text-xs text-gray-600 whitespace-nowrap hidden sm:table-cell">
                                                                        {product.h || 'N/A'} × {product.w || 'N/A'} × {product.l || 'N/A'}
                                                                    </td>

                                                                    {/* Actions Column - Always visible with responsive layout */}
                                                                    <td className="px-2 py-2 xs:px-3 sm:px-4 md:px-6">
                                                                        <div className="flex flex-col xs:flex-row gap-1 xs:gap-2">
                                                                            <button
                                                                                onClick={() => handleEdit(product._id)}
                                                                                className="flex items-center justify-center px-2 py-1 xs:px-3 xs:py-1 sm:py-2 border border-dashed border-gray-400 rounded-lg text-gray-700 hover:bg-gray-50 transition-all duration-300 shadow-sm text-xs w-full xs:w-auto"
                                                                            >
                                                                                <FiEdit className="mr-1 flex-shrink-0" />
                                                                                <span className="truncate">Edit</span>
                                                                            </button>
                                                                            <button
                                                                                onClick={() => handleDelete(product._id)}
                                                                                className="flex items-center justify-center px-2 py-1 xs:px-3 xs:py-1 sm:py-2 border border-dashed border-red-300 rounded-lg text-red-700 hover:bg-red-50 transition-all duration-300 shadow-sm text-xs w-full xs:w-auto"
                                                                            >
                                                                                <FiTrash2 className="mr-1 flex-shrink-0" />
                                                                                <span className="truncate">Delete</span>
                                                                            </button>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                            ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}

                            {/* Add Product Section */}
                            {activeSection === "add" && (
                                <Product_add />
                            )}
                        </main>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AdminPanel;