define([
  'jquery', 
  'underscore', 
  'backbone',
  'text!templates/projectList.html',
  'text!templates/projectItem.html',
  'models/projectlist',
  'views/projectListView'
], function($, _, Backbone, projectListTemplate, projectItemTemplate, ProjectList, ProjectView){
    var App = {
        Views : {},
        Projects : null,
        init : function() {
            App.Projects = new ProjectList();
            App.Views.ProjectListView = new ProjectListView({
                collection : App.Projects
            });
        }
    };

    return {
        init: App.init
    };
});

