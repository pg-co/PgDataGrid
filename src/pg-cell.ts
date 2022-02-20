

export class PgCell extends HTMLDivElement {
    width: number = 0;
    height: number = 0;
    type: string = "";
    parentHeader?: string = "";

    constructor(){
        super();
    }
}