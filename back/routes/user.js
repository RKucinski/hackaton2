const express = require('express')
const router = express.Router()
const User = require('../models/usersModel')
const Supplier = require('../models/suppliersModel')
const Program = require('../models/programsModel')
const Equipment = require('../models/equipmentsModel')

router.get('/:id', function (req, res, next) {



  User.findOne({_id : req.params.id}).then(function (data) {
    res.send(data)
  })
})

router.post('/', function (req, res, next) {
  User.create(req.body).then(function (data) {
    res.send(data)
  }).catch(next)
})

router.put('/:id', function (req, res, next) {
  User.findOneAndUpdate({ _id: req.params.id }, req.body)
    .then(function () {
      User.findOne({ _id: req.params.id })
        .then(function (data) {
          res.send(data)
        })
    }).catch(next)
})


module.exports = router