import { RouterConfiguration } from "./router-configuration.config";

export class ApplicationConfiguration {
    port: number;
    routerConfig: RouterConfiguration;

    constructor(){
        this.routerConfig = new RouterConfiguration();
    }
}