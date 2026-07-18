const express = require('express');

const router = express.Router()
const {loadpge} = require('../controller/user');

router.get('/',loadpge);

module.exports = router;