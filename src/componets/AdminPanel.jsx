import React, { useEffect, useLayoutEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaGlobe } from "react-icons/fa";
import { FiHome, FiBox, FiPlusCircle, FiShoppingBag, FiUsers, FiDollarSign, FiEdit, FiTrash2 } from 'react-icons/fi';
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
    const products = useSelector(state => state.Product.Product || []);
    const nav = useNavigate();

    const handleSectionChange = (section) => {
        setActiveSection(section);
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
        plugins: {
            legend: {
                position: 'bottom',
            },
        },
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
            {/* Simple Header */}
            <header className="bg-white shadow-sm border-b border-dashed border-gray-300">
                <div className="max-w-7xl mx-auto px-4 py-4">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-3">
                            <img src="/image/Logo CLR.png" alt="" className='h-[25px]' />
                            {/* <FiShoppingBag className="h-6 w-6 text-indigo-600" /> */}
                            {/* <div className="p-2 bg-indigo-100 rounded-lg shadow-sm">
                            </div> */}
                            <h1 className="text-2xl font-bold text-gray-800">Admin Dashboard</h1>
                        </div>
                        <button
                            onClick={() => nav("/")}
                            className="flex items-center px-4 py-2 border border-dashed border-gray-400 rounded-lg text-gray-700 hover:bg-gray-50 transition-all duration-300 shadow-sm"
                        >
                            <FaGlobe className="mr-2" />
                            View Website
                        </button>
                    </div>
                </div>
            </header>

            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Sidebar with Dotted Border */}
                    <aside className="w-full lg:w-64">
                        <div className="bg-white rounded-xl shadow-sm border border-dashed border-gray-300 p-6 transition-all duration-300 hover:shadow-md">
                            <nav className="space-y-2">
                                <button
                                    onClick={() => handleSectionChange("dashboard")}
                                    className={`flex items-center w-full px-4 py-3 text-left rounded-lg border transition-all duration-300 ${activeSection === "dashboard"
                                        ? 'bg-indigo-50 text-indigo-700 border-indigo-200 shadow-sm'
                                        : 'text-gray-600 border-dashed border-gray-300 hover:bg-gray-50 hover:shadow-sm'
                                        }`}
                                >
                                    <FiHome className="mr-3" />
                                    Dashboard
                                </button>
                                <button
                                    onClick={() => handleSectionChange("products")}
                                    className={`flex items-center w-full px-4 py-3 text-left rounded-lg border transition-all duration-300 ${activeSection === "products"
                                        ? 'bg-indigo-50 text-indigo-700 border-indigo-200 shadow-sm'
                                        : 'text-gray-600 border-dashed border-gray-300 hover:bg-gray-50 hover:shadow-sm'
                                        }`}
                                >
                                    <FiBox className="mr-3" />
                                    Products
                                </button>
                                <button
                                    onClick={() => handleSectionChange("add")}
                                    className={`flex items-center w-full px-4 py-3 text-left rounded-lg border transition-all duration-300 ${activeSection === "add"
                                        ? 'bg-indigo-50 text-indigo-700 border-indigo-200 shadow-sm'
                                        : 'text-gray-600 border-dashed border-gray-300 hover:bg-gray-50 hover:shadow-sm'
                                        }`}
                                >
                                    <FiPlusCircle className="mr-3" />
                                    Add Product
                                </button>
                            </nav>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <main className="flex-1">
                        {/* Dashboard Section */}
                        {activeSection === "dashboard" && (
                            <div className="space-y-8">
                                <h2 className="text-3xl font-bold text-gray-800">Dashboard Overview</h2>

                                {/* Stats Cards */}
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    <div className="bg-white p-6 rounded-xl shadow-sm border border-dashed border-gray-300 transition-all duration-300 hover:shadow-md">
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <p className="text-sm text-gray-600">Total Products</p>
                                                <p className="text-3xl font-bold text-gray-800 mt-2">{products.length}</p>
                                            </div>
                                            <div className="p-3 bg-blue-100 rounded-lg shadow-sm">
                                                <FiBox className="h-6 w-6 text-blue-600" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-white p-6 rounded-xl shadow-sm border border-dashed border-gray-300 transition-all duration-300 hover:shadow-md">
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <p className="text-sm text-gray-600">Monthly Sales</p>
                                                <p className="text-3xl font-bold text-gray-800 mt-2">$12,345</p>
                                            </div>
                                            <div className="p-3 bg-green-100 rounded-lg shadow-sm">
                                                <FiDollarSign className="h-6 w-6 text-green-600" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-white p-6 rounded-xl shadow-sm border border-dashed border-gray-300 transition-all duration-300 hover:shadow-md">
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <p className="text-sm text-gray-600">Customers</p>
                                                <p className="text-3xl font-bold text-gray-800 mt-2">124</p>
                                            </div>
                                            <div className="p-3 bg-purple-100 rounded-lg shadow-sm">
                                                <FiUsers className="h-6 w-6 text-purple-600" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Charts */}
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                    <div className="bg-white p-6 rounded-xl shadow-sm border border-dashed border-gray-300 transition-all duration-300 hover:shadow-md">
                                        <h3 className="text-lg font-semibold text-gray-800 mb-4">Sales Overview</h3>
                                        <Line data={salesData} options={chartOptions} />
                                    </div>

                                    <div className="bg-white p-6 rounded-xl shadow-sm border border-dashed border-gray-300 transition-all duration-300 hover:shadow-md">
                                        <h3 className="text-lg font-semibold text-gray-800 mb-4">Revenue Distribution</h3>
                                        <Pie data={revenueData} options={chartOptions} />
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Products Section */}
                        {activeSection === "products" && (
                            <div>
                                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
                                    <h2 className="text-3xl font-bold text-gray-800 mb-4 sm:mb-0">Product Management</h2>
                                    <button
                                        onClick={() => handleSectionChange("add")}
                                        className="flex items-center px-6 py-3 bg-white border border-dashed border-gray-400 rounded-lg text-gray-700 shadow-sm hover:shadow-md transition-all duration-300"
                                    >
                                        <FiPlusCircle className="mr-2" />
                                        Add New Product
                                    </button>
                                </div>

                                <div className="bg-white rounded-xl shadow-sm border border-dashed border-gray-300 overflow-hidden transition-all duration-300 hover:shadow-md">
                                    {products.length === 0 ? (
                                        <div className="text-center py-16">
                                            <FiBox className="mx-auto h-16 w-16 text-gray-400 mb-4" />
                                            <h3 className="text-lg font-medium text-gray-900 mb-2">No products found</h3>
                                            <p className="text-gray-500 mb-4">Start by adding your first product</p>
                                            <button
                                                onClick={() => handleSectionChange("add")}
                                                className="px-6 py-2 border border-dashed border-gray-400 rounded-lg text-gray-700 hover:bg-gray-50 transition-all duration-300"
                                            >
                                                Add Product
                                            </button>
                                        </div>
                                    ) : (
                                        <div className="overflow-x-auto">
                                            <table className="w-full">
                                                <thead className="bg-gray-50 border-b border-dashed border-gray-300">
                                                    <tr>
                                                        <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">Product</th>
                                                        <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">Category</th>
                                                        <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">Dimensions</th>
                                                        <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">Actions</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-dashed divide-gray-300">
                                                    {products.map((product) => (
                                                        <tr key={product._id} className="hover:bg-gray-50 transition-all duration-300">
                                                            <td className="px-6 py-4">
                                                                <div className="flex items-center space-x-4">
                                                                    <div className="flex-shrink-0 h-12 w-12 border border-dashed border-gray-300 rounded-lg overflow-hidden shadow-sm">
                                                                        <img
                                                                            className="h-12 w-12 object-cover"
                                                                            src={getImageUrl(product.Image?.[0])}
                                                                            alt={product.name}
                                                                        />
                                                                    </div>
                                                                    <div>
                                                                        <div className="text-sm font-medium text-gray-900">
                                                                            {product.name}
                                                                        </div>
                                                                        <div className="text-sm text-gray-500 line-clamp-1 max-w-xs">
                                                                            {product.des}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td className="px-6 py-4">
                                                                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 border border-dashed border-blue-300">
                                                                    {product.category}
                                                                </span>
                                                            </td>
                                                            <td className="px-6 py-4 text-sm text-gray-600">
                                                                {product.h || 'N/A'} × {product.w || 'N/A'} × {product.l || 'N/A'}
                                                            </td>
                                                            <td className="px-6 py-4">
                                                                <div className="flex space-x-3">
                                                                    <button
                                                                        onClick={() => handleEdit(product._id)}
                                                                        className="flex items-center px-3 py-2 border border-dashed border-gray-400 rounded-lg text-gray-700 hover:bg-gray-50 transition-all duration-300 shadow-sm"
                                                                    >
                                                                        <FiEdit className="mr-1" />
                                                                        Edit
                                                                    </button>
                                                                    <button
                                                                        onClick={() => handleDelete(product._id)}
                                                                        className="flex items-center px-3 py-2 border border-dashed border-red-300 rounded-lg text-red-700 hover:bg-red-50 transition-all duration-300 shadow-sm"
                                                                    >
                                                                        <FiTrash2 className="mr-1" />
                                                                        Delete
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
                            // <div className="bg-white rounded-xl shadow-sm border border-dashed border-gray-300 p-8 transition-all duration-300 hover:shadow-md">
                            //     <div className="mb-8">
                            //         <h2 className="text-3xl font-bold text-gray-800 mb-2">
                            //             {activeSection === "add" ? "Add New Product" : "Edit Product"}
                            //         </h2>
                            //         <div className="w-20 h-1 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full"></div>
                            //     </div>
                            // </div>
                        )}
                    </main>
                </div>
            </div>
        </div>
    );
};

export default AdminPanel;