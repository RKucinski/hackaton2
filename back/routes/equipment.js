const express = require('express')
const router = express.Router()
const Equipment = require('../models/equipmentsModel')

router.get('/all', function (req, res, next) {
  Equipment.find({}).then(function (data) {
    res.send(data)
  })
})

router.post('/', function (req, res, next) {
  Equipment.create(req.body).then(function (data) {
    res.send(data)
  }).catch(next)
})

router.put('/:id', function (req, res, next) {
  Equipment.findOneAndUpdate({ _id: req.params.id }, req.body)
    .then(function () {
      Equipment.findOne({ _id: req.params.id })
        .then(function (data) {
          res.send(data)
        })
    }).catch(next)
})


module.exports = router