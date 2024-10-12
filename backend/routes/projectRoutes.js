const express = require('express');
const { createproject,projectupdate, deleteProject,getProject, } = require('../controllers/projectController');
const { importproject } = require('../controllers/importController');
const { exportproject } = require('../controllers/exportController');
const { payment } = require('../controllers/paymentController');



const { protect } = require('../middleware/authMiddleware');
// const  upload  = require('../middleware/uploadMiddleware');
const router = express.Router();

// Event routes
router.post('/createproject', protect, createproject);
router.get('/projects/:id', getProject);
router.put('/projectupdate/:id', projectupdate);
router.delete('/deleteProject/:id', deleteProject);


router.post('/projects/import',  importproject);
router.get('/projects/export',  exportproject);
router.post('/payment',  payment);



module.exports = router;
