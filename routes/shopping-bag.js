var Backbone = require('backbone');
var express = require('express');
var router = express.Router();

var BagItem = Backbone.Model.extend({});

var activeBag = new Backbone.Collection([
      {
         id: 100,
         name: 'Some bag dress 0',
         price: 100,
         qty: 1
      },
      {
         id: 101,
         name: 'Some bag dress 1',
         price: 30,
         qty: 2
      }
   ], 
   {
      model: BagItem
   }
);

var savedBag = new Backbone.Collection([
      {
         id: 200,
         name: 'Some saved dress 0',
         price: 25,
         qty: 2
      },
      {
         id: 201,
         name: 'Some saved dress 1',
         price: 15,
         qty: 3
      }
   ], 
   {
      model: BagItem
   }
);

var shipping = {
   count: 0,
   total: 0
};

var updatedBag = function () {
   shipping.count = 0;
   shipping.total = 0;
   activeBag.each(function (item) {
      shipping.count += 1;
      shipping.total += item.get('price') * item.get('qty');
   });

   return { active: activeBag.toJSON(), saved: savedBag.toJSON(), shipping: shipping };
};

/* GET users listing. */
router.get('/:shopperId', function(req, res, next) {
   res.send(updatedBag());
});


router.post('/:shopperId', function(req, res, next) {

   // if (delete)
   // if (save)
   // if (move)
   res.send(updatedBag());
});

module.exports = router;
