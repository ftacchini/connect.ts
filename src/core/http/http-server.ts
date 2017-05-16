import * as express from "express";
import { Server } from "../server/server-module";

export class HttpServer implements Server {

    private _app: express.Application;

    public static bootstrap(): HttpServer {
        return new HttpServer();
    }

    private constructor() {
        this._app = express();
    }

    public get application(): express.Application{
        return this._app;
    }

}