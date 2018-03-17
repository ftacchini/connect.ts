import { injectable } from 'inversify';
import { TsHubLogger } from './ts-hub-logger';

@injectable()
export class ConsoleLogger implements TsHubLogger {
    
    private static EMERGENCY_PREFIX: string = "EMERGENCY";
    private static ALERT_PREFIX: string = "ALERT";
    private static CRITICAL_PREFIX: string = "CRITICAL";
    private static ERROR_PREFIX: string = "ERROR";
    private static WARNING_PREFIX: string = "WARNING";
    private static NOTICE_PREFIX: string = "NOTICE";
    private static INFO_PREFIX: string = "INFO";
    private static DEBUG_PREFIX: string = "DEBUG";
    private static SEPARATOR: string = ": ";
    
    private logToConsole(prefix: string, ...args: any[]): void {
        var message = args.length ? args[0] : ''; 
        console.log(prefix + (message && (ConsoleLogger.SEPARATOR + message) || message));
    }

    public emergency(...args: any[]): void {
        this.logToConsole(ConsoleLogger.EMERGENCY_PREFIX, args);
    }
    public alert(...args: any[]): void {
        this.logToConsole(ConsoleLogger.ALERT_PREFIX, args);
    }
    public crit(...args: any[]): void {
        this.logToConsole(ConsoleLogger.CRITICAL_PREFIX, args);
    }
    public error(...args: any[]): void {
        this.logToConsole(ConsoleLogger.ERROR_PREFIX, args);
    }
    public warning(...args: any[]): void {
        this.logToConsole(ConsoleLogger.WARNING_PREFIX, args);
    }
    public notice(...args: any[]): void {
        this.logToConsole(ConsoleLogger.NOTICE_PREFIX, args);
    }
    public info(...args: any[]): void {
        this.logToConsole(ConsoleLogger.INFO_PREFIX, args);
    }
    public debug(...args: any[]): void {
        this.logToConsole(ConsoleLogger.DEBUG_PREFIX, args);
    }

}