import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import { Card } from "./components/Card";
import { IProducts } from "./types";

function App() {
  const [products, setProducts] = useState<IProducts[] | null>(null);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then(({ data }) => setProducts(data.products));
  }, []);

  return (
    <div className="App">
      {products &&
        products.map((product) => (
          <Fragment key={product.id}>
            <Card product={product} />
          </Fragment>
        ))}
    </div>
  );
}

export default App;
