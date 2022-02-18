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

// const expr = "00101010100000000010001011101000101110100000111111**********00001011110000111111000010111000101110100000111010";
// const result = "hello world";

function decode(expr) {
  // write your solution here
  let bufArr = toChunks10(expr);
  for(let i = 0; i < bufArr.length; i++) {
    bufArr[i] = chunkToMcode(bufArr[i]);
  }
  const outStr = mCodeToText(bufArr);
  return outStr;
}

const toChunks10 = data => {
  const chunks10 = [];
  // console.log(data, data.length);
  for (let i = 0; i < data.length; i += 10) {
    chunks10.push(data.slice(i, i + 10));
    // console.log(chunks10);
  }
  return chunks10;
};

// let res = toChunks10(expr);
// console.log(res);

const chunkToMcode = chunk10 => {
  let inStr = chunk10;
  const subStr = '00'
  while (inStr.includes(subStr)) {
    inStr = inStr.replace(subStr, '');
    // console.log(subStr, inStr); 
  }
  const subStrDot = '10'
  while (inStr.includes(subStrDot)) {
    inStr = inStr.replace(subStrDot, '.');
    // console.log(subStrDot, inStr); 
  }
  const subStrDash = '11'
  while (inStr.includes(subStrDash)) {
    inStr = inStr.replace(subStrDash, '-');
    // console.log(subStrDash, inStr); 
  }
  return inStr;
};

// for(let i = 0; i < res.length; i++) {
//   res[i] = chunkToMcode(res[i]);
// }
// console.log(res);

const mCodeToText = inMcodeArr => {
  let outStr = '';
  // let outArr = [];
  outStr = inMcodeArr.map(elm => elm === '**********' ? ' ' : MORSE_TABLE[elm]).join('');
  // console.log(outStr);
  return outStr;
}

// res = mCodeToText(res);
// console.log(res);

module.exports = {
    decode
}
