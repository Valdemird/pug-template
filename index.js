const express = require("express");
const app = express();

app.set("view engine", "pug");
app.get('/', function (req, res) {

    const data = {
        name: 'Cotel',
        columns:[
            "Nombre",
            "Contactos",
            "Pais",
        ],
        rows:[
          ["Sebastian",req.params.id,"colombia"],
          ["Sebastian",req.params.id,"colombia"],
          ["Sebastian",req.params.id,"colombia"],
          ["Sebastian",req.params.id,"colombia"],
          ["Sebastian",req.params.id,"colombia"],
          ["Sebastian",req.params.id,"colombia"],
          ["Sebastian",req.params.id,"colombia"],
          ["Sebastian",req.params.id,"colombia"],
          ["Sebastian",req.params.id,"colombia"],
          ["Sebastian",req.params.id,"colombia"],
          ["Sebastian",req.params.id,"colombia"],
          ["Sebastian",req.params.id,"colombia"],
          ["Sebastian",req.params.id,"colombia"],
          ["Sebastian",req.params.id,"colombia"],
          ["Sebastian",req.params.id,"colombia"]
           ]
      };


    res.render('template', data);
  });

  app.listen(3000,()=>{
      console.log("listening in 3000")
  })