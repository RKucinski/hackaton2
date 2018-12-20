const express = require('express')
const router = express.Router()
const Program = require('../models/programsModel')

router.get('/:id', function (req, res, next) {
  Program.findOne({_id : req.params.id}).then(function (data) {
    res.send(data)
  })
})

router.post('/', function (req, res, next) {
  Program.create(req.body).then(function (data) {
    res.send(data)
  }).catch(next)
})

router.put('/:id', function (req, res, next) {
  Program.findOneAndUpdate({ _id: req.params.id }, req.body)
    .then(function () {
      Program.findOne({ _id: req.params.id })
        .then(function (data) {
          res.send(data)
        })
    }).catch(next)
})


module.exports = router