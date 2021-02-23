sap.ui.define([
	"jquery.sap.global",
    "sap/ui/model/json/JSONModel",
	"sap/ui/core/mvc/Controller"
], function (jQuery,JSONModel, Controller) {
	"use strict";

	return Controller.extend("opademo.controller.Main", {
		_baseModel: new JSONModel(
	        { "operations": [
	          { operator: "+" },
	          { operator: "-" },
	          { operator: "*" },
	          { operator: "/" },
	        ] }
	      ),
	      _selectedOperator: null,
		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf opademo.view.Main
		 */
		onInit: function () {
			this.getView().setModel(this._baseModel, "mathOperations");
		},

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf opademo.view.Main
		 */
		//	onBeforeRendering: function() {
		//
		//	},
		
		
		onPress : function(oEvent) {
			var oBtn = oEvent.getSource();
			setTimeout(function() {
				oBtn.setText("I was clicked");
			}, 3000);
		//	oBtn.setText("I was clicked");
			oEvent="I was clicked";
		},
		
		onShowText: function(oEvent) {
			var inputValue = oEvent.getParameters().value;
			this.getView().byId("idText").setText("Eingegebener Name: " + inputValue);
		},
		
		onShowAge: function(oEvent) {
			var inputAge = oEvent.getParameters().value;
			this.getView().byId("idAgeText").setText("Eingegebener Alter: " + inputAge);
		},
		
		
      /**
      * Action which is activated, if the user selects an operator
      * Saves the selected operator in _selectedOperator
      **/
      onSelectOperator: function(oEvent) {
        this._selectedOperator = oEvent.getSource().getProperty("selectedKey");
      },
      /**
      * Action which is activated, if the user presses the calculator-button
      * Uses the operands to operate the calculation and saves the result in
      * the label with id "result".
      * Check the view for more Info: "../view/Calc.view.xml"
      **/
      onCalc: function(oEvent) {
        var operandA;
        var operandB;
        var result;
            operandA = this.getView().byId("operandA").getValue();
            operandB = this.getView().byId("operandB").getValue();
        	result = eval(Number(operandA) + this._selectedOperator + Number(operandB));
    		//result = Number(operandA) + this._selectedOperator + Number(operandB);
            //this.getView().byId("result").setText(result);
            
        // zuweisen des Models an das Overlay
               this.resultModel = new JSONModel();
               this.getView().setModel(this.resultModel, "result");
               this.resultModel.setData(result);
         
            this.calculate(operandA, operandB, this._selectedOperator);
      },
      
      //-------------------------------------------------------------
      calculate: function(operandA, operandB, operator) {

      	switch(operator){
			case "+":
				return this.add(operandA, operandB);
				break;
			case "-":
				return this.substract(operandA, operandB);
				break;
			case "*":
				return this.multiply(operandA, operandB);
				break;
			case "/":
				return this.divide(operandA, operandB);
				break;
			default:
				//return console.log("ERROR");
				return "ERROR";
				break;
		}
      	
      },
      
    	add:function(a, b) {
			return a + b; 
		},
		
		substract: function(a, b) {
			return a - b; 
		},
		
		divide: function(a, b) {
			if(b === 0){
				$('#validation').text('Attempt to divide by zero');
				return "error";
			}
			return a / b;
		},
		
		multiply: function(a, b) {
			return a * b;
		},
      
      
      
      
        //-------------------------------------------------------------

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf opademo.view.Main
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf opademo.view.Main
		 */
		//	onExit: function() {
		//
		//	}
		
		onOpenDialog: function(oEvent) {
			//console.log("opademo.Main --- onOpenDialog");
			// falls Dialog schon geöffnet vorher entfernen
            if (this._oDialog) {
                this._oDialog.destroy();
            }
			// Open the Table Setting dialog
            this._oDialog = sap.ui.xmlfragment("opademo.view.HelloDialog", this);
            this._oDialog.open();
		},
		
		 onCloseDialog: function() {
                this._oDialog.close();
            },
		

	});

});