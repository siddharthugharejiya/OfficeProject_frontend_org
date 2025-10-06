// ------------------- PRODUCT GET REDUCER -------------------
const initialProductState = {
    Product: [],
    loading: false,
    error: null
};

export const Product_Get_reducer = (state = initialProductState, action) => {
    switch (action.type) {
        case "PRODUCT_GET_LOADING":
            return { ...state, loading: true, error: null };
        case "PRODUCT_GET_SUCCESS":
            return { ...state, Product: action.payload, loading: false, error: null };
        case "PRODUCT_GET_ERROR":
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};

// ------------------- PRODUCT EDIT GET REDUCER -------------------
const editeInitialState = {
    edite_data: [],
    loading: false,
    error: null
};

export const Product_Edite_get_reducer = (state = editeInitialState, action) => {
    switch (action.type) {
        case "PRODUCT_EDIT_GET_LOADING":
            return { ...state, loading: true, error: null };
        case "PRODUCT_EDIT_GET_SUCCESS":
            return { ...state, edite_data: action.payload, loading: false };
        case "PRODUCT_EDIT_GET_ERROR":
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};

// ------------------- PRODUCT DELETE REDUCER -------------------
const initialDeleteState = {
    Product: [],
    loading: false,
    error: null
};

export const productReducer_del = (state = initialDeleteState, action) => {
    switch (action.type) {
        case "PRODUCT_DELETE_LOADING":
            return { ...state, loading: true, error: null };
        case "PRODUCT_DELETE_SUCCESS":
            return {
                ...state,
                Product: state.Product.filter(item => item._id !== action.payload),
                loading: false
            };
        case "PRODUCT_DELETE_ERROR":
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};

// ------------------- SINGLE PAGE REDUCER -------------------
const initialSinglePageState = {
    Product: null,
    loading: false,
    error: null
};

export const SinglePage_reducer = (state = initialSinglePageState, action) => {
    switch (action.type) {
        case "SINGLE_PRODUCT_LOADING":
            return { ...state, loading: true, error: null };
        case "SINGLE_PRODUCT_SUCCESS":
            return { ...state, Product: action.payload, loading: false };
        case "SINGLE_PRODUCT_ERROR":
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};

// ------------------- PRODUCT PAGE REDUCER -------------------
const initialProductPageState = {
    Product: [],
    loading: false,
    error: null
};

export const Product_Page_reducer = (state = initialProductPageState, action) => {
    switch (action.type) {
        case "PRODUCT_BY_ID_LOADING":
            return { ...state, loading: true, error: null };
        case "PRODUCT_BY_ID_SUCCESS":
            return { ...state, Product: action.payload, loading: false };
        case "PRODUCT_BY_ID_ERROR":
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};

// ------------------- PRODUCT CATEGORY REDUCER -------------------
const initialCategoryState = {
    category: [],
    loading: false,
    error: null
};

export const Product_category_reducer = (state = initialCategoryState, action) => {
    switch (action.type) {
        case "CATEGORY_LOADING":
            return { ...state, loading: true, error: null };
        case "CATEGORY_SUCCESS":
            return { ...state, category: action.payload, loading: false };
        case "CATEGORY_ERROR":
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};

// ------------------- FETCH CATEGORY PRODUCTS REDUCER -------------------
const initialCategoryProductsState = {
    products: [],
    loading: false,
    error: null
};

export const productCategoryReducer = (state = initialCategoryProductsState, action) => {
    switch (action.type) {
        case "CATEGORY_PRODUCTS_LOADING":
            return { ...state, loading: true, error: null };
        case "CATEGORY_PRODUCTS_SUCCESS":
            return { ...state, products: action.payload, loading: false };
        case "CATEGORY_PRODUCTS_ERROR":
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};
