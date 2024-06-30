import React from 'react';
import { Link } from 'react-router-dom';

import { Checkbox, Input, List } from 'antd';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { checkItemAsync, shoppingListSelector, viewPriceAsync } from './shoppingListSlice';

function ShoppingList() {
  const shoppingList = useAppSelector(shoppingListSelector);
  const { items, prices, checked } = shoppingList;
  const dispatch = useAppDispatch();
  const source = prices.map((p, i) => {
    return {item: items[i], price: p, checked: checked[i]};
  });
  return (
    <>
      <Link to="/shopping-assistant/prices">Preços</Link>
      <List
        dataSource={source}
        renderItem={({item, price, checked}, index: number) => (
          <List.Item>
            <Input
              defaultValue={`${item}`}
              disabled={checked}
              size='large'
              style={{textDecoration: checked ? "line-through" : "none"}}
              onChange={(e) => dispatch(viewPriceAsync(e.target.value, index))}
              addonBefore={<Checkbox onChange={(e) => dispatch(checkItemAsync(index))}></Checkbox>}
              addonAfter={`${price === 0 ? "": new Intl.NumberFormat("pt-BR", {style: "currency", currency: "BRL"}).format(price)}`}
              />
          </List.Item>
        )}
      />
    </>
  );
}

export default ShoppingList;
