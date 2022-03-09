const {v4: uuid} = require("uuid");
const { products } = require("../db");
exports.Mutation = {
    addCategory: (parent, {input}, {categories}) => {
        const {name} = input
        const newCategory = {
            id: uuid(),
            name
        }
        categories.push(newCategory);
        return newCategory;
    },
    addProduct: (parent, {input}, {product}) => {
        const {
            name,
            image,
            price,
            onSale,
            quantity,
            categoryID
        } = input
        const newProduct = {
            id: uuid(),
            name,
            image,
            price,
            onSale,
            quantity,
            categoryID
        }
        products.push(newProduct)

        return newProduct
    },
    addReview: (parent, {input}, {reviews}) =>  {
        const {
            date,
            title,
            comment,
            rating,
            productId
         } = input 
         const newReview = {
             id: uuid(),
             date,
             title,
             comment,
             rating,
             productId
         }
    }
}