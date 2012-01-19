define([
  'backbone',
  'models/project'
], function(Backbone, Project){
    ProjectList = Backbone.Collection.extend({
        model: Project,
        url : "/projects"
    });
    
    return ProjectList;
});
