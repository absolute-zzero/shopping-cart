import { Link } from "react-router-dom";
import "../css/style.css";
import "../css/style-font.css";
import "../css/slick.css";
import "../css/slick-theme.css";
import "../css/animate.css";
import "../css/bootstrap.min.css";

function NavBar(props) {
  const { totalQuantity, totalPrice, cartItems } = props;
  return (
    <nav className="navbar fixed-top bg-light">
      <div className="container-fluid">
        <h2 className="text-warning text-left fw-bold">Slick & Trendy</h2>
        <div className="navbar-brand mb-0">
          <Link to="./">
            <h2 style={{ display: "inline-block" }}>
              <span className="badge text-bg-warning m-2">
                <i className="tf-ion-android-home"></i> {"  "}Home
              </span>
            </h2>
          </Link>
          <Link to="/cart">
            <h2
              className="dropdown cart-nav dropdown-slide"
              style={{ display: "inline-block" }}
            >
              <span
                className="badge text-bg-warning m-2 dropdown-toggle"
                data-toggle="dropdown"
                data-hover="dropdown"
              >
                <i className="tf-ion-android-cart"></i> {"  "}
                {totalQuantity}
              </span>

              <div className="dropdown-menu cart-dropdown">
                {cartItems.map((cartItem) => (
                  <div
                    className="media"
                    key={cartItem.id}
                  >
                    <img
                      className=" pull-left"
                      src={require("../images/shop/products/" + cartItem.image)}
                      alt="product"
                      style={{ display: "inline-block" }}
                    />

                    <div>
                      <h4 className="media-heading">
                        <span
                          className="col-4"
                          href="#!"
                        >
                          {cartItem.item}
                        </span>
                      </h4>
                      <h5>
                        {cartItem.quantity} x {cartItem.cost}
                      </h5>
                      <h5>
                        <strong>{cartItem.quantity * cartItem.cost}</strong>
                      </h5>
                    </div>
                  </div>
                ))}

                <div className="cart-summary">
                  <span>Total</span>
                  <span className="total-price">${totalPrice}</span>
                </div>

                <div className="btn btn-small btn-warning mt-3">
                  View Cart or Checkout
                </div>
              </div>
            </h2>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
