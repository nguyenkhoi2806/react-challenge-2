import stringData from "../data";

export const findTextWithData = (text: string): string[] => {
  let textResult: string[] = [];
  const defaultValue = [text, "", ""];

  if (text.split("").length === 0) {
    return defaultValue;
  }

  for (let i = 0; i < text.length; i++) {
    const oneChar = text[i].toUpperCase();
    const twoChar = `${oneChar}${text[i + 1]}`;
    if (stringData.includes(twoChar)) {
      textResult = [
        text.slice(0, i),
        twoChar,
        text.slice(i + twoChar.length, text.length),
      ];
      break;
    }
    if (stringData.includes(oneChar)) {
      textResult = [
        text.slice(0, i),
        oneChar,
        text.slice(i + oneChar.length, text.length),
      ];
      break;
    }
  }

  if (textResult.length == 0) {
    return defaultValue;
  }

  return textResult;
};
