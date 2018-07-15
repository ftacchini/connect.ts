import { ActivationContext } from "./activation-context";

export interface ActivationContextProvider { 
    getActivationContext(target: any): ActivationContext;
}