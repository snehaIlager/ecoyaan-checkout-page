import { CartResponse } from "@/src/types/cart"
import CartItem from "@/src/components/CartItem"
import OrderSummary from "@/src/components/OrderSummary"
import Link from "next/link"

/*
Fetch cart data on the server
This satisfies the SSR requirement
*/

async function getCart(): Promise<CartResponse> {

  const res = await fetch("http://localhost:3000/api/cart", {
    cache: "no-store",
  })

  if (!res.ok) {
    throw new Error("Failed to fetch cart data")
  }

  return res.json()
}

export default async function CartPage() {

  const data = await getCart()

  /*
  Calculate subtotal safely
  */

  const subtotal = data.cartItems.reduce(
    (sum, item) => sum + item.product_price * item.quantity,
    0
  )

  return (

    <div>

      <h2 className="text-2xl font-bold mb-6">
        Order Summary
      </h2>

      <div className="bg-white rounded-xl shadow p-6">

        {/* Cart items */}

        {data.cartItems.map((item) => (
          <CartItem key={item.product_id} item={item} />
        ))}

        {/* Price breakdown */}

        <OrderSummary
          subtotal={subtotal}
          shipping={data.shipping_fee}
        />

        {/* Checkout button */}

        <Link href="/checkout">

          <button
            className="mt-6 w-full bg-green-600 hover:bg-green-700 transition text-white py-3 rounded-lg font-medium"
          >
            Proceed to Checkout
          </button>

        </Link>

      </div>

    </div>

  )
}