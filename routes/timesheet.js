const express = require('express');
const router = express.Router();
const timesheetController = require('../controllers/timesheetController');

router.post('/', timesheetController.createTimesheet);
router.get('/:id', timesheetController.getTimesheetById);
router.get('/', timesheetController.getAllTimesheets);
router.put('/:id', timesheetController.updateTimesheet);
router.delete('/:id', timesheetController.deleteTimesheet);

module.exports = router;
