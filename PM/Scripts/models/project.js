define([
  'backbone',
  'models/taskList'
], function (backbone, taskList) {
    var project = backbone.Model.extend({
        defaults: {
            projectName: null,
            tasks: new taskList()
        },

        url: function () {
            if (this.id > 0) {
                return "/projects/" + this.id;
            }
            return "/projects";
        }
    });
    return project;
});
