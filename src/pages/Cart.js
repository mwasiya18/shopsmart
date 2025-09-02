function Cart({ cart }) {
  return (
    <main className="cart">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>No items added yet.</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index}>{item.name} - ₹{item.price}</li>
          ))}
        </ul>
      )}
    </main>
  );
}

export default Cart;