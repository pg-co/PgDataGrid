import { Observable } from "rxjs";
import { PgGridDataCtrl } from "./pg-grid-data-ctrl";

export class PgGridCtrl<T> {
	parentDiv!: HTMLElement;
	parentWrapper: HTMLDivElement = new HTMLDivElement();

	// sub controls
	// private pgGridDataCtrl: PgGridDataCtrl<T>;

	// constructor(pDiv: HTMLElement, dataSource?: T[] | Observable<T[]>) {
	constructor(pDiv: HTMLElement) {
		this.parentDiv = pDiv;
		

		// setup Data
		// if (dataSource !== undefined) {
		// 	this.pgGridDataCtrl = new PgGridDataCtrl<T>(dataSource);
		// } else {
		// 	this.pgGridDataCtrl = new PgGridDataCtrl<T>();
		// }

		// // setup parentDiv
		// this.parentDiv = parentDiv;
	}

	public buildGridWrapper() {
		this.parentWrapper = document.createElement("div");
        this.parentWrapper.id = 'parentWrapper';
		this.parentWrapper.style.width = "100px";
		this.parentWrapper.style.height = "50px";
		this.parentWrapper.style.backgroundColor = "skyblue";
		this.parentDiv.appendChild(this.parentWrapper);
	}

    public updateData(data: T[]): void {
        // this.pgGridDataCtrl.updateData(data);
    }
}
