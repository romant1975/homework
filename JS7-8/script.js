$(function(){                //отслеживаем всю загруженную страницу html(DOM)
    $(".tabs").lightTabs();  //находим элемент с классом .tabs и подключаем к нему функцию
    $("input").myInput();   // находит элементы и подключает к ним функцию
    
});
(function($){               
    $.fn.lightTabs = function(options){   //$прототип

        var createTabs = function(){
            tabs = this;
            i = 0;
            
            showPage = function(i){                                //функция
                $(tabs).children("div").children("div").hide();           //поиск в tabs детей детей div и применяем к ним эффект который скрывает совпавшие элементы
                $(tabs).children("div").children("div").eq(i).show();      // сокращаем число совпавших элементов до одного и отображает его
                $(tabs).children("ul").children("li").removeClass("active");  //удаляет созданный класс для ли
                $(tabs).children("ul").children("li").eq(i).addClass("active"); //у совпавшего одного элемента создает класс
            }
                                
            showPage(0);         //вызов функции и передача аргумента       
            
            $(tabs).children("ul").children("li").each(function(index, element){ //выполняет функцию для каждого элемента
                $(element).attr("data-page", i); //получение доступа к свойству первого совпавшего элемента
                i++;    //итерация элементов ли                    
            });
            
            $(tabs).children("ul").children("li").click(function(){ //для детей ул применяет событие клик
                showPage(parseInt($(this).attr("data-page"))); // преобразует в строки в числа?
            });             
        };      
        return this.each(createTabs); //возвращает эту функцию для каждого элемента div и ли
    };

    $.fn.myInput = function(options){  //прототип функции  $ 
        this.on({     //в этой функции применяем
        mouseenter: function(){      //назначает функцию к событию активируется единожды когда курсор наводится на форму
            $(this).css("background-color", "lightgray"); //в этой функции выполняется изменение css свойства
            $(this).after( $( "<span>"+$(this).data("title")+"</span>" ) ); //вставляет контент
            $("span").addClass("myTitle"); //присваевает класс
        },
        mouseleave: function(){   // назначает функцию к событию когда курсор покидает форму выполняется единожды
            $(this).css("background-color", "#ffffff"); //изменяет css свойство
            $("span").remove(); //удаляет подсказку
        },
        click: function(){ //назначает функцию к событию при клике
            $(this).css("background-color", "yellow"); //изменяет свойство
            $("span").remove(); //скрывает подсказку
        }
    });
    };


    
})(jQuery);