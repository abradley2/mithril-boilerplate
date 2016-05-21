# Mithril.js Boilerplate

A boilerplate for the lovely Mithril.js framework. A simple SPA starter with Koa.js for the server side.


### Folder Structure
```
+--/build
|  +--index.js # register your gulp build tasks here
|
+--/api
|  +--index.js # register your api subrouters here
|
+--/public
|  +--index.html # main page served up for the SPA
|  +--/dist # folder for your bundled source files
|
+--/src
|  +--/styles # folder for your CSS source (uses stylus by default)
|  |  +--main.styl # entry point for your css bundle
|  |
|  +--/scripts # folder for your SPA source. 
|     +--main.js # entry point for your javascript bundle.
|
+--app.js # file to spin up the koa server. Also add site/page routes here
+--gulpfile.js # imports the methods in /build and registers them as gulp tasks

```
