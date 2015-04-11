/**
 * Created by Paweł on 2015-04-11.
 */
(function(){

    APP.Views.MovieDetails = Backbone.View.extend({

        tagName: "div",
        template: _.template($("#movieDetailsTemaplate").html()),

        initialize: function(){

            this.listenTo(this.model, "change", this.render);

        },

        render: function(){

            var html = this.template(this.model.toJSON());

            this.$el.append(html);

            APP.Regions.appContent.html(this.el);

        }

    });

})();