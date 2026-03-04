"use client"

import { useCheckout } from "@/src/context/CheckoutContext"
import { useRouter } from "next/navigation"
import CheckoutStepper from "@/src/components/CheckoutStepper"

export default function PaymentPage() {

  const { address } = useCheckout()
  const router = useRouter()

  if (!address) {
     router.push("/cart")
  return null
  }

  return (

    <div className="max-w-md mx-auto">

      <CheckoutStepper step={3} />

      {/* Card */}

      <div className="bg-white p-6 rounded-xl shadow text-gray-900">

        <h2 className="text-xl font-bold mb-4">
          Confirm Order
        </h2>

        <div className="mb-4 space-y-1">

          <p className="font-medium">
            {address.fullName}
          </p>

          <p>
            {address.city}, {address.state}
          </p>

          <p>
            {address.pin}
          </p>

          <p>
            {address.phone}
          </p>

        </div>

        <button
          onClick={() => router.push("/success")}
          className="bg-green-600 hover:bg-green-700 transition text-white w-full py-2 rounded-lg"
        >
          Pay Securely
        </button>

      </div>

    </div>
  )
}