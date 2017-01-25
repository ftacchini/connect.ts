
import * as express from "express";
import { ApplicationConfigurator, InjectorConfigurator, ApplicationConfig, TYPES } from "./configuration/configuration.module";
import { RouteLoader } from "./routing/routing.module";
import { Container } from "inversify";

export class Server {

  private app: express.Application;
  private container: Container;
  private configuration: ApplicationConfig;

  public static bootstrap(configurator: ApplicationConfigurator, injector: InjectorConfigurator): Server {
    return new Server(configurator, injector);
  }

  private constructor(
    private configurator: ApplicationConfigurator, 
    private injector: InjectorConfigurator) {
    //create expressjs application
    this.app = express();
    this.container = new Container();
    this.configuration = new ApplicationConfig();
    //configure application
    this.config();
    this.routes();
  }

  private config(): void{
    this.injector.configure(this.container);
    this.configurator.configure(this.app, this.configuration);
  }

  private routes(): void{
    RouteLoader.instance.loadRoutes(this.container, this.configuration, this.app);
  }
}