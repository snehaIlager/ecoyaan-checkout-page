import { redirect } from "next/navigation"

/*
Root page simply redirects to cart
because the assignment starts from cart screen
*/

export default function Home() {
  redirect("/cart")
}