const regexText = "";
const regexNumber = /^[0-9]+$/;
const studentEmailRegex = /^[\w-.]+@(physci.uniben.edu)$/;

export const validateText = (text) => regexText.test(text);
export const validateNumber = (number) => regexNumber.test(number);
export const validateEmail = (email) => studentEmailRegex.test(email);
