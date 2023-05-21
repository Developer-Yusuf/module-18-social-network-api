const router = require('express').Router();

const apiRoutes = require('./api');
// Introduce prefix of `/api` to all of the api routes
router.use('/api', apiRoutes);

router.use((req, res) => res.send('Invalid Routes'));

module.exports = router;
