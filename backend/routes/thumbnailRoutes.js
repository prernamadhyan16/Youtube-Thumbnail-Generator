const express = require('express');
const { generateThumbnails } = require('../controllers/thumbnailController');
const router = express.Router();

router.post('/generate-thumbnail', generateThumbnails);

module.exports = router;
