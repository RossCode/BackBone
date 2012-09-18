define([
  'jquery',
  'underscore',
  'backbone',
  'models/projectlist',
  'views/projectListView',
  'views/projectView'
], function ($, _, backbone, projectList, projectListView, projectView) {
    var appRouter = backbone.Router.extend({
        routes: {
            "": "list",
            "project/:id": "viewProject"
        },

        init: function () {
            this.eventManager = _.extend({}, backbone.Events);
        },

        navigateToList: function () {
            this.navigate("", false);
        },

        list: function () {
            this.projects = new projectList();
            this.projectListView = new projectListView({
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
                this.projectView = new projectView({
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
    return appRouter;
});