define([
  'backbone'
], function(Backbone){
    Task = Backbone.Model.extend({
        defaults : {
            title: null,
            isCompleted: false,
            description : null,
            priority : 1,
            project: null
        }
    });

    return Task;
});
