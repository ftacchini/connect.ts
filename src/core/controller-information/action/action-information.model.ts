import { ActionType } from "./action-type.constant";

export class ActionInformation {
    name?: string;
    type?: ActionType;
    [property: string]: any;
}