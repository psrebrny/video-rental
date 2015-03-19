/**
 * Created by Paweł on 2015-02-16.
 */
(function(){

    APP.Routers.Router = Backbone.Router.extend({
        routes:{
            "": "showMoviesList",
            "index.html": "showMoviesList"
        },
        showMoviesList: function(){
            var movies = new APP.Collections.MoviesList(),
                view = new APP.Views.MoviesList({collection: movies});
            movies.fetch({
                reset: true,
                data : {
                    limit : 5
                }
            });
        }
    })

})();