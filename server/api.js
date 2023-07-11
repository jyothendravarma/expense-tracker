const express = require('express')
const router = express.Router()

const db = require('./db.js');
const mongodb = new db()

router.use(async (req, res, next) => {   
   currentDateTime = new Date(Date.now())
   time = currentDateTime.toLocaleDateString() + " " + currentDateTime.toLocaleTimeString();
   console.log('Request Time: ', time)
   console.log(req.originalUrl)
   try{
      await mongodb.testConnection();
   }catch{
      return res.status(500).send("unable to establishe DB connection");
   }
   next()
})

router.get('/', async function (req, res) {
   var connectionEstablished = await mongodb.testConnection();
   res.send('Connection Complete : ' + connectionEstablished);
})

router.post('/addExpense', async function (req, res) {
   const expense = req.body;
   await mongodb.addExpenseEntry(expense)
   res.status(200).json({ response: 'Entry Added' });
   console.log(`Request complete - ${req.originalUrl}`)
})

router.get('/getExpenses', async function (req, res) {
   var records = await mongodb.getCollection()
   // console.log(records)
   res.status(200).json(records);
})

router.get('/deleteAll', async function (req, res) {
   await mongodb.cleanDailyExpCollection()
   res.send('deletion Complete ');
})

router.get('*', async function (req, res) {
   res.send('404 error');
})

module.exports = router