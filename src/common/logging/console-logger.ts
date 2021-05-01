
import { Logger } from "./contracts";

export class ConsoleLogger extends Logger {
    log(input: string): void {
        console.log(input);
    }
}