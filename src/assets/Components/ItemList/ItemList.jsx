import Item from "../Item/Item";

const ItemList = ({ products }) => {
  return (
    <div className="item-list">
      {products.map((product) => (
        <div key={product.id}>
          <Item product={product} />
        </div>
      ))}
    </div>
  );
};

export default ItemList;



