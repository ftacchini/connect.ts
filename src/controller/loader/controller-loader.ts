import {ControllerBuilder} from "../";
import {HubContainer} from "../../"

export interface ControllerLoader {
    loadControllerBuilders(container: HubContainer) : ControllerBuilder[];
}