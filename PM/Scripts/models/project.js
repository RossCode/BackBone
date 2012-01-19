define([
  'backbone',
  'models/taskList'
], function (Backbone, TaskList) {
    Project = Backbone.Model.extend({
        defaults: {
            projectName: null,
            tasks: new TaskList()
        },

        url: function () {
            if (this.id > 0) {
                return "/projects/" + this.id;
            }
            return "/projects";
        }
    });

    return Project;
});
