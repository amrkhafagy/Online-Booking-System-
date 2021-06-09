// require imports packages required by the application
const express = require('express');
const body = require('body-parser');
const  cors = require('cors');





const app = express();
const port = 3000

// Application settings
app.use(express.json());
app.use(body.json()); // support json encoded bodies
app.use(body.urlencoded({extended:false}));
app.get('/', (req, res) => {
    res.send('Hello World!')
})
// Allow app to support differnt body content types (using the bidyParser package)
app.use(cors());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// catch 404 and forward to error handler

app.use(function (req, res, next) {

  var err = new Error('Not Found: ' + req.method + ":" + req.originalUrl);
  
  err.status = 404;
  
  next(err);
});

  
// Start the HTTP server using HOST address and PORT consts defined above
// Listen for incoming connections

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  });