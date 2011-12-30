define([
  'backbone'
], function(Backbone){
    Task = Backbone.Model.extend({
        defaults : {
            title: null,
            isCompleted: false
        }
    });

    return Task;
});
