# SAPLING NG

Start an awesome app with AngularJS on the front, Express + Node on the back. This project is an application skeleton for a typical [AngularJS](http://angularjs.org/) web app for those who want to use Node to serve their app.

The seed contains angular libraries and a bunch of scripts all preconfigured for instant web development gratification. Just clone the repo (or download the zip/tarball) and you're ready to develop your application.

This sapling app shows how to wire together Angular client-side components with Express on the server. It also illustrates writing angular partials/views with the Jade templating library or just plain HTML.

_Note: Although Jade supports interpolation, you should be doing that mostly on the client. Mixing server and browser templating will convolute your app. Instead, use Jade as a syntactic sugar for HTML, and let AngularJS take care of interpolation on the browser side._

## How to use sapling-ng

Clone the sapling-ng repository, run `npm install` to grab the dependencies, and start building!

### Running the app

Runs like a typical express app:

    node app.js

### Receiving updates from upstream

Just fetch the changes and merge them into your project with git.

## Directory Layout (develop branch)
    
    app.js                --> app config
    package.json          --> for npm
    public/               --> all of the files to be used in on the client side
      css/                --> css files
        app.css           --> default stylesheet
      img/                --> image files
      js/                 --> javascript files
        app.js            --> declare top-level app module
        controllers/      --> write application controller files in this folder
          controllers.js  --> application controllers
        directives/       --> write custom angular directives in this folder
          directives.js   --> custom angular directives
        filters/          --> write custom angular filteres in this folder
          filters.js      --> custom angular filters
        services/         --> write angular services in this folder
          services.js     --> custom angular services
        lib/              --> angular and 3rd party JavaScript libraries
          angular/
            angular.js            --> the latest angular js
            angular.min.js        --> the latest minified angular js
            angular-*.js          --> angular add-on modules
            version.txt           --> version number
    routes/
      api.js            --> route for serving JSON
      index.js          --> route for serving HTML pages and partials
    views/
      index.jade(html)  --> main page for app (if html, layout.jade is in it)
      layout.jade       --> doctype, title, head boilerplate (works when jade)
      partials/         --> angular view partials (partial jade/html templates)
        partial1.jade(html)
        partial2.jade(html)

### Sample Application (contact app)

To clone a sample contact app and see a small app there working, the following command is to be run from your git bash (SSH):

    git clone -b contact_app_legacy git@github.com:srlakhotia/sapling-ng.git
