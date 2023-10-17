export const generateNumberString = (
  numberStr: string,
  isHidden: boolean
): string => {
  return (
    (!isHidden
      ? numberStr.substring(0, 12).replace(/(\d{4}(?!\s))/g, "$1 ")
      : "**** **** ****") +
    " " +
    numberStr.substring(numberStr.length - 4, numberStr.length)
  );
};

export const getLast4 = (str: string): string => {
  return str.substring(str.length - 4, str.length);
};
