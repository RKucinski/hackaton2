const express = require('express')
const router = express.Router()
const Home = require('../models/homesModel')

router.post('/new', function (req, res, next) {
  Home.create(req.body).then(function (data) {
    res.send(data)
  }).catch(next)
})

router.get('/:id', function (req, res, next) {
  Home.findOne({ _id: req.params.id })
  .then(data => res.send(data))
})

router.put('/:id', function (req, res, next) {
  Home.findOneAndUpdate({ _id: req.params.id }, req.body)
    .then(function () {
      Home.findOne({ _id: req.params.id })
        .then(function (data) {
          res.send(data)
        })
    }).catch(next)
})


module.exports = router