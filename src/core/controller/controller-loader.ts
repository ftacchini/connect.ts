import {ControllerBuilder} from "./controller-builder";

export interface ControllerLoader {
    loadControllerBuilders() : ControllerBuilder[];
}