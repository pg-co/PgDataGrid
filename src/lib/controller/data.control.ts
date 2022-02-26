import { BehaviorSubject, Observable } from "rxjs";
import { appenMultipleChilds, createCell, createHr, createRow, resetDiv } from "../utils/elementHelper";


export class DataController<T> {
    private dataSubj: BehaviorSubject<T[]> = new BehaviorSubject<T[]>([]);
    private dataSubj$ = this.dataSubj.asObservable();

    constructor(_data: T[]) {
        this.dataSubj.next(_data);
    }

    public getData(): Observable<T[]> {
        return this.dataSubj$;
    }

    public updateData(data: T[]): void {
        this.dataSubj.next(data);
    }

    public renderData(dataDiv: HTMLDivElement, header: string[], data: T[]){
        resetDiv(dataDiv);
        data.map((data: T) => {
            let row = createRow();
            header.map((h: string) => {
                row.appendChild(createCell( ((data as any)[h]), `${h}_cell`));
            });
            appenMultipleChilds(row, createHr());
        });
    }
}