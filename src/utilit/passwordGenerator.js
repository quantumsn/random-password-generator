let passwordGenerator = (length, isAllowedNum, IsAllowedChar) => {
  let numberSize = isAllowedNum ? Math.floor(length / 4) : 0;
  let charSize = IsAllowedChar ? Math.floor(length / 4) : 0;
  let strSize = length - (numberSize + charSize);

  let str = "AQfghiRSTWXGjklmHIJYZabcdenopqBCDEFKLMNOPrstwxyz";
  let number = "0123456789";
  let char = "!@#$%^&*_+-/~";

  let pass = "";

  for (let i = 0; i < length; i++) {
    if (i < numberSize && isAllowedNum) {
      let numIdx = Math.floor(Math.random() * number.length);
      pass += number.charAt(numIdx);
    }

    if (i < strSize) {
      let idx = Math.floor(Math.random() * strSize);
      pass += str.charAt(idx);
    }

    if (i < charSize && IsAllowedChar) {
      let charIdx = Math.floor(Math.random() * char.length);
      pass += char.charAt(charIdx);
    }
  }
  return pass;
};

export default passwordGenerator;
