// import {
//     shieldCheckCrossIcon,
//     shieldCheckNeutralIcon,
//     shieldCheckTickIcon,
//   } from '../assets/svgs';
import theme from '../theme';

export const hexToRgba = (hex, opacity) => {
  let r = 0,
    g = 0,
    b = 0;

  // Check if hex is valid and remove the leading '#' if present
  if (hex.length === 7) {
    r = parseInt(hex.slice(1, 3), 16);
    g = parseInt(hex.slice(3, 5), 16);
    b = parseInt(hex.slice(5, 7), 16);
  } else if (hex.length === 4) {
    r = parseInt(hex[1] + hex[1], 16);
    g = parseInt(hex[2] + hex[2], 16);
    b = parseInt(hex[3] + hex[3], 16);
  }
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};
export function has8Characters(str) {
  return str?.length >= 8;
}

export function hasUpperCaseLetterOrSymbol(str) {
  const upperCaseOrSymbolRegex = /[A-Z\W]/;
  return upperCaseOrSymbolRegex.test(str);
}

export function hasNumber(str) {
  const numberRegex = /\d/;
  return numberRegex.test(str);
}
export function hasMatch(str1, str2) {
  return str1 === str2;
}
export function returnIcon(isCheck, str) {
  if (str?.length === 0) {
    return shieldCheckNeutralIcon;
  } else if (isCheck) {
    return shieldCheckTickIcon;
  } else {
    return shieldCheckCrossIcon;
  }
}
export function returnColor(isCheck, str) {
  if (str?.length === 0) {
    return theme.colors.midnightBlue;
  } else if (isCheck) {
    return theme.colors.vividGreen;
  } else {
    return theme.colors.lightRed;
  }
}
