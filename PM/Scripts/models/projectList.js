define([
  'backbone',
  'models/project'
], function(backbone, project) {
    var projectList = backbone.Collection.extend({
        model: project,
        url : "/projects"
    });
    return projectList;
});
