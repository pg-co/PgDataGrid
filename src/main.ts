import './style.css'

import { PgGrid } from './pg-grid/pg-grid'

const app = document.querySelector<HTMLDivElement>('#app')!

// init
let pgGrid = new PgGrid(app);
pgGrid.createGrid();