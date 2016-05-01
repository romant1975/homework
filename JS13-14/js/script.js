'use strict';

$(function() {

  var mathTestObj = {
    testTitle: 'Столицы государств',
    questions: [
      {
      quest: 'Столица Великобритании',
      answers: [
            {answer: 'Лондон', check: true}, 
            {answer:'Манчестер', check: false},
            {answer:'Шефилд', check: false}
           ]
      }, 
      {
      quest: 'Столица Испании',
      answers: [
            {answer: 'Барселона', check: false}, 
            {answer:'Мадрид', check: true},
            {answer:'Севилья', check: false}
           ]
      }, 
      {
      quest: 'Столица США',
      answers: [
            {answer: 'Лос-Анджелес', check: false}, 
            {answer:'Нью-Йорк', check: false},
            {answer:'Вашингтон', check: true}
           ]
      },
      {
      quest: 'Столица Франции',
      answers: [
            {answer: 'Марсель', check: false}, 
            {answer:'Бордо', check: false},
            {answer:'Париж', check: true}
           ] 
      }
    ]
  };


var mathObjStr = JSON.stringify(mathTestObj);//преобразовываем js обьект в JSON строку(JSON формат передачи данных от браузера к серверу и обратно)
localStorage.setItem('lighttest', mathObjStr);//записываем на жесткий диск информацию об обьекте

$(".createTest").on('click', function(){//при клике запускаем функцию всего теста
  createTest();
  
})

function createTest(){ //сама функция теста
var mathTest = localStorage.getItem('lighttest');//получаем обратно наше значение по ключу с хранилища
mathTest = JSON.parse(mathTest);//превращаем в js обьект (распарсили)

var html = $('#light_test').html();//обьявили переменную и записали html в нее по id все совпавшие элементы
var content =tmpl(html, mathTest);//обьявили переменную и присвоили ей метод tmpl c аргументами html(теги) и распарсенный js обьект тем самым запускаю шаблон
$('body').append(content);//в боди добавляем наш с шаблонизированный html
$('.createTest').hide();//прячу кнопку вызова теста

  function goodResult(){ //функция отрабатывающая появление модального окна при правильном тесте
    $('.window_bckgr').css('display', 'block').click(function() {//по классу устанавливаем свойство стиля css и при клике запускаем функцию которая предшествует появлению модального окна
      $('.modal_content').css('display', 'none');//по классу устанавливаем свойство
      $('.window_bckgr').css('display', 'none');//аналогично
      $('#form-test input:checked').removeAttr('checked');//по классу удаляем свойство выбранного элемента(кнопка активна и светится др цветом)
    });
    $('.modal_result').html('Тест пройден').css('color', 'green');//при включенной функции goodResult по классу в html добавляем текст и свойство
    $('.modal_content').fadeIn(2000);//делаем видимыми элементы эффектом прзрачности
  }

   function poorResult(){
    $('.window_bckgr').css('display' , 'block').click(function(){
      $('.modal_content').css('display' , 'none');
      $('.window_bckgr').css('display' , 'none');
      $('#form-test input:checked').removeAttr('checked');
    });
    $('.modal_result').html('Тест не пройден').css('color' , 'red');
    $('.modal_content').fadeIn(2000);
  }

   $('#check_result').click(function(){//найденный элемент при клике запускает функцию проверки ответов
    var checkedAnswers = $('#form-test input:checked');//обьявляем переменную и присваеваем ей элемент из $коллекции с указаным атрибутом
    var correctAnswers = $('.correct');//в переменную правильных ответов добавляем элемент с классом из $коллекции
    if (checkedAnswers.length == correctAnswers.length) {//используем логический оператор для сравненияответов на правильность
      var correctNum = 0;//переменная для правильных ответов
      
      for(var k =0; k < checkedAnswers.length; k++) {//циклом проходим по ответам
        if(checkedAnswers[k].getAttribute('class') == 'correct') {//если(к ответу[к] применяем метод который вернет значение атрибута) и сделаем сравнение этого значения с классом на правильность
          correctNum++;//правильные ответы увеличиваем на 1
          }
        }
      if(correctNum == correctAnswers.length) {//сравниваем правильные ответы с переменной в которую записаны правельные ответы
        goodResult();//если равно включается функция тест пройден
      } else {
        poorResult();//иначе тест не пройден
      }
    } else {
      poorResult();//при других вариантах тест не пройден
    }
  });
}
});