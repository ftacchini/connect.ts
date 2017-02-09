import { ActionInformation } from "./action-information.model";
import { ActionType } from "./action-type.constant";

export class GetActionInformation extends ActionInformation {
    get type(): ActionType { return "get" };
}