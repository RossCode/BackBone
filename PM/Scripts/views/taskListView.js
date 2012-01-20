
define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/taskList.html',
  'text!templates/noTasks.html',
  'models/task',
  'views/taskView'
], function ($, _, Backbone, taskListTemplate, noTasks, Task, TaskView) {
    var TaskListView = Backbone.View.extend({

        initialize: function (options) {
            this.eventManager = options.eventManager;
            this.collection.bind('all', this.render, this);
        },

        template: _.template(taskListTemplate),

        render: function () {
            if (this.collection.length > 0) {
                $(this.el).html(this.template);
                this.collection.each(function (task) {
                    var itemView = new TaskView({
                        model: task,
                        eventManager: this.eventManager
                    });
                    $('#taskTable').find('tbody').append(itemView.render().el);
                });
            } else {
                $(this.el).html(noTasks);
            }
            return this;
        }
    });

    return TaskListView;
});