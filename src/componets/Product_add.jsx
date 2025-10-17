import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import { useDispatch, useSelector } from 'react-redux';
import { Product_edite_get, product_edite_action, Product_Get } from '../Redux/action';

// Utility function to validate image URLs
const isValidImageUrl = (url) => {
    try {
        const urlObj = new URL(url);
        return urlObj.protocol === 'http:' || urlObj.protocol === 'https:';
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

    console.log(state);

    useEffect(() => {
        if (product_edite && product_edite.data) {
            const productData = product_edite.data;

            // Reset state and selectedFiles to avoid duplication
            const newImages = Array.isArray(productData.Image) ? [...productData.Image] : [];
            setState({
                id: productData._id || "",
                name: productData.name || "",
                Image: newImages,
                title: productData.title || "",
                des: productData.des || "",
                rating: productData.rating || "",
                price: productData.price || "",
                weight: productData.weight || "",
                tag: productData.tag || "",
                category: productData.category || "",
                h: productData.h || "",
                w: productData.w || "",
                l: productData.l || "",
                s_trap: productData.s_trap || "",
                p_trap: productData.p_trap || "",
            });

            // Reset selectedFiles with image previews
            setSelectedFiles(newImages.map(url => ({ file: null, preview: url })));
            setUpdate(true);
        } else {
            // Reset state when no product_edite data (for adding new product)
            setState({
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
            setSelectedFiles([]);
            setUpdate(false);
        }
    }, [product_edite]);

    const handleChange = e => {
        const { name, value } = e.target;
        setState(prev => ({ ...prev, [name]: value }));
    };

    const handleImageLink = e => {
        e.preventDefault();
        if (!imageLink.trim()) return;

        const trimmedUrl = imageLink.trim();
        if (!isValidImageUrl(trimmedUrl)) {
            Swal.fire({ icon: 'warning', title: 'Invalid URL', text: 'Please enter a valid image URL (http:// or https://)' });
            return;
        }

        setState(prev => ({ ...prev, Image: [...prev.Image, trimmedUrl] }));
        setSelectedFiles(prev => [...prev, { file: null, preview: trimmedUrl }]);
        setImageLink("");
    };

    const handleFileUpload = (e) => {
        const files = Array.from(e.target.files);
        const validFiles = files.filter(file => file.type.startsWith("image/"));
        if (validFiles.length === 0) return;

        const previews = validFiles.map(file => ({
            file,
            preview: URL.createObjectURL(file),
        }));

        setSelectedFiles(prev => [...prev, ...previews]);
        setState(prev => ({
            ...prev,
            Image: [...prev.Image, ...validFiles],
        }));
    };

    const removeImage = idx => {
        setState(prev => {
            const newImages = [...prev.Image];
            newImages.splice(idx, 1);
            return { ...prev, Image: newImages };
        });

        setSelectedFiles(prev => {
            const newSelectedFiles = [...prev];
            newSelectedFiles.splice(idx, 1);
            return newSelectedFiles;
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!state.name || selectedFiles.length === 0)
            return Swal.fire({
                icon: "info",
                title: "Missing info",
                text: "Please provide product name and at least 1 image",
            });

        setLoading(true);

        try {
            const formData = new FormData();

            // Append basic product fields
            for (let key in state) {
                if (key !== "Image") formData.append(key, state[key]);
            }

            // Separate file and link images
            const fileImages = [];
            const linkImages = [];

            selectedFiles.forEach((item) => {
                if (item.file) fileImages.push(item.file);
                else linkImages.push(item.preview);
            });

            // Append file images
            fileImages.forEach((file) => formData.append("images", file));

            // Append link images as JSON
            if (linkImages.length > 0) {
                formData.append("linkImages", JSON.stringify(linkImages));
            }

            const url = update
                ? `api.prettywareceramikallp.com/edite/${state.id}`
                : "api.prettywareceramikallp.com/add";
            const method = update ? "PUT" : "POST";

            const res = await fetch(url, {
                method,
                body: formData,
            });

            const data = await res.json();
            console.log("✅ Upload response:", data);

            Swal.fire({
                icon: "success",
                title: update ? "Product Updated" : "Product Added",
                timer: 1500,
                showConfirmButton: false,
            });

            // Reset state after successful submission
            dispatch(Product_Get());
            setState({
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
            setSelectedFiles([]);
            setUpdate(false);
            setImageLink("");

        } catch (err) {
            console.error("❌ Submission error:", err);
            Swal.fire({
                icon: "error",
                title: "Error",
                text: err.message || "Something went wrong",
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-4xl mx-auto p-8 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl mt-8 mb-10">
            <form onSubmit={handleSubmit} className="space-y-8">
                <h2 className="text-4xl font-bold text-center text-white mb-4">
                    {update ? "Update Product" : "Add New Product"}
                </h2>

                <input name="name" value={state.name} onChange={handleChange} placeholder="Product Name" className="w-full p-2 rounded bg-white/10 text-white" required />

                <div className="flex gap-4">
                    <button type="button" onClick={() => setActiveTab("link")} className={`px-4 py-2 rounded ${activeTab === 'link' ? 'bg-pink-600 text-white' : 'bg-white/10 text-white'}`}>Image URL</button>
                    <button type="button" onClick={() => setActiveTab("upload")} className={`px-4 py-2 rounded ${activeTab === 'upload' ? 'bg-pink-600 text-white' : 'bg-white/10 text-white'}`}>Upload</button>
                </div>

                {activeTab === 'link' && (
                    <div className="space-y-2">
                        <label className="block text-white text-sm font-medium mb-2">
                            Add Image URLs (http:// or https://)
                        </label>
                        <div className="flex gap-2">
                            <input
                                value={imageLink}
                                onChange={e => setImageLink(e.target.value)}
                                placeholder="https://example.com/image.jpg"
                                className="flex-1 p-2 rounded bg-white/10 text-white border border-white/20 focus:border-pink-500 focus:outline-none"
                            />
                            <button
                                type="button"
                                onClick={handleImageLink}
                                className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded transition-colors"
                            >
                                Add URL
                            </button>
                        </div>
                        <p className="text-xs text-white/70">Enter full image URLs starting with http:// or https://</p>
                    </div>
                )}

                {activeTab === 'upload' && (
                    <div className="space-y-2">
                        <label className="block text-white text-sm font-medium mb-2">
                            Select Images (Max 5MB each, JPG/PNG/GIF)
                        </label>
                        <input
                            type="file"
                            accept="image/*"
                            multiple
                            onChange={handleFileUpload}
                            className="block w-full text-sm text-white file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-pink-600 file:text-white hover:file:bg-pink-700 file:cursor-pointer cursor-pointer"
                        />
                        <p className="text-xs text-white/70">You can select multiple images at once</p>
                    </div>
                )}

                {selectedFiles.length > 0 && (
                    <div className="mt-4">
                        <h3 className="text-white mb-2">Selected Images ({selectedFiles.length}):</h3>
                        <div className="flex flex-wrap gap-4">
                            {selectedFiles.map((img, idx) => (
                                <div key={idx} className="relative group">
                                    <img
                                        src={img.preview}
                                        className="h-24 w-24 object-cover rounded border border-white/30 hover:border-pink-500 transition-colors"
                                        alt={`Preview ${idx + 1}`}
                                        onError={(e) => {
                                            e.target.src = '/placeholder.png';
                                        }}
                                    />
                                    <button
                                        type="button"
                                        onClick={() => removeImage(idx)}
                                        className="absolute -top-2 -right-2 bg-red-600 hover:bg-red-700 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold transition-colors"
                                    >
                                        ×
                                    </button>
                                    <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white text-xs p-1 rounded-b opacity-0 group-hover:opacity-100 transition-opacity">
                                        {img.file ? 'File Upload' : 'URL Link'}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                <input name='des' value={state.des} onChange={handleChange} placeholder='desciption' className="w-full p-2 rounded bg-white/10 text-white" />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <input
                        name="l"
                        value={state.l}
                        onChange={handleChange}
                        placeholder="Length (l)"
                        className="w-full p-2 rounded bg-white/10 text-white"
                    />
                    <input
                        name="w"
                        value={state.w}
                        onChange={handleChange}
                        placeholder="Width (w)"
                        className="w-full p-2 rounded bg-white/10 text-white"
                    />
                    <input
                        name="h"
                        value={state.h}
                        onChange={handleChange}
                        placeholder="Height (h)"
                        className="w-full p-2 rounded bg-white/10 text-white"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                        name="s_trap"
                        value={state.s_trap}
                        onChange={handleChange}
                        placeholder="S Trap"
                        className="w-full p-2 rounded bg-white/10 text-white"
                    />
                    <input
                        name="p_trap"
                        value={state.p_trap}
                        onChange={handleChange}
                        placeholder="P Trap"
                        className="w-full p-2 rounded bg-white/10 text-white"
                    />
                </div>

                <select name="category" value={state.category} onChange={handleChange} className="w-full p-2 rounded bg-white/10 text-black">
                    <option value="">Select Category</option>
                    <option value="One Piece Closet">One Piece Closet</option>
                    <option value="Wall Hung Closet">Wall Hung Closet</option>
                    <option value="Water Closet">Water Closet</option>
                    <option value="Table Top Basin">Table Top Basin</option>
                    <option value="One Piece Basin">One Piece Basin</option>
                    <option value="Counter Basin">Counter Basin</option>
                    <option value="Basin With Pedestal">Basin With Pedestal</option>
                    <option value="Basin With Half Pedestal">Basin With Half Pedestal</option>
                    <option value="Wall Hung Basin">Wall Hung Basin</option>
                    <option value="Urinal">Urinal</option>
                    <option value="Pan">Pan</option>
                    <option value="Pastel Series">Pastel Series</option>
                    <option value="Coming Soon">Coming Soon</option>
                </select>

                <button type="submit" disabled={loading} className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded text-lg mt-4">
                    {loading ? "Processing..." : update ? "Update Product" : "Add Product"}
                </button>
            </form>
        </div>
    );
};

export default Product_add;