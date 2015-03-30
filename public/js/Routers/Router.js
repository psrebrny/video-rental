/**
 * Created by Paweł on 2015-02-16.
 */
(function(){

    APP.Routers.Router = Backbone.Router.extend({
        routes:{
            "": "showMoviesList",
            "index.html": "showMoviesList",
            "actors": "showActorsList"
        },
        showMoviesList: function(){
            var movies = new APP.Collections.MoviesList(),
                view = new APP.Views.MoviesList({collection: movies});

            APP.showMAinView(view);

            movies.fetch({
                reset: true,
                data : {
                    limit : 5
                }
            });
        },

        showActorsList: function(){
            var actors = new APP.Collections.ActorsList(),
                view = new APP.Views.ActorsList({collection: actors});

            APP.showMAinView(view);

            actors.fetch({
                reset: true,
                data : {
                    limit : 5
                }
            });
        }
    })

})();