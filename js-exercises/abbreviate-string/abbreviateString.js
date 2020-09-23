import { isString } from 'util';

function abbreviateString(str) {
  if (isString(str)) {
    const words = str.split(' ');
    const firstWord = words[0];
    const lastWordAbbreviated = words[words.length - 1][0].toUpperCase();
    return `${firstWord} ${lastWordAbbreviated}.`;
  }
  throw Error('Input should be a string');
}

export { abbreviateString };
