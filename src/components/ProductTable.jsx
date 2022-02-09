import ProductRow from './ProductRow';

function ProductTable({ products }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <ProductRow
            key={product.id}
            category={product.category}
            inStock={product.inStock}
            name={product.name}
            price={product.price}
          />
        ))}
      </tbody>
    </table>
  );
}

export default ProductTable;
