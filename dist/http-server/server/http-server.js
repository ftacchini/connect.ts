"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
class HttpServer {
    static bootstrap() {
        return new HttpServer();
    }
    constructor() {
        this._app = express();
    }
    get application() {
        return this._app;
    }
}
exports.HttpServer = HttpServer;
//# sourceMappingURL=http-server.js.map