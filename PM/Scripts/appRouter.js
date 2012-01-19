define([
  'jquery',
  'underscore',
  'backbone',
  'models/projectlist',
  'views/projectListView',
  'views/projectView'
], function ($, _, Backbone, ProjectList, ProjectListView, ProjectView) {
    AppRouter = Backbone.Router.extend({
        routes: {
            "": "list",
            "project/:id": "viewProject"
        },

        init: function () {
            this.eventManager = _.extend({}, Backbone.Events);
            this.eventManager.bind("projectDestroyed", "navigateToList");
        },

        navigateToList: function () {
            this.navigate("", false);
        },

        list: function () {
            this.projects = new ProjectList();
            this.projectListView = new ProjectListView({
                collection: this.projects,
                eventManager: this.eventManager
            });
            var self = this;
            this.projects.fetch({
                success: function () {
                    if (self.requestedId) self.viewProject(self.requestedId);
                }
            });
        },

        viewProject: function (id) {
            if (this.projects) {
                this.project = this.projects.get(id);
                if (this.projectView) this.projectView.close();
                this.projectView = new ProjectView({
                    eventManager: this.eventManager,
                    model: this.project
                });
                this.projectView.render();
            } else {
                this.requestedId = id;
                this.list();
            }
        }
    });

    return AppRouter;
});