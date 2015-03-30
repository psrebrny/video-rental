/**
 * Created by Paweł on 2015-02-15.
 */
(function(){
    window.APP = {
        Models: {},
        Collections:{},
        Views:{},
        Routers:{},

        Regions: {
            appContent: $(".app-content")
        },
        ViewsInstances: {}
    };

    APP.showMAinView = function(view){
        if(APP.ViewsInstances.mainView){
            APP.ViewsInstances.mainView.remove();
        }
        APP.ViewsInstances.mainView = view;
    }
})();