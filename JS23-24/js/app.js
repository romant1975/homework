requirejs.config({
    paths: {
        'jquery': 'https://code.jquery.com/jquery-1.12.4.min',
        'tmpl': 'tmpl'
    },
    shim: {
        'jquery': {
            exports:'jQuery'
        },
        'template': {
            exports: 'tmpl'
        }
    }
});

require(['jquery', 'tmpl', 'Model', 'View', 'Controller'],


    function ($, tmpl, Model, View, Controller) {
      
        $(function () {
            var firstToDoList = ['Test1', 'Test2', 'Test3'];  //инициилизируем массив
            var model = new Model(firstToDoList);  //создаем новый экземпляр блока model и передаем в него данные
            var view = new View(model);  //создаем новый экземпляр view и передаем в него model
            var controller = new Controller(model, view);  //создаем новый экземпляр controller и передаем в него model, view
        });
    }
);