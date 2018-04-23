/**
 * Created by Federico on 24/4/2017.
 */
import { Controller } from '../';
import { Server } from '../../';


export interface ControllerBuilder {
    withInformation(information: any) : this;
    withTarget(target: any) : this;
    buildController(): Controller;
    supportsServer(server: Server): boolean;
}
