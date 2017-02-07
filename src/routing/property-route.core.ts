import { ActionType } from "../controller-information/controller-information.module";

export class PropertyRoute{
    constructor(
        public routePath?: string,
        public type?: ActionType,
        public property?: string
    ) {

    }
}