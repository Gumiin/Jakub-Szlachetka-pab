const express = require('express');
 const app = express();

  app.get('/', (req, res) => {
      res.send("Welcome in calculator. Please enter what you want to calculate");
    })

 app.listen(3000)
