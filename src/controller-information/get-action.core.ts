import { ActionResolver } from "./action-resolver.core";
import { GetActionInformation } from "./get-action-information.core";


export function Get(information?: GetActionInformation) {
    return ActionResolver(information);
}