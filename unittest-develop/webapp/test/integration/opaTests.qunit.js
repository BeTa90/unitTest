/* global QUnit */

QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"opademo/test/integration/Journey"
	], function () {
		QUnit.start();
	});
});
