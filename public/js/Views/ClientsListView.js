/**
 * Created by Paweł on 2015-03-30.
 */
(function(){
    APP.Views.ClientsList = Backbone.View.extend({
        tagName: "ul",
        className: "app-items-list",
        initialize: function(){
            this.listenTo(this.collection, "reset", this.render)
        },
        render: function(){
            this.collection.each(this.addOne,this);
            APP.Regions.appContent.append(this.el);
        },
        addOne: function(model){
            var view = new APP.Views.ClientListItem({model: model});

            this.$el.append(view.render().el);
        }

    })
})();