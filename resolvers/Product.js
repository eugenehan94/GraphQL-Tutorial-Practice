  exports.Product = {
    //category: (parent, args, context)
    category: ({categoryId}, args, {categories}) => {
      return categories.find((category) => category.id === categoryId);
    },
    reviews: ({id}, args, {reviews}) => {
      return reviews.filter(review => review.productId === id)
    }
  }