import { Types } from "../core";

Types.HttpControllerActivator = Symbol("HttpControllerActivator");

export * from "./server";
export * from "./routed-controller";
export * from "./metadata";