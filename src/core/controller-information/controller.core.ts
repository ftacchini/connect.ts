
import { ControllerInformation } from "./controller-information.core";
import { ControllerInformationResolver } from "./controller-information-resolver.core";


export function Controller(information?: ControllerInformation) {

    information || (information = new ControllerInformation());

    return ControllerInformationResolver(information);
}