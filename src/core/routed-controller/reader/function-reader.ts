
export interface FunctionReader { 
    readFunctionFactory(target: any, propertyKey: string): () => Function;
}