import { Attribute } from "./attribute.attribute";

export interface AttributeConstructor<T> {
    new(...args: any[]): Attribute<T>;
}