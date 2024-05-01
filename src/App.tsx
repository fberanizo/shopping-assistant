import React from 'react';
import { Layout } from 'antd';
import ShoppingList from './features/shopping-list/ShoppingList';
import './App.css';

function App() {
  return (
    <Layout style={{height:"100vh"}}>
      <ShoppingList />
    </Layout>
  );
}

export default App;
