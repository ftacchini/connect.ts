
export function FromBody() {
    return (target: Object, propertyKey: string | symbol, parameterIndex: number) => {}
}

export interface Something{
    (): string;
}