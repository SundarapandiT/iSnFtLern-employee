const express = require('express');
const { savenewShipments,getmyShipments,getmyShipmentsByID} = require('../controllers/shipmentController'); 


const router = express.Router();

router.post('/addShipments', savenewShipments);
router.post('/myShipments', getmyShipments); 
router.post('/getmyShipments', getmyShipmentsByID); 




module.exports = router;
