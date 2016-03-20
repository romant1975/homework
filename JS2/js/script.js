var arr = [];

for (var i = 0; i < 5; i++) {
  arr[i] = prompt('Ввведите имя пользователя');
}

console.log(arr);

var userName = prompt('Введите своё имя');
var flag = false;

for (var i = 0; i < arr.length; i++) {
  if (arr[i] === userName){
    flag = true;
  }
}

if (flag){
  alert(userName + ' вы успешно вошли');
} else {
  alert('Такого пользователя не существует')
}