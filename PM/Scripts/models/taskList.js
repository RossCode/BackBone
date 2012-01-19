define([
  'backbone',
  'models/task'
], function (Backbone, Task) {
    TaskList = Backbone.Collection.extend({
        model: Task,
        url: function () {
            return "/projects/" + this.parent.get("id") + "/tasks";
        }
    });

    return TaskList;
});
