const { Category, Post } = require('../models');

module.exports = {
  findAll: (req, res) => {
    Post.findAll({
      include: [Category],
      where: req.query,
    })
      .then((posts) => res.json(posts))
      .catch((err) => res.status(500).json(err));
  },
  findById: (req, res) => {
    Post.findByPk(req.params.id, {
      include: [Category],
    })
      .then((post) => res.json(post))
      .catch((err) => res.status(500).json(err));
  },
  create: (req, res) => {
    Post.create(req.body)
      .then(() => res.end())
      .catch((err) => res.status(422).json(err));
  },
  update: (req, res) => {
    console.log(req.body);
    Post.update(req.body, {
      where: { id: req.params.id },
    })
      .then(() => res.end())
      .catch((err) => res.status(422).json(err));
  },
  delete: (req, res) => {
    Post.destroy({
      where: { id: req.params.id },
    })
      .then(() => res.end())
      .catch((err) => res.status(500).json(err));
  },
};
