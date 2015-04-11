/**
 * Created by Paweł on 2015-02-16.
 */
(function(){

    APP.Routers.Router = Backbone.Router.extend({
        routes:{
            "": "showMoviesList",
            "index.html": "showMoviesList",
            "movies": "showMoviesList",
            "actors": "showActorsList",
            "categories": "showCategoriesList",
            "clients": "showClientsList"
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
            APP.Views.Navigation.highlight("movies");

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

            APP.Views.Navigation.highlight("actors");

        },

        showCategoriesList: function(){
            var categories = new APP.Collections.CategoriesList(),
                view = new APP.Views.CategoriesList({collection: categories});

            APP.showMAinView(view);

            categories.fetch({
                reset: true
            });

            APP.Views.Navigation.highlight("categories");

        },

        showClientsList: function(){
            var clients = new APP.Collections.ClientsList(),
                view = new APP.Views.ClientsList({collection: clients});

            APP.showMAinView(view);

            clients.fetch({
                reset: true,
                data : {
                    limit : 5
                }
            });

            APP.Views.Navigation.highlight("clients");

        }
    })

})();