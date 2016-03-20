do{
var x = prompt('Введите число, которое будем возводить в степень');
}
while( x<0 || x>50 );

var n = prompt('Введите степень, в которую будем возводить число');

function pow(x, n) {
  var result = 1;

  for (var i = 0; i < n; i++) {
    result *= x;
  }
  return result;
}

var powResult = pow(x, n); 

console.log(powResult);
alert(powResult);