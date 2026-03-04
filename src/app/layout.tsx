import "./globals.css"
import { CheckoutProvider } from "@/src/context/CheckoutContext"

export const metadata = {
  title: "Ecoyaan Checkout",
  description: "Checkout flow assignment",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">

      {/* Default text color must be dark */}
      <body className="bg-gray-100 text-gray-900">

        <CheckoutProvider>

          {/* Header */}
          <header className="bg-green-600 text-white py-4 shadow">

            <div className="max-w-4xl mx-auto px-4">

              <h1 className="text-xl font-semibold">
                Ecoyaan Checkout
              </h1>

            </div>

          </header>

          {/* Page content */}
          <main className="max-w-4xl mx-auto p-6">

            {children}

          </main>

        </CheckoutProvider>

      </body>

    </html>
  )
}