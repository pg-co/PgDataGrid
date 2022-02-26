import { Subscription } from "rxjs";
import { IFooterElems } from "../interfaces/IFooterElems";
import {
	applyWrapper,
	applyHeaderContainer,
	applyDataContainer,
	applyFooterContainer,
    appenMultipleChilds,
} from "../utils/elementHelper";
import { DataController } from "./data.control";

export class MainController<T> {
	parentDiv: HTMLDivElement;
    wrapper: HTMLDivElement = applyWrapper();
    headerContainer: HTMLDivElement = applyHeaderContainer();
    dataContainer: HTMLDivElement = applyDataContainer();
    footer: IFooterElems = applyFooterContainer();
    footerContainer: HTMLDivElement = this.footer.footerContainer;
    // controller
    dataController: DataController<T>;

    // subs
    dataSub: Subscription;

    constructor(parentDiv: HTMLDivElement, headers: string[], data: T[]) {
        this.dataController = new DataController(data);
        this.parentDiv = parentDiv;

        appenMultipleChilds(this.parentDiv, this.wrapper, this.headerContainer, this.dataContainer, this.footerContainer);
        
        // data
        this.dataSub = this.dataController.getData().subscribe({
            next: (_data) => this.dataController.renderData(this.dataContainer, headers, data),
            error: (err) => console.error(err)
        });
    }


}
