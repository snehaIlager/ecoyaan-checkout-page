"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import CheckoutStepper from "@/src/components/CheckoutStepper"

export default function SuccessPage() {

  const router = useRouter()

  /*
  When order completes,
  clear stored checkout data so
  next checkout starts fresh
  */

  useEffect(() => {
    localStorage.removeItem("checkoutAddress")
  }, [])

  return (

    <div className="text-center">

      <CheckoutStepper step={4} />

      <div className="bg-white p-8 rounded-xl shadow max-w-md mx-auto">

        <h1 className="text-3xl font-bold text-green-600">
          Order Successful!
        </h1>

        <p className="text-gray-600 mt-3">
          Thank you for your purchase.
        </p>

        {/* Allow user to start new order */}

        <button
          onClick={() => router.push("/cart")}
          className="mt-6 bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg"
        >
          Back to Cart
        </button>

      </div>

    </div>

  )
}