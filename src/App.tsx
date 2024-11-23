import { useState } from "react";
import ListGroup from "./components/ListGroup";
import ShoppingCart from "./components/ShoppingCart";
import Message from "./components/Message";

function App() {
  const fruits = ["apple", "grape", "orange", "banana", "kiwi"];
  const vegetables = ["kale", "spinach", "tomato", "onion"];
  const [cart, setCart] = useState<[string, number][]>([]);
  return (
    <>
      <Message>My Shopping Web Page </Message>
      <ListGroup
        items={fruits}
        heading="Fruits"
        cart={cart}
        setCart={setCart}
      />
      <ListGroup
        items={vegetables}
        heading="Vegetables"
        cart={cart}
        setCart={setCart}
      />
      <ShoppingCart cartItems={cart} />
    </>
  );
}

export default App;
