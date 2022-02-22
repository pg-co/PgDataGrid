import { Observable } from "rxjs";
import { IButtonColumnItem } from "../interfaces/IButtonColumnItem";
import { PgGridCtrl } from "./pg-grid-ctrl";

export interface IPgGrid {
	setParentDiv(parentId: string, parentDiv?: HTMLDivElement): void;
}

export interface PgGridParamter<T> {
	parent_div_id: string;
	headers: string[];
	pageSizes?: number[];
	parent_div?: HTMLDivElement;
	dataSource? : T[] | Observable<T[]>
	settings?: {
		header_sort? : boolean;
		resizable_col?: boolean;
		virtual_scroll?: boolean;
		sticky_headers?: boolean;
		dyn_buttons?: {
			state?: boolean;
			items?: IButtonColumnItem[];
		} 
	}
}


export class PgGrid<T> {
	parentDiv!: HTMLDivElement;
	pgGridCtrl: PgGridCtrl<T>;

	constructor(param: PgGridParamter<T>) {
		// setup Parent Div
		this.findParentDiv(param.parent_div_id, param.parent_div);
		// setup Grind Control
		this.pgGridCtrl = new PgGridCtrl<T>(this.parentDiv, param.headers, param.dataSource);
		


	}

	private findParentDiv(pDiv_address: string, pDiv?: HTMLDivElement){
		if(pDiv !== undefined)
			this.parentDiv = pDiv;
		else 
			this.parentDiv = document.querySelector(pDiv_address) as HTMLDivElement;
	}
}
