import { HttpResponse } from './../http-server/metadata/parameter/http-response';
import { injectable } from 'inversify';
import "reflect-metadata";

@injectable()
export class Something {
    
    constructor(){}
    foo(@HttpResponse() caca: string){

    }
}