 'use strict'
function GoogleCallback (func, data) {
    window[func](data);
}
var doc = document;
$(function(){
  $('.google').submit(function(){
    
     var request = $('#settings').val();

    $.ajax ({
      url: 'http://ajax.googleapis.com/ajax/services/search/web?v=1.0&key=ABQIAAAACKQaiZJrS0bhr9YARgDqUxQBCBLUIYB7IF2WaNrkYqF0tBovNBQFDtM_KNtb3xQxWff2mI5hipc3lg&rsz=large&q='
            + request + '&callback=GoogleCallback&context=?',
      dataType: 'jsonp',
      success: function(data){
        var ul = doc.createElement("ul");
        $.each(data.results, function(i, val){
          var li = doc.createElement("li");
          li.innerHTML = '<a href="'+val.url+'" title="'+val.url+'" target="_blank">'+val.title+"</a><p class='links'>"
                  +val.url+"</p><p class='content'>"+val.content+"</p>";                          
          ul.appendChild(li);
        });
        $('.google_result').html(ul);
      }
    });
  });
});





