import React, { useEffect, useLayoutEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { Product, Product_del, Product_edite_get } from '../Redux/action';
import { useLocation, useNavigate } from 'react-router-dom';
// import Product_add from './Product_add';
import { FaGlobe } from "react-icons/fa";
import { FiHome, FiBox, FiPlusCircle, FiShoppingBag } from 'react-icons/fi';
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
// import Product_add from './Product_Add';

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
    const [state, setstate] = useState("Desh")

    const handleClick = (e) => {
        setstate(e);
    };
    const products = useSelector(state => state.Product.Product || [])

    console.log(products);


    const handleDelete = (el) => {
        dispatch(Product_del(el))
    }

    const nav = useNavigate();
    const handleEdite = (el) => {
        console.log(el);

        dispatch(Product_edite_get(el)).then(() => {
            dispatch(Product_Get())
            setstate("add");
            // window.location.reload();
        })

    };

    useLayoutEffect(() => {
        dispatch(Product_Get())
    }, [dispatch])

    useEffect(() => {
        if (location.state?.reload) {
            dispatch(Product_Get());
        }
    }, [location.state, dispatch])

    const salesData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
            {
                label: 'Sales 2023',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: 'rgba(168, 85, 247, 0.3)',
                borderColor: 'rgba(168, 85, 247, 1)',
                borderWidth: 3,
                tension: 0.4,
                pointBackgroundColor: 'rgba(168, 85, 247, 1)',
                pointBorderColor: '#fff',
                pointBorderWidth: 2,
                pointRadius: 6,
            },
        ],
    };

    const revenueData = {
        labels: ['Electronics', 'Clothing', 'Home', 'Food', 'Other'],
        datasets: [
            {
                label: 'Revenue by Category',
                data: [12, 19, 3, 5, 2],
                backgroundColor: [
                    'rgba(168, 85, 247, 0.8)',
                    'rgba(236, 72, 153, 0.8)',
                    'rgba(59, 130, 246, 0.8)',
                    'rgba(16, 185, 129, 0.8)',
                    'rgba(245, 158, 11, 0.8)',
                ],
                borderWidth: 2,
                borderColor: '#fff',
            },
        ],
    };

    return (
        <div className="flex flex-col lg:flex-row min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
            </div>

            <aside className="w-full lg:w-72 bg-black/20 backdrop-blur-xl border-r border-white/10 text-white p-6 relative z-10">
                <div className="mb-10">
                    <h1 className="text-3xl font-bold mb-2 flex items-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                        <FiShoppingBag className="mr-3 text-purple-400" />
                        Admin Panel
                    </h1>
                    <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                </div>
                <div className="space-y-3">
                    <button onClick={() => handleClick("Desh")} className={`flex items-center w-full p-4 rounded-2xl transition-all duration-300 transform hover:scale-105 ${state === "Desh" ? 'bg-gradient-to-r from-purple-600 to-pink-600 shadow-lg shadow-purple-500/25' : 'bg-white/10 hover:bg-white/20 backdrop-blur-sm'}`}>
                        <FiHome className="mr-4 text-lg" />
                        <span className="font-medium">Dashboard</span>
                    </button>
                    <button onClick={() => handleClick("prod")} className={`flex items-center w-full p-4 rounded-2xl transition-all duration-300 transform hover:scale-105 ${state === "prod" ? 'bg-gradient-to-r from-purple-600 to-pink-600 shadow-lg shadow-purple-500/25' : 'bg-white/10 hover:bg-white/20 backdrop-blur-sm'}`}>
                        <FiBox className="mr-4 text-lg" />
                        <span className="font-medium">Products</span>
                    </button>
                    <button onClick={() => handleClick("add")} className={`flex items-center w-full p-4 rounded-2xl transition-all duration-300 transform hover:scale-105 ${state === "add" ? 'bg-gradient-to-r from-purple-600 to-pink-600 shadow-lg shadow-purple-500/25' : 'bg-white/10 hover:bg-white/20 backdrop-blur-sm'}`}>
                        <FiPlusCircle className="mr-4 text-lg" />
                        <span className="font-medium">Add Product</span>
                    </button>
                    <button onClick={() => nav("/")} className={`flex items-center w-full p-4 rounded-2xl transition-all duration-300 transform hover:scale-105 ${state === "website" ? 'bg-gradient-to-r from-purple-600 to-pink-600 shadow-lg shadow-purple-500/25' : 'bg-white/10 hover:bg-white/20 backdrop-blur-sm'}`}>
                        <FaGlobe className="mr-4 text-lg" />
                        <span className="font-medium">Website</span>
                    </button>
                </div>
            </aside>

            <div className="flex-1 p-6 sm:p-8 relative z-10">
                {state === "Desh" && (
                    <div>
                        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Dashboard Overview</h1>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                            <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-2xl shadow-2xl hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl">
                                        <FiBox className="text-white text-2xl" />
                                    </div>
                                    <div className="text-right">
                                        <h3 className="text-white/70 text-sm font-medium">Total Products</h3>
                                        <p className="text-3xl sm:text-4xl font-bold text-white">{products.length}</p>
                                    </div>
                                </div>
                                <div className="w-full bg-white/20 rounded-full h-2">
                                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full" style={{ width: '75%' }}></div>
                                </div>
                            </div>
                            <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-2xl shadow-2xl hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl">
                                        <FiShoppingBag className="text-white text-2xl" />
                                    </div>
                                    <div className="text-right">
                                        <h3 className="text-white/70 text-sm font-medium">Monthly Sales</h3>
                                        <p className="text-3xl sm:text-4xl font-bold text-white">$12,345</p>
                                    </div>
                                </div>
                                <div className="w-full bg-white/20 rounded-full h-2">
                                    <div className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full" style={{ width: '60%' }}></div>
                                </div>
                            </div>
                            <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-2xl shadow-2xl hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl">
                                        <FiHome className="text-white text-2xl" />
                                    </div>
                                    <div className="text-right">
                                        <h3 className="text-white/70 text-sm font-medium">New Customers</h3>
                                        <p className="text-3xl sm:text-4xl font-bold text-white">124</p>
                                    </div>
                                </div>
                                <div className="w-full bg-white/20 rounded-full h-2">
                                    <div className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-2xl shadow-2xl">
                                <h3 className="text-xl font-semibold mb-6 text-white">Sales Overview</h3>
                                <div className="bg-white/5 rounded-xl p-4">
                                    <Line data={salesData} />
                                </div>
                            </div>
                            <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-2xl shadow-2xl">
                                <h3 className="text-xl font-semibold mb-6 text-white">Revenue by Category</h3>
                                <div className="bg-white/5 rounded-xl p-4">
                                    <Pie data={revenueData} />
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                {state === "prod" && (
                    <div>
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
                            <h1 className="text-3xl sm:text-4xl font-bold text-white bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Product Management</h1>
                            <button onClick={() => handleClick("add")} className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-2xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/25 font-medium">
                                <FiPlusCircle className="inline mr-2" />
                                Add Product
                            </button>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4">
                            {products.map((el) => (
                                <div key={el._id} className="px-2">
                                    <div className="relative group w-full bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl  max-w-4xl mx-auto duration-300 ">

                                        {/* Images Section with Front/Back Hover */}
                                        <div className="h-[260px] w-full relative overflow-hidden">
                                            <span
                                                className="absolute z-10 top-3 left-2 group-hover:hidden text-gray-700 font-semibold"
                                                style={{ writingMode: "vertical-rl", textOrientation: "upright" }}
                                            >
                                                {el.tag}
                                            </span>

                                            <div className="relative h-full w-full overflow-hidden rounded-tl-2xl rounded-tr-2xl">
                                                <img
                                                    src={Array.isArray(el.Image) && el.Image[0] ? el.Image[0] : "https://via.placeholder.com/180?text=No+Image"}
                                                    alt={el.name}
                                                    className="absolute z-10 h-full w-full object-cover transform transition-all duration-700 group-hover:-translate-x-full"
                                                />
                                                <img
                                                    src={Array.isArray(el.Image) && el.Image[1] ? el.Image[1] : Array.isArray(el.Image) && el.Image[0] ? el.Image[0] : "https://via.placeholder.com/180?text=No+Image"}
                                                    alt={`${el.name} back`}
                                                    className="absolute z-0 h-full w-full object-cover transform translate-x-full scale-100 transition-all duration-700 group-hover:translate-x-0 group-hover:scale-110"
                                                />
                                                <div className="absolute z-20 top-0 left-[-75%] w-[200%] h-full bg-gradient-to-r from-transparent via-white/20 to-transparent rotate-12 transition-all duration-700 group-hover:left-[100%] pointer-events-none" />
                                            </div>
                                        </div>

                                        {/* Product Content */}
                                        <div className="p-4 flex flex-col gap-2 cursor-pointer" onClick={() => handleSinglePage(el._id)}>
                                            <div className="flex justify-between items-center">
                                                <h3 className="text-lg font-semibold truncate text-white">{el.name}</h3>
                                                <div className="text-yellow-500 text-sm">{"★".repeat(Math.floor(el.rating || 0))}</div>
                                            </div>
                                            <p className="text-sm text-white line-clamp-2">{el.des}</p>

                                        </div>

                                        {/* Buttons */}
                                        <div className="flex px-4 pb-4 gap-2">
                                            <button
                                                onClick={() => handleDelete(el._id)}
                                                className="w-full py-2 text-sm bg-red-100 text-red-600 rounded hover:bg-red-200 transition-colors"
                                            >
                                                Delete
                                            </button>
                                            <button
                                                onClick={() => handleEdite(el._id)}
                                                className="w-full py-2 text-sm bg-indigo-100 text-indigo-600 rounded hover:bg-indigo-200 transition-colors"
                                            >
                                                Edit
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>






                    </div>
                )}

                {state === "add" && (
                    <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl p-8 max-w-4xl mx-auto">
                        <div className="mb-6">
                            <h1 className="text-3xl sm:text-4xl font-bold text-white bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">Add New Product</h1>
                            <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                        </div>
                        <Product_add />
                    </div>
                )}
            </div>
        </div>
    );
};

export default AdminPanel;
