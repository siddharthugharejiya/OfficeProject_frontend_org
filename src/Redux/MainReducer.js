import { combineReducers } from "redux";
import { Product_category_reducer, Product_Edite_get_reducer, Product_Get_reducer, Product_Page_reducer, productCategoryReducer, productReducer_del, SinglePage_reducer } from "./Reducer";


export const MainReducer = combineReducers({
      Product: Product_Get_reducer,
      Product_edite_getting: Product_Edite_get_reducer,
      Product_del: productReducer_del,
      SinglePageProduct: SinglePage_reducer,
      Product_getting: Product_Page_reducer,
      category: Product_category_reducer,
      categoryProducts: productCategoryReducer,


})