import React, { Component } from "react";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import NavBar from "./components/navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import axios from "axios";

class App extends Component {
  state = {
    shopItems: [
      {
        id: 1,
        file: "product-1.jpg",
        name: "Blue Top",
        price: 100,
        description:
          "Simple blue and white top. This unique design will turn heads and if you are seeking to be an attention grabber",
      },
      {
        id: 2,
        file: "product-2.jpg",
        name: "Grey Dress",
        price: 200,
        description:
          "Simple grey dress with long sleeves. The stylish sleeves allow you to look both elegant and simple for any event ",
      },
      {
        id: 3,
        file: "product-3.jpg",
        name: "Stripe Dress",
        price: 300,
        description:
          "Simple blue and white stripe dress. It has a classic retro look if you're an old fashion person who is not afraid to show it",
      },
      {
        id: 4,
        file: "product-4.jpg",
        name: "Floral Top",
        price: 400,
        description:
          "Simple yellow and blue floral top. A bright and colorful piece of garment that will no doubt light up any room ",
      },
    ],
    cartItems: [
      {
        id: 1,
        product_id: 1,
        quantity: 3,
        item: "Blue Top",
        cost: 100,
        image: "product-1.jpg",
        description:
          "Simple blue and white top. This unique design will turn heads and if you are seeking to be an attention grabber",
      },
      {
        id: 2,
        product_id: 2,
        quantity: 2,
        item: "Grey Dress",
        cost: 200,
        image: "product-2.jpg",
        description:
          "Simple blue and white stripe dress. It has a classic retro look if you're an old fashion person who is not afraid to show it",
      },
    ],
    deletedCartItems: 0,
    items: [],
  };

  handleIncrement = (cartItem) => {
    const cartItems = [...this.state.cartItems];
    const index = cartItems.indexOf(cartItem);
    cartItems[index] = { ...cartItem };
    cartItems[index].quantity++;
    this.setState({ cartItems: cartItems });
  };

  handleDecrement = (cartItem) => {
    const cartItems = [...this.state.cartItems];
    const index = cartItems.indexOf(cartItem);
    cartItems[index] = { ...cartItem };

    cartItems[index].quantity > 1
      ? cartItems[index].quantity--
      : (cartItems[index].quantity = cartItems[index].quantity + 0);

    this.setState({ cartItems: cartItems });
  };

  handleDelete = (cartItemID) => {
    const cartItems = this.state.cartItems.filter((c) => c.id !== cartItemID);

    const deleted = this.state.deletedCartItems + 1;
    this.setState({ cartItems: cartItems, deletedCartItems: deleted });
  };

  handleReset = () => {
    const cartItems = this.state.cartItems.map((cartItem) => {
      cartItem.quantity = 0;
      return cartItem;
    });
    this.setState({ cartItems: cartItems });
  };

  handleAdd = (shopItem) => {
    let cartItems = [...this.state.cartItems];
    const deleted = this.state.deletedCartItems;

    const cartItemsFiltered = this.state.cartItems.filter(
      (cartItem) => cartItem.product_id === shopItem.id
    );

    cartItemsFiltered.length > 0
      ? cartItems[
          cartItems.findIndex((cartItem) => cartItem.product_id === shopItem.id)
        ].quantity++
      : cartItems.unshift({
          id: cartItems.length + deleted + 1,
          product_id: shopItem.id,
          quantity: 1,
          item: shopItem.name,
          cost: shopItem.price,
          image: shopItem.file,
          description: shopItem.description,
        });

    this.setState({ cartItems: cartItems });
  };

  getTotalQuantity = () => {
    const cartItems = this.state.cartItems;
    const totalQuantity = cartItems.reduce(
      (sum, cartItem) => (sum = sum + cartItem.quantity),
      0
    );
    this.setState({ totalQuantity: totalQuantity });
  };

  render() {
    return (
      // <Router>
      <React.Fragment>
        <NavBar
          totalQuantity={this.state.cartItems.reduce(
            (sum, cartItem) => (sum = sum + cartItem.quantity),
            0
          )}
          totalPrice={this.state.cartItems.reduce(
            (sum, cartItem) => (sum = sum + cartItem.cost * cartItem.quantity),
            0
          )}
          cartItems={this.state.cartItems}
        />

        <Routes>
          <Route
            path="/"
            exact
            element={
              <Shop
                handleAdd={this.handleAdd}
                shopItems={this.state.shopItems}
              />
            }
          ></Route>
          <Route
            path="/cart"
            exact
            element={
              <Cart
                cartItems={this.state.cartItems}
                onIncrement={this.handleIncrement}
                onDecrement={this.handleDecrement}
                onDelete={this.handleDelete}
                totalCartItems={
                  this.state.cartItems.filter(
                    (cartItem) => cartItem.quantity > 0
                  ).length
                }
                totalQuantity={this.state.cartItems.reduce(
                  (sum, cartItem) => (sum = sum + cartItem.quantity),
                  0
                )}
                totalPrice={this.state.cartItems.reduce(
                  (sum, cartItem) =>
                    (sum = sum + cartItem.cost * cartItem.quantity),
                  0
                )}
              />
            }
          ></Route>
        </Routes>
        <footer className="footer section text-center">
          <div className="container light">
            <div className="row">
              <p>
                <span className="m-5">romari_12345@yahoo.com</span>
                <span className="m-5">561-410-8124</span>
              </p>
            </div>
            <div className="row">
              <h4>Developed by Romari Bartley</h4>
              <span>Theme from Themefisher</span>
            </div>
          </div>
        </footer>
      </React.Fragment>
      // </Router>
    );
  }
}

export default App;
