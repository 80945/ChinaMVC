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
