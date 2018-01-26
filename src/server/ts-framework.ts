import { ControllerLoader} from './../controller';
import { HubContainer } from '../index';

export interface TsFramework {
    setupFramework(container: HubContainer): ControllerLoader;
}