import { Activator } from "../activator.service";
import { Request, Response } from "express";

export class DefaultActivator implements Activator {

    activateController(property: string, req: Request, response: Response): void {

    }

}