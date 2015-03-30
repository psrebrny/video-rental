/**
 * Created by Paweł on 2015-03-30.
 */
(function(){
    APP.Collections.ActorsList = Backbone.Collection.extend({
        model: APP.Models.Actor,
        url: "/actors"
    })
})();