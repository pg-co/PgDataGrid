import "./style.css";

import { PgGrid, PgGridParamter } from "./pg-grid/pg-grid";
import { PgGridDataCtrl } from "./pg-grid/pg-grid-data-ctrl";
import { PgGridCtrl } from "./pg-grid/pg-grid-ctrl";

export interface test {
	he: number;
	ll: string;
	o: number;
}

const testData: test[] = [
	{
		he: 1,
		ll: "stringwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww",
		o: 2
	},
	{
		he: 2,
		ll: "Test",
		o: 3
	},
	{
		he: 3,
		ll: "number",
		o: 4
	},
	{
		he: 4,
		ll: "World",
		o: 5
	},
	{
		he: 23234234,
		ll: "Hello",
		o: 2363
	},
]

const app = document.querySelector<HTMLDivElement>("#app")!;

const params: PgGridParamter<test> = {
	parent_div_id: '#app',
	headers: ['he', 'll', 'o'],
	dataSource: testData
}

// init
// try{
let pgGrid = new PgGrid<test>(params);

// }
// catch(e){
//   console.log(e);
// }
// console.log(pgGrid);
