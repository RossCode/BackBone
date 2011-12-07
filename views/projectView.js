$(function() {
    ProjectView = Backbone.View.extend({
        el : $('#main'),
        events: {
            "keyup #project_name": "detectNewProjectEnter",
            "click #add": "addProject"
        },

        initialize : function() {
            this.collection.bind('add', this.addProjectToView, this);
            this.render();
        },

        template : _.template($("#project_list").html()),

        item_template_html : $("#project_item").html(),

        render : function(){
            $(this.el).html(this.template);
            _(this.collection).each(function(project){
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
            this.collection.add(project);
            nameField.val("");
            nameField.focus();
        },

        addProjectToView : function(project) {
            var name = { project_name : project.get('name') };
            var itemTemplate = _.template(this.item_template_html, name);
            $('#project-list').append(itemTemplate);
        }
    });
});

