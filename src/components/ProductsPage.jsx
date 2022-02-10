import ProductTable from './ProductTable';
import SearchBar from './SearchBar';
import jsonData from './../data.json';
import { useState } from 'react';

function ProductsPage() {
  const [products, setProduct] = useState(jsonData);

  const onFilter = (input) => {
    setProduct((products) => [
      ...products.filter((product) => product.name.includes(input.name)),
    ]);
    if (input.name === '') {
      setProduct(jsonData);
    }
  };

  const handleCheck = () => {
    setProduct((products) => [
      ...products.filter((product) => product.inStock),
    ]);
  };

  return (
    <div>
      <h1>IronStore</h1>
      <div>
        <SearchBar onFilter={onFilter} />
        <input type="checkbox" onChange={handleCheck} />
        <ProductTable products={products} />
      </div>
    </div>
  );
}

export default ProductsPage;
