
var str = prompt("Введите ");
alert("Введите строку");
function returnLastSymbol(str){
  alert (str[str.length - 1]);
}
returnLastSymbol();

function deleteLastSymbol(str){
  return str.substring(0, str.length - 1);
}

function reverseString(str){
  return str.split('').reverse().join('');
}

function clearSpaces(str){
  return str.replace(/\s+/g, ' ').trim();
}

