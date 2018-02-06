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
        
        return this.servers.map((server) => {

            controllerBuilders = controllerBuilders.filter((controllerBuilder) => {
                if(controllerBuilder.supportsServer(server))
                {
                    var controller = controllerBuilder.buildController();
                    controller.attachToServer(server);
                    return false;
                }

                return true;
            });

           return server.run();
        });
    }

    public stop(): Promise<any[]> {
        var promises = this.servers.map((server) => {
            if(server) {
                return Promise.resolve(true);
            }
            
            return server.stop();
        })

        return Promise.all(promises);
    }

}