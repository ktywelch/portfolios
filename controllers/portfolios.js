const { Portfolio } = require("../models/portfolio");

module.exports = {
  test: (req, res) => {
    res.send("Test Route");
  },

  getAll: async (req, res) => {
    try {
      const allPortfolios = await Portfolio.find();
      res.json(allPortfolios);
    } catch (err) {
      res.send(err);
    }
  },

  findOne: async (req, res) => {
    try {
      const foundPortfolioPost = await Portfolio.findById(req.params.id);
      res.send(foundPortfolioPost);
    } catch (err) {
      res.send(err);
    }
  },

  postPortfolio: async (req, res) => {
    try {
      const newPortfolioPost = new Portfolio({
        title: req.body.title,
        text: req.body.text,
      });
      res.json(await newPortfolioPost.save());
    } catch (err) {
      res.send(err);
    }
  },

  deleteOne: async (req, res) => {
    try {
      res.json(await Portfolio.findByIdAndDelete(req.params.id));
    } catch (err) {
      res.send(err);
    }
  },

  updateOne: async (req, res) => {
    try {
      const foundPortfolioPost = await Portfolio.findById(req.params.id);
      const { title } = req.body;

      if (title) foundPortfolioPost.title = title;

      res.json(await foundPortfolioPost.save());
    } catch (err) {
      res.json(err);
    }
  },
};
