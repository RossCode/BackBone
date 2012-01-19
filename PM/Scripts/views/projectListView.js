define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/projectList.html',
  'models/project',
  'models/projectlist',
  'views/projectItemView'
], function ($, _, Backbone, projectListTemplate, Project, ProjectList, ProjectItemView) {
    ProjectListView = Backbone.View.extend({
        el: $('#projectList'),
        events: {
            "keyup #project_name": "detectNewProjectEnter",
            "click #add": "addProject"
        },

        initialize: function (options) {
            this.eventManager = options.eventManager;
            this.collection.bind('all', this.render, this);
        },

        template: _.template(projectListTemplate),

        render: function () {
            $('#project-list').html('');
            $(this.el).html(this.template);
            this.collection.each(function (project) {
                var itemView = new ProjectItemView({
                    model: project,
                    eventManager: this.eventManager
                });
                $('#project-list').append(itemView.render().el);
            });
        },

        detectNewProjectEnter: function (event) {
            if (event.keyCode === 13) {
                $("#add").trigger("click");
            }
        },

        addProject: function () {
            var nameField = $("#project_name");
            var project = new Project({
                projectName: nameField.val()
            });
            project.save();
            this.collection.add(project);
            nameField.val("");
            nameField.focus();
        }
    });

    return ProjectListView;
});

