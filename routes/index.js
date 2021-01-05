const router = require('express').Router();
const path = require('path');
const apiRoutes = require('./api');

// ! if url begins with '/api'...
router.use('/api', apiRoutes);

// ! if not, this is where you *could* direct the request to direct to the React UI
router.route('/').get((req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

router.route('/add').get((req, res) => {
  res.sendFile(path.join(__dirname, '../public/add.html'));
});

router.route('/details').get((req, res) => {
  res.sendFile(path.join(__dirname, '../public/details.html'));
});

module.exports = router;
