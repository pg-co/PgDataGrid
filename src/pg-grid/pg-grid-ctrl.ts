import { BehaviorSubject, Observable, Subscription } from "rxjs";
import { PgGridDataCtrl } from "./pg-grid-data-ctrl";

export class PgGridCtrl<T> {
	parentWrapper!: HTMLDivElement
	header_container!: HTMLDivElement;
	headers: HTMLDivElement[] = [];

	_dataCtrl!: PgGridDataCtrl<T>;
	_prev_data: T[] = [];
	_curr_data: T[] = [];

	// subs
	dataSub$: Subscription;

	constructor(private pDiv: HTMLElement, headers: string[], private dataSource?: T[] | Observable<T[]>) {
		this._dataCtrl = new PgGridDataCtrl<T>(this.dataSource || []);
		this.GenerateWrapper();
		this.GenerateHeaderContainer()
		this.GenHeaders(headers);
		this.headers[0].style.backgroundColor = 'red';
		
		// receive Data
		// TODO check pipe(pairwise()) is good
		this.dataSub$ = this._dataCtrl.aquireData().subscribe({
			next: (d: T[]) => {
				this._curr_data = d;
				// this.renderData(d);
			},
			error: (_err) => console.error(_err) 
		});
	}


	public unsubscribeAll(): void {
		throw new Error("Method not implemented.");
	}


	renderData(header: string[], data: T[]){
		

	}


	public createInitialGrid(headers: string[], data: T[]){
		let headerDivs = headers.map((h) => new PgHeaderDiv(h));
		this.parentWrapper
	}

	public GenHeaders(headers: string[]){
		console.log(headers);
		for(let h of headers){
			let header_div = document.createElement('div');
			header_div.className = 'header_'+h;
			header_div.appendChild(document.createTextNode(h));
			header_div.style.width = '100%';
			this.headers.push(header_div);
			this.header_container.appendChild(header_div);
		}
	}



	public GenerateHeaderContainer(){
		this.header_container = document.createElement('div');
		this.header_container.className = 'header_container';
		this.header_container.style.width = '100%';
		this.header_container.style.display = 'flex';
		this.header_container.style.flexDirection = 'row';
		this.parentWrapper.appendChild(this.header_container);
	}

	public GenerateWrapper() {
		this.parentWrapper = document.createElement("div");
        this.parentWrapper.id = 'parentWrapper';
		this.parentWrapper.style.width = "100%";
		this.parentWrapper.style.backgroundColor = "skyblue";
		this.pDiv.appendChild(this.parentWrapper);
	}

    public _updateData(data: T[]): void {
    //    this.updateData(data);
    }
}
