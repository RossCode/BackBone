define([
  'backbone',
  'models/task'
], function (backbone, task) {
    var taskList = backbone.Collection.extend({
        model: task,
        url: function () {
            return "/projects/" + this.parent.get("id") + "/tasks";
        }
    });
    return taskList;
});
