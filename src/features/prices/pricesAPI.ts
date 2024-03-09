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
import j10 from '../../data/2024-01-24-SONDA.json';
import j11 from '../../data/2024-01-23-SONDA.json';
import j12 from '../../data/2024-01-21-CARREFOUR.json';
import j13 from '../../data/2024-01-29-SONDA.json';
import j14 from '../../data/2024-01-29-SUMERBOL.json';
import j15 from '../../data/2024-02-01-SUMERBOL.json';
import j16 from '../../data/2024-02-02-PERALTA.json';
import j17 from '../../data/2024-02-03-SONDA.json';
import j18 from '../../data/2024-02-04-PAO.json';
import j19 from '../../data/2024-02-05-SONDA.json';
import j20 from '../../data/2024-02-07-SONDA.json';
import j21 from '../../data/2024-02-09-PAO.json';
import j22 from '../../data/2024-02-10-SUMERBOL.json';
import j23 from '../../data/2024-02-11-PERALTA.json';
import j24 from '../../data/2024-02-12-CARREFOUR.json';
import j25 from '../../data/2024-02-13-SONDA.json';
import j26 from '../../data/2024-02-14-SONDA.json';
import j27 from '../../data/2024-02-15-PERALTA.json';
import j28 from '../../data/2024-02-16-SONDA.json';
import j29 from '../../data/2024-02-19-SONDA.json';
import j30 from '../../data/2024-02-19-SUMERBOL.json';
import j31 from '../../data/2024-02-22-SONDA.json';
import j32 from '../../data/2024-03-03-SUMERBOL.json';
import j33 from '../../data/2024-03-05-SUMERBOL.json';
import j34 from '../../data/2024-03-07-PAO.json';

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
  '2024-01-20': j12,
  '2024-01-23': j11,
  '2024-01-24': j10,
  '2024-01-28': j9,
  '2024-01-29': j13,
  '2024-01-30': j14,
  '2024-02-01': j15,
  '2024-02-02': j16,
  '2024-02-03': j17,
  '2024-02-04': j18,
  '2024-02-05': j19,
  '2024-02-07': j20,
  '2024-02-09': j21,
  '2024-02-10': j22,
  '2024-02-11': j23,
  '2024-02-12': j24,
  '2024-02-13': j25,
  '2024-02-14': j26,
  '2024-02-15': j27,
  '2024-02-16': j28,
  '2024-02-19': j29,
  '2024-02-20': j30,
  '2024-02-22': j31,
  '2024-03-03': j32,
  '2024-03-05': j33,
  '2024-03-07': j34,
};

export function fetchPrices(regex: string) {
  let x: Array<string> = [];
  let y: Array<number> = [];
  let text: Array<string> = [];
  let venues: Array<string> = [];
  for (let entry of Object.entries(data)) {
    for (let i = 0; i < entry[1]['names'].length; i++) {
      if (entry[1]['names'][i].match(new RegExp(regex, "i"))) {
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
