define([
  'backbone',
  'models/taskList'
], function(Backbone, TaskList){
    Project = Backbone.Model.extend({
        defaults: {
            projectName: null,
            tasks: new TaskList()
        }
    });

    return Project;
});
