import "./style.css";

import { PgGrid } from "./pg-grid/pg-grid";

export interface test {
	he: number;
	ll: string;
	o: number;
}

const app = document.querySelector<HTMLDivElement>("#app")!;

// init
// try{
let pgGrid = new PgGrid<test>("#app", app);

// }
// catch(e){
//   console.log(e);
// }
// console.log(pgGrid);
