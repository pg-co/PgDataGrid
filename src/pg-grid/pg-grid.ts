import { Observable } from "rxjs";
import { PgGridCtrl } from "./pg-grid-ctrl";

export interface IPgGrid {
	setParentDiv(parentId: string, parentDiv?: HTMLDivElement): void;
}

export class PgGrid<T> {
	parentDiv: HTMLDivElement = new HTMLDivElement();
	pgGridCtrl: PgGridCtrl<T> = new PgGridCtrl<T>(this.parentDiv);

	// constructor(pDivId: string, pDiv?: HTMLDivElement) {
	// 	if (pDiv) {
	// 		this.parentDiv = pDiv;
	// 		// this.pgGridCtrl = new PgGridCtrl<T>(pDiv);
	// 	} else {
	// 		this.parentDiv = document.querySelector(pDivId)!;
	// 	}
	// }

	init() {}

	// parentDiv!: HTMLDivElement | null;

	// // constructor(data?: T[] | Observable<T[]>) {
	// constructor() {
	// 	// this.setParentDiv(parentDiv_id!, parentDiv);
	//     // this.pgGridCtrl = new PgGridCtrl<number>(this.parentDiv!, []);
	//     // this.pgGridCtrl.buildGridWrapper();
	// }

	// initGrid(_data?: T[] | Observable<T[]>){

	// }

	// createGrid() {

	// 	let grid = document.createElement("div")
	// 	grid.style.backgroundColor = 'red';
	// 	grid.style.width = '100px';
	// 	grid.style.height = '101px';
	// 	if (this.parentDiv !== null) {
	// 		this.parentDiv.appendChild(grid);
	// 	}
	//     console.log('test');
	// }
}
