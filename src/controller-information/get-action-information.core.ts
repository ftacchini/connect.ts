import { ActionInformation } from "./action-information.core";
import { ActionType } from "./action-type.core";

export class GetActionInformation extends ActionInformation {
    get type(): ActionType { return "GET" };
}