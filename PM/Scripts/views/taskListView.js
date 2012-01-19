
define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/taskList.html',
  'models/task',
  'views/taskView'
], function ($, _, Backbone, taskListTemplate, Task, TaskView) {
    var TaskListView = Backbone.View.extend({

        initialize: function (options) {
            this.eventManager = options.eventManager;
            this.collection.bind('all', this.render, this);
            this.collection.fetch();
        },

        template: _.template(taskListTemplate),

        render: function () {
            $(this.el).html(this.template);
            this.collection.each(function (task) {
                var itemView = new TaskView({
                    model: task,
                    eventManager: this.eventManager
                });
                $('#taskTable').find('tbody').append(itemView.render().el);
            });
            return this;
        }
    });

    return TaskListView;
});