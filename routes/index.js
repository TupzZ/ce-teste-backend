var express = require('express');
var router = express.Router();
var { getAll, getOne, update } = require('./../database/functions');

router.get('/get-users', function (req, res, next)
{
  getAll('users').then(users =>
  {
    res.json(users);
  })
});

router.get('/get-opportunities', function (req, res, next)
{
  getAll('opportunities').then(opportunities =>
  {
    res.json(opportunities);
  })
});

router.get('/get-user/:email', function (req, res, next)
{
  getOne('users', req.params['email']).then(user =>
  {
    getOne('opportunities', req.params['email']).then(opportunities =>
      {
        res.json([user, opportunities]);
      })
  })
});

router.patch('/set-opportunity/:email/:id', function (req, res, next)
{
  let { email, id } = req.params;
  getOne('opportunities', email).then(opportunities =>
  {
    opportunities['opportunities'][id].isActive = !opportunities['opportunities'][id].isActive;
    update('opportunities', email, opportunities);
    })
});

module.exports = router;
