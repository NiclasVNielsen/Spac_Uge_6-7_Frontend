import { products } from "../data/products"

export const instantiateProductObject = (id, name, category) => {
    products.value.push({
        id, name, category
    })
}

//test data
for(let i = 0; i < 20; i++){
    instantiateProductObject(i, "product name " + i, "fruits")
}