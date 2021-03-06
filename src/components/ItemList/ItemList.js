import Item from "../Item/Item";
import "./ItemList.css";

const ItemList= ({ item }) => {
  return (
    <div className="productsContainer row">{item.map( product => (
      <Item key={product.id} productData={product} />
    )

    )} </div>
  );
}

export default ItemList;