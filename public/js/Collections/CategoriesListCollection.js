/**
 * Created by Paweł on 2015-03-30.
 */
(function(){
    APP.Collections.CategoriesList = Backbone.Collection.extend({
        model: APP.Models.Category,
        url: "/categories"
    })
})();