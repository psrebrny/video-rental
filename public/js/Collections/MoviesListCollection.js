/**
 * Created by Paweł on 2015-02-16.
 */
(function(){
    APP.Collections.MoviesList = Backbone.Collection.extend({
        model: APP.Models.Movie,
        url: "/movies"
    })
})();