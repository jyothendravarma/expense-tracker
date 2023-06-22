const express = require('express')
const cors = require('cors')
const apiRouter = require('./api.js');

const app = express(), bodyParser = require('body-parser');

app.use(cors())
// app.options('*', cors())
app.use(bodyParser.json())

//middleware logging the timestamp of request

// app.use((req, res, next) => {
//   currentDateTime = new Date(Date.now())
//   time = currentDateTime.toLocaleDateString() + " " + currentDateTime.toLocaleTimeString();
//   console.log('Request Time: ', time, '; URI', req.originalUrl)
//   next()
// })

// app.get('/', async function (req, res) {
//     var connectionEstablished = await testConnection();
//     res.send('Connection Complete : ' + connectionEstablished);
// })

// app.post('/addExpense', async function (req, res) {
//   console.log(req)
//   const expense = req.body;
//   await addExpenseEntry(expense)
//   res.send('Entry Added : ' + connectionEstablished);
// })

// app.post('/reset', async function (req, res) {
//   const expense = req.body;
//   res.send('Connection Complete : ' + connectionEstablished);
// })

// app.get('*', async function (req, res) {
//   res.send('404 error');
// })

// // error handler
// app.use((err, req, res, next) => {
//   const statusCode = err.statusCode || 500;
//   console.error(err.message, err.stack);
//   res.status(statusCode).json({ 'message': err.message });
// });

app.use("/api", apiRouter)

const hostname = '127.0.0.1';
const port = 3000;

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});