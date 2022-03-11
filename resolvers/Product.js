  exports.Product = {
    //category: (parent, args, context)
    category: ({categoryId}, args, {db}) => {
      return db.categories.find((category) => category.id === categoryId);
    },
    reviews: ({id}, args, {db}) => {
      return db.reviews.filter(review => review.productId === id)
    }
  }