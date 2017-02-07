
import { ControllerInformation } from "./controller-information.core";
import { ControllerResolver } from "./controller-resolver.core";


export function Controller(information?: ControllerInformation) {

    information || (information = new ControllerInformation());

    return ControllerResolver(information);
}