const Product = require('../models/product');
const Order = require('../models/order');


exports.postDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  Product.findByIdAndRemove(prodId)
    .then(() => {
      console.log('DESTROYED PRODUCT');
      res.redirect('/admin/showProducts');
    })
    .catch(err => console.log(err));
};

////
exports.getProducts = (req, res, next) => {
  Product.find()
    // .select('title price -_id')
    // .populate('category', 'name')
    .then(products => {
      // console.log(products);
      res.render('cooker/showProducts', {
        prods: products,
        pageTitle: 'Cooker Products',
        path: '/cooker/showProducts',
        username: (req.session.cooker) ? req.session.cooker.email : "null"
      });
    })
    .catch(err => console.log(err));
};

///
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
      res.render('cooker/editProduct', {
        pageTitle: 'Edit Product',
        path: '/cooker/editProduct',
        editing: editMode,
        product: product,
        username: (req.session.cooker) ? req.session.cooker.email : "null"
      });
    })
    .catch(err => console.log(err));
};

///
exports.postEditProduct = (req, res, next) => {
  const prodId = req.body.productId;
  // const updatedTitle = req.body.title;
  // const updatedPrice = req.body.price;
  // const updatedImageUrl = req.body.imageUrl;
  // const updatedDesc = req.body.description;
  // const updatedcategory = req.body.category;
  const updatedstatus = req.body.status;
  const updatedquantity = req.body.quantity;
  Product.findById(prodId)
    .then(product => {
      // product.title = updatedTitle;
      // product.price = updatedPrice;
      // product.description = updatedDesc;
      // product.imageUrl = updatedImageUrl;
      // product.category = updatedcategory;
      product.status = updatedstatus;
      product.quantity = updatedquantity;
      return product.save();
    })
    .then(result => {
      console.log('UPDATED PRODUCT!');
      res.redirect('/products');
    })
    .catch(err => console.log(err));
};


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
        username: (req.session.cooker) ? req.session.cooker.email : "null"
      });
    })
    .catch(err => console.log(err));
};
