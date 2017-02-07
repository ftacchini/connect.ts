import { ActionInformation } from "./action-information.core";
import { ActionType } from "./action-type.constant";

export class GetActionInformation extends ActionInformation {
    get type(): ActionType { return "get" };
}