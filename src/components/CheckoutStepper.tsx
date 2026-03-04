interface Props {
  step: number
}

/*
CheckoutStepper

Shows the user which step of the checkout flow they are in.

Steps:
1 → Cart
2 → Address
3 → Payment
4 → Success
*/

export default function CheckoutStepper({ step }: Props) {

  const steps = ["Cart", "Address", "Payment", "Success"]

  return (

    <div className="flex justify-between items-center mb-8">

      {steps.map((label, index) => {

        const currentStep = index + 1
        const active = currentStep <= step

        return (

          <div
            key={label}
            className="flex flex-col items-center flex-1"
          >

            {/* Step circle */}

            <div
              className={`w-8 h-8 flex items-center justify-center rounded-full text-sm font-semibold
              ${active ? "bg-green-600 text-white" : "bg-gray-300 text-gray-600"}`}
            >
              {currentStep}
            </div>

            {/* Step label */}

            <span className="text-sm mt-2 text-gray-700">
              {label}
            </span>

          </div>

        )
      })}

    </div>

  )
}