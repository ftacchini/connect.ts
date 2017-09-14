export interface Handler<Information> {
    handleRequest: (info: Information, ...args: any[]) => any;
}
