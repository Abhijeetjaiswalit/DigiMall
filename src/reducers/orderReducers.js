import { CREATE_ORDER, CLEAR_ORDER } from "../types";

const orderReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_ORDER:
      return { order: action.payload };
    case CLEAR_ORDER:
      return { order: undefined };
    default:
      return state;
  }
};
export { orderReducer };
