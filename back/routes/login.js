const express = require('express')
const router = express.Router()
const Login = require('../models/loginsModel')

router.post('/new', function (req, res, next) {
  console.log("req in back ", req)
  Login.create(req.body).then(function (data) {
    res.send(data)
  }).catch(next)
})

router.get('/login', function (req, res, next) {
  Login.findOne({ email: req.body.email })
  .then(
    this.checkPwd(req.body.password) ? res.send("Vous êtes connecté") : res.send("Erreur lors de la connexion")
  )
})

checkPwd = (pwd) => {
  return true;
}

module.exports = router