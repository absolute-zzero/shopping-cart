import React, { useState } from "react";
import CartItem from "../components/cartItem";
import { Modal, Button } from "react-bootstrap";

function Cart(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <React.Fragment>
      <main className="container mt-5 pt-5">
        <div className="container mb-5 mt-4 row">
          <div className="col-1"></div>
          <div className="col-4 text-dark">
            <div className="row">
              <h1>Your Cart</h1>
              <h2>
                Total ${props.totalPrice} {"("}
                {props.totalQuantity} Items{")"}{" "}
              </h2>
            </div>
            <div className="row">
              <h4>{props.totalCartItems} Different Items</h4>
            </div>
          </div>
          <div className="col-3"></div>
          <div className="col-3 text-right mt-5">
            <button
              className="btn btn-lg btn-warning"
              style={{
                fontWeight: "bold",
              }}
              onClick={handleShow}
            >
              Checkout
            </button>
          </div>
        </div>
        {props.totalCartItems === 0 ? (
          <h2 className="text-center">Your Cart is Empty</h2>
        ) : (
          <h2 className="text-center">Take a Look at Your Items</h2>
        )}

        <hr
          className="hr bg-warning border-warning"
          style={{ height: "1px", marginBottom: "40px" }}
        />
        {props.cartItems.map((cartItem) => (
          <CartItem
            key={cartItem.id}
            onIncrement={props.onIncrement}
            onDecrement={props.onDecrement}
            onDelete={props.onDelete}
            cartItem={cartItem}
          />
        ))}
        <div className="row mb-5">
          <div className="col-11 text-right">
            <h3>Cart Total ${props.totalPrice}</h3>
            <button
              className="btn btn-lg btn-warning"
              style={{
                fontWeight: "bold",
              }}
              onClick={handleShow}
            >
              Checkout
            </button>
          </div>
        </div>
      </main>

      <Modal
        style={{ opacity: show ? 1 : 0, top: "40%" }}
        show={show}
        onHide={handleClose}
      >
        <Modal.Header closeButton>
          <Modal.Title>Receipt</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {props.cartItems.map((cartItem) => (
            <h3
              className="row"
              key={cartItem.id}
            >
              <span className="col-4">{cartItem.item}</span>{" "}
              <span className="col-4">
                {cartItem.cost} x {cartItem.quantity}
              </span>
              <span className="col-4">
                ${cartItem.cost * cartItem.quantity}
              </span>
            </h3>
          ))}
          <div>
            <h3 className="row mt-5">
              <span className="col-4">Total Price</span>{" "}
              <span className="col-4"></span>
              <span className="col-4">${props.totalPrice}</span>
            </h3>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={handleClose}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  );
}

export default Cart;
