import { NumberReplacementHandler, INumberReplacementHandlerResult } from "../contracts";

export class NumberByDefaultHandler implements NumberReplacementHandler {
  handle(input: number): INumberReplacementHandlerResult {
    return { 
      handled: true, 
      value: String(input)};
  }
}