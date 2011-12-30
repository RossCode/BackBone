define([
  'jquery', 
  'underscore', 
  'backbone',
  'models/projectlist',
  'views/projectListView',
  'views/projectView'
], function($, _, Backbone, ProjectList, ProjectListView, ProjectView){
    AppRouter = Backbone.Router.extend({
    	routes : {
    		"" : "defaultRoute",
    		"project/:id" : "viewProject" 
    	},
    	
    	init : function() {
    		this.eventManager = _.extend({}, Backbone.Events);
    		this.projects = new ProjectList();
    	},
    	
    	projects: null,
    	
    	defaultRoute : function() {
            var projectListView = new ProjectListView({
                collection : this.projects,
                eventManager: this.eventManager
            });
    	},
    	
    	viewProject : function(id) {
    		var project = this.projects.get(id);
    		var projectView = new ProjectView({
    			eventManager: this.eventManager,
    			model: project
    		});
    	}
    });
    
    return AppRouter;
});