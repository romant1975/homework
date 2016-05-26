define(
   'Controller',
    ['jquery'],

        function ($) {

            function Controller(model, view) {   //взаимодействие с пользователем
                var self = this;  //сохраняем контент
                var index = 0;    //начальное значение index (пустой input)
                
                view.elements.input.keypress(function(e) {  //добавление нового пункта из input кнопкой 'Enter'
                if (e.which === 13) {                       //если нажали 'Enter' 
                    view.elements.addBtn.click();           //срабатывает button 'Add'
                };
                e.stopPropagation();                        //прекращаем работу функции
            });

            view.elements.addBtn.on('click', addItem);  //обработчик событий по клику на кнопку добавляет в view
            view.elements.listContainer.on('click', '.item-delete', removeItem);  //удаляет по клику пункты со страницы
            view.elements.listContainer.on('dblclick', '.item-text', editItem);   //добавляет по двойному клику пункт на страницу

            
            function addItem() {    //добавление новых элементов из input
                var newItem = view.elements.input.val();   //получение значения из input
                if (view.elements.addBtn.html() == 'Add') {  //если сработала команда добавить
                    model.addItem(newItem);                  //то показать обновленную страницу

                } else {                                     //в другом случае
                    view.elements.addBtn.html('Add');        //при нажтии кнопки 'Add'
                    model.editItem(index, view.elements.input.val()); //добавить новый пункт на страницу
                }
                view.renderList(model.data);          //отрендерить обновленный model
            
                view.elements.input.val('');          //очищаем input
            };

            function removeItem() {   //удаление пунктов со страницы
                var item = $(this).attr('data-value');  //вытягиваем значение по атрибуту
                model.removeItem(item);        //удаление значения из model
                view.renderList(model.data);   //отрендерить обновленный model
            };

            function editItem() {  //редактировать записи
                index = $(this).parent().index(); //получаем прямого 'родителя' 
                view.elements.input.val(model.data[index]).focus(); //вызываем событие для редактируемого пункта в input
                view.elements.addBtn.html('Edit'); //кнопкой добавляем отредактированный пункт
            
            }
        };
        return Controller
    }
);