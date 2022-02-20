import { BehaviorSubject, Observable, Subscription } from "rxjs";
import { PgUpdateDataException } from "../exceptions/pg-exceptions";


export class PgGridDataCtrl<T> {
    private isExternObs: boolean = false;
    private dataSubject: BehaviorSubject<T[]> = new BehaviorSubject<T[]>([]); 
    private dataContent$!: Observable<T[]>;

    // subs
    private dataSub!: Subscription; 

    // = new BehaviorSubject<T[]>([]);
    private data!: T[];

    constructor(dataSource?: T[] | Observable<T[]>) {
        // regarding Data
        // if(dataSource !== undefined) {
        //     if(Array.isArray(dataSource)){
        //         // initialize Observable
        //         if(dataSource.length > 0) { this.dataSetup(dataSource); }
        //         else { this.dataSetup([]); }
        //     } 
        //     else if(dataSource instanceof Observable){ this.dataSetup(dataSource); }
        // } 
        // else { this.dataSetup([]); }
        // // subscribe to Data
        // this.dataSub = this.dataContent$.subscribe({
        //     next: (_data) => this.data = _data,
        //     error: (_err) => console.error(_err)
        // });
    }

    /**
     * @param _data collection or Observable of elements to display
     */
    private dataSetup(_data: T[] | Observable<T[]>){
        if(_data instanceof Observable) {
            this.isExternObs = true;
            this.dataContent$ =  _data as Observable<T[]>;
            return;
        }
        this.dataSubject = new BehaviorSubject<T[]>(_data as T[]);
        this.dataContent$ =  this.dataSubject.asObservable();
        return;
    }

    public unsubscribeAll(): void {
        this.dataSub.unsubscribe();
    }

 

    /**
     * 
     * @param data collection of elements to display
     * @info oly applies if the grid wasn't initialized with an external Observable
     * @info throws PgUpdateDataException on wrong usage
     */
    public updateData(data: T[]){
        if(this.isExternObs === true)
            throw PgUpdateDataException('Can\'t set data internallly because current Data is provided by external Observalble. Try setting the data via your internal rxjs Subject!');
        else 
            this.dataSubject.next(data);
    }
}