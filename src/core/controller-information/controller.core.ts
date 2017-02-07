
import { ControllerInformation } from "./controller-information.core";
import { ControllerInformationResolver } from "./controller-information-resolver.core";


export function Controller(information?: ControllerInformation) {
    return ControllerInformationResolver(information);
}