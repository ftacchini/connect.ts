import * as express from "express";
import { Container } from "inversify";

export class HttpServer {

    private _app: express.Application;

    public static bootstrap(container: Container): HttpServer {
        return new HttpServer(container);
    }

    private constructor(private _container: Container) {
        this._app = express();
    }

    public get application(): express.Application{
        return this._app;
    }

    public get container(): Container{
        return this._container;
    }

}