import { RouterConfiguration } from "./router-configuration.core";

export class ApplicationConfiguration {
    port: number;
    routerConfig: RouterConfiguration;

    constructor(){
        this.routerConfig = new RouterConfiguration();
    }
}