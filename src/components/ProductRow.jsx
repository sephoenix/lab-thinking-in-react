function ProductRow({ name, price, inStock }) {
  const style = inStock
    ? {
        color: 'black',
      }
    : {
        color: 'red',
      };
  return (
    <tr style={style}>
      <td>{name}</td>
      <td>{price}</td>
    </tr>
  );
}

export default ProductRow;
