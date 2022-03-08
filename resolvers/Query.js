const { reviews } = require("../db")

exports.Query = {
    hello: (parent, args, context) => "World",
    //products: (parent, args, context)
    products: (parent, {filter}, {products}) => {
      let filteredProducts = products
      if(filter){
        const {onSale, avgRating} = filter
        if (onSale === true){
          filteredProducts = filteredProducts.filter(product => {
            return product.onSale
          })
        }
        if ([1,2,3,4,5].includes(avgRating)){
          filterProducts = filteredProducts.filter((product) => {
            let sumRating = 0;
            reviews.forEach(review => {
              
            })
          })
        }
      }
      return filteredProducts    
    },
    // product: (parent, args, context)
    product: (parent, {id}, {products}) => {
     return products.find((product) => product.id === id)
    },
    categories: (parent, args, {categories}) => categories,
    category: (parent, {id}, {categories}) => {
      return categories.find((category) => category.id === id);
    },
  }