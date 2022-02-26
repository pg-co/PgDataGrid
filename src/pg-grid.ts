import { Observable } from "rxjs";
import { DataController } from "./lib/controller/data.control";
import { MainController } from "./lib/controller/main.controll";
import { IButtonColumnItem } from "./lib/interfaces/IButtonColumnItem";
import { PgGridParamter } from "./lib/interfaces/IGridParameter";

export interface IPgGrid {
	setParentDiv(parentId: string, parentDiv?: HTMLDivElement): void;
}



export class PgGrid<T> {
	parentDiv!: HTMLDivElement;
	pgGridCtrl: MainController<T>;

	constructor(param: PgGridParamter<T>) {
		// setup Parent Div
		this.findParentDiv(param.parent_div_id, param.parent_div);
		// setup Grind Control
		this.pgGridCtrl = new MainController<T>(
			this.parentDiv,
			param.headers,
			param.dataSource
		);
	}

	private findParentDiv(pDiv_address: string, pDiv?: HTMLDivElement) {
		if (pDiv !== undefined) this.parentDiv = pDiv;
		else
			this.parentDiv = document.querySelector(pDiv_address) as HTMLDivElement;
	}
}
