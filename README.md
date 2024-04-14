# Shopping Assistant

[![Build and Deploy](https://github.com/fberanizo/shopping-assistant/actions/workflows/deploy.yml/badge.svg)](https://github.com/fberanizo/shopping-assistant/actions/workflows/deploy.yml)

----

Dashboard to follow the price history of groceries purchases I made.

----

## Como adicionar novos dados

1. Access *Cupom Fiscal Eletrônico na NFP* page ([example here](./cupom.png))
2. Run the following script on the Web browser console:
```js
var json = {"venue": "CARREFOUR", "names": [], "values": []};
document.querySelectorAll("#tableItens tbody tr").forEach(tr => {
  var items = Array.from(tr.querySelectorAll("td"));
  if (items.length === 8) {
    var regex = /X\n([0-9]+,[0-9]+)/;
    var valueUnit = parseFloat(items.find(td => td.innerText.match(regex)).innerText.match(regex)[1].replace(",", "."));
    var itemName = items[2].innerHTML;
    json["names"].push(itemName);
    json["values"].push(valueUnit);
  }
});
json;
```
```js
document.querySelectorAll("#tabResult tbody tr").forEach(tr => {
  var items = Array.from(tr.querySelectorAll("td span.txtTit"));
  var itemName = items[0].innerHTML;
  var itemsV = Array.from(tr.querySelectorAll("td span.RvlUnit"));
  var valueUnit = parseFloat(itemsV[0].innerHTML.replace(/[^\d,]/g,"").replace(",", "."));
  json["names"].push(itemName);
  json["values"].push(valueUnit);
});
json;
```
3. Copy the output to a file `ANODACOMPRA-MESDACOMPRA-DIADACOMPRA-NOME-MERCADO.json` in the folder `src/data`
4. Update `src/features/prices/priceAPI.ts` to import the new file
5. Add new products to the list at `src/features/products/productsAPI.ts`
```js
var products = "copiar aqui o conteúdo do object com a lista de produtos";
var isProduct = (item) => products["data"].some(p => item.match(p["regex"]));
json["names"].filter(i => !isProduct(i));
```

## Access

https://fberanizo.github.io/shopping-assistant/
