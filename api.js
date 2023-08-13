const express       = require('express');
const cors = require('cors');
const path          = require("path");
const fs            = require("fs");
require('dotenv').config();
var fileType        = require('./library/fileType');
var images          = path.join(__dirname, 'image');
require('dotenv').config();
var bodyParser    = require('body-parser')
const app         = express();
// parse application/json
app.use(bodyParser.json())
var transaksiGet = require('./service/getTransaksi');
var getUser = require('./service/getUser');
var userPost = require('./service/userPost');
var deleteUser = require('./service/deleteUser');
const productGet = require('./service/ProductGet');
const productGetDetail = require('./service/ProductGetDetail'); 
const productPost = require('./service/ProductPost');
const productPut = require('./service/ProductUpdate');
const productDelete = require('./service/ProductDelete');
const transactionPost = require('./service/transactionPost');
const deleteTransaksi = require ('./service/deleteTransaksi');

var login = require('./service/Login');



app.use(express.json());
app.use(cors());

app.post('/users', userPost)
app.get('/users', getUser)
app.delete('/users/:id', deleteUser)
app.post('/trasactions', transactionPost)
app.get('/transactions', transaksiGet)
app.delete('/transactions', deleteTransaksi)

app.post('/login', login)

app.get('/products', productGet)
app.get('/products/:id', productGetDetail)
app.post('/products', productPost)
app.put('/products', productPut)
app.delete('/products/:id', productDelete)




// app.post('/upload', userUpload)


app.get('/images/:file', (req, res) => {
  var file        = req.params.file;
  var extname     = path.extname(file);
  var targetfile = path.join(images, file);
  fs.readFile(targetfile, function(error, content) {
      res.writeHead(200, { 'Content-Type': fileType(extname.replace(".", "")) });
      res.end(content, 'utf-8');
  });
})
app.listen(process.env.PORT_API, () => {
  console.log(`Example app listening on port ${process.env.PORT_API}`)
})