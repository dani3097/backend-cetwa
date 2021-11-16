const { Router }= require('express');
const router = Router();

const { getChildren, getChildrenById, createChildren, updateChildren, deleteChildren } = require('../controllers/index.controller')
router.get('/children', getChildren);
router.get('/children/:id', getChildrenById);
router.post('/children', createChildren);
router.put('/children/:id', updateChildren);
router.delete('/children/:id', deleteChildren);
module.exports = router;