
export class PgHeaderDiv extends HTMLDivElement {
    title: string;

    constructor(title?: string){
        super();
        this.title = title || "";
    }
}