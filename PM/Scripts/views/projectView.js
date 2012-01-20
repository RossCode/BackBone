define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/project.html',
  'models/project',
  'models/TaskList',
  'views/taskListView'
], function ($, _, Backbone, projectTemplate, Project, TaskList, TaskListView) {
    ProjectView = Backbone.View.extend({
        el: $("#project"),

        template: _.template(projectTemplate),

        events: {
            "click .delete": "deleteProject"
        },

        initialize: function (options) {
            this.eventManager = options.eventManager;
            this.model.bind("destroy", this.close, this);
        },

        render: function () {
            var projectInfo = { project_name: this.model.get('projectName') };
            $(this.el).html(this.template(projectInfo));
            this.model.tasks = new TaskList();
            this.model.tasks.parent = this.model;
            this.model.tasks.fetch();
            var taskListView = new TaskListView({
                eventManager: this.eventManager,
                collection: this.model.tasks
            });

            $("#tasks").html(taskListView.render().el);
            return this;
        },

        close: function () {
            $(this.el).unbind();
            $(this.el).empty();
        },

        deleteProject: function () {
            this.model.destroy();
        }

    });
    return ProjectView;
});