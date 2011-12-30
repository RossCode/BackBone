define([
  'jquery', 
  'underscore', 
  'backbone',
  'appRouter'
], function($, _, Backbone, AppRouter){
    var App = {
        init : function() {
        	var appRouter = new AppRouter();
        	appRouter.init();
        	Backbone.history.start();
        }
    };

    return {
        init: App.init
    };
});

