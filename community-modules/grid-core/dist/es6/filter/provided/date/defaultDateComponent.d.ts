// Type definitions for @ag-community/grid-core v21.2.2
// Project: http://www.ag-grid.com/
// Definitions by: Niall Crosby <https://github.com/ag-grid/>
import { Component } from "../../../widgets/component";
import { IDateComp, IDateParams } from "../../../rendering/dateComponent";
export declare class DefaultDateComponent extends Component implements IDateComp {
    private eDateInput;
    private listener;
    constructor();
    init(params: IDateParams): void;
    getDate(): Date;
    setDate(date: Date): void;
}