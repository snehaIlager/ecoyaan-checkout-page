"use client"

import React, { useState } from "react"
import { useRouter } from "next/navigation"
import { useCheckout } from "@/src/context/CheckoutContext"
import {
  validateEmail,
  validatePhone,
  validatePin
} from "@/src/utils/validation"

export default function CheckoutPage() {

  const router = useRouter()
  const { setAddress } = useCheckout()

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    pin: "",
    city: "",
    state: ""
  })

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {

    e.preventDefault()

    // Basic validation
    if (!form.fullName.trim()) {
      alert("Full name is required")
      return
    }

    if (!validateEmail(form.email)) {
      alert("Enter valid email")
      return
    }

    if (!validatePhone(form.phone)) {
      alert("Phone must be 10 digits")
      return
    }

    if (!validatePin(form.pin)) {
      alert("PIN must be 6 digits")
      return
    }

    if (!form.city.trim()) {
      alert("City is required")
      return
    }

    if (!form.state.trim()) {
      alert("State is required")
      return
    }

    setAddress(form)

    router.push("/payment")
  }

  return (

    <div className="max-w-md mx-auto">

      {/* Form card */}

      <form
        onSubmit={handleSubmit}
        className="bg-white text-gray-900 p-6 rounded-xl shadow"
      >

        <h2 className="text-xl font-bold mb-4 text-gray-900">
          Shipping Address
        </h2>

        {/* Full Name */}

        <input
          placeholder="Full Name"
          className="border rounded p-2 w-full mb-3 text-gray-900"
          onChange={(e)=>setForm({...form,fullName:e.target.value})}
        />

        {/* Email */}

        <input
          placeholder="Email"
          type="email"
          className="border rounded p-2 w-full mb-3 text-gray-900"
          onChange={(e)=>setForm({...form,email:e.target.value})}
        />

        {/* Phone */}

        <input
          placeholder="Phone Number"
          maxLength={10}
          className="border rounded p-2 w-full mb-3 text-gray-900"
          onChange={(e)=>{
            const value = e.target.value.replace(/\D/g,"")
            setForm({...form,phone:value})
          }}
        />

        {/* PIN */}

        <input
          placeholder="PIN Code"
          maxLength={6}
          className="border rounded p-2 w-full mb-3 text-gray-900"
          onChange={(e)=>{
            const value = e.target.value.replace(/\D/g,"")
            setForm({...form,pin:value})
          }}
        />

        {/* City */}

        <input
          placeholder="City"
          className="border rounded p-2 w-full mb-3 text-gray-900"
          onChange={(e)=>setForm({...form,city:e.target.value})}
        />

        {/* State */}

        <input
          placeholder="State"
          className="border rounded p-2 w-full mb-3 text-gray-900"
          onChange={(e)=>setForm({...form,state:e.target.value})}
        />

        {/* Button */}

        <button
          type="submit"
          className="bg-green-600 hover:bg-green-700 transition text-white w-full py-3 rounded-lg font-medium"
        >
          Continue to Payment
        </button>

      </form>

    </div>
  )
}