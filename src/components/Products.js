import { useEffect, useState } from "react";
import ProdCard from "./ProdCard";
import "./style.css";
function Products() {
  const [productList, setproductList] = useState([]);
  useEffect(() => {
    getProducts();
  }, []);
  async function getProducts() {
    let res = await fetch("https://fakestoreapi.com/products");
    //console.log(res);
    let data = await res.json();
    setproductList(data);

    console.log(productList);
  }
  if (productList.length == 0) {
    return <h1>fetching data</h1>;
  }
  return (
    <div className="product-list">
      {productList.map((p) => (
        <ProdCard {...p} key={p.id} />
      ))}
    </div>
  );
}
export default Products;
