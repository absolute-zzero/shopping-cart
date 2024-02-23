function ShopItem(props) {
  return (
    <div className="col-md-4 ">
      <div className="product-item ">
        <div className="product-thumb border border-2 border-warning">
          <span className="bage bg-warning text-dark fw-bold">Sale</span>
          <img
            className="img-responsive"
            src={require("../images/shop/products/" + props.shopItem.file)}
            alt="product-img"
          />
          <div className="preview-meta">
            <ul>
              <li>
                <button
                  className="btn btn-warning btn-lg fw-bold"
                  onClick={() => props.onAdd(props.shopItem)}
                >
                  Add to Cart <i className="tf-ion-android-cart"></i>
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="product-content fw-bold bg-warning">
          <h3>{props.shopItem.name}</h3>
          <h3>${props.shopItem.price}</h3>
        </div>
      </div>
    </div>
  );
}

export default ShopItem;
