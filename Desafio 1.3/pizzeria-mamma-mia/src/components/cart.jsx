import React, { useState } from "react";
import { pizzaCart } from "../utils/pizzas";

const Cart = () => {
  const [cart, setCart] = useState(pizzaCart);

  const increaseQty = (id) => {
    setCart(cart.map((p) => 
      p.id === id ? { ...p, quantity: p.quantity + 1 } : p
    ));
  };

  const decreaseQty = (id) => {
    setCart(
      cart
        .map((p) => 
          p.id === id ? { ...p, quantity: p.quantity - 1 } : p
        )
        .filter((p) => p.quantity > 0)
    );
  };

  const total = cart.reduce((sum, p) => sum + p.price * p.quantity, 0);

  return (
    <div className="cart">
      <h2>Carrito de compras</h2>
      {cart.map((p) => (
        <div key={p.id} className="cart-item">
          <img src={p.img} alt={p.name} width="100" />
          <h3>{p.name}</h3>
          <p>Precio: ${p.price}</p>
          <div>
            <button onClick={() => decreaseQty(p.id)}>-</button>
            <span>{p.quantity}</span>
            <button onClick={() => increaseQty(p.id)}>+</button>
          </div>
        </div>
      ))}
      <h3>Total: ${total}</h3>
      <button>Pagar</button>
    </div>
  );
};

export default Cart;
