define([
  'backbone',
  'models/task'
], function(Backbone, Task){
    TaskList = Backbone.Collection.extend({
        model: Task
    });

    return TaskList;
});
