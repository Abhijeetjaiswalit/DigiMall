import { CREATE_ORDER, CLEAR_CART, CLEAR_ORDER } from "../types";

export const createOrder = (order) => (dispatch) => {
  dispatch({ type: CREATE_ORDER, payload: order });
  localStorage.clear("cartItems");
};

export const clearOrder = () => (dispatch) => {
  dispatch({ type: CLEAR_ORDER });
  dispatch({ type: CLEAR_CART });
};

