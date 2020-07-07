var express = require('express');
var router = express.Router();
const reminder = require('../controllers/users');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/test', function(req, res, next) {
  res.send('respond with a test');
});
router.post('/reminders', reminder.reminders);

router.get('/showReminder/search', reminder.showReminder);

router.put('/updateReminder/:id',reminder.updateReminder);



module.exports = router;
