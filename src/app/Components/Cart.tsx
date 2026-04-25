import React from 'react'
import { useState } from 'react'

const Cart = () => {
    const [Cartitems, setCartitems] = useState<{id: number; name: string; price: number; image: string; qty: number}[]>([]);
  return (
    <div>Cart</div>
    
  )
}

export default Cart