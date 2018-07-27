const router = require("express").Router();
const user = require("../models/users.js");

router.post("/api", function(req, res){
    console.log("hello");
    user.create(req.body).then(()=>{
        res.json(true);
    }).catch((err) => {
        res.json(err)
    });
});

 

router.get("/api/users", function(req,res){
    console.log("something");
    user.find().then((docs)=>{res.json(docs);
    });
});


 router.get("/api/:id", function(req,res){
     console.log("working")
      user.findOne({
          id: req.params.ObjectId
     }).then((docs) => {
          res.json(docs);
       
      });
 });

  router.post("/api/Post/:id", function(req,res) {
     console.log("waddup")
     user.Post.comments.insert(
         {id: req.params.ObjectId}
     )
      .then(()=>{res.json(true);}).catch((err)=>{res.json(err)
     });
 });




 

module.exports = router;
