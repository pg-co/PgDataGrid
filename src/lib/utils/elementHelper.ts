import { IFooterElems } from "../interfaces/IFooterElems";


export const applyWrapper = () => {
    let wrapper = document.createElement("div");
    wrapper.className = 'wrapper';
    wrapper.style.width = '100%';
    return wrapper;
}


export const applyHeaderContainer = () => {
    let headerContainer = document.createElement("div");
    headerContainer.className = 'headerContainer';
    headerContainer.style.width = '100%';
    headerContainer.style.display = 'flex';
    headerContainer.style.flexDirection = 'row';
    return headerContainer;
}


export const applyDataContainer = () => {
    let dataContainer = document.createElement("div");
    dataContainer.className = 'dataContainer';
    dataContainer.style.width = '100%';
    dataContainer.style.display = 'flex';
    dataContainer.style.flexDirection = 'column';
    return dataContainer;
}


export const applyFooterContainer = (): IFooterElems => {
    let footerContainer = document.createElement("div");
    footerContainer.className = 'footerContainer';
    footerContainer.style.width = '100%';
    footerContainer.style.display = 'flex';
    footerContainer.style.justifyContent = 'flex-end';

    // items
    let pageSizeOptions = document.createElement('select');
    let pageStauts = document.createElement('div');
    let nextBtn = document.createElement('button');
    let beforeBtn = document.createElement('button');
    appenMultipleChilds(footerContainer, pageSizeOptions, pageStauts, nextBtn, beforeBtn)
    return {
        pageSizeOptions: pageSizeOptions,
        pageStatus: pageStauts,
        nextBtn: nextBtn,
        beforeBtn: beforeBtn,
        footerContainer: footerContainer
    };
}


export const createRow = () => {
    let row = document.createElement("div");
    row.className = 'row';
    row.style.width = "100%";
    row.style.display = "flex";
    row.style.flexDirection = "row";
    return row;
}


export const createCell = (text: string, header?: string) => {
    let cell = document.createElement("div");
    if(header) cell.className = header;
    cell.classList.add('cell');
    cell.style.width = "100%";
    cell.appendChild(document.createTextNode(text));
    return cell;
}

export const createHr = () => {
    let hr = document.createElement("hr");
    hr.style.width = '100%';
    hr.style.margin = '0';
    return hr;
}


export const appenMultipleChilds = (targetDiv: HTMLDivElement, ...child: HTMLElement[]) => {
    child.map((c) => targetDiv.appendChild(c));
}


export const resetDiv = (div: HTMLDivElement) => {
    div.innerHTML = '';
}

export const updateWidthStylesByClass = (className: string, width: string) => {
    let cells = document.querySelectorAll(className);
    if(cells !== null){
        cells.forEach((i) => (i as HTMLDivElement).style.width = width);
    }
}