define([
  'backbone'
], function(backbone) {
    var task = backbone.Model.extend({
        defaults : {
            title: null,
            isCompleted: false,
            description : null,
            priority : 1,
            project: null
        }
    });
    return task;
});
