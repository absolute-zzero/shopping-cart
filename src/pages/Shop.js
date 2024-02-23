import ShopItem from "../components/shopItem";
import "../css/style.css";
import "../css/style-font.css";
import "../css/slick.css";
import "../css/slick-theme.css";
import "../css/animate.css";
import "../css/bootstrap.min.css";

function Shop(props) {
  return (
    <div className="container mt-5 pt-5">
      <div className="row">
        <div className="title text-center text-dark fw-bold">
          <h1 style={{ textShadow: "2px 2px orange" }}>Trendy Products</h1>
          <hr
            className="hr bg-warning border-warning"
            style={{ height: "1px", marginBottom: "20px" }}
          />
        </div>
      </div>
      <div className="row">
        {props.shopItems.map((shopItem) => (
          <ShopItem
            key={shopItem.id}
            onAdd={props.handleAdd}
            shopItem={shopItem}
          />
        ))}
      </div>
      <hr
        className="hr bg-warning border-warning"
        style={{ height: "1px", marginBottom: "20px" }}
      />
      <div className="row mt-5 mb-5 pt-5">
        <div className="col-4 mx-auto text-center">
          <h2 className="fw-bold">Subcribe for news on deals and products!</h2>
          <form>
            <div className="mb-3 mt-5">
              <label
                htmlFor="email-input"
                className="form-label"
              >
                <h3>Email address</h3>
              </label>

              <input
                type="email"
                className="form-control"
                id="email-input"
                aria-describedby="emailHelp"
              />
              <div
                id="emailHelp"
                className="form-text"
              >
                <h6>We'll never share your email with anyone else.</h6>
              </div>
            </div>

            <button
              type="submit"
              className="btn btn-warning btn-lg fw-bold"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Shop;
