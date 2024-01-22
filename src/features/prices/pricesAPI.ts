import j0 from '../../data/2023-12-22-SONDA.json';
import j1 from '../../data/2023-12-27-SONDA.json';

const data = {
  '2023-12-22': j0,
  '2023-12-27': j1,
};

export function fetchPrices(regex: string) {
  let x: Array<string> = [];
  let y: Array<number> = [];
  let text: Array<string> = [];
  let venues: Array<string> = [];
  for (let entry of Object.entries(data)) {
    for (let i = 0; i < entry[1]['names'].length; i++) {
      if (entry[1]['names'][i].match(regex)) {
        x.push(entry[0]);
        y.push(entry[1]['values'][i] as number);
        text.push(entry[1]['names'][i] + "<br>R$" + entry[1]['values'][i] + "<br>" + entry[1]['venue']);
        venues.push(entry[1]['venue']);
        break;
      }
    }
  }

  let uniqueVenues: Array<string> = Object.values(data).map(d => d['venue']).filter((v, i, a) => a.indexOf(v) === i);
  return Promise.resolve({data: {x, y, text, venues, uniqueVenues}});
}
