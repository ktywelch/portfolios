const Portfolio = require("../models/portfolio")



module.exports = function(app) {
  //verified code works
  app.get('/api/portfolios', (req, res) => {
    console.log(req);
    Portfolio.find({})
    .sort({ createDate: -1 })//desending order should return the newest first
    .then(dbPortfolio => {
      console.log(res);
      res.json(dbPortfolio);
    })
    .catch(err => {
      res.status(400).json(err);
    })
   
  });
  

  app.put('/api/portfolios', (req, res) => {
    console.log(req);
    Portfolio.find({})
    .sort({ createDate: -1 })//desending order should return the newest first
    .then(dbPortfolio => {
      console.log(res);
      res.json(dbPortfolio);
    })
    .catch(err => {
      res.status(400).json(err);
    })
   
  });
  





  app.put('/api/portfolios/:id', (req, res) => {
        let rec_id = req.params.id;
        rec_id.trim(); //make sure no spaces
        //findOneAndUpdate(filter, update, options)
        Portfolio.findOneAndUpdate(
            {_id: rec_id}, // filter
            {
              createDate: req.body.created,
              imgLoc: req.body.imgLoc,
              title:  req.body.title,
              description: req.body.description,
              gitBtn:  req.body.gitBtn,
              deployBtn:  req.body.depBtn
            },//update
            {new: true}//options
        )
            .then(data => {
                res.json(data);
            })
            .catch(err => {
                res.status(400).json(err);
            });
  });
  
  app.delete('/api/portfolios/:id', (req, res) => {
    let rec_id = req.params.id;
    rec_id.trim(); //make sure no spaces
    //findOneAndUpdate(filter, update, options)
    Portfolio.deleteOne({_id: rec_id})
    .then(data => {
      res.json(data);
  })
  .catch(err => {
      res.status(400).json(err);
  });
});

  app.post("/api/portfolios", (req, res) => {
    Portfolio.create(req.body)
    .then(dbPortfolio => {
      res.json(dbPortfolio);
    })
    .catch(err => {
      res.status(400).json(err);
    }); 
  });
  

}