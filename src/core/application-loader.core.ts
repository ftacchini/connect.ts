import { Server } from "./server.core";
import { ApplicationConfigurator, InjectorConfigurator } from "./configuration/configuration.module";


export class ApplicationLoader{

    private constructor(){}

    private static _instance: ApplicationLoader;
    public static get instance(): ApplicationLoader{
        return this._instance || (this._instance = new ApplicationLoader());
    }

    public loadApp(config: ApplicationConfigurator, injector: InjectorConfigurator){
        var server = Server.bootstrap(config, injector);
    }
}