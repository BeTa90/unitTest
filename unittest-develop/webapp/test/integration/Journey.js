/*global QUnit, opaTest*/

sap.ui.define([
	"sap/ui/test/opaQunit",
	"./pages/mainpage"
], function () {
	"use strict";

	QUnit.module("Navigation");

	//----------- TEST 1 ---------------
	opaTest("I am testing a journey to click button and see if text is changed or not",
		function(Given, When, Then) {
			// Vorbedingung
			Given.iStartMyUIComponent({
				componentConfig: {
					name: "opademo"
				}
			});
			When.onTheAppPage.clickOnMyButton();
			Then.onTheAppPage.checkTextIfChanged();
		}
	);
	//----------- TEST 2 ---------------
	opaTest("I am testing my Inputfield if set name Betül Muslu",
		function(Given, When, Then) {
			When.onTheAppPage.setInputName();
			Then.onTheAppPage.checkIfInputSet();
		}
	);
	//----------- TEST 3 ---------------
	opaTest("I am testing my Inputfied if set age 123",
		function(Given, When, Then) {
			When.onTheAppPage.setInputAge();
			Then.onTheAppPage.checkIfInputAgeSet();
		}
	);
	//----------- TEST 4 ---------------
	opaTest("I am testing my Calculator",
		function(Given, When, Then) {
			When.onTheAppPage.iEnterAnOperandInTheLeftInputField();
		    When.onTheAppPage.iSelectAnOperator();
		    When.onTheAppPage.iEnterAnOperandInTheRightInputField();
		    When.onTheAppPage.iPressTheCalculatorButton();
			Then.onTheAppPage.iShouldGetAnResult();
		}
	);
	//----------- TEST 5 ---------------
	opaTest("I am testing my HelloDialog",
		function(Given, When, Then) {
			When.onTheAppPage.iPressTheSayHelloWithDialogButton();
			Then.onTheAppPage.iShouldSeeTheHelloDialog();
		}
	);
});
