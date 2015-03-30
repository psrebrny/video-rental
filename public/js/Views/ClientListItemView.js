/**
 * Created by Paweł on 2015-03-30.
 */
(function(){
    APP.Views.ClientListItem = Backbone.View.extend({
        tagName: "li",
        template: _.template($("#clientListItemTemplate").html()),

        render: function(){
            var html = this.template(this.model.toJSON());
            this.$el.html(html);
            return this;
        }
    })
})();