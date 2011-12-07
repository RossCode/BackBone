$(function() {

    Task = Backbone.Model.extend({
        defaults: {
            title: null,
            isCompleted: false
        },
    });

    TaskCollection = Backbone.Collection.extend({
        model: Task
    });

    Project = Backbone.Model.extend({
        defaults: {
            name: null,
            tasks: new TaskCollection()
        }
    });

    ProjectList = Backbone.Collection.extend({
        model: Project
    });

    Projects = new ProjectList();

    ProjectView = Backbone.View.extend({
        el : $('#main'),
        events: {
            "keyup #project_name": "detectNewProjectEnter",
            "click #add": "addProject"
        },

        initialize : function() {
            Projects.bind('add', this.addProjectToView, this);
            this.render();
        },

        template : _.template($("#project_list").html()),

        item_template_html : $("#project_item").html(),

        render : function(){
            $(this.el).html(this.template);
            _(Projects).each(function(project){
                addProjectxToView(project);
            }, this);
        },

        detectNewProjectEnter : function(event) {
            if (event.keyCode === 13) {
                $("#add").trigger("click");
            }
        },

        addProject : function() {
            var nameField = $("#project_name");
            var project = new Project({name : nameField.val()});
            Projects.add(project);
            nameField.val("");
            nameField.focus();
        },

        addProjectToView : function(project) {
            var name = { project_name : project.get('name') };
            var itemTemplate = _.template(this.item_template_html, name);
            $('#project-list').append(itemTemplate);
//            $('#project-list').append("<li>" + name.project_name + "</li>");
        }
    });

    var projectView = new ProjectView();
});

