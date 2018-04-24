import { TsHubLogger } from './../logging/ts-hub-logger';
import { Types } from './../container/types';
import { TsModule } from './ts-module';
import {Server} from "./";
import {HubContainer, ControllerLoader, TsFramework, ControllerBuilder} from "../";

export class Hub {

    constructor(
        private servers: Server[],
        private modules: TsModule[],
        public container: HubContainer,
        private tsFramework: TsFramework){

    }

    public async run(): Promise<any[]> {
        
        var controllerBuilders = this.setupDependencies();
        var promises = this.runServers(controllerBuilders);
        
        return Promise.all(promises);
    }

    private setupDependencies(): ControllerBuilder[] {
        this.servers.forEach(s => s.setupDependencies(this.container));
        this.modules.forEach(m => m.setupModule(this.container, this.servers));
        
        return this.tsFramework.setupFramework(this.container)
                               .loadControllerBuilders(this.container);
    }

    private runServers(controllerBuilders: ControllerBuilder[]): Promise<any>[] {
        
        let logger = this.container.get<TsHubLogger>(Types.TsHubLogger);

        return this.servers.map((server) => {

            controllerBuilders = controllerBuilders.filter((controllerBuilder) => {
                if(controllerBuilder.supportsServer(server))
                {
                    let controller = controllerBuilder.buildController();
                    controller.attachToServer(server);
                    return false;
                }

                return true;
            });

            let runServerPromise = server.run();

            runServerPromise.then(() => {
                logger.info(server.getStatus());
            },() => {
                logger.info(server.getStatus());
            });

            return runServerPromise;
        });
    }

    public stop(): Promise<any[]> {
        let logger = this.container.get<TsHubLogger>(Types.TsHubLogger);

        var promises = this.servers.map((server) => {
            if(server) {
                return Promise.resolve(true);
            }
            
            let runServerPromise = server.stop();

            runServerPromise.then(() => {
                logger.info(server.getStatus());
            },() => {
                logger.info(server.getStatus());
            });
            
            return runServerPromise;
        })

        return Promise.all(promises);
    }

}