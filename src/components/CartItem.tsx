import { CartItem as Item } from "@/src/types/cart"

/*
Reusable component to display
each product in the cart
*/

export default function CartItem({
  item,
}: {
  item: Item
}) {

  return (

    <div className="flex gap-4 border-b py-4">

      {/* Product Image */}

      <img
        src={item.image}
        alt={item.product_name}
        className="w-20 h-20 object-cover rounded-md"
      />

      {/* Product Info */}

      <div className="flex flex-col justify-center">

        <h3 className="font-medium text-gray-900">
          {item.product_name}
        </h3>

        <p className="text-gray-700">
          ₹{item.product_price}
        </p>

        <p className="text-sm text-gray-600">
          Quantity: {item.quantity}
        </p>

      </div>

    </div>

  )
}