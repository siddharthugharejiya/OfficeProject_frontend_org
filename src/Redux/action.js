import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";
import "../App.css";

// 3D toast function
const showToast = (message, type = "success") => {
    Toastify({
        text: message,
        duration: 3000,
        gravity: "top",
        position: "right",
        stopOnFocus: true,
        className: `custom-toast ${type}`,
        style: {
            background: type === "success" ? "linear-gradient(to right, #00b09b, #96c93d)" : "#ff4e4e",
            borderRadius: "10px",
            color: "#fff",
            boxShadow: "0 0 15px rgba(0,0,0,0.3)",
            transform: "scale(1.05)"
        }
    }).showToast();
};

// Helper function to fix image URLs and ensure HTTPS
const fixImageUrls = (products) => {
    const BASE_URL = "https://api.prettywareceramikallp.com";

    if (!products) return products;

    const fixImageUrl = (img) => {
        if (!img) return './placeholder.png';

        // If already a full URL, ensure it's HTTPS
        if (img.startsWith("http://")) {
            return img.replace("http://", "https://");
        }
        if (img.startsWith("https://")) {
            return img;
        }

        // If relative path, make it absolute with HTTPS
        return `${BASE_URL}${img.startsWith("/") ? "" : "/"}${img}`;
    };

    if (Array.isArray(products)) {
        return products.map(product => ({
            ...product,
            Image: product.Image ? product.Image.map(fixImageUrl) : []
        }));
    } else if (typeof products === 'object') {
        // Single product object
        return {
            ...products,
            Image: products.Image ? products.Image.map(fixImageUrl) : []
        };
    }

    return products;
};

// ------------------- PRODUCT GET -------------------
export const Product_Get = () => async (dispatch) => {
    dispatch({ type: "PRODUCT_GET_LOADING" });

    try {
        const response = await fetch("https://api.prettywareceramikallp.com/get");
        const res = await response.json();
        let fixedData = fixImageUrls(res.data);

        // Sort products by product code (e.g., "Lumania-5101")
        if (Array.isArray(fixedData)) {
            fixedData = fixedData.sort((a, b) => {
                // Extract product codes (numbers after the hyphen)
                const codeA = a.productCode ? a.productCode.split('-')[1] : '';
                const codeB = b.productCode ? b.productCode.split('-')[1] : '';

                // Convert to numbers for proper numerical sorting
                const numA = codeA ? parseInt(codeA, 10) : 0;
                const numB = codeB ? parseInt(codeB, 10) : 0;

                return numA - numB; // Ascending order
            });
        }

        dispatch({ type: "PRODUCT_GET_SUCCESS", payload: fixedData });
    } catch (error) {
        showToast("Failed to fetch products", "error");
        console.error("Product_Get error:", error);
        dispatch({ type: "PRODUCT_GET_ERROR", payload: error.message });
    }
};

// ------------------- ADD PRODUCT (UPDATED FOR FILE UPLOAD) -------------------
export const product_add_action = (productData) => async (dispatch) => {
    console.log('Adding product:', productData);

    dispatch({ type: "PRODUCT_ADD_LOADING" });

    try {
        // Check if productData is FormData (file upload) or regular object
        const isFormData = productData instanceof FormData;

        const response = await fetch("https://api.prettywareceramikallp.com/add", {
            method: "POST",
            headers: isFormData ? {} : {
                'Content-Type': 'application/json',
            },
            body: isFormData ? productData : JSON.stringify(productData),
        });

        const res = await response.json();

        if (!response.ok) {
            throw new Error(res.message || 'Failed to add product');
        }

        showToast("✅ Product Added Successfully", "success");
        dispatch({ type: "PRODUCT_ADD_SUCCESS", payload: res });
        return res;
    } catch (error) {
        showToast("❌ Failed to add product: " + error.message, "error");
        console.error("Add error:", error);
        dispatch({ type: "PRODUCT_ADD_ERROR", payload: error.message });
        throw error;
    }
};

// ------------------- DELETE PRODUCT -------------------
export const Product_del = (id) => async (dispatch) => {
    dispatch({ type: "PRODUCT_DELETE_LOADING" });

    try {
        const response = await fetch(`https://api.prettywareceramikallp.com/del/${id}`, {
            method: "DELETE"
        });
        const res = await response.json();
        showToast("🗑️ Product Deleted", "success");
        dispatch({ type: "PRODUCT_DELETE_SUCCESS", payload: id });
        dispatch(Product_Get());
    } catch (error) {
        showToast("❌ Failed to delete product", "error");
        console.error("Delete error:", error);
        dispatch({ type: "PRODUCT_DELETE_ERROR", payload: error.message });
    }
};

// ------------------- EDIT GET PRODUCT -------------------
export const Product_edite_get = (id) => async (dispatch) => {
    dispatch({ type: "PRODUCT_EDIT_GET_LOADING" });

    try {
        const response = await fetch(`https://api.prettywareceramikallp.com/edite-get/${id}`);
        const res = await response.json();
        const fixedData = fixImageUrls(res);
        dispatch({ type: "PRODUCT_EDIT_GET_SUCCESS", payload: fixedData });
    } catch (error) {
        showToast("❌ Failed to get product for edit", "error");
        console.error("Edit get error:", error);
        dispatch({ type: "PRODUCT_EDIT_GET_ERROR", payload: error.message });
    }
};

// ------------------- EDIT PRODUCT -------------------
export const product_edite_action = (id, productData) => async (dispatch) => {
    dispatch({ type: "PRODUCT_EDIT_LOADING" });

    try {
        const response = await fetch(`https://api.prettywareceramikallp.com/edite/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(productData)
        });

        const res = await response.json();
        showToast("✏️ Product Updated", "success");
        dispatch({ type: "PRODUCT_EDIT_SUCCESS", payload: res });
        dispatch(Product_Get());
        return res;
    } catch (error) {
        showToast("❌ Failed to update product", "error");
        console.error("Edit error:", error);
        dispatch({ type: "PRODUCT_EDIT_ERROR", payload: error.message });
        throw error;
    }
};

// ------------------- SINGLE PRODUCT -------------------
export const SingleProduct_Action = (id) => async (dispatch) => {
    dispatch({ type: "SINGLE_PRODUCT_LOADING" });

    try {
        const response = await fetch(`https://api.prettywareceramikallp.com/SinglePage/${id}`);

        // Check if response is ok
        if (!response.ok) {
            if (response.status === 404) {
                throw new Error(`Product with ID ${id} not found`);
            }
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        // Check if response is JSON
        const contentType = response.headers.get("content-type");
        if (!contentType || !contentType.includes("application/json")) {
            throw new Error("Response is not JSON");
        }

        const data = await response.json();
        const fixedData = fixImageUrls(data);
        dispatch({ type: "SINGLE_PRODUCT_SUCCESS", payload: fixedData });
    } catch (error) {
        console.error("SingleProduct error:", error);
        showToast(error.message || "Failed to fetch product", "error");
        dispatch({ type: "SINGLE_PRODUCT_ERROR", payload: error.message });
    }
};

// ------------------- PRODUCT BY ID -------------------
export const Product_Action = (id) => async (dispatch) => {
    dispatch({ type: "PRODUCT_BY_ID_LOADING" });

    try {
        const response = await fetch(`https://api.prettywareceramikallp.com/product/${id}`);

        // Check if response is ok
        // if (!response.ok) {
        //     if (response.status === 404) {
        //         throw new Error(`Product with ID ${id} not found`);
        //     }
        //     throw new Error(`HTTP error! status: ${response.status}`);
        // }

        // Check if response is JSON
        // const contentType = response.headers.get("content-type");
        // if (!contentType || !contentType.includes("application/json")) {
        //     throw new Error("Response is not JSON");
        // }

        const data = await response.json();
        console.log(data);

        const fixedData = fixImageUrls(data);
        dispatch({ type: "PRODUCT_BY_ID_SUCCESS", payload: fixedData });
    } catch (error) {
        console.error("Product error:", error);
        showToast(error.message || "Failed to fetch product", "error");
        dispatch({ type: "PRODUCT_BY_ID_ERROR", payload: error.message });
    }
};

// ------------------- ALL PRODUCTS -------------------
export const All_Product = () => async (dispatch) => {
    dispatch({ type: "ALL_PRODUCT_LOADING" });

    try {
        const response = await fetch(`https://api.prettywareceramikallp.com/get`);
        const data = await response.json();
        const fixedData = fixImageUrls(data);
        dispatch({ type: "ALL_PRODUCT_SUCCESS", payload: fixedData });
    } catch (error) {
        console.error("All Product error:", error);
        // dispatch({ type: "ALL_PRODUCT_ERROR", payload: error.message });
    }
};

// ------------------- CATEGORY PRODUCT -------------------
export const Product_category = (category) => async (dispatch) => {
    dispatch({ type: "CATEGORY_LOADING" });

    try {
        const response = await fetch(`https://api.prettywareceramikallp.com/category/${category}`);
        const data = await response.json();
        const fixedData = fixImageUrls(data);
        dispatch({ type: "CATEGORY_SUCCESS", payload: fixedData });
    } catch (error) {
        console.error("Category error:", error);
        // dispatch({ type: "CATEGORY_ERROR", payload: error.message });
    }
};

// ------------------- FETCH CATEGORY PRODUCTS -------------------
export const fetchCategoryProducts = (categories) => async (dispatch) => {
    dispatch({ type: "CATEGORY_PRODUCTS_LOADING" });

    try {
        const BASE_URL = "https://api.prettywareceramikallp.com";

        const promises = categories.map(async (category) => {
            try {
                const res = await fetch(`${BASE_URL}/category/${category}`);

                if (!res.ok) {
                    console.warn(`Category ${category} not found (${res.status})`);
                    return null;
                }

                const data = await res.json();

                if (!data || !data[0]) return null;

                // ✅ FIX image path: only use full URL with HTTPS
                const fixedProduct = {
                    ...data[0],
                    Image: data[0].Image.map(img => {
                        if (!img) return './placeholder.png';
                        if (img.startsWith("http://")) {
                            return img.replace("http://", "https://");
                        }
                        if (img.startsWith("https://")) {
                            return img;
                        }
                        return `${BASE_URL}${img.startsWith("/") ? "" : "/"}${img}`;
                    })
                };

                return fixedProduct;
            } catch (error) {
                console.warn(`Error fetching category ${category}:`, error);
                return null;
            }
        });

        const categoryProducts = await Promise.all(promises);

        dispatch({
            type: "CATEGORY_PRODUCTS_SUCCESS",
            payload: categoryProducts.filter(Boolean),
        });
    } catch (error) {
        showToast("Failed to fetch category products", "error");
        console.error("Category Products Error:", error);
        // dispatch({ type: "CATEGORY_PRODUCTS_ERROR", payload: error.message });
    }
};