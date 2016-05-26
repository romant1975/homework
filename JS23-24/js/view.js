define(
  'View',
  ['jquery'],

    function ($) {

        function View(model) {   //принимает данные из блока Model и выводит в браузер(на страницу)
          var self = this;       //сохраняем контекст

          function init() {      //вставка шоблонизатора(каркаса) на страницу(выводим один раз)
            var wrapper = tmpl($('#wrapper-template').html());   // шаблон и контент из шаблона
            $('body').append(wrapper);   //поиск с помощью jquery body и вставляем в него шаблон

            self.elements = {            //сохраняем ссылки на DOM элементы которые отвечают за кнопку и инпут и список
              input: $('.item-value'),   //находим с помощью Jquery input
              addBtn: $('.item-add'),    //находим кнопку
              listContainer: $('.item-list')  //находим ul в который будем вставлять список
            };
            self.renderList(model.data);      //изначально отрендерим список на загрузке
          }

          self.renderList = function (data) {   //рендерим список который меняется
            var list = tmpl($('#list-template').html(), {data: data});  //генерируем пункты li(шаблонизатором)
            self.elements.listContainer.html(list);  //вставляем пункты на страницу
          };

          init();  // вызов метода init
        };
        return View  //возвращаем модуль
    }
);