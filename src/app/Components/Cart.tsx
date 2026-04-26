import React from "react";

type CartItem = {
  id: number;
  name: string;
  price: number;
  qty: number;
};

const Cart = ({ cartItems }: { cartItems: CartItem[] }) => {
  return (
    <div>
      {cartItems.map((item) => (
        <div key={item.id}>
          <p>{item.name}</p>
          <p>Qty: {item.qty}</p>
        </div>
      ))}
    </div>
  );
};

export default Cart;
