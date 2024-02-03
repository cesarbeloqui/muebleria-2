import axios from "axios";
import React, { useContext, useEffect, useReducer } from "react";
import reducer from "../reducers/products_reducer";
import { products_url as url } from "../utils/constants";
import registroData from "../registro.json";
import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
} from "../actions";
import {
  adapterAll,
  adapterAlljson,
  adapterSingle,
  adapterSinglejson,
} from "../adapters/products";
import { getDataSingle } from "../utils/fetchData";

const initialState = {
  isSidebarOpen: false,
  products_loading: false,
  prodcuts_error: false,
  products: [],
  featured_products: [],
  single_product_loading: false,
  error: false,
  single_product: {},
};

const ProductsContext = React.createContext();

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const openSidebar = () => {
    dispatch({ type: SIDEBAR_OPEN });
  };
  const closeSidebar = () => {
    dispatch({ type: SIDEBAR_CLOSE });
  };

  const fetchProducts = async (url, registroData) => {
    dispatch({ type: GET_PRODUCTS_BEGIN });
    try {
      const responsejson = adapterAlljson(registroData.carpetas);
/*       const response = await axios.get(url);
      const products = adapterAll(response.data); */
      dispatch({ type: GET_PRODUCTS_SUCCESS, payload: responsejson });
    } catch (error) {
      dispatch({ type: GET_PRODUCTS_ERROR });
    }
  };

  const fetchSingleProduct = async ({url, id}) => {
    dispatch({ type: GET_SINGLE_PRODUCT_BEGIN });
    try {
      const product = getDataSingle(id)
      const singleProduct = adapterSinglejson(product);
/*       const response = await axios.get(url);
      const singleProduct2 = adapterSingle(response.data); */
      dispatch({ type: GET_SINGLE_PRODUCT_SUCCESS, payload: singleProduct });
    } catch (error) {
      dispatch({ type: GET_SINGLE_PRODUCT_ERROR });
    }
  };

  useEffect(() => {
    fetchProducts(url, registroData);
  }, []);

  return (
    <ProductsContext.Provider
      value={{ ...state, openSidebar, closeSidebar, fetchSingleProduct }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
// make sure use
export const useProductsContext = () => {
  return useContext(ProductsContext);
};
