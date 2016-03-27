var test = {
  mainDivas: document.body,
  doc: document,

  tagCreatorDiv: function() {
    bigDiv = this.doc.createElement('div');
    bigDiv.classList.add('test_js');
    this.mainDivas.appendChild(bigDiv);
  },

  tagCreatorH1: function() {
    nameTest = this.doc.createElement('h1');
    nameTest.classList.add('title');
    nameTest.innerHTML = 'Тест по программированию';
    bigDiv.appendChild(nameTest);
  },

  creatingBlock: function() {
    var index = 0;
    
    for (var i = 0; i < 3; i++) {
      index++;
      var string = '';
      var liIndex = 0;

      for (var k = 0; k < 3; k++) {
        liIndex++;
        string += "<li>" +
                  "<label class=\"menuLi\">"+
                  "<input type='checkbox'>"+
                   "Вариант ответа №" + 
                   liIndex +
                   "</label></li>";
      }

      var nameUl = this.doc.createElement('ul');
      nameUl.classList.add('menu');
      nameUl.innerHTML = "Вопрос №" + index + string;
      bigDiv.appendChild(nameUl);
    }

  },

  tagCreatorButton: function() {
    var button, text;
    text = 'Проверить';
    button = this.doc.createElement('button');
    button.type = "submit";
    button.classList.add("button-input");
    button.appendChild(this.doc.createTextNode(text));
    bigDiv.appendChild(button);
  },

  runMagic: function() {
    test.tagCreatorDiv();
    test.tagCreatorH1();
    test.creatingBlock();
    test.tagCreatorButton();
  },

}
test.runMagic();