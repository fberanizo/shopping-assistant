import React, { useState } from 'react';
import { Layout } from 'antd';
import Products from './features/products/Products';
import Prices from './features/prices/Prices';
import ShoppingList from './features/shopping-list/ShoppingList';
import './App.css';

function App() {
  const [visible, setVisible] = useState(true);
  return (
    <Layout style={{height:"100vh"}}>
      <ShoppingList />
      {/* <Products visible={visible} setVisible={setVisible} /> */}
      {/* <Prices visible={visible} /> */}
    </Layout>
  );
}

export default App;
