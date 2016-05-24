var app = require('../js/app.js');

describe("pow", function() {
  it("It should call pow", function() {
    //prepare (приготовление к тесту (создание перемменых, подгрузка необходимых данных))
   var result;
  	// act (вызываем тестируемый метод)
    result = app.pow(4, 3);
  	//assert (проверка)
    expect(result).toBe(64);
  });
   it("It should call pow", function() {
  	//prepare 
    var result;
  	// act 
    result = app.pow(1, 3);
  	//assert 
    expect(result).not.toBeUndefined();
  });
 
  
  it ("It should call pow", function () {
    //prepare
    var result;
    //act
    result = app.pow(0, 0);
    //assert
    expect(result).toBeDefined();
  });
});