define([
  'jquery', 
  'underscore', 
  'backbone',
  'text!templates/project.html',
  'models/project'
], function($, _, Backbone, projectTemplate, Project){
	ProjectView = Backbone.View.extend({
		el: "#project",
		
		template: _.template(projectTemplate),
		
		initialize : function(options) {
			this.eventManager = options.eventManager;
			this.render();
		},
		
		render : function() {
			var projectInfo = { project_name : this.model.get('projectName') };
            $(this.el).html(this.template(projectInfo));
		},
	});
	return ProjectView;
});