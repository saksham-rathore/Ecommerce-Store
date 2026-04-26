import React from "react";

type CartItem = {
  id: number;
  name: string;
  price: number;
  qty: number;
};

const CartPage = ({ cartItems }: { cartItems: CartItem[] }) => {
  return (
    <div>
      <div className="h-screen mt-24 w-full bg-white">
        <div className="w-full h-full flex items-center justify-center">
          <h1 className="text-2xl font-bold">Cart</h1>
          {cartItems.map((item) => (
            <div key={item.id}>
              <p>{item.name}</p>
              <p>Qty: {item.qty}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CartPage;