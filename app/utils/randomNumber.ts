import { customAlphabet } from "nanoid";
const nanoidNum = customAlphabet("0123456789");
const nanoidAlphaNum = customAlphabet("0123456789abcdefghijklmnopqrstuvwxyz");
export const getRandomNumericString = (length = 6) => {
  return nanoidNum(length);
};

export const getRandomAlphaNumString = (length = 6) => {
  return nanoidAlphaNum(length);
};
