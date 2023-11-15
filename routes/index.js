var express = require('express');

var router = express.Router();
require('dotenv').config();


const cookieParser = require('cookie-parser');
// ...
const app=express()
// Add cookie-parser middleware
app.use(cookieParser());

const baseURL = process.env.BASE_URL || ''; // Default to an empty string if BASE_URL is not defined
const routePath = `${baseURL}/`;
router.use(routePath, router);




router.get('/', async function(req, res, next) {
  try {
    res.render('index', { title: 'Smile Charity'});

  } catch (error) {
    res.status(500).send(error);
  }
});




//get donation page
router.get('/donation', function(req, res, next) {
  res.render('donation', { title: 'Smile Charity' });
});



router.get('/news/post1', function(req, res, next) {
  res.render('posts/post1');
});

router.get('/news/post2', function(req, res, next) {
  res.render('posts/post2');
});

router.get('/news/post3', function(req, res, next) {
  res.render('posts/post3');
});


router.get('/news/post4', function(req, res, next) {
  res.render('posts/post4');
});

router.get('/news/post5', function(req, res, next) {
  res.render('posts/post5');
});


router.get('/news/post6', function(req, res, next) {
  res.render('posts/post6');
});

router.get('/news/post7', function(req, res, next) {
  res.render('posts/post7');
});


router.get('/news/post8', function(req, res, next) {
  res.render('posts/post8');
});

router.get('/israelcampaign', function(req, res, next) {
  res.render('israelcampaign');
});


router.get('/newsposts', function(req, res, next) {
  res.render('newsposts');
});

router.get('/donate', function(req, res, next) {
  res.render('donate');
});

router.get('/aboutus', function(req, res, next) {
  res.render('aboutus');
});

module.exports = router;