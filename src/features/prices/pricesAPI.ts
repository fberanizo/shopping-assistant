import j0 from '../../data/2023-12-22-SONDA.json';
import j1 from '../../data/2023-12-27-SONDA.json';
import j2 from '../../data/2023-12-29-SONDA.json';
import j3 from '../../data/2024-01-11-SONDA.json';
import j4 from '../../data/2024-01-13-SONDA.json';
import j5 from '../../data/2024-01-14-PAGUE-MENOS.json';
import j6 from '../../data/2024-01-15-SONDA.json';
import j7 from '../../data/2024-01-16-PAGUE-MENOS.json';
import j8 from '../../data/2024-01-21-PAGUE-MENOS.json';
import j9 from '../../data/2024-01-28-CARREFOUR.json';

const data = {
  '2023-12-22': j0,
  '2023-12-27': j1,
  '2023-12-29': j2,
  '2024-01-11': j3,
  '2024-01-13': j4,
  '2024-01-14': j5,
  '2024-01-15': j6,
  '2024-01-16': j7,
  '2024-01-21': j8,
  '2024-01-28': j9,
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
