"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";

const getProducts = async () => {
  const response = await axios.get("http://localhost:5000/user/getallproducts");
  console.log("✅ Products fetched:", response.data);
}

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

interface CartItem extends Product {
  qty: number;
}


const Products: React.FC = () => {
  const [addtocart, setaddtocart] = useState<CartItem[]>([]);

  useEffect(() => {
    const getProducts = async (): Promise<void> => {
      try {
        const response = await axios.get("http://localhost:3000/api/getallproducts");
        console.log("✅ Products fetched:", response.data);
      } catch (error) {
        console.error("❌ API call failed:", error);
      }
    };
    getProducts();
  }, []);

  const cart = (product: Product): void => {
    setaddtocart((prev) => {
      const exist = prev.find((item) => item.id === product.id);

      if (exist) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item,
        );
      } else {
        return [...prev, { ...product, qty: 1 }];
      }
    });
  };

  const Products: Product[] = [
    {
      id: 16345,
      name: "Shoes",
      price: 1599,
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 276543,
      name: "Watch",
      price: 799,
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1099&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3635435,
      name: "MacBook",
      price: 80999,
      image:
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 4234347,
      name: "Mobile",
      price: 3999,
      image:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 55347456,
      name: "Earbuds",
      price: 799,
      image:
        "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 6324654,
      name: "Monitor",
      price: 9999,
      image:
        "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 75346543,
      name: "Mouse",
      price: 899,
      image:
        "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?q=80&w=1467&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 8346542,
      name: "Keyboard",
      price: 699,
      image:
        "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 9658674,
      name: "Bottle",
      price: 299,
      image:
        "https://images.unsplash.com/photo-1544003484-3cd181d17917?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    }
  ];

  return (
    <section className="px-6 py-10">
      {/* Section heading */}
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900">Our Products</h2>
        <p className="mt-1 text-sm text-gray-500">Tap any card to add it to your cart</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Products.map((Product) => (
          <div
            key={Product.id}
            className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
          >
            {/* Image */}
            <div className="overflow-hidden h-56 bg-gray-50">
              <img
                src={Product.image}
                alt={Product.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Card body */}
            <div className="p-4 flex flex-col gap-3">
              <div className="flex items-start justify-between">
                <h3 className="text-base font-semibold text-gray-800">{Product.name}</h3>
                <span className="text-sm font-bold text-violet-600">₹{Product.price.toLocaleString()}</span>
              </div>

              {/* Add to Cart */}
              <button
                onClick={() => cart(Product)}
                className="mt-1 w-full py-2.5 rounded-xl text-sm font-semibold tracking-wide text-white bg-gradient-to-r from-violet-600 to-cyan-500 hover:from-violet-500 hover:to-cyan-400 shadow-[0_4px_14px_rgba(109,40,217,0.35)] hover:shadow-[0_4px_20px_rgba(109,40,217,0.5)] transition-all duration-200 active:scale-95"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
