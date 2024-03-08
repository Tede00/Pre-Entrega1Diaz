import Item from "../Item/Item";

const ItemList = ({ products, ids }) => {
  // Agregamos los IDs a los productos
  const productsWithIds = products.map((product, index) => ({
    ...product,
    id: ids[index]
  }));
  console.log(productsWithIds);

  return (
    <div className="item-list">
      {productsWithIds.map((product) => (
        <div key={product.id}>
          <Item product={product} />
        </div>
      ))}
    </div>
  );
};

export default ItemList;