/**
 * Created by Federico on 25/4/2017.
 */
export class Server {

    constructor(
        private _injector,
        private _configuration){

    }

    public get injector(){
        return this._injector;
    }

    public get configuration(){
        return this._configuration;
    }
}