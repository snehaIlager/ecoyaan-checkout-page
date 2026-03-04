"use client"

import { createContext, useContext, useState } from "react"

/*
Defines the structure of the shipping address
*/

interface Address {
  fullName: string
  email: string
  phone: string
  pin: string
  city: string
  state: string
}

interface CheckoutContextType {
  address: Address | null
  setAddress: (addr: Address) => void
}

/*
Create context
*/

const CheckoutContext = createContext<CheckoutContextType | undefined>(undefined)

export function CheckoutProvider({
  children,
}: {
  children: React.ReactNode
}) {

  /*
  Lazy initialization:
  React runs this only once during initial render.
  Prevents calling setState inside useEffect.
  */

  const [address, setAddressState] = useState<Address | null>(() => {

    if (typeof window === "undefined") return null

    const saved = localStorage.getItem("checkoutAddress")

    return saved ? JSON.parse(saved) : null
  })

  /*
  Update both React state and localStorage
  */

  const setAddress = (addr: Address) => {

    localStorage.setItem("checkoutAddress", JSON.stringify(addr))

    setAddressState(addr)
  }

  return (

    <CheckoutContext.Provider value={{ address, setAddress }}>

      {children}

    </CheckoutContext.Provider>

  )
}

export function useCheckout() {

  const context = useContext(CheckoutContext)

  if (!context) {
    throw new Error("useCheckout must be used inside CheckoutProvider")
  }

  return context
}