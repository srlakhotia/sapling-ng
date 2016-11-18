
/*
 * Routing
 */

exports.index = function(req, res){
  res.render('index'); //Routing to be on for JADE rendering
  // res.render('index.html'); //Routing to be on for HTML rendering
};

exports.partials = function (req, res) {
  var name = req.params.name;
  res.render('partials/' + name); //Routing to be on for JADE rendering
  // res.render('partials/' + name + '.html'); //Routing to be on for HTML rendering
};