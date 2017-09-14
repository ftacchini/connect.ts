import { Controller } from "../";
import { Server } from "../../";
export interface ControllerBuilder {
    buildController(): Controller;
    supportsServer(server: Server): boolean;
}
