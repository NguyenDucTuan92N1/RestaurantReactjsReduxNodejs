const Product = require('../models/product');
const Order = require('../models/order');

// exports.getAddProduct = (req, res, next) => {
//   res.render('admin/edit-product', {
//     pageTitle: 'Add Product',
//     path: '/admin/add-product',
//     editing: false
//   });
// };



// exports.getEditProduct = (req, res, next) => {
//   const editMode = req.query.edit;
//   if (!editMode) {
//     return res.redirect('/');
//   }
//   const prodId = req.params.productId;
//   Product.findById(prodId)
//     .then(product => {
//       if (!product) {
//         return res.redirect('/');
//       }
//       res.render('admin/edit-product', {
//         pageTitle: 'Edit Product',
//         path: '/admin/edit-product',
//         editing: editMode,
//         product: product
//       });
//     })
//     .catch(err => console.log(err));
// };



// exports.getProducts = (req, res, next) => {
//   Product.find()
//     // .select('title price -_id')
//     // .populate('userId', 'name')
//     .then(products => {
//       console.log(products);
//       res.render('admin/products', {
//         prods: products,
//         pageTitle: 'Admin Products',
//         path: '/admin/products'
//       });
//     })
//     .catch(err => console.log(err));
// };

exports.postDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  Product.findByIdAndRemove(prodId)
    .then(() => {
      console.log('DESTROYED PRODUCT');
      res.redirect('/admin/showProducts');
    })
    .catch(err => console.log(err));
};

///////////////////////////

exports.showAdmin = (req, res, next) => {
  res.render('admin/admins');
};

exports.showProducts = (req, res, next) => {
  Product.find()
    // .select('title price -_id')
    // .populate('category', 'name')
    .then(products => {
      console.log(products);
      res.render('admin/showProducts', {
        prods: products,
        pageTitle: 'Admin Products',
        path: '/admin/showProducts',
        username: (req.session.user) ? req.session.user.email : "null"

      });
    })
    .catch(err => console.log(err));
};

exports.getAddNewProduct = (req, res, next) => {
  res.render('admin/addNewProduct', {
    pageTitle: 'Add Product',
    path: '/admin/addNewProduct',
    editing: false,
    username: (req.session.user) ? req.session.user.email : "null"
  });
};

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  const category = req.body.category;
  const status = req.body.status;
  const quantity = req.body.quantity;
  const product = new Product({
    title: title,
    price: price,
    description: description,
    imageUrl: imageUrl,
    quantity: quantity,
    category: category,
    status: status
  });
  product
    .save()
    .then(result => {
      // console.log(result);
      console.log('Created Product');
      res.redirect('/admin/showProducts');
    })
    .catch(err => {
      console.log(err);
    });
};

exports.getEditProduct = (req, res, next) => {
  const editMode = req.query.edit;
  if (!editMode) {
    return res.redirect('/');
  }
  const prodId = req.params.productId;
  Product.findById(prodId)
    .then(product => {
      if (!product) {
        return res.redirect('/');
      }
      res.render('admin/editProduct', {
        pageTitle: 'Edit Product',
        path: '/admin/editProduct',
        editing: editMode,
        product: product,
        username: (req.session.user) ? req.session.user.email : "null"
      });
    })
    .catch(err => console.log(err));
};
exports.postEditProduct = (req, res, next) => {
  const prodId = req.body.productId;
  const updatedTitle = req.body.title;
  const updatedPrice = req.body.price;
  const updatedImageUrl = req.body.imageUrl;
  const updatedDesc = req.body.description;

  Product.findById(prodId)
    .then(product => {
      product.title = updatedTitle;
      product.price = updatedPrice;
      product.description = updatedDesc;
      product.imageUrl = updatedImageUrl;
      return product.save();
    })
    .then(result => {
      console.log('UPDATED PRODUCT!');
      res.redirect('/admin/showProducts');
    })
    .catch(err => console.log(err));
};
///////////
exports.getOrders = (req, res, next) => {
  Order.find()
    .then(orders => {
      for (let o of orders){
        // console.log(user_s);
        // var u_name = o.user.name;
        // var o1 = {...o, username: u_name}
        // newOrders.push(o1);
      } 
      // console.log(newOrders);
      res.render('admin/orders', {
        path: '/orders',
        pageTitle: 'Orders',
        orders: orders,
        username: (req.session.user) ? req.session.user.email : "null"
      });
    })
    .catch(err => console.log(err));
};
