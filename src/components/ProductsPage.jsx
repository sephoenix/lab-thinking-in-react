import ProductTable from './ProductTable';
import SearchBar from './SearchBar';
import jsonData from './../data.json';
import { useState } from 'react';

function ProductsPage() {
  const [products, setProduct] = useState(jsonData);

  const filterSearch = (str) => {
    let filteredProducts;

    filteredProducts = jsonData.filter((product) => {
      return product.name[0].toLowerCase() == str.toLowerCae();
    });
    setProduct(filteredProducts);
  };

  return (
    <div>
      <h1>IronStore</h1>
      <div>
        <SearchBar filterProducts={filterSearch} />
        <ProductTable products={products} />
      </div>
    </div>
  );
}

export default ProductsPage;
