China MVC
===============
A simple MVC framework for node.js.

Features
--------

* RESTful routes
* Customized routes
* Support all kinds of view engines supported by Express, default of which is Jade
* View templates can be stored in all kinks of storage
* Sub views

Dependence
--------

ChinaMVC depends on the following node.js packages, you can download them use 'npm' command.

* Express: a framework for fast build a web server via node.js

Directory Rules(for defalt routes)
--------

    ./
    ./app.js
    ./controllers/
    ./controllers/$controller/
    ./controllers/$controller/$action/
    ./controllers/$controller/$action/$httpmethod.js
    ./views/
    ./views/$controller/
    ./views/$controller/$action.jade
    ./views/$controller/$action/$subview.jade


HOW TO USE
================

RESTful Web/API
--------
    // app.js
    // RESTfull routes
    // SELECT
    app.get(/.+\/.*/, function(req, res) {
        (new mvc.context(req, res)).invoke();
    });
    
    // INSERT
    app.post(/.+\/.*/, function(req, res) {
        (new mvc.context(req, res)).invoke();
    });
    
    // DELETE
    app.del(/.+\/.*/, function(req, res) {
        (new mvc.context(req, res)).invoke();
    });
    
    // UPDATE
    app.put(/.+\/.*/, function(req, res) {
        (new mvc.context(req, res)).invoke();
    });

Customized route
--------
    // app.js
    
    // route for homepage, controller is 'home' and view is 'index'
    app.get('/', function(req, res) {
        (new mvc.context(req, res)).invoke('home', 'index');
    });

Using Sub Views
---------
    // a controller, e.g. /home/index/get.js
    var subViews = ['view1', 'view2', 'view3'];
    exports.render = function (context) {
        var subView = subViews[Math.floor(Math.random()*100)%3];
        context.view({ layout: false }, subView);
    };

Store View Templates in Databases(or any other storage)
---------
    // This feature is very useful for CMS ect.
    // callback(err<exception>, template<string>)
    function getTemplate(id, callback){
        var template = '!!! 5'; // TODO: get template content from storage.
        callback && callback(null, template);
    }
    exports.render = function (context) {
        getTemplate(context.request.params['id'], function(err, template){
            var render = jade.compile(template);
            
            // view model
            var vm = {};
            
            context.response.send(render({ vm: vm }));
        });
    };
