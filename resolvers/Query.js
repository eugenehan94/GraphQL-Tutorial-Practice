const { reviews } = require("../db")

exports.Query = {
    hello: (parent, args, context) => "World",
    //products: (parent, args, context)
    products: (parent, {filter}, {db}) => {
      let filteredProducts = db.products
      if(filter){
        const {onSale, avgRating} = filter
        if (onSale === true){
          filteredProducts = filteredProducts.filter(product => {
            return product.onSale
          })
        }
        if ([1,2,3,4,5].includes(avgRating)){
          filteredProducts = filteredProducts.filter((product) => {
            let sumRating = 0;
            let numberOfReviews = 0;
            db.reviews.forEach(review => {
              if (review.productId === product.id){
                sumRating += review.rating;
                numberOfReviews++;
              }
            });
            const avgProductRating = sumRating/numberOfReviews
            return avgProductRating >= avgRating
            console.log(avgProductRating, product.name)
          })
        }
      }
      return filteredProducts    
    },
    // product: (parent, args, context)
    product: (parent, {id}, {db}) => {
     return db.products.find((product) => product.id === id)
    },
    categories: (parent, args, {db}) => db.categories,
    category: (parent, {id}, {db}) => {
      return db.categories.find((category) => category.id === id);
    },
  }