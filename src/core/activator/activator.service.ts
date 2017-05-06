/**
 * Created by Federico on 11/2/2017.
 */

export interface Activator {
    createActivatorMiddleware(controller: any,
                              property: string): void;

}