let products = []
const getProductsData = async () => {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();
    products = data.products;
    // products.map((product) => console.log(product));

    const priceGreterThanTwelve = products.filter((product) => product.price >= 12.00);
    console.log(priceGreterThanTwelve);    
}
getProductsData();




// fetch("https://dummyjson.com/products")
//     .then((res)=>res.json())
//     .then((data)=>console.log(data.products))
//     .catch((error)=>console.log(error));