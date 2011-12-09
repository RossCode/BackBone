define([
  'backbone',
  'models/taskList'
], function(Backbone, TaskList){
    Project = Backbone.Model.extend({
        defaults: {
            name: null,
            tasks: new TaskList()
        }
    });

    return Project;
});
