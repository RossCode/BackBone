define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/task.html',
  'models/task'
], function ($, _, Backbone, taskTemplate, Task) {
    var TaskView = Backbone.View.extend({
        el: "<tr>",

        template: _.template(taskTemplate),

        initialize: function (options) {
            this.eventManager = options.eventManager;
        },

        render: function () {
            var taskInfo = {
                title: this.model.get('title'),
                description: this.model.get('description'),
                priority: this.model.get('priority'),
                isCompleted: this.model.get('isCompleted')
            };
            $(this.el).html(this.template(taskInfo));
            return this;
        }
    });
    return TaskView;
});