sap.ui.define([
	"sap/ui/core/mvc/Controller", 
    "salesorders/util/Config",
    "sap/ui/model/json/JSONModel"

], function(Controller, Config, JSONModel) {
	"use strict";

	return Controller.extend("salesorders.controller.Items", {

		onInit : function() {
			jQuery.ajax({
				type: "GET",
				url : Config.serviceUrl + "/sap/opu/odata/sap/CFD_TSM_SALES_ORDER_MAINT_SRV/SalesOrderItemSet?$format=json",
				context: this
			}).done(function (data, textStatus, jqXHR) {
				var oModel = new JSONModel();
				oModel.setData({
					SalesOrderItemSet: data.d.results
				});
				this.getView().setModel(oModel, "items");
			});
		}
	});
});
