/* Eunju Jo 310170731
  index.js Feb 12 */



var express = require('express');
var router = express.Router();

/* GET home page. / is main route*/
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home'});
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home'});
});

/* GET About page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About'});
});


/* GET Projects page. */
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects'});
});


/* GET Services page. */
router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Services'});
});


/* GET Connect page. */
router.get('/connect', function(req, res, next) {
  res.render('connect', { title: 'Connect'});
});

module.exports = router;

