import { Observable } from "rxjs";
import { IButtonColumnItem } from "./IButtonColumnItem";

export interface PgGridParamter<T> {
	parent_div_id: string;
	headers: string[];
	dataSource: T[];
	pageSizes?: number[];
	parent_div?: HTMLDivElement;
	settings?: {
		header_sort?: boolean;
		resizable_col?: boolean;
		virtual_scroll?: boolean;
		sticky_headers?: boolean;
		dyn_buttons?: {
			state?: boolean;
			items?: IButtonColumnItem[];
		};
	};
}