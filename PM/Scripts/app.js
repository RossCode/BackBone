define([
  'jquery', 
  'underscore', 
  'backbone',
  'appRouter'
], function($, _, backbone, appRouter){
    var app = {
        init : function() {
        	var router = new appRouter();
        	router.init();
        	backbone.history.start();
        }
    };

    return {
        init: app.init
    };
});

