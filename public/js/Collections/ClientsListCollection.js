/**
 * Created by Paweł on 2015-03-30.
 */
(function(){
    APP.Collections.ClientsList = Backbone.Collection.extend({
        model: APP.Models.Client,
        url: "/clients"
    })
})();