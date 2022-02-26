import { BehaviorSubject, Observable, Subscription } from "rxjs";
import { PgGridDataCtrl } from "./pg-grid-data-ctrl";

interface IHeaderData {
	[key: string]: HTMLDivElement;
}

export class PgGridCtrl<T> {
	wrapper!: HTMLDivElement;

	dataContainer!: HTMLDivElement;
	headerContainer!: HTMLDivElement;
	footerContainer!: HTMLDivElement;

	// Inputs
	headers: string[] = [];

	_headers: IHeaderData = {};

	_dataCtrl!: PgGridDataCtrl<T>;

	// subs
	dataSub$: Subscription;

	constructor(
		private pDiv: HTMLElement,
		headers: string[],
		private dataSource?: T[] | Observable<T[]>
	) {
		// sub-controls
		this._dataCtrl = new PgGridDataCtrl<T>(this.dataSource || []);

		// structure
		this.setup();

		this.add2Footer();

		this.handleHeaders(headers);

		// receive Data
		// TODO check pipe(pairwise()) is good
		this.dataSub$ = this._dataCtrl.aquireData().subscribe({
			next: (d: T[]) => {
				this.renderData(d);
			},
			error: (_err) => console.error(_err),
		});
	}

	private setup() {
		// Generate elements
		this.wrapper = this.generateWrapper(); // Wrapper of the Grid (Parent)
		this.dataContainer = this.generateDataContainer(); // Data
		this.headerContainer = this.generateHeaderContainer(); // Headers
		this.footerContainer = this.generateFooterContiaier(); // Footer

		// add elements to the grid
		this.pDiv.appendChild(this.wrapper);
		this.pDiv.appendChild(this.headerContainer);
		this.pDiv.appendChild(this.getHr());
		this.pDiv.appendChild(this.dataContainer);
		this.pDiv.appendChild(this.footerContainer);
	}

	private unsubscribeAll(): void {
		throw new Error("Method not implemented.");
	}

	private resetDiv(div: HTMLDivElement): void {
		div.innerHTML = "";
	}

	private getHr(){
		let hr = document.createElement("hr");
		hr.style.width = '100%';
		hr.style.margin = '0';
		return hr;
	}

	private add2Footer(){
		let pagesize = document.createElement("select");
		let divA = document.createElement("div");
		let divB = document.createElement("div");
		let btnPre = document.createElement("button");
		btnPre.appendChild(document.createTextNode('before'))
		let btnNex = document.createElement("button");
		btnNex.appendChild(document.createTextNode('after'))
		this.footerContainer.appendChild(pagesize)
		this.footerContainer.appendChild(divA)
		this.footerContainer.appendChild(divB)
		this.footerContainer.appendChild(btnPre)
		this.footerContainer.appendChild(btnNex)
	}

	private renderData(data: T[]) {
		this.resetDiv(this.dataContainer);
		for (let d of data) {
			let row = document.createElement("div");
			row.style.width = "100%";
			row.style.display = "flex";
			row.style.flexDirection = "row";
			row.className = 'row';
			for (let h of Object.keys(this._headers)) {
				let currH = h.split("___")[1];
				let cell = document.createElement("div");

				cell.className = h + "_" + cell;
				cell.classList.add("cell");
				cell.style.width = "100%";
				cell.appendChild(document.createTextNode((d as any)[currH]));
				row.appendChild(cell);
			}
			this.dataContainer.appendChild(row);
			let hr = document.createElement("hr");
			hr.style.width = '100%';
			hr.style.margin = '0';
			this.dataContainer.appendChild(row);
			this.dataContainer.appendChild(hr);
		}
	}

	private handleHeaders(headers: string[]) {
		let heads: IHeaderData = {};
		for (let h of headers) {
			let headerName = `header___${h}`;
			let header_div = document.createElement("div");
			header_div.className = headerName;
			header_div.appendChild(document.createTextNode(h));
			header_div.style.width = "100%";
			header_div.classList.add("header");
			heads[headerName] = header_div;
			this.headerContainer.appendChild(header_div);
		}
		this._headers = heads;
	}

	private generateHeaderContainer() {
		let headerContainer = document.createElement("div");
		headerContainer.className = "header_container";
		headerContainer.style.width = "100%";
		headerContainer.style.display = "flex";
		headerContainer.style.flexDirection = "row";
		return headerContainer;
	}

	private generateWrapper() {
		let wrapper = document.createElement("div");
		wrapper.id = "parentWrapper";
		wrapper.style.width = "100%";
		wrapper.style.backgroundColor = "skyblue";
		return wrapper;
	}

	private generateDataContainer() {
		let data = document.createElement("div");
		data.className = "dataContainer";
		data.style.width = "100%";
		data.style.display = "flex";
		data.style.flexDirection = "column";
		this.dataContainer = data;
		return data;
	}

	private generateFooterContiaier() {
		let footer = document.createElement("div");
		footer.className = "footer-container";
		footer.style.width = "100%";
		footer.style.display = "flex";
		footer.style.justifyContent = "flex-end";
		return footer;
	}

	public _updateData(data: T[]): void {
		this._dataCtrl.updateData(data);
	}
}
