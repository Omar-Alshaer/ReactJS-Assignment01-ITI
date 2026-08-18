import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../redux/slices/cartSlice";

function Cart() {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  return (
    <main className="container py-4">
      <h1 className="mb-4">Cart</h1>

      {items.length === 0 && <p>Your cart is empty.</p>}

      {items.map((item, index) => (
        <div className="cart-item" key={index}>
          <span>{item.title}</span>
          <button
            className="btn btn-danger btn-sm"
            onClick={() => dispatch(removeFromCart(item.id))}
          >
            Remove
          </button>
        </div>
      ))}
    </main>
  );
}

export default Cart;
