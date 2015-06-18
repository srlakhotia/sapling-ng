// #!/usr/bin/env node

if(process.env.NODE_ENV === undefined) {
    process.env.NODE_ENV = 'local';
}

var express = require('express'),
    server = express(),
    fs = require('fs'),
    path = require('path'),
    currentDirName = __dirname.split(path.sep),
    argv = require('optimist').argv,
    settings = {
        opts: { //configurable
            db: 'mongo',
            port: 80
        }
    },
    mainApp = {};

currentDirName = currentDirName[(currentDirName.length-1)];

if(isNaN(currentDirName)) {
    mainApp['stable'] = express();
    mainApp['stable'].jsDependencies = JSON.parse(fs.readFileSync('./js_dependencies.json', 'utf-8'));
    mainApp['stable'].frameworkDirName = __dirname;
}

if (typeof argv.port != 'undefined' || typeof argv.p != 'undefined') {
    settings.opts['port'] = argv.port || argv.p;
}

server.get('/', function(req, res) {
    res.sendFile(__dirname + '/views/index.html');
})

// server.get(/^(.+)$/, function(req, res) {
//     console.log('dirname::: ', __dirname);
//     console.log('req.params:::: ', req.params)
//     res.json({asd:'asd', statusCode: 200})
// });


server.listen(settings.opts.port, function() {
    console.log("Express server listening on port %d in %s mode", this.address().port, server.settings.env);
});
