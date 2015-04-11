/**
 * Created by Paweł on 2015-02-16.
 */
(function(){
    APP.Views.MovieListItem = Backbone.View.extend({
        tagName: "li",
        template: _.template($("#movieListItemTemplate").html()),

        render: function(){
            var html = this.template(this.model.toJSON());
            this.$el.html(html);
            return this;
        },

        events: {
            "click .details": "redirectDetails"
        },

        redirectDetails : function(){

            APP.router.navigate("/movie/" + this.model.get("_id"), {trigger: true});

        }
    })
})();