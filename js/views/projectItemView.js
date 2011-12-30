define([
  'jquery', 
  'underscore', 
  'backbone',
  'text!templates/projectItem.html',
  'models/project',
], function($, _, Backbone, projectItemTemplate, Project){
    ProjectItemView = Backbone.View.extend({
        template : _.template(projectItemTemplate),
		
		tagName: "li",
		
		events : {
			"click li": "projectClicked"
		},
		
		projectClicked : function() {
			this.eventManager.trigger("projectClicked", this.model);
			$(this.el).addClass("selected");
		},
		
		initialize : function(options) {
			this.eventManager = options.eventManager;
		},
		
		render : function(){
        	var projectInfo = { 
        		project_name : this.model.get('projectName'),
        		project_id : this.model.get('id')
        	};
            $(this.el).html(this.template(projectInfo));
            return this;
        }
    });

    return ProjectItemView;
});

