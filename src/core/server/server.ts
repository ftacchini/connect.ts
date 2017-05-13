import { Container } from "inversify";

export interface Server {
    application: any;
    container: Container;

}