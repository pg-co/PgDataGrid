import { BehaviorSubject, Observable, Subscription } from "rxjs";
import { PgUpdateDataException } from "../exceptions/pg-exceptions";


export class PgGridDataCtrl<T> {
    private isExternObs: boolean = false;

    private dataSubject: BehaviorSubject<T[]> = new BehaviorSubject<T[]>([]); 
    private dataSubject$!: Observable<T[]>;



    constructor(_initData: T[] | Observable<T[]>){
        this.dataSetup(_initData);
    }



    aquireData(): Observable<T[]>{
        return this.dataSubject$;
    }


    /**
     * @param _data collection or Observable of elements to display
     */
    private dataSetup(_data: T[] | Observable<T[]>){
        if(_data instanceof Observable) {
            this.isExternObs = true;
            this.dataSubject$ =  _data as Observable<T[]>;
            return;
        }
        this.dataSubject = new BehaviorSubject<T[]>(_data as T[]);
        this.dataSubject$ =  this.dataSubject.asObservable();
        return;
    }

 

    /**
     * 
     * @param data collection of elements to display
     * @info only applies if the grid wasn't initialized with an external Observable
     * @info throws PgUpdateDataException on wrong usage
     */
    public updateData(data: T[]){
        if(this.isExternObs === true)
            throw PgUpdateDataException('Can\'t set data internallly because current Data is provided by external Observalble. Try setting the data via your internal rxjs Subject!');
        else 
            this.dataSubject.next(data);
    }
}