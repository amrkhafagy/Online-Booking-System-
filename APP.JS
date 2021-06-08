const express = require('express');
const body = require('body-parser');


app.use(express.json());
app.use(body.json());
app.use(body.urlencoded({extended:false}));
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use(cors());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

  

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  });