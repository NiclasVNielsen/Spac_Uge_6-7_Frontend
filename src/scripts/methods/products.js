import { products } from "../data/products"

export const instantiateProductObject = (id, name, category) => {
    products.value.push({
        id, name, category
    })
}

//test data
for(let i = 0; i < 100; i++){
    instantiateProductObject(i, "product name " + i, "fruits")
}