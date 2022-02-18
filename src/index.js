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

const expr = "00101010100000000010001011101000101110100000111111**********00001011110000111111000010111000101110100000111010";
const result = "hello world";

function decode(expr) {
  // write your solution here
  // 0010101010
  
}

const toChunks10 = data => {
  const chunks10 = [];
  console.log(data, data.length);
  for (let i = 0; i < data.length; i += 10) {
    console.log(chunks10);
    chunks10.push(data.slice(i, i + 10));
  }
  return chunks10;
};

res = toChunks10(expr);
console.log();

/* 
module.exports = {
    decode
}
 */