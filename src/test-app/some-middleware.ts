import { CastParameterTypes } from './../metadata-core/helper/cast-parameter-types';
import { injectable } from 'inversify';
import { HttpConstructorMiddlewareBuilder } from './../http-server';
import { ControllerMiddlewareMetadataBuilder } from './../metadata-core';
import { Handler } from './../core';
import "reflect-metadata";

class MiddlewareInfo {
    middlewareConfig: number;
}

@injectable()
export class SomeMiddleware implements Handler<MiddlewareInfo> {
    
    @CastParameterTypes()
    public handleRequest(info: MiddlewareInfo, extraParam: string): any {
        console.log("middlewareBeingCalled");
    }
}

export const MiddlewareHandler = ControllerMiddlewareMetadataBuilder
                                    .instance
                                    .buildServerSpecificMiddleware<MiddlewareInfo>(HttpConstructorMiddlewareBuilder, SomeMiddleware);