  exports.Product = {
    //category: (parent, args, context)
    category: ({categoryId}, args, {categories}) => {
      return categories.find((category) => category.id === categoryId);
    },
  }