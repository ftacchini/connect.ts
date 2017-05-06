
import * as express from "express";
import { Container } from "inversify";

export class Server {

  private _app: express.Application;
  private _container: Container;

  public static bootstrap(): Server {
    return new Server();
  }

  private constructor() {

    this._app = express();
    this._container = new Container();

  }

  public get application(): express.Application{
    return this._app;
  }

  public get container(): Container{
    return this._container;
  }

}