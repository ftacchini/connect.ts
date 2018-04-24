import { HubContainer } from './../container/hub-container';
import { Hub, Server } from '../index';

export interface TsModule {
    setupModule(container: HubContainer, servers: Server[]): void;
}