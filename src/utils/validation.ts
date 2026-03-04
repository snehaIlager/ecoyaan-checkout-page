export const validateEmail = (email: string) => {
  return /\S+@\S+\.\S+/.test(email)
}

export const validatePhone = (phone: string) => {
  return /^\d{10}$/.test(phone)
}

export const validatePin = (pin: string) => {
  return /^\d{6}$/.test(pin)
}