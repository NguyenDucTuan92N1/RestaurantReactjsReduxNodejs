const Product = require('../models/product');
const Order = require('../models/order');

const { validationResult } = require('express-validator/check');
const User = require('../models/user');


exports.getCart = (req, res, next) => {
  User.findById(req.userId)
    .then(user => {
      res.status(200).json({
        message: 'Get cart successfully.',
        products: user.cart.items
      });
    })
    .catch(err => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });

};

exports.postCart = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const error = new Error('Validation failed, entered data is incorrect.');
    error.statusCode = 422;
    throw error;
  }

  console.log(req.userId);
  const prodId = req.body.productId;

  User.findById(req.userId)
    .then(user => {
      Product.findById(prodId).
        then(product => {
          return user.addToCart(product);
        })
        .then(user => {
          res.status(200).json({
            message: 'Post cart successfully.',
            products: user.cart.items
          });
        })
    })
    .catch(err => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });

};

exports.postCartDeleteProduct = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const error = new Error('Validation failed, entered data is incorrect.');
    error.statusCode = 422;
    throw error;
  }

  // console.log(req.userId);
  const prodId = req.body.productId;

  User.findById(req.userId)
    .then(user => {
      user.removeFromCart(prodId)
        .then(result => {
          // console.log(result);
          res.status(200).json({
            message: 'Delete cart successfully.',
            user: { _id: user._id, name: user.name },
            products: user.cart.items
          });
        })
    })
    .catch(err => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};
/////////////////////
exports.getOrders = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const error = new Error('Validation failed, entered data is incorrect.');
    error.statusCode = 422;
    throw error;
  }
  User.findById(req.userId)
    .then(user => {
      Order.find({ 'createdAt': user._id })
        .then(orders => {
          // console.log(orders);
          res.status(200).json({
            message: 'Fetched orders successfully.',
            orders: orders
          });
        })
    })
    .catch(err => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

exports.getOneOrder = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const error = new Error('Validation failed, entered data is incorrect.');
    error.statusCode = 422;
    throw error;
  }
  var orderId = req.params.orderId;
  Order.findById(orderId)
    .then(order => {
      // console.log(orders);
      res.status(200).json({
        message: 'Fetched orders successfully.',
        order: order
      });
    })
    .catch(err => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });

};


exports.postOrder = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const error = new Error('Validation failed, entered data is incorrect.');
    error.statusCode = 422;
    throw error;
  }
  User.findById(req.userId)
    .then(user => {
      user.populate('cart.items.productId')
        .execPopulate()
        .then(user => {
          if (user.cart.items.length === 0) {
            res.status(200).json({
              message: 'Cart is empty!!!',
              products: []
            });
          }
          else {
            const products = user.cart.items.map(i => {
              return { quantity: i.quantity, product: { ...i.productId._doc }, status: 1 };
            });
            const order = new Order({
              user: {
                email: user.email,
                name: user.name,
                userId: user
              },
              products: products,
              status: 1
            });
            order.save()
              .then(order => {
                /// return 
                console.log(order);
                res.status(200).json({
                  message: 'Add to cart successfully.',
                  order: order
                });
                user.clearCart();
              })
              .catch(err => {
                if (!err.statusCode) {
                  err.statusCode = 500;
                }
                next(err);
              });
          }
        })
        
    })
    .catch(err => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });

};
