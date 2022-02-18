const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
  let bufArr = toChunks10(expr);
  for(let i = 0; i < bufArr.length; i++) {
    bufArr[i] = chunkToMcode(bufArr[i]);
  }
  const outStr = mCodeToText(bufArr);
  return outStr;
}

const toChunks10 = data => {
  const chunks10 = [];
  for (let i = 0; i < data.length; i += 10) {
    chunks10.push(data.slice(i, i + 10));
  }
  return chunks10;
};

const chunkToMcode = chunk10 => {
  let inStr = chunk10;
  const subStr = '00'
  while (inStr.includes(subStr)) {
    inStr = inStr.replace(subStr, '');
  }
  const subStrDot = '10'
  while (inStr.includes(subStrDot)) {
    inStr = inStr.replace(subStrDot, '.');
  }
  const subStrDash = '11'
  while (inStr.includes(subStrDash)) {
    inStr = inStr.replace(subStrDash, '-');
  }
  return inStr;
};

const mCodeToText = inMcodeArr => {
  let outStr = '';
  outStr = inMcodeArr.map(elm => elm === '**********' ? ' ' : MORSE_TABLE[elm]).join('');
  return outStr;
}

module.exports = {
    decode
}
