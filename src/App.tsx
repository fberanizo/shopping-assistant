import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import { Layout } from 'antd';
import Products from './features/products/Products';
import Prices from './features/prices/Prices';
import ShoppingList from './features/shopping-list/ShoppingList';
import './App.css';

function App() {
  const [visible, setVisible] = useState(true);
  return (
    <Router>
      <Layout style={{height:"100vh"}}>
        <Routes>
          <Route path="/" element={<ShoppingList />} />

          <Route path="/prices" element={
            <>
              <Products visible={visible} setVisible={setVisible} />
              <Prices visible={visible} />
            </>
          } />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
