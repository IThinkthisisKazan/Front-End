function printLastSymbol(str) {
  return str.slice(-1);
}

function printWithOutLast(str) {
  return str.slice(0, -1);
}

function reverse(str) {
  return str.split('').reverse().join('');
}

function noExtraSpaces(str) {
 return str.replace(/ + /g, ' ').trim();
}

function main () {
  var str = prompt('Введите строку символов');

  var lastSymbol = printLastSymbol(str);
  alert(lastSymbol);

  var noLastCharacter = printWithOutLast(str);
  alert(noLastCharacter);

  var reverseString = reverse(str);
  alert(reverseString);

  var strNoManySpaces = noExtraSpaces(str);
  alert(strNoManySpaces);
}

main();