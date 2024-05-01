import React from 'react';

import { Checkbox, Input, List } from 'antd';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { checkItemAsync, shoppingListSelector, viewPriceAsync } from './shoppingListSlice';

function ShoppingList() {
  const shoppingList = useAppSelector(shoppingListSelector);
  const { prices, checked } = shoppingList;
  const dispatch = useAppDispatch();
  const items = prices.map(function(p, i) {
    return {price: p, checked: checked[i]};
  });
  return (
      <List
        dataSource={items}
        renderItem={({price, checked}, index: number) => (
          <List.Item>
            <Input
              disabled={checked}
              size='large'
              style={{textDecoration: checked ? "line-through" : "none"}}
              onChange={(e) => dispatch(viewPriceAsync(e.target.value, index))}
              addonBefore={<Checkbox onChange={(e) => dispatch(checkItemAsync(index))}></Checkbox>}
              addonAfter={`${price == 0 ? "": new Intl.NumberFormat('pt-BR', {style: 'currency',currency: 'BRL'}).format(price)}`}
              />
          </List.Item>
        )}
      />
  );
}

export default ShoppingList;
