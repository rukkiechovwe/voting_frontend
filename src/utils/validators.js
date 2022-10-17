const regexText = "";
const regexNumber = /^[0-9]+$/;
const regexEmail =
  /^[^\s@]+\.[^\s@]+\@[p,h,y,s,c,i]+\.[u,n,i,b,e,n]+\.[e,d,u]+$/;

export const validateText = (text) => regexText.test(text);
export const validateNumber = (number) => regexNumber.test(number);
export const validateEmail = (email) => regexEmail.test(email);
