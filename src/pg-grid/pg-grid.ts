import { PgGridCtrl } from "./pg-grid-ctrl";

export class PgGrid {
	parentDiv!: HTMLDivElement | null;

    pgGridCtrl!: PgGridCtrl;

	constructor(parentDiv_id: string, parentDiv?: HTMLDivElement) {
		this.setParentDiv(parentDiv_id, parentDiv);
	}

    setParentDiv(div_id: string, parentDiv?: HTMLDivElement) {
        this.parentDiv = parentDiv || document.querySelector('#'+div_id);
    }

    initGrid(){
        this.pgGridCtrl = new PgGridCtrl();
    }

	createGrid() {
        
		let grid = document.createElement("div")
		grid.style.backgroundColor = 'red';
		grid.style.width = '100px';
		grid.style.height = '101px';
		if (this.parentDiv !== null) {
			this.parentDiv.appendChild(grid);
		}
        console.log('test');
	}



}
