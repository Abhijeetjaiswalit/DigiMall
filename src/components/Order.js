import React from "react";
import { shallowEqual, useSelector } from "react-redux";
import { pick } from "lodash";
import Modal from "react-modal";
import Zoom from "react-reveal/Zoom";
import formatCurrency from "../util";

const Order = ({ onCloseModal }) => {
  const { order: { order = {} } = {} } = useSelector(
    (state) => pick(state, ["order"]),
    shallowEqual
  );

  return order?.name ? (
    <Modal isOpen={true} onRequestClose={onCloseModal}>
      <Zoom>
        <button className="close-modal" onClick={onCloseModal}>
          x
        </button>
        <div className="order-details">
          <h3 className="success-message">Your order has been placed.</h3>
          <h2>Order {order._id}</h2>
          <ul>
            <li>
              <div>Name:</div>
              <div>{order.name}</div>
            </li>
            <li>
              <div>Email:</div>
              <div>{order.email}</div>
            </li>
            <li>
              <div>Address:</div>
              <div>{order.address}</div>
            </li>
            <li>
              <div>Date:</div>
              <div>{order.createdAt}</div>
            </li>
            <li>
              <div>Total:</div>
              <div>{formatCurrency(order.total)}</div>
            </li>
            <li>
              <div>Cart Items:</div>
              <div>
                {order.cartItems.map((x) => (
                  <div key={x._id}>
                    {x.count} {" x "} {x.title}
                  </div>
                ))}
              </div>
            </li>
          </ul>
        </div>
      </Zoom>
    </Modal>
  ) : null;
};

export default Order;
