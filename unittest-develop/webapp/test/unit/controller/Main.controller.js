/*global QUnit*/
sap.ui.require([
		"opademo/controller/Main.controller"
	],
	function (Controller) {
		"use strict";

/*		QUnit.module('Simple test');
		QUnit.test('Just for Fun', function (assert) {
			var actual = '1';
			var expected = 1;
			assert.ok(actual == expected, 'my first test passed'); //PUNKT 1 (wenn das erste Argument wahr ist )
			assert.ok("" == 0, 'Test will pass'); //PUNKT 1 
		});

		QUnit.module('Test for Module 2');
		QUnit.test('We are testing equaliy asserts', function (assert) {
			var actual = 1;
			var expected = 1;
			assert.equal(actual, expected, 'Actual and Ecpexted was same'); //PUNKT 2 (Vergleichen von zwei Parametern (VALUE))
			assert.equal("", 0, 'Blank is equals to zero - non strict'); //PUNKT 2
			assert.strictEqual("", 0, 'Also compare the data type of values'); //PUNKT 3 (Vergleichen von zwei Parametern (VALUE und TYPE))
		});

		QUnit.module('Test for Module 3');
		QUnit.test('We are testing equaliy asserts', function (assert) {
			var emp = {
				foo: "btlTest"
			};
			assert.deepEqual(emp, {foo: "btlTest"}, 'Just doing object comparision if both are objects'); //PUNKT 4 (Vergleicht Array-Elemente und Objekte )
		});

		QUnit.module('Test for Module 4');
		QUnit.test('Testing Timer', function (assert) {
			var jumpingJack = assert.async();
			setTimeout(function () {
				assert.ok(1 == 1, "My Asynchronous test");
				//jumpingJack();
			}, 3000);
		});*/
		
		
		QUnit.module('TEST oMainController');
		QUnit.test('I should test the Main controller', function (assert) {
			var oMainController = new Controller();
			//oMainController.onInit();
			//assert.ok(oMainController);
			assert.equal(oMainController.calculate(1,1,"+"), 2); 
			assert.equal(oMainController.calculate(5,2,"-"), 3);
			assert.equal(oMainController.calculate(3,2,"*"), 6);
			assert.equal(oMainController.calculate(12,3,"/"), 4);
		 });
		 
		
		
	}

);