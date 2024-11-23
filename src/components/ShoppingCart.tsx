type ShoppingCartProps = {
  cartItems: [string, number][];
};

function ShoppingCart({ cartItems }: ShoppingCartProps) {
  return (
    <>
      <h1>Shopping Cart</h1>
      <ul>
        {cartItems.map(([item, count]) => (
          <li>
            {item} - {count}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ShoppingCart;
