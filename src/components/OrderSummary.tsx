interface Props {
  subtotal: number
  shipping: number
}

export default function OrderSummary({
  subtotal,
  shipping,
}: Props) {

  const total = subtotal + shipping

  return (

    <div className="border rounded-lg p-4 mt-6 bg-gray-50 text-gray-900">

      <h3 className="font-semibold mb-3">
        Price Details
      </h3>

      <div className="flex justify-between">
        <span>Subtotal</span>
        <span>₹{subtotal}</span>
      </div>

      <div className="flex justify-between">
        <span>Shipping</span>
        <span>₹{shipping}</span>
      </div>

      <div className="flex justify-between font-bold mt-3 text-lg">
        <span>Total</span>
        <span>₹{total}</span>
      </div>

    </div>
  )
}