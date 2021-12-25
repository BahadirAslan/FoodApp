import React, { useState } from "react";
import Header from "./component/Layout/Header";
import Meals from './component/Meals/Meals';
import Cart from './component/Cart/Cart';
import CartProvider from "./store/CartProvider";

function App() {
  const [cartIsShown, setCardIsShown] = useState(false);

  const showCardHandler = () => {
    setCardIsShown(true);
  };
  const hideCartHandler = () => {
    setCardIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler}/>}
      <Header onShowCart={showCardHandler}/>
      <main>
<Meals/>
      </main>
      </CartProvider>
  );
}

export default App;
