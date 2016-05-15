'use strict'
$(function(){
$('div.search-box input[type=text]').on('keydown', function (e) {
    if (e.which == 13) {
        $(this).parent().find('input[type=submit]').trigger('click');
        /*return false;*/
     }
});
$("#search-btn").click(function(){
$.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?",
{
tags: $("#searchtext").val(),
tagmode: "any",
format: "json"
},
function(data) {
$.each(data.items, function(i,item){
$("<img/>").attr("src", item.media.m).prependTo("#results");
if ( i == 10 ) return false;
});
});
});
});



function Human() {
    this.name = 'Jack';
    this.age = 35;
    this.gender = 'male';
    this.height = 180;
    this.weigt = 80
  };
  
  Human.prototype.worker = function toWork() {
    this.job = 'IT company';
    this.money = '500 $'
  };
  
  Human.prototype.student =  function watchinSerials() {
    this.study = 'Donetsk National Technical University',
    this.grant = '700 UAH'
  }
  
  var newWorker = new Human();
  newWorker.worker();
  console.log('newWorker.worker()',newWorker);
  
  var newStudent = new Human();
  newStudent.student();
  console.log('newStudent.student()',newStudent);

  
 
  

