import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import { useDispatch, useSelector } from 'react-redux';
import { Product_Get } from '../Redux/action';
import { FiUpload, FiLink, FiTrash2, FiPackage, FiDollarSign, FiTag, FiLayers } from 'react-icons/fi';

// Utility: validate image URL
const isValidImageUrl = (url) => {
    try {
        const u = new URL(url);
        return u.protocol === 'http:' || u.protocol === 'https:';
    } catch {
        return false;
    }
};

const Product_add = () => {
    const dispatch = useDispatch();
    const product_edite = useSelector(state => state.Product_edite_getting?.edite_data || {});
    const [update, setUpdate] = useState(false);
    const [loading, setLoading] = useState(false);
    const [activeTab, setActiveTab] = useState("link");
    const [imageLink, setImageLink] = useState("");
    const [selectedFiles, setSelectedFiles] = useState([]);

    const [state, setState] = useState({
        id: "",
        name: "",
        Image: [],
        title: "",
        des: "",
        rating: "",
        price: "",
        weight: "",
        tag: "",
        category: "",
        h: "",
        w: "",
        l: "",
        s_trap: "",
        p_trap: "",
    });

    useEffect(() => {
        if (product_edite && product_edite.data) {
            const data = product_edite.data;
            const imgs = Array.isArray(data.Image) ? [...new Set(data.Image)] : [];

            setState({
                id: data._id || "",
                name: data.name || "",
                Image: imgs,
                title: data.title || "",
                des: data.des || "",
                rating: data.rating || "",
                price: data.price || "",
                weight: data.weight || "",
                tag: data.tag || "",
                category: data.category || "",
                h: data.h || "",
                w: data.w || "",
                l: data.l || "",
                s_trap: data.s_trap || "",
                p_trap: data.p_trap || "",
            });

            setSelectedFiles(imgs.map(url => ({
                file: null,
                preview: url,
                isExisting: true
            })));
            setUpdate(true);
        } else {
            setUpdate(false);
            setSelectedFiles([]);
        }
    }, [product_edite]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setState(prev => ({ ...prev, [name]: value }));
    };

    const handleImageLink = (e) => {
        e.preventDefault();
        if (!imageLink.trim()) return;

        const trimmedUrl = imageLink.trim();
        if (!isValidImageUrl(trimmedUrl)) {
            Swal.fire({ icon: 'warning', title: 'Invalid URL', text: 'Please enter a valid image URL' });
            return;
        }

        const exists = selectedFiles.some(f => f.preview === trimmedUrl);
        if (exists) {
            Swal.fire({ icon: 'info', title: 'Duplicate URL', text: 'This image URL already exists.' });
            return;
        }

        setSelectedFiles(prev => [...prev, { file: null, preview: trimmedUrl, isExisting: false }]);
        setState(prev => ({ ...prev, Image: [...prev.Image, trimmedUrl] }));
        setImageLink("");
    };

    const handleFileUpload = (e) => {
        const files = Array.from(e.target.files);
        const valid = files.filter(f => f.type.startsWith("image/"));
        const previews = valid.map(f => ({ file: f, preview: URL.createObjectURL(f), isExisting: false }));

        setSelectedFiles(prev => [...prev, ...previews]);
        setState(prev => ({ ...prev, Image: [...prev.Image, ...valid] }));
    };

    const removeImage = (idx) => {
        setSelectedFiles(prev => {
            const updated = [...prev];
            if (updated[idx].file) URL.revokeObjectURL(updated[idx].preview);
            updated.splice(idx, 1);
            return updated;
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!state.name || selectedFiles.length === 0) {
            Swal.fire({ icon: 'info', title: 'Missing info', text: 'Please enter product name and image.' });
            return;
        }

        setLoading(true);
        try {
            const formData = new FormData();
            for (let key in state) {
                if (key !== "Image") formData.append(key, state[key]);
            }

            const fileImgs = [];
            const linkImgs = [];
            selectedFiles.forEach(i => {
                if (i.file) fileImgs.push(i.file);
                else if (!i.isExisting) linkImgs.push(i.preview);
            });

            fileImgs.forEach(f => formData.append("images", f));
            if (linkImgs.length > 0) formData.append("linkImages", JSON.stringify(linkImgs));

            if (update) {
                const existing = selectedFiles.filter(i => i.isExisting).map(i => i.preview);
                if (existing.length > 0)
                    formData.append("existingImages", JSON.stringify(existing));
            }

            const url = update
                ? `https://api.prettywareceramikallp.com/edite/${state.id}`
                : "https://api.prettywareceramikallp.com/add";

            const method = update ? "PUT" : "POST";
            const res = await fetch(url, { method, body: formData });
            const data = await res.json();
            console.log("Upload response:", data);

            Swal.fire({
                icon: 'success',
                title: update ? 'Product Updated' : 'Product Added',
                timer: 1500,
                showConfirmButton: false,
            });

            dispatch(Product_Get());
            setState({
                id: "", name: "", Image: [], title: "", des: "", rating: "",
                price: "", weight: "", tag: "", category: "", h: "", w: "", l: "",
                s_trap: "", p_trap: ""
            });
            setSelectedFiles([]);
            setUpdate(false);
            setImageLink("");
        } catch (err) {
            Swal.fire({ icon: 'error', title: 'Error', text: err.message });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-4xl mx-auto mt-8 mb-12">
            {/* Header Section */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 mb-8">
                <div className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl shadow-md mb-4">
                        <FiPackage className="text-2xl text-white" />
                    </div>
                    <h1 className="text-3xl font-bold text-gray-800 mb-2">
                        {update ? "Update Product" : "Add New Product"}
                    </h1>
                    <p className="text-gray-600">
                        {update ? "Update your product details" : "Add a new product to your inventory"}
                    </p>
                </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
                <form onSubmit={handleSubmit} className="space-y-8">
                    {/* Product Name */}
                    <div className="bg-gray-50 rounded-xl p-6 border border-dashed border-gray-200">
                        <label className="block text-lg font-semibold text-gray-800 mb-3 flex items-center">
                            <FiTag className="mr-2 text-blue-600" />
                            Product Name
                        </label>
                        <input
                            name="name"
                            value={state.name}
                            onChange={handleChange}
                            placeholder="Enter product name..."
                            className="w-full border border-gray-300 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                            required
                        />
                    </div>

                    {/* Image Upload Section */}
                    <div className="bg-gray-50 rounded-xl p-6 border border-dashed border-gray-200">
                        <label className="block text-lg font-semibold text-gray-800 mb-4 flex items-center">
                            <FiUpload className="mr-2 text-blue-600" />
                            Product Images
                        </label>

                        {/* Tab Buttons */}
                        <div className="flex gap-3 mb-6 flex-wrap sm:justify-normal xs:justify-center">
                            <button
                                type="button"
                                onClick={() => setActiveTab("link")}
                                className={`flex items-center px-6 py-3 rounded-xl font-medium transition-all duration-300 ${activeTab === 'link'
                                    ? 'bg-blue-600 text-white shadow-md'
                                    : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                                    }`}
                            >
                                <FiLink className="mr-2" />
                                Add via URL
                            </button>
                            <button
                                type="button"
                                onClick={() => setActiveTab("upload")}
                                className={`flex items-center px-6 py-3 rounded-xl font-medium transition-all duration-300 ${activeTab === 'upload'
                                    ? 'bg-blue-600 text-white shadow-md'
                                    : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                                    }`}
                            >
                                <FiUpload className="mr-2" />
                                Upload Files
                            </button>
                        </div>

                        {/* Tab Content */}
                        {activeTab === "link" ? (
                            <div className="space-y-4">
                                <label className="flex-wrap block font-medium text-gray-700">Image URL</label>
                                <div className="flex gap-3 flex-wrap justify-center">
                                    <input
                                        value={imageLink}
                                        onChange={(e) => setImageLink(e.target.value)}
                                        placeholder="https://example.com/image.jpg"
                                        className="flex-1 border border-gray-300 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                                    />
                                    <button
                                        type="button"
                                        onClick={handleImageLink}
                                        className="bg-blue-600 text-white px-6 py-4 rounded-xl hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg"
                                    >
                                        Add URL
                                    </button>
                                </div>
                                <p className="text-sm text-gray-500">Enter full image URLs starting with http:// or https://</p>
                            </div>
                        ) : (
                            <div className="space-y-4">
                                <label className="block font-medium text-gray-700">Upload Images</label>
                                <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center transition-all duration-300 hover:border-blue-400">
                                    <FiUpload className="mx-auto text-3xl text-gray-400 mb-3" />
                                    <input
                                        type="file"
                                        accept="image/*"
                                        multiple
                                        onChange={handleFileUpload}
                                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                    />
                                    <p className="text-gray-600 mb-2">Click to upload or drag and drop</p>
                                    <p className="text-sm text-gray-500">PNG, JPG, GIF up to 10MB</p>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Image Previews */}
                    {selectedFiles.length > 0 && (
                        <div className="bg-gray-50 rounded-xl p-6 border border-dashed border-gray-200">
                            <label className="block text-lg font-semibold text-gray-800 mb-4">
                                Selected Images ({selectedFiles.length})
                            </label>
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                                {selectedFiles.map((img, idx) => (
                                    <div key={idx} className="relative group">
                                        <img
                                            src={img.preview}
                                            alt={`Preview ${idx + 1}`}
                                            className="h-24 w-full object-cover rounded-lg border-2 border-gray-300 group-hover:border-blue-500 transition-all duration-300 shadow-sm"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => removeImage(idx)}
                                            className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-md hover:bg-red-600"
                                        >
                                            <FiTrash2 className="text-xs" />
                                        </button>
                                        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-xs p-1 rounded-b-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            {img.file ? 'File' : img.isExisting ? 'Existing' : 'URL'}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Description */}
                    <div className="bg-gray-50 rounded-xl p-6 border border-dashed border-gray-200">
                        <label className="block text-lg font-semibold text-gray-800 mb-3">Description</label>
                        <textarea
                            name="des"
                            value={state.des}
                            onChange={handleChange}
                            placeholder="Enter product description..."
                            className="w-full border border-gray-300 p-4 rounded-xl h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        />
                    </div>

                    {/* Dimensions & Specifications */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Dimensions */}
                        <div className="bg-gray-50 rounded-xl p-6 border border-dashed border-gray-200">
                            <label className="block text-lg font-semibold text-gray-800 mb-4 flex items-center">
                                <FiLayers className="mr-2 text-blue-600" />
                                Dimensions
                            </label>
                            <div className="grid grid-cols-3 gap-3">
                                {["l", "w", "h"].map(dim => (
                                    <div key={dim}>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            {dim.toUpperCase()}
                                        </label>
                                        <input
                                            name={dim}
                                            value={state[dim]}
                                            onChange={handleChange}
                                            placeholder="0"
                                            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                        {/* Category & Additional Info */}
                        <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
                            <div className="bg-gray-50 rounded-xl p-6 border border-dashed border-gray-200">
                                <label className="block text-lg font-semibold text-gray-800 mb-3">Category</label>
                                <select
                                    name="category"
                                    value={state.category}
                                    onChange={handleChange}
                                    className="w-full border border-gray-300 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                                >
                                    <option value="">Select Category</option>
                                    <option>One Piece Closet</option>
                                    <option>Wall Hung Closet</option>
                                    <option>Water Closet</option>
                                    <option>Table Top Basin</option>
                                    <option>One Piece Basin</option>
                                    <option>Counter Basin</option>
                                    <option>Basin With Pedestal</option>
                                    <option>Basin With Half Pedestal</option>
                                    <option>Wall Hung Basin</option>
                                    <option>Urinal</option>
                                    <option>Pan</option>
                                    <option>Pastel Series</option>
                                    <option>Coming Soon</option>
                                </select>
                            </div>

                            {/* <div className="bg-gray-50 rounded-xl p-6 border border-dashed border-gray-200">
                            <label className="block text-lg font-semibold text-gray-800 mb-3 flex items-center">
                                <FiDollarSign className="mr-2 text-blue-600" />
                                Pricing
                            </label>
                            <input
                                name="price"
                                value={state.price}
                                onChange={handleChange}
                                placeholder="0.00"
                                className="w-full border border-gray-300 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                            />
                        </div> */}
                        </div>

                    </div>

                    {/* Traps */}
                    <div className="bg-gray-50 rounded-xl p-6 border border-dashed border-gray-200">
                        <label className="block text-lg font-semibold text-gray-800 mb-4">
                            Trap Specifications
                        </label>
                        <div className="space-y-3">
                            {["s_trap", "p_trap"].map(trap => (
                                <div key={trap}>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        {trap.replace('_', ' ').toUpperCase()}
                                    </label>
                                    <input
                                        name={trap}
                                        value={state[trap]}
                                        onChange={handleChange}
                                        placeholder="Enter specification..."
                                        className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>



                    {/* Submit Button */}
                    <div className="text-center pt-6">
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full max-w-md mx-auto py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {loading ? (
                                <div className="flex items-center justify-center">
                                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                                    Processing...
                                </div>
                            ) : update ? "Update Product" : "Add Product"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Product_add;