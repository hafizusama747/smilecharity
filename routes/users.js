var express = require('express');
var router = express.Router();
const baseURL = process.env.BASE_URL || ''; // Default to an empty string if BASE_URL is not defined
const routePath = `${baseURL}/`;
router.use(routePath, router);
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
