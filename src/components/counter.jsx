function Counter(props) {
  return (
    <div>
      <div className="container text-center">
        <button
          className="btn btn-secondary"
          onClick={() => props.onDecrement(props.cartItem)}
          style={{
            fontWeight: "bold",
            fontSize: "16px",
          }}
        >
          -
        </button>

        <span
          className="badge text-bg-warning"
          style={{
            fontWeight: "bold",
            fontSize: "20px",
            marginLeft: "2px",
            marginRight: "2px",
          }}
        >
          {props.cartItem.quantity}
        </span>

        <button
          className="btn btn-secondary"
          onClick={() => props.onIncrement(props.cartItem)}
          style={{
            fontWeight: "bold",
            fontSize: "16px",
          }}
        >
          +
        </button>

        <button
          onClick={() => props.onDelete(props.cartItem.id)}
          style={{
            fontWeight: "bold",
            fontSize: "16px",
            marginLeft: "10px",
            marginRight: "10px",
            marginTop: "5px",
          }}
          className="btn btn-danger btn-sm text-dark"
        >
          Remove
        </button>
      </div>
    </div>
  );
}

export default Counter;
