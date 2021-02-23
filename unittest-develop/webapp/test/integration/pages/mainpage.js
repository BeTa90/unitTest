sap.ui.define([
	"sap/ui/test/opaQunit",
	"sap/ui/test/Opa5",
	"sap/ui/test/actions/Press",
	"sap/ui/test/actions/EnterText",
	"sap/ui/test/matchers/Properties",
    "sap/ui/test/matchers/Ancestor"
], function (opaQunit, Opa5, Press, EnterText, Properties, Ancestor) {
	"use strict";

	//Parameterobjekte (page-object gekapselt)
	Opa5.createPageObjects({
		// Methode die in CalcJourney aufgerufen wird
		onTheAppPage: {
		 	//-------------------------------------
			//-------------WHEN--------------------
			//-------------------------------------
		 	actions: {
		 		//click on the button
		 		clickOnMyButton: function() {
		 			return this.waitFor({
		 				viewName: "Main",
		 				id: "anubhavBtn",
		 				viewNamespace : "opademo.view.",
		 				timeout : 0,
		 				success: function(oBtn) {
		 					oBtn.$().trigger("tap");
		 				},
		 				errorMessage: "Could not find the button on page journey"
		 			});
		 		},
		 		// set Name "Betül Muslu"
		 		setInputName: function() {
		 			return this.waitFor({
		 				viewName: "Main",
		 				id: "idInput",
		 				viewNamespace : "opademo.view.",
		 				timeout : 0,
		 				controlType: "sap.m.Input",
		 				success: function(oInput) {
		 					oInput.getFocusDomRef().focus();
		 				},
		 				errorMessage: "Input (NAME) nicht gefunden"
		 			});
		 		},
		 		// set Age "123"
		 		setInputAge: function() {
		 			return this.waitFor({
		 				viewName: "Main",
		 				id: "idAgeInput",
		 				viewNamespace : "opademo.view.",
		 				timeout : 0,
		 				controlType: "sap.m.Input",
		 				success: function(oInput) {
		 					oInput.getFocusDomRef().focus();
		 				},
		 				errorMessage: "Input (AGE) nicht gefunden"
		 			});
		 		},
		 		
		 		//CALCULATOR
		 		//OPERAND A EINGABE
		 		iEnterAnOperandInTheLeftInputField: function () {
					return this.waitFor({
					    id: "operandA",
					    viewName: "Main",
		 				viewNamespace : "opademo.view.",
		 				// Operand a eingabe = 1
					    actions: [new EnterText({ text: "1" })],
					    success: function() {
		 				//	console.log("Wert 1 wurde eingegeben !");
		 				},
						// Fehler der im Fehlerfall geworfen wird.
						errorMessage: "Wert konnte nicht eingegeben werden!"
					});
				},
				
				//OPERATOR AUSWÄHLEN
				iSelectAnOperator: function () {
					return this.waitFor({
						id: "operator",
						viewName: "Main",
		 				viewNamespace : "opademo.view.",
						actions: new Press(),
						// Item[0] = '+'
						success: function(oSelect){
							var oSelectItem = oSelect.getItems()[0].getText();
							oSelect.setValue(oSelectItem);
						//	console.log("Operator ausgewählt: " + oSelectItem);
						},
						errorMessage: "Der Wert konnte nicht ausgewählt werden!"
					});
				},
				
				// OPERAND B EINGABE
				iEnterAnOperandInTheRightInputField: function () {
					return this.waitFor({
						id: "operandB",
						viewName: "Main",
		 				viewNamespace : "opademo.view.",
		 				// Operand a eingabe = 2
						actions: [new EnterText({ text: "2"	})],
						errorMessage: "Der Wert konnte nicht eigegeben werden"
					});
				},
				
				//BUTTON EVENT (ERGEBNIS)
				iPressTheCalculatorButton: function () {
					return this.waitFor({
						id: "Calc",
						viewName: "Main",
		 				viewNamespace : "opademo.view.",
		 				// press event wird gestartet
						actions: new Press(),
						errorMessage: "Der Button zur Berechnung konnte nicht geklickt werden"
					});
				},
		 		
		 		// HELLO DIALOG BUTTON
		 		iPressTheSayHelloWithDialogButton: function () {
					return this.waitFor({
						viewName: "Main",
		 				id: "dialogBtnId",
		 				viewNamespace : "opademo.view.",
		 				timeout : 0,
						controlType: "sap.m.Button",
						success: function (aButtons) {
							aButtons.$().trigger("tap");
						},
						errorMessage: "HelleDialog Button nicht gefunden !"
					});
				}
		 	},
		 	
		 	
		 	//-------------------------------------
			//-------------THEN--------------------
			//-------------------------------------
		 	assertions: {
		 		
		 		//check if the label was changed or not
		 		checkTextIfChanged: function() {
		 			return this.waitFor({
		 				viewName: "Main",
		 				id: "anubhavBtn",
		 				viewNamespace : "opademo.view.",
		 				timeout : 0,
		 				matchers: new sap.ui.test.matchers.PropertyStrictEquals({
		 					name: "text",
		 					value: "I was clicked"
		 				}),
		 				success: function(oBtn) {
		 					QUnit.assert.ok(true, "Button text was successfully changed");
		 				},
		 				errorMessage: "checkTextIfChanged - OMG Something wrong in your App"
		 			});
		 		},
		 		
		 		// check if set the Name 'Betül Muslu'
		 		checkIfInputSet: function() {
		 			return this.waitFor({
		 				viewName: "Main",
		 				id: "idInput",
		 				viewNamespace : "opademo.view.",
		 				timeout : 0,
		 				actions : new EnterText({
					        text: "Betül Muslu",
					        keepFocus: true
					        //submit: "onShowText"
					    }),
		 				success: function(oBtn) {
		 					//Enter
		 					oBtn.fireSubmit();
		 					QUnit.assert.ok(true, "Set Name 'BETÜL MUSLU' !");
		 				},
		 				errorMessage: "checkIfInputSet - OMG Something wrong in your App"
		 			});
		 		},
		 		
		 		// check if set the Age '123'
		 		checkIfInputAgeSet: function() {
					return this.waitFor({
		 				viewName: "Main",
		 				id: "idAgeInput",
		 				viewNamespace : "opademo.view.",
		 				timeout : 0,
		 				actions : new EnterText({
					        text: "123",
					        keepFocus: true
					        //submit: "onShowText"
					    }),
		 				success: function(oBtn) {
		 					//Enter
		 					oBtn.fireSubmit();
		 					QUnit.assert.ok(true, "Set age '123' !");
		 				},
		 				errorMessage: "checkIfInputSet - OMG Something wrong in your App"
		 			});
		 		},
		 		
		 		//check if calc-Button Press
		 		iShouldGetAnResult: function () {
					return this.waitFor({
						id: "result",
						viewName: "Main",
		 				viewNamespace : "opademo.view.",
						success: function (resultObj) {
							// we set the view busy, so we need to query the parent of the app
							var isResultCorrectlyFilled = resultObj.getText() == "3" ? true: false;
							if (!isResultCorrectlyFilled) {
								Opa5.assert.ok(false, "Error");
							}	else {
								Opa5.assert.ok(true, "Success");
							}
						},
						errorMessage: "Es gab einen Fehler beim Lesen der Kalkulation"
					});
				},
	
		 		//check if Hello Dialog Button click
		 		iShouldSeeTheHelloDialog: function () {
					return this.waitFor({
						controlType: "sap.m.Dialog",
						success: function () {
							// we set the view busy, so we need to query the parent of the app
							Opa5.assert.ok(true, "The dialog is open");
						},
						errorMessage: "Did not find the dialog control"
					});
				}
		 	
		 	}
		}
	});
});
