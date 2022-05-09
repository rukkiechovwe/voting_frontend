const regexText = "";
const regexNumber = /^[0-9]+$/;
const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const validateText = (text) => regexText.test(text);
export const validateNumber = (number) => regexNumber.test(number);
export const validateEmail = (email) => regexEmail.test(email);
