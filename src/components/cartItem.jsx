import { Link } from "react-router-dom";
import Counter from "./counter";
import "../css/style.css";
import "../css/style-font.css";
import "../css/slick.css";
import "../css/slick-theme.css";
import "../css/animate.css";
import "../css/bootstrap.min.css";
import "../css/cart-item.css";

function CartItem(props) {
  const { cartItem, onDelete, onIncrement, onDecrement } = props;
  return (
    <div className="container">
      <div className="row">
        <div className="col-1"></div>
        <div className="col-10 wrapper">
          <div className="pic">
            <div className="product-item">
              <div className="product-thumb">
                <img
                  src={require("../images/shop/products/" + cartItem.image)}
                  alt="product"
                  className="border border-2 border-warning"
                />
                <div className="preview-meta">
                  <ul>
                    <Link to="/">
                      <li>
                        <p className="badge text-bg-warning fs-3">
                          View in store
                        </p>
                      </li>
                    </Link>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="name text-center fw-bold">
            <h2>{cartItem.item}</h2>
          </div>

          <div className="description text-center ">
            <h4>{cartItem.description}</h4>
          </div>
          <div className="counter">
            <Counter
              key={cartItem.id}
              onDelete={onDelete}
              onIncrement={onIncrement}
              onDecrement={onDecrement}
              cartItem={cartItem}
            />
          </div>

          <div className="price fw-bold">
            <h2>price: ${cartItem.cost}</h2>
          </div>

          <div className="total-price fw-bold">
            <h2>Total price: ${cartItem.cost * cartItem.quantity}</h2>
          </div>
        </div>
        <div className="col-1"></div>
      </div>
      <hr
        className="hr bg-warning border-warning"
        style={{
          height: "1px",
          marginBottom: "40px",
        }}
      />
    </div>
  );
}

export default CartItem;
