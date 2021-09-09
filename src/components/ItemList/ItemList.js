import Item from "../Item/Item";
import "./ItemList.css";

const ItemList= ({ item }) => {
  return (
    <div className="productsContainer">{item.map( producto => (
      <Item key={producto.id} productData={producto} />
    )

    )} </div>
  );
}

export default ItemList;