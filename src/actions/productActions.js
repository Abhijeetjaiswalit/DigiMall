import { FETCH_PRODUCTS } from "../types";
import * as Data from '../data.json';

export const fetchProducts = () => async (dispatch) => {
  const data = Data.products
  dispatch({
    type: FETCH_PRODUCTS,
    payload: data,
  });
};

