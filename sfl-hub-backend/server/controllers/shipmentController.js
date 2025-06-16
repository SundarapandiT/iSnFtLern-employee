const { User } = require('../models/User');
const { saveshipmentData } = require('../services/shipmentServices');
const { getmyShipmentData } = require('../services/shipmentServices');
const { getmyShipmentsByIDData } = require('../services/shipmentServices');




const savenewShipments = async (req, res) => {
    try {
      const countryData = req.body.data;
      console.log("countryData = ",countryData)
      const user = await saveshipmentData(countryData);
      console.log("uSER = ",user)
      res.status(200).json({ user });
    } catch (error) {
      res.status(500).json({ error: 'Error in add shipment' });
    }
  };
  const getmyShipmentsByID = async (req, res) => {
    try {
      const countryData = req.body.data;
      console.log("countryData = ",countryData)
      const user = await getmyShipmentsByIDData(countryData);
      console.log("uSER = ",user)
      res.status(200).json({ user });
    } catch (error) {
      res.status(500).json({ error: 'Error in add shipment' });
    }
  };

  const getmyShipments = async (req, res) => {
    try {
      const countryData = req.body.data;
      console.log("countryData = ",countryData)
      const user = await getmyShipmentData(countryData);
      console.log("uSER = ",user)
      res.status(200).json({ user });
    } catch (error) {
      res.status(500).json({ error: 'Error in add shipment' });
    }
  };

module.exports = {savenewShipments,getmyShipments,getmyShipmentsByID };
