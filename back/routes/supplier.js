const express = require('express')
const router = express.Router()
const Supplier = require('../models/suppliersModel')

router.get('/:name', function (req, res, next) {
  Supplier.find({name : req.params.name}).then(function (data) {
    res.send(data)
  })
})

router.post('/', function (req, res, next) {
  Supplier.create(req.body).then(function (data) {
    res.send(data)
  }).catch(next)
})

// router.put('/:id', function (req, res, next) {
//   Supplier.findByIdAndUpdate({ _id: req.params.id }, req.body)
//     .then(function () {
//       Supplier.findOne({ _id: req.params.id })
//         .then(function (data) {
//           res.send(data)
//         })
//     }).catch(next)
// })


module.exports = router