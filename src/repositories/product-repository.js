const mongoose = require('mongoose');
const Product = mongoose.model('Product');

exports.get = async () => {
  const res = await Product.find({
    active: true
  }, 'title price slug');
  return res;
}

exports.getBySlug = async (slug) => {
  const res = await Product
    .findOne({
      slug: slug,
      active: true
    }, 'title description price slug tags');
  return res;
}

exports.getByTag = async (tags) => {
  const res = await Product
    .find({
      tags: tags,
      active: true
    }, 'title description price slug tags');
  return res
}

exports.getById = async (id) => {
  const res = await Product
    .findById(id);
  return res
}

exports.create = async (data) => {
  var product = new Product(data);
  await product.save()
}

/*exports.updateOld = async(data) => {
  await Product
    .findByIdAndUpdate(data, {
      $set: {
        title: req.body.title,
        description: req.body.description,
        slug: req.body.slug,
        price: req.body.price

      }
    })
}*/

exports.update = async (productId, productNewData) => {
  await Product
    .findByIdAndUpdate(productId, {
      $set: {
        title: productNewData.title,
        description: productNewData.description,
        slug: productNewData.slug,
        price: productNewData.price
      }
    })
}

exports.delete = async (id) => {
  await Product.findByIdAndRemove(id)
}


