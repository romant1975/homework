'use strict;'
$(function(){
	
	$('.news__accordion h4:first').addClass('active');//выбранным элементам присваиваем класс
	$('.news__accordion p:not(:first)').hide();// прячем совпавшие элементы

	$('.news__accordion h4').click(function(){ //при клике на элементе активируется функция
		$(this).next('p').slideToggle('slow')//Скрывает/раскрывает все параграфы используя эффект «скольжения» вниз и вверх, длительность анимации — 600 миллисекунд.
		.siblings('p:visible').slideUp('slow');//Получаем набор элементов, содержащий все уникальные родственные элементы и скрывает все элементы набора, используя эффект изменения высоты элементов
		$(this).toggleClass('active');// Добавляет указанный класс к элементу
		$(this).siblings('h4').removeClass('active');//Удаляет все или указанный(е) класс(ы) из набора совпавших элементов.
	});

});
;'use strict'
$(function(){
    // если браузер не поддерживает CSS3 анимацию - мы будем показывать сообщение об этом
    if (! flux.browser.supportsTransitions) {
        $('#warn').text('Необходим браузер который поддерживает CSS3 анимацию').show();
    }
 
    window.mf = new flux.slider('#slider', {
        autoplay: true,
        pagination: true,
        delay: 5000
    });
 
    // binding onclick events for our transitions
    $('.transitions').bind('click', function(event) {
        event.preventDefault();
 
        // если браузер не поддерживает 3D эффекты - мы будем показывать сообщение об этом
        if ($(event.target).closest('ul').is('ul#trans3d') && ! flux.browser.supports3d) {
            $('#warn').text("The '"+event.target.innerHTML+"' Необходим браузер который поддерживает 3D эффекты");
            $('#warn').animate({
              opacity: 'show'
            }, 1000, '', function() {
                $(this).animate({opacity: 'hide'}, 1000);
            });
            return;
        }
 
        // using custom transition effect
        window.mf.next(event.target.id);
    });
 
    $('#controls').bind('click', function(event) {
        event.preventDefault();
 
        var command = 'window.mf.'+event.target.id+'();';
        eval(command);
    });
});