$(function() {
    Project = Backbone.Model.extend({
        defaults: {
            name: null,
            tasks: new TaskList()
        }
    });
});
