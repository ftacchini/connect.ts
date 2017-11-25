export class NotSpecifiedParamException {

    constructor(
        private paramName: string, 
        private usedIn: string) {
    }

}