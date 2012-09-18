define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/projectList.html',
  'models/project',
  'models/projectlist',
  'views/projectItemView'
], function ($, _, backbone, projectListTemplate, project, projectList, projectItemView) {
    var projectListView = backbone.View.extend({
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
            this.collection.each(function (proj) {
                var itemView = new projectItemView({
                    model: proj,
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
            var proj = new project({
                projectName: nameField.val()
            });
            proj.save();
            this.collection.add(proj);
            nameField.val("");
            nameField.focus();
        }
    });
    return projectListView;
});

