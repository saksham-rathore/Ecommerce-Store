"use client";

import React from "react";
import { useState } from "react";

const Products = () => {
  const [addtocart, setaddtocart] = useState("")
  
  const cart = (Products) => {
    setaddtocart((prev) => {
      const exist = prev.find((item) => item.id === Products.id);

      if (exist) {
        return prev.map((item) => 
        item.id === Products.id
      ?{...item, qty: item.qty + 1}
    : item
  );

      }else {
        return [...prev, {...Products, qty: 1}];
      }
    })
  }

  const Products = [
    {
      id: 1,
      name: "Shoes",
      price: 1599,
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      name: "Watch",
      price: 799,
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1099&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      name: "MacBook",
      price: 80999,
      image:
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 4,
      name: "Mobile",
      price: 3999,
      image:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 5,
      name: "Earbuds",
      price: 799,
      image:
        "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 6,
      name: "Monitor",
      price: 9999,
      image:
        "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 7,
      name: "Mouse",
      price: 899,
      image:
        "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?q=80&w=1467&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 8,
      name: "Keyboard",
      price: 699,
      image:
        "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 9,
      name: "Bottle",
      price: 299,
      image:
        "https://images.unsplash.com/photo-1544003484-3cd181d17917?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 10,
      name: "Bag",
      price: 499,
      image:
        "https://images.unsplash.com/photo-1622560480654-d96214fdc887?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  return (
    <button onClick={cart(Products)}>
      <div>
        <div className="grid grid-cols-3 gap-4">
          {Products.map((Product) => (
            <div key={Product.id}>
              <img
                src={Product.image}
                alt={Product.name}
                className="w-full h-48 object-cover"
              />
              <h2>{Product.name}</h2>
              <h2>Price {Product.price}</h2>
            </div>
          ))}
        </div>
      </div>
    </button>
  );
};

export default Products;
