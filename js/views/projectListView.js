define([
  'jquery', 
  'underscore', 
  'backbone',
  'text!templates/projectList.html',
  'models/project',
  'models/projectlist',
  'views/projectItemView'
], function($, _, Backbone, projectListTemplate, Project, ProjectList, ProjectItemView){
    ProjectListView = Backbone.View.extend({
        el : $('#projectList'),
        events: {
            "keyup #project_name": "detectNewProjectEnter",
            "click #add": "addProject"
        },

        initialize : function(options) {
        	this.eventManager = options.eventManager,
            this.collection.bind('add', this.addProjectToView, this);
            this.eventManager.bind("projectClicked", this.projectClicked)
            
            this.render();
        },

		projectClicked: function(project) {
			alert("project clicked: " + project.get('projectName'));
		},
		
		template : _.template(projectListTemplate),

        render : function(){
            $(this.el).html(this.template);
            _(this.collection).each(function(project){
                addProjectToView(project);
            }, this);
        },

        detectNewProjectEnter : function(event) {
            if (event.keyCode === 13) {
                $("#add").trigger("click");
            }
        },

        addProject : function() {
            var nameField = $("#project_name");
            var project = new Project({ 
            	projectName : nameField.val(),
            	id : this.collection.length + 1 
           	});
            this.collection.add(project);
            nameField.val("");
            nameField.focus();
        },

        addProjectToView : function(project) {
            var itemView = new ProjectItemView({
            	model: project,
            	eventManager: this.eventManager
           	});
            $('#project-list').append(itemView.render().el);
        }
    });

    return ProjectListView;
});

