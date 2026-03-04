# 🌱 Ecoyaan Checkout Flow – Frontend Engineering Assignment

## 📌 Overview

This project implements a **simplified checkout flow inspired by Ecoyaan** using **Next.js and React**.

The goal of this assignment is to demonstrate proficiency in:

- ⚛️ React component architecture  
- ⚡ Next.js Server-Side Rendering (SSR)  
- 🧠 State management using Context API  
- ✅ Form validation  
- 📱 Building responsive UI components  

The application guides a user through reviewing their cart, entering shipping details, confirming the order, and completing a simulated payment.

---

# 🛠 Tech Stack

- **Next.js (App Router)**
- **React**
- **Tailwind CSS**
- **Context API** for state management
- **Next.js API Routes** for mock backend

---

# 🔄 Checkout Flow

The application follows a simple checkout process:

Cart → Shipping Address → Payment Confirmation → Order Success

---

# ✨ Features

## 🛒 1. Cart / Order Summary (SSR)

The cart page uses **Server-Side Rendering (SSR)** to fetch cart data before rendering.

It displays:

- Product image  
- Product name  
- Product price  
- Quantity  
- Order summary  

The order summary calculates:

- Subtotal  
- Shipping fee  
- Total amount  

Example calculation:


Bamboo Toothbrush ₹299 × 2 = ₹598
Cotton Produce Bags ₹450 × 1 = ₹450

Subtotal = ₹1048
Shipping = ₹50
Total = ₹1098


---

## 📦 2. Shipping Address Form

Users enter the following shipping details:

- Full Name  
- Email  
- Phone Number  
- PIN Code  
- City  
- State  

### Validation Implemented

The form includes validation to ensure correct input:

- Email format validation  
- Phone number must be **10 digits**  
- PIN code must be **6 digits**  
- Required field validation  

Inputs restrict invalid characters to improve data accuracy.

---

## 💳 3. Payment Confirmation

The confirmation screen displays:

- Final order summary  
- Shipping address details  

Users simulate payment by clicking:


Pay Securely


---

## 🎉 4. Order Success Page

After payment simulation, the application displays an order confirmation:


Order Successful
Thank you for your purchase


Checkout data is cleared to allow a fresh order flow.

---

# 🏗 Project Architecture

The project follows a **modular and scalable folder structure**.


src
├── app
│ ├── api/cart
│ ├── cart
│ ├── checkout
│ ├── payment
│ ├── success
│
├── components
│ ├── CartItem
│ ├── OrderSummary
│ ├── CheckoutStepper
│
├── context
│ └── CheckoutContext
│
├── utils
│ └── validation


### Key Design Decisions

**Server-Side Rendering**

Cart data is fetched on the server using:

```javascript
fetch("/api/cart", { cache: "no-store" })

This ensures:

Faster initial load

Better performance

Data availability before rendering

State Management

The Context API is used to store shipping address information and share it between checkout pages.

This keeps the application lightweight while maintaining clean state management.

Form Validation

Validation logic is separated into utility functions:


validateEmail()  
validatePhone()  
validatePin()


This improves code readability and reusability.

🎨 UI / UX

The interface is built using Tailwind CSS to provide:

Clean card-based layout

Responsive design

Clear checkout flow

Checkout step progress indicator

Accessible form inputs

Smooth button transitions

The UI is responsive and works across mobile and desktop devices.

🚀 Running the Project Locally

Clone the repository:


git clone repo url


Navigate to the project directory:


cd ecoyaan-checkout


Install dependencies:


npm install


Start the development server:


npm run dev


Open the application:


http://localhost:3000




🔮 Future Improvements

Possible enhancements include:

Real payment gateway integration

Persistent cart management

Address autocomplete

Order history tracking

Accessibility improvements

📄 Conclusion

This project demonstrates a clean implementation of a checkout flow using Next.js, React, and Tailwind CSS, focusing on SSR, modular architecture, and user-friendly design.






Live Demo: https://ecoyaan-checkout-page.vercel.app/cart

