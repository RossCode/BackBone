define([
  'jquery', 
  'underscore', 
  'backbone',
  'text!templates/projectList.html',
  'text!templates/projectItem.html',
  'models/projectlist',
  'views/projectView'
], function($, _, Backbone, projectListTemplate, projectItemTemplate, ProjectList, ProjectView){
    var App = {
        Views : {},
        Projects : null,
        init : function() {
            App.Projects = new ProjectList();
            App.Views.ProjectView = new ProjectView({
                collection : App.Projects
            });
        }
    };

    return {
        init: App.init
    };
});

