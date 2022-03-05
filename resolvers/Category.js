exports.Category = {
    // products: (parent, args, context)
    products: ({id: categoryId}, args, {products}) => {
      return products.filter((product) => product.categoryId === categoryId);
    },
  }