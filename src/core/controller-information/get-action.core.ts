import { ActionInformationResolver } from "./action-information-resolver.core";
import { GetActionInformation } from "./get-action-information.core";


export function Get(information?: GetActionInformation) {
    return ActionInformationResolver(information);
}