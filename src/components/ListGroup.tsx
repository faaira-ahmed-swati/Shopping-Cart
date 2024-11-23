import { useState } from "react";
import Button from "./Button";
import Alert from "./Alert";

type ListGroupProps = {
  items: string[];
  heading: string;
  cart: [string, number][];
  setCart: React.Dispatch<React.SetStateAction<[string, number][]>>;
};

function ListGroup({ items, heading, cart, setCart }: ListGroupProps) {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [alertVisible, setAlertVisibility] = useState(false);

  const handleAddToCart = (item: string) => {
    // The destructuring ([cartItem]) means that for each tuple (e.g., ["apple", 1]), the first element ("apple") will be extracted into the variable cartItem, while the second element (the count 1) is ignored.
    const itemIndex = cart.findIndex(([cartItem]) => cartItem === item);
    // if item doesn't exist already
    if (itemIndex === -1) {
      setCart([...cart, [item, 1]]);
    } else {
      const updatedCart = [...cart];
      updatedCart[itemIndex] = [item, updatedCart[itemIndex][1] + 1];
      setCart(updatedCart);
    }
    setAlertVisibility(true);
  };

  return (
    <>
      <h1>{heading}</h1>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>Item Added!</Alert>
      )}
      {items.length === 0 && <p>No items found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => setSelectedIndex(index)}
          >
            {item}
            <Button color="secondary" onClick={() => handleAddToCart(item)}>
              Add Item
            </Button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
