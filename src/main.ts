import "./style.css";

import { PgGrid } from "./pg-grid/pg-grid";
import { PgGridDataCtrl } from "./pg-grid/pg-grid-data-ctrl";
import { PgGridCtrl } from "./pg-grid/pg-grid-ctrl";

export interface test {
	he: number;
	ll: string;
	o: number;
}

const app = document.querySelector<HTMLDivElement>("#app")!;

// init
// try{
let pgDataCtrl = new PgGridDataCtrl<test>();
let pgCtrl = new PgGridCtrl<test>(app);
// let pgGrid = new PgGrid<test>("#app", app);

// }
// catch(e){
//   console.log(e);
// }
// console.log(pgGrid);
