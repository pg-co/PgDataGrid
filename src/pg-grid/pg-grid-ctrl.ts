import { Observable } from "rxjs";
import { PgGridDataCtrl } from "./pg-grid-data-ctrl";


export class PgGridCtrl<T> {
    
    


    // sub controls
    private pgGridDataCtrl: PgGridDataCtrl<T>;

    constructor(dataSource?: T[] | Observable<T[]>) {
        
        if(dataSource !== undefined) {
            this.pgGridDataCtrl = new PgGridDataCtrl<T>(dataSource);
        } else {
            this.pgGridDataCtrl = new PgGridDataCtrl<T>();
        }
    }


}