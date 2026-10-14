const root = ReactDOM.createRoot(
    document.getElementById("root"));
const getProductsData = async () => {
    const res = await
        fetch("https://dummyjson.com/products");
    const data = await res.json();
    return data.products;
}
const HeaderComponent = () => {
    return (<div style={{
        textAlign: "center",
        backgroundColor: "black",
        color: "white"
    }}>
        <h1>E-commerce Webpage</h1>
    </div>)
}
const ProductComponent = ({products}) => {
    console.log(products);  
    return (<div id="prod-container">
        {products.map((product)=><div>
            <img src={product.thumbnail}></img>
            <h1>{product.title}</h1>
            <h2>{product.price}</h2>
        </div>)}
    </div>)
}
const FooterComponent = () => {
    return (<div>
        <h2>Copyright all rights are reserved...</h2>
    </div>)
}
const appRender = async () => {
    let products = await getProductsData();
    const reactElement = <>
        <HeaderComponent />
        <ProductComponent products={products} />
        {FooterComponent()}
    </>
    root.render(reactElement);
}
appRender();
